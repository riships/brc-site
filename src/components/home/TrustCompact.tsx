import React from "react";
import { Container } from "@/components/ui/Container";

const trustPoints = [
  {
    title: "Reliable engineering",
    description: "Production-ready architectures with strict typing, automated testing, and predictable uptime.",
  },
  {
    title: "Clear communication",
    description: "Direct collaboration with senior engineers. No layers of non-technical account managers.",
  },
  {
    title: "Scalable solutions",
    description: "Systems designed to handle real traffic growth without requiring frequent costly rewrites.",
  },
  {
    title: "Long-term thinking",
    description: "Complete client code ownership, clear documentation, and zero proprietary lock-in.",
  },
];

export function TrustCompact() {
  return (
    <section className="py-14 md:py-18 border-b border-black/[0.08] bg-[#fafaf9]">
      <Container size="xl">
        <div className="max-w-lg mx-auto text-center mb-10">
          <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
            COMMITMENT
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090b]">
            Built around practical outcomes.
          </h2>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((pt) => (
            <div key={pt.title} className="flex flex-col">
              <h3 className="text-sm sm:text-base font-bold text-[#09090b] mb-1.5">
                {pt.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
