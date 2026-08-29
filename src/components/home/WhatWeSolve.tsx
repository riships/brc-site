"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useContactModal } from "@/context/ContactModalContext";

const problems = [
  {
    category: "BUILD",
    needMapping: "Build something new",
    question: "Need a new website, application or platform?",
    description: "Custom web, mobile and SaaS products engineered from architecture to production.",
  },
  {
    category: "IMPROVE",
    needMapping: "Improve an existing product",
    question: "Have an existing product that needs better performance or reliability?",
    description: "Refactoring legacy code, optimizing database latency, and removing technical debt.",
  },
  {
    category: "AUTOMATE",
    needMapping: "AI / Automation",
    question: "Want to reduce manual work with automation or AI?",
    description: "Practical RAG pipelines, intelligent agents, and internal workflow tools.",
  },
  {
    category: "SCALE",
    needMapping: "Cloud / Infrastructure",
    question: "Need your technology infrastructure to handle growth?",
    description: "Cloud architecture, Kubernetes deployment, and resilient infrastructure scaling.",
  },
];

export function WhatWeSolve() {
  const { openModal } = useContactModal();

  return (
    <section className="py-14 md:py-18 border-b border-black/[0.08] bg-white">
      <Container size="xl">
        <div className="max-w-xl mx-auto text-center mb-10">
          <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
            WHAT WE SOLVE
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#09090b]">
            From an idea that needs building to a system that needs fixing.
          </h2>
        </div>

        {/* 4 Clean Text Blocks with Subtle Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-black/[0.08]">
          {problems.map((prob, idx) => (
            <div
              key={prob.category}
              className={idx > 0 ? "pt-5 lg:pt-0 lg:pl-6 flex flex-col justify-between" : "flex flex-col justify-between"}
            >
              <div>
                <span className="font-mono text-[11px] font-bold text-neutral-400 tracking-wider block mb-2">
                  {prob.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#09090b] tracking-tight mb-1.5 leading-snug">
                  {prob.question}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {prob.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/[0.04]">
                <button
                  onClick={() => openModal(prob.needMapping)}
                  className="text-[11px] font-semibold uppercase tracking-wider text-neutral-800 hover:text-black inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Solve this</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
