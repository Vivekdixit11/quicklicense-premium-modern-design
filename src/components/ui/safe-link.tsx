"use client";

import Link from "next/link";
import React from "react";
import siteIndex from "@/lib/siteIndex";

// Accept a flexible prop set (className, children, etc.) and forward to Next's Link.
type SafeLinkProps = {
  href: string | URL | { pathname?: string };
  children: React.ReactNode;
  [key: string]: any;
};

export default function SafeLink({ href, children, ...props }: SafeLinkProps) {
  const hrefStr = typeof href === "string" ? href : (href as any)?.pathname || "/";
  const exists = siteIndex.some((entry) => entry.href === hrefStr);
  const target = exists ? href : "/";

  return (
    <Link href={target as any} {...(props as any)}>
      {children as React.ReactNode}
    </Link>
  );
}
