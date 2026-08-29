import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BRCLogo } from "@/components/ui/BRCLogo";
import { companyPrinciples } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About BRC — SIMPLIFY TOUGH",
  description:
    "Learn about BRC: an enterprise technology services company dedicated to turning complex software, cloud, AI, and cybersecurity challenges into reliable, scalable solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-[#fafaf9]">
      {/* Hero Header */}
      <section className="pb-16 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            ABOUT BRC &bull; SIMPLIFY TOUGH
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#09090b] max-w-3xl leading-tight">
            Built to make technology less complicated.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            BRC is a technology services company helping organizations turn complex technology challenges into simple, scalable and business-focused solutions.
          </p>
        </Container>
      </section>

      {/* Perspective & Philosophy */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="mb-4">
                <BRCLogo size="lg" theme="light" />
              </div>
              <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500">
                THE BRC PERSPECTIVE
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[#09090b]">
                Engineering for longevity, not temporary hype.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-neutral-600 text-base leading-relaxed">
              <p>
                Technology should solve problems, not create new ones. At BRC, we work with businesses to understand the problem first, choose the right technology second, and build solutions that remain useful long after launch.
              </p>
              <p>
                From strategy and consulting to development, cloud, AI, cybersecurity and managed IT services, we bring together the expertise required to build and operate modern digital businesses.
              </p>
              <p>
                Our motto is simple: <strong>SIMPLIFY TOUGH</strong>. We strip away unnecessary complexity to deliver clean, maintainable, and high-performance software with zero client lock-in.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-20 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            WORKING PRINCIPLES
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#09090b] mb-12">
            Four commitments we stand by
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyPrinciples.map((p) => (
              <div
                key={p.title}
                className="p-6 border border-black/[0.08] bg-white rounded-lg shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#09090b] mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Direct CTA */}
      <section className="py-16 bg-white">
        <Container size="lg">
          <div className="border border-black/[0.08] bg-[#fafaf9] rounded-lg p-10 text-center">
            <h3 className="text-2xl font-bold text-[#09090b]">
              Have something difficult to solve?
            </h3>
            <p className="mt-2 text-sm text-neutral-600 max-w-md mx-auto">
              Tell us what you&apos;re working on. We&apos;ll figure out where we can help.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#09090b] hover:bg-neutral-800 rounded transition-colors"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
