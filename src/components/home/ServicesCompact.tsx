"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const services = [
  {
    number: "01",
    title: "Software Development",
    slug: "software-development",
    description: "Custom web applications, mobile apps, and scalable SaaS platforms.",
  },
  {
    number: "02",
    title: "AI & Automation",
    slug: "ai",
    description: "Generative AI, enterprise RAG search, and automated business workflows.",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    slug: "cloud",
    description: "Cloud architecture, Kubernetes migrations, and automated CI/CD pipelines.",
  },
  {
    number: "04",
    title: "Cybersecurity",
    slug: "cybersecurity",
    description: "Zero-trust architecture, penetration testing, and continuous compliance.",
  },
  {
    number: "05",
    title: "Data & Analytics",
    slug: "data-analytics",
    description: "Data warehousing, real-time pipelines, and executive BI dashboards.",
  },
  {
    number: "06",
    title: "Technology Consulting",
    slug: "it-consulting",
    description: "System audits, technical roadmapping, and fractional CTO advisory.",
  },
];

export function ServicesCompact() {
  return (
    <section id="services" className="py-14 md:py-18 border-b border-black/[0.08] bg-[#fafaf9]">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
              SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090b]">
              What we do
            </h2>
          </div>
          <Link
            href="/services"
            className="mt-3 md:mt-0 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-black transition-colors"
          >
            All Service Blueprints &rarr;
          </Link>
        </div>

        {/* Clean Numbered List */}
        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {services.map((service) => (
            <Link
              key={service.number}
              href={`/services/${service.slug}`}
              className="py-4 px-3 -mx-3 rounded hover:bg-white transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-8 sm:w-1/2">
                <span className="font-mono text-xs font-semibold text-neutral-400">
                  {service.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#09090b] tracking-tight group-hover:text-black transition-colors">
                  {service.title}
                </h3>
              </div>

              <div className="sm:w-1/2 flex items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {service.description}
                </p>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
