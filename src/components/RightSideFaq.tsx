"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

export default function RightSideFaq({ faqs }: { faqs: FAQ[] }) {
  const [openStates, setOpenStates] = useState<boolean[]>(() => faqs.map(() => true));

  function toggle(idx: number) {
    setOpenStates((s) => {
      const copy = [...s];
      copy[idx] = !copy[idx];
      return copy;
    });
  }

  return (
    <div className="mt-8">
      <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-heading font-bold mb-3">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="border-0">
              <CardContent className="p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-medium text-gray-800">{faq.question}</div>
                  <button
                    aria-expanded={openStates[idx]}
                    onClick={() => toggle(idx)}
                    className="text-blue-600 rounded-full p-1 hover:bg-blue-50"
                    title={openStates[idx] ? "Collapse" : "Expand"}
                  >
                    {openStates[idx] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                </div>

                {openStates[idx] && (
                  <div className="mt-2 text-sm text-gray-700">{faq.answer}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
