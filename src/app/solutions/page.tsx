import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { solutionsData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Solutions by Business Need",
  description:
    "Explore outcome-driven technology solutions engineered by BRC to address critical modern business challenges.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#fafaf9]">
      {/* Header */}
      <section className="pb-16 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            SOLUTIONS BY BUSINESS NEED
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#09090b] max-w-3xl leading-tight">
            Technology solutions focused on measurable outcomes.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            We align deep engineering capabilities with specific business goals to deliver resilient systems that scale.
          </p>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsData.map((solution, idx) => (
              <div
                key={solution.id}
                className="border border-black/[0.08] bg-white rounded-lg p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-black/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.06] text-[10px] font-mono text-neutral-400">
                    <span>SOLUTION 0{idx + 1}</span>
                    <span>{solution.tag}</span>
                  </div>

                  <span className="text-xs font-mono font-semibold text-neutral-400 block mb-1">
                    {solution.question}
                  </span>

                  <h2 className="text-2xl font-bold text-[#09090b] tracking-tight mb-4">
                    {solution.solution}
                  </h2>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500">
                    {solution.tag}
                  </span>
                  <Link
                    href={solution.link}
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-black inline-flex items-center gap-1.5"
                  >
                    <span>View Blueprint</span>
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
