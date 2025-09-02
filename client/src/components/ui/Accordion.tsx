// src/components/ui/Accordion.tsx
import React, { useState } from "react";
import clsx from "clsx";

type Step = { id: number; title: string; content: string };

const steps: Step[] = [
  { id:1, title: "Consultation", content: "We start with a discovery session..." },
  { id:2, title: "Research and Strategy", content: "We research your industry and audience..." },
  { id:3, title: "Implementation", content: "We execute the plan with clear milestones..." },
  { id:4, title: "Monitoring and Optimization", content: "We monitor results and optimize..." },
  { id:5, title: "Reporting and Communication", content: "Regular reporting to keep you in the loop..." },
  { id:6, title: "Continuous Improvement", content: "Ongoing refinements and tests..." }
];

export const Accordion: React.FC = () => {
  const [open, setOpen] = useState<number | null>(1);
  return (
    <section id="process" className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Our Working Process</h2>
      <div className="space-y-4">
        {steps.map(s => {
          const isOpen = open === s.id;
          return (
            <div key={s.id} className={clsx("rounded-2xl p-4", isOpen ? "bg-primary/10 border-2 border-primary" : "bg-white border")}>
              <button
                className="w-full text-left flex items-center justify-between"
                aria-expanded={isOpen}
                aria-controls={`panel-${s.id}`}
                onClick={() => setOpen(isOpen ? null : s.id)}
              >
                <div>
                  <div className="text-sm text-muted">0{s.id}</div>
                  <div className="text-lg font-semibold">{s.title}</div>
                </div>
                <div className="ml-4">
                  <svg width="20" height="20" className={clsx(isOpen ? "rotate-180" : "rotate-0")} aria-hidden>
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </button>
              <div id={`panel-${s.id}`} role="region" aria-labelledby={`panel-${s.id}`} className={clsx("mt-3 text-sm transition-all", isOpen ? "block" : "hidden")}>
                {s.content}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
