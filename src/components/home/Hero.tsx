"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ComplexityDiagram } from "@/components/home/ComplexityDiagram";
import { useContactModal } from "@/context/ContactModalContext";

export function Hero() {
  const { openModal } = useContactModal();

  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16 border-b border-black/[0.08] bg-[#fafaf9]">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small Eyebrow */}
            <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3.5">
              TECHNOLOGY &bull; ENGINEERING &bull; CONSULTING
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold tracking-tight text-[#09090b] leading-[1.16] max-w-xl">
              Technology that makes difficult things simpler.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-3.5 text-sm sm:text-base text-neutral-600 max-w-lg leading-relaxed font-normal">
              We design, build and improve digital products, software and technology systems for businesses that need things done right.
            </p>

            {/* Conversion CTA Links */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#09090b] hover:bg-neutral-800 rounded transition-colors shadow-xs cursor-pointer"
              >
                <span>Tell us what you need</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <Link
                href="#services"
                className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-neutral-800 hover:text-black hover:underline underline-offset-4 transition-colors"
              >
                <span>See what we do</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Refined BRC Visual */}
          <div className="lg:col-span-5">
            <ComplexityDiagram />
          </div>
        </div>
      </Container>
    </section>
  );
}
