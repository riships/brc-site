import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { industriesData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Industry Verticals & Domain Expertise",
  description:
    "Explore how BRC delivers tailored technology solutions across financial services, healthcare, retail, manufacturing, logistics, and more.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-32 pb-24 bg-[#fafaf9]">
      {/* Header */}
      <section className="pb-16 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            INDUSTRY VERTICALS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#09090b] max-w-3xl leading-tight">
            Technology shaped around specific industry realities.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Every vertical has distinct regulatory, latency, and integration demands. BRC designs solutions built specifically for your sector.
          </p>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesData.map((ind, idx) => (
              <div
                key={ind.id}
                className="border border-black/[0.08] bg-white rounded-lg p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-black/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.06] text-[10px] font-mono text-neutral-400">
                    <span>VERTICAL 0{idx + 1}</span>
                    <span>ENTERPRISE PRACTICE</span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#09090b] tracking-tight mb-2">
                    {ind.name}
                  </h2>

                  <p className="text-xs font-mono font-semibold text-neutral-500 mb-4">
                    {ind.tagline}
                  </p>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-black/[0.06]">
                    <span className="text-xs font-mono font-semibold uppercase text-neutral-900 block mb-2">
                      Key Use Cases:
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      {ind.keyUseCases.map((uc) => (
                        <li key={uc} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-neutral-400" />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500">
                    Industry: {ind.name}
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-black inline-flex items-center gap-1.5"
                  >
                    <span>Discuss Vertical</span>
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
