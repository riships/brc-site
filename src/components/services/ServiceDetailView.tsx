"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ServiceItem } from "@/data/servicesData";

interface ServiceDetailViewProps {
  service: ServiceItem;
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 bg-[#fafaf9]">
      {/* 1. HERO SECTION */}
      <section className="pb-16 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            SERVICE {service.number} &bull; BRC SIMPLIFY TOUGH
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#09090b] max-w-3xl leading-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-xl text-neutral-600 font-medium">
            {service.tagline}
          </p>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#09090b] hover:bg-neutral-800 rounded transition-colors"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 2. THE PROBLEM STATEMENT */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
                THE CHALLENGE
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[#09090b]">
                {service.problemStatement.title}
              </h2>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                {service.problemStatement.description}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {service.problemStatement.points.map((point, i) => (
                <div
                  key={i}
                  className="p-4 border border-black/[0.08] bg-[#fafaf9] rounded text-sm text-neutral-700 flex items-start gap-3"
                >
                  <span className="font-mono text-xs font-semibold text-neutral-400 mt-0.5">
                    0{i + 1}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CAPABILITIES */}
      <section className="py-20 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
            TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#09090b] mb-12">
            {service.whatWeOffer.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div
                key={cap.title}
                className="p-6 border border-black/[0.08] bg-white rounded-lg shadow-xs"
              >
                <div className="font-mono text-xs text-neutral-400 mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#09090b] mb-2">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. TECH STACK */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
            TOOLING & ECOSYSTEM
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#09090b] mb-10">
            Technologies we leverage
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.techStack.map((category) => (
              <div
                key={category.category}
                className="p-6 border border-black/[0.08] bg-[#fafaf9] rounded"
              >
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-4">
                  {category.category}
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. APPROACH */}
      <section className="py-20 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
            EXECUTION MODEL
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#09090b] mb-12">
            How we deliver
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.approach.map((step) => (
              <div
                key={step.step}
                className="p-6 border-t-2 border-black bg-white rounded-b flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-neutral-400 mb-3 block">
                    PHASE {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#09090b] mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. FAQS */}
      <section className="py-20 bg-white">
        <Container size="lg">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3 text-center">
            QUESTIONS & ANSWERS
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#09090b] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left flex items-center justify-between gap-4 font-semibold text-[#09090b] hover:text-black cursor-pointer"
                  >
                    <span className="text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-sm text-neutral-600 leading-relaxed pr-8">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#09090b] hover:bg-neutral-800 rounded transition-colors"
            >
              <span>Consult with a BRC Architect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
