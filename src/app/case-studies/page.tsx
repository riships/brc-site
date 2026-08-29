import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { caseStudiesData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Representative Scenarios & Engineering Case Studies",
  description:
    "Explore how BRC addresses complex legacy migrations, enterprise AI pipelines, cloud refactoring, and zero-trust security.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24 bg-[#fafaf9]">
      {/* Header */}
      <section className="pb-16 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            SELECTED ENGINEERING SCENARIOS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#09090b] max-w-3xl leading-tight">
            Problems worth solving.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Detailed technical breakdowns of representative engineering challenges, architectural approaches, and verified outcomes.
          </p>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesData.map((cs, idx) => (
              <div
                key={cs.id}
                className="border border-black/[0.08] bg-white rounded-lg p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-black/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.06] text-[10px] font-mono text-neutral-400">
                    <span>SCENARIO 0{idx + 1}</span>
                    <span>{cs.industry}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#09090b] tracking-tight mb-4">
                    {cs.projectTitle}
                  </h2>

                  <div className="space-y-4 text-sm text-neutral-600 mb-6">
                    <div>
                      <strong className="text-neutral-900 block text-xs font-mono uppercase mb-1">
                        Challenge:
                      </strong>
                      <p>{cs.problem}</p>
                    </div>

                    <div>
                      <strong className="text-neutral-900 block text-xs font-mono uppercase mb-1">
                        BRC Approach:
                      </strong>
                      <p>{cs.solution}</p>
                    </div>
                  </div>

                  {/* Impact Results */}
                  <div className="pt-4 border-t border-black/[0.06] space-y-1.5">
                    <strong className="text-neutral-900 block text-xs font-mono uppercase mb-1">
                      Key Outcome:
                    </strong>
                    <p className="text-xs text-neutral-600 leading-relaxed font-mono">
                      {cs.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.04] text-neutral-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-black inline-flex items-center gap-1.5"
                  >
                    <span>Discuss</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
