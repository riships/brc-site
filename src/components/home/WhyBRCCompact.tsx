import React from "react";
import { Container } from "@/components/ui/Container";

const principles = [
  {
    number: "01",
    title: "Understand the problem.",
    description: "We audit core business realities before recommending architecture.",
  },
  {
    number: "02",
    title: "Build the right solution.",
    description: "Strict typing, automated testing, and pragmatic tooling tailored to your goals.",
  },
  {
    number: "03",
    title: "Stay involved after launch.",
    description: "Continuous monitoring, scaling guidance, and zero vendor lock-in.",
  },
];

export function WhyBRCCompact() {
  return (
    <section id="why-brc" className="py-14 md:py-18 border-b border-black/[0.08] bg-white">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Core Thesis */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500">
              OUR PERSPECTIVE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090b] leading-tight">
              Technology shouldn&apos;t make your business harder.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal pt-1">
              We start with the problem, understand the business behind it, and choose the technology that actually makes sense. No unnecessary complexity. No technology for the sake of technology.
            </p>
          </div>

          {/* Right Column: 3 Principles */}
          <div className="lg:col-span-7 space-y-4">
            {principles.map((pr) => (
              <div
                key={pr.number}
                className="p-4 sm:p-5 border border-black/[0.08] bg-[#fafaf9] rounded-lg flex items-start gap-4"
              >
                <span className="font-mono text-xs font-bold text-neutral-400 mt-0.5">
                  {pr.number}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#09090b] mb-0.5">
                    {pr.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
