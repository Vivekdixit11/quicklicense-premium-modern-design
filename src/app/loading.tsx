"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [stuck, setStuck] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    // If the app hasn't hydrated in 8 seconds, show a helpful fallback
    const t = setTimeout(() => setStuck(true), 8000);

    const onError = (e: ErrorEvent) => {
      setErrorMsg(e.error?.message || e.message || String(e));
    };

    const onRejection = (e: PromiseRejectionEvent) => {
      setErrorMsg(String(e.reason ?? "Unhandled promise rejection"));
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection as any);

    return () => {
      clearTimeout(t);
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection as any);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E2F6F8] via-white to-[#E2F6F8] flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        {/* Fallback simple SVG spinner to avoid external Lottie dependency */}
        <div className="w-32 h-32 mx-auto" role="status" aria-label="Loading">
          <svg className="animate-spin -ml-1 mr-3 h-20 w-20 text-[#23A8DD]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] bg-clip-text text-transparent">
            Quick License
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Loading your fast licensing experience...
          </p>
        </div>

        {stuck && (
          <div className="mt-4 text-center">
            <div className="mb-2 text-sm text-rose-600 font-medium">Still loading?</div>
            <div className="text-sm text-gray-600 mb-3">If this persists, there may be a client-side error preventing hydration.</div>
            {errorMsg && (
              <div className="text-xs text-left p-2 bg-red-50 border border-red-100 rounded mb-2 break-words">Error: {errorMsg}</div>
            )}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => location.reload()}
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-4 py-2 rounded-lg font-semibold"
              >
                Retry
              </button>
              <a
                href="/"
                className="text-sm text-gray-700 underline"
              >
                Go home
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

