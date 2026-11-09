import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--bg)] px-6 text-center text-[var(--text)]">
      <div>
        <p className="mb-3 text-sm text-[var(--muted)]">This page does not exist.</p>
        <Link className="text-[var(--accent-soft)] hover:underline" to="/">Back to portfolio</Link>
      </div>
    </main>
  );
}
