"use client";

import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaRobot } from "react-icons/fa";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const SUGGESTIONS = [
  "What does the club do?",
  "How do I join?",
  "When are the next events?",
  "How do I get started with Claude?",
];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I'm the UCC Claude Builders Club assistant. Ask me anything about the club, our events, or how to get started with AI.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll only the message window, so the page itself doesn't jump here on load
    const el = windowRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
      } else {
        setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
      }
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="assistant" className="scroll-mt-24 bg-cream py-16 sm:py-24">
      <div className="container-wide max-w-2xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
            <FaRobot className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Ask the Club Assistant</h2>
            <p className="text-sm text-foreground/60">Powered by Claude</p>
          </div>
        </div>

        {/* Message window */}
        <div ref={windowRef} className="flex h-80 flex-col gap-3 overflow-y-auto rounded-2xl border border-kraft bg-surface p-4 shadow-lift">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-white"
                    : "bg-cream text-foreground"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-2xl bg-cream px-4 py-3">
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:0ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:300ms]" />
              </div>
            </div>
          )}

          {error && (
            <p className="text-center text-xs text-red-500">{error}</p>
          )}

        </div>

        {/* Suggestion chips */}
        {messages.length === 1 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-kraft bg-surface px-3 py-1.5 text-xs text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={(e) => { e.preventDefault(); send(input); }}
          className="mt-3 flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
            maxLength={500}
            className="flex-1 rounded-full border border-kraft bg-surface px-5 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark disabled:opacity-40"
            aria-label="Send"
          >
            <FaPaperPlane className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
