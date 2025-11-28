"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import siteIndex from "@/lib/siteIndex";
import Link from "next/link";

export default function SearchBar({ className = "" }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof siteIndex>([] as any);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const q = query.trim().toLowerCase();
    const matches = siteIndex
      .filter((item) => item.title.toLowerCase().includes(q) || item.href.toLowerCase().includes(q))
      .slice(0, 8);

    setResults(matches);
    setOpen(matches.length > 0);
  }, [query]);

  function onSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!query) return;
    if (results.length > 0) {
      // navigate to the top result
      router.push(results[0].href);
    } else {
      // fallback: go to search page with query param (page may or may not exist)
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  }

  return (
    <div className={`relative w-full ${className}`}>
      <form onSubmit={onSubmit} className="relative">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(results.length > 0)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="Search for any page or service... (e.g., Company Registration)"
          className="w-full h-16 md:h-20 pl-6 pr-12 text-base md:text-xl rounded-full bg-white/98 backdrop-blur-sm border-2 border-[#d4d4dc]/60 shadow-2xl focus:outline-none"
        />

        {/* Inline icon button (no yellow background) */}
        <button
          type="submit"
          aria-label="Search"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>

      {/* Suggestions dropdown */}
      {open && results.length > 0 && (
        <div className="absolute left-0 right-0 top-full -translate-y-1 bg-white rounded-b-full shadow-lg border border-gray-100 z-50 overflow-hidden">
          {results.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="block px-4 py-3 hover:bg-slate-50 border-b last:border-b-0"
              onClick={() => setQuery("")}
            >
              <div className="text-sm font-semibold text-slate-900">{r.title}</div>
              <div className="text-xs text-slate-500">{r.href}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

