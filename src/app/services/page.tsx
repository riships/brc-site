import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Services & Technical Capabilities",
  description:
    "Explore BRC's core engineering domains: Software Engineering, AI & Automation, Cloud, Cybersecurity, Data, and Technical Consulting.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-[#fafaf9]">
      {/* Hero Header */}
      <section className="pb-16 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            CAPABILITIES & PRACTICE AREAS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#09090b] max-w-3xl leading-tight">
            Engineering services built around practical outcomes.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            From technical discovery to long-term operations, BRC provides the engineering depth needed to build and scale critical digital systems.
          </p>
        </Container>
      </section>

      {/* Services List Grid */}
      <section className="py-20">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="border border-black/[0.08] bg-white rounded-lg p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-black/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-neutral-400">
                      SERVICE {service.number}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {service.tags.length} SPECIALIZATIONS
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#09090b] tracking-tight mb-2">
                    {service.title}
                  </h2>

                  <p className="text-xs font-mono font-semibold text-neutral-500 mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 pt-4 border-t border-black/[0.06]">
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <div key={cap.title} className="text-xs text-neutral-600">
                        <strong className="text-neutral-900">{cap.title}:</strong> {cap.description}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-black inline-flex items-center gap-1.5"
                  >
                    <span>View Service Blueprint</span>
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
