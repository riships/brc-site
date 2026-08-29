"use client";

import React from "react";
import { ArrowRight, Mail, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useContactModal } from "@/context/ContactModalContext";

export function ContactSection() {
  const { openModal } = useContactModal();

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#09090b] text-white">
      <Container size="xl">
        <div className="border border-neutral-800 bg-[#12141a] rounded-2xl p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Core Value & Pitch */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-400">
                START A CONVERSATION
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Have something difficult to solve?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal max-w-xl">
                Tell us what you&apos;re trying to build, improve or fix. We&apos;ll get back to you with direct engineering insights and a pragmatic roadmap.
              </p>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap gap-5 text-xs text-neutral-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>24h Response</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Senior Engineers Only</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  <a href="mailto:contact@brc-tech.com" className="text-white hover:underline">
                    contact@brc-tech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Prominent Popup Trigger */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded transition-colors w-full sm:w-auto cursor-pointer shadow-lg"
              >
                <span>Tell Us What You Need</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-neutral-500 font-mono mt-2.5">
                Takes less than 60 seconds &bull; No obligation
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
