import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UCC Claude Builders Club",
  description:
    "University College Cork Claude Builders Club – Learn AI, build projects, and collaborate with students exploring the future of AI.",
  icons: {
    icon: "/images/claude_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
