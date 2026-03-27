import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

// Simple in-memory rate limiter: max 10 messages per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return false;
  }

  if (entry.count >= 10) return true;

  entry.count++;
  return false;
}

const SYSTEM_PROMPT = `You are a friendly assistant for the UCC Claude Builders Club at University College Cork, Ireland.

You help visitors learn about the club and get started with AI. Keep answers concise (2-4 sentences max).

Key facts about the club:
- Student-run AI club at UCC, focused on building with Claude (Anthropic's AI)
- Activities: workshops, hackathons, guest speakers, and social events
- Open to all UCC students regardless of experience level
- Backed by Anthropic
- Sign up via the membership form on the homepage
- Follow on Instagram: @claudebuilderclubucc
- Contact: claudebuildersclubucc@gmail.com
- Check the Events page for upcoming meetings and hackathons

Only answer questions related to the club, AI, or getting started with Claude/programming.
For anything unrelated, politely redirect back to club topics.`;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait an hour and try again." },
      { status: 429 }
    );
  }

  let message: string;
  try {
    const body = await req.json();
    message = String(body.message ?? "").trim().slice(0, 500);
    if (!message) throw new Error("Empty message");
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "Chatbot not configured." }, { status: 503 });
  }

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: message }],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("Claude API error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
