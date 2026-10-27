"use client";

import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

// Shows an email address with a one-click copy, for people without a mail app set up
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the address is still visible to copy by hand
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-primary"
      aria-label={`Copy ${email}`}
    >
      {email}
      {copied ? <FaCheck className="h-3 w-3 text-primary" /> : <FaCopy className="h-3 w-3" />}
      <span className="sr-only" aria-live="polite">{copied ? "Copied" : ""}</span>
    </button>
  );
}
