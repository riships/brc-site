import React from "react";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { careerOpenings } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Engineering Careers at BRC",
  description:
    "Join the senior engineering team at BRC. Work on high-impact software, cloud, and AI architectures with a culture of craftsmanship.",
};

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24 bg-[#fafaf9]">
      {/* Header */}
      <section className="pb-16 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            CAREERS AT BRC
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#09090b] max-w-3xl leading-tight">
            Build systems that matter with senior engineers.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            We value deep engineering fundamentals, clear communication, and pride in clean, scalable software architecture.
          </p>
        </Container>
      </section>

      {/* Open Roles */}
      <section className="py-20">
        <Container size="xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#09090b]">
              Open Positions
            </h2>
            <span className="text-xs font-mono text-neutral-500">
              {careerOpenings.length} POSITIONS AVAILABLE
            </span>
          </div>

          <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {careerOpenings.map((role) => (
              <div
                key={role.id}
                className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white px-4 -mx-4 rounded transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 mb-2">
                    <span>{role.department}</span>
                    <span>&bull;</span>
                    <span>{role.location}</span>
                    <span>&bull;</span>
                    <span>{role.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#09090b] tracking-tight mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-xl leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <a
                    href="mailto:careers@brc-tech.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#09090b] hover:bg-neutral-800 rounded transition-colors"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
