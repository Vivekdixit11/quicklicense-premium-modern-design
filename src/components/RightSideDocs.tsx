"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  mandatoryDocs: string[];
  optionalDocs?: string[];
};

export default function RightSideDocs({ mandatoryDocs, optionalDocs = [] }: Props) {
  const storageKey = "lmpc_docs_checked_v1";
  const allDocs = [...mandatoryDocs, ...optionalDocs];

  const [checked, setChecked] = useState<boolean[]>(() =>
    Array(allDocs.length).fill(false)
  );

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as boolean[];
        if (Array.isArray(parsed) && parsed.length === allDocs.length) setChecked(parsed);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch (e) {
      // ignore
    }
  }, [checked]);

  function toggle(i: number) {
    setChecked((s) => {
      const copy = [...s];
      copy[i] = !copy[i];
      return copy;
    });
  }

  function clearAll() {
    setChecked(Array(allDocs.length).fill(false));
  }

  return (
    <div className="mt-8">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-heading font-bold">Documents Checklist</h3>
            <button
              onClick={clearAll}
              className="text-sm text-blue-600 hover:underline"
              type="button"
            >
              Clear
            </button>
          </div>

          <div className="space-y-2">
            {allDocs.map((doc, idx) => (
              <label
                key={idx}
                className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={checked[idx] || false}
                  onChange={() => toggle(idx)}
                  className="mt-1 h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">{doc}</span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
