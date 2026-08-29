import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Insights & Technical Perspectives",
  description:
    "Engineering essays, architectural blueprints, and technology perspectives from the senior team at BRC.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-[#fafaf9]">
      {/* Header */}
      <section className="pb-16 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            INSIGHTS & PERSPECTIVES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#09090b] max-w-3xl leading-tight">
            Engineering thoughts on difficult problems.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Practical analyses of software architecture, AI integration, cloud resilience, and technical leadership.
          </p>
        </Container>
      </section>

      {/* Blog Articles List */}
      <section className="py-20">
        <Container size="xl">
          <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-white px-4 -mx-4 rounded transition-colors group"
              >
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3">
                    <span className="text-neutral-900 font-semibold uppercase">{post.category}</span>
                    <span>&bull;</span>
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#09090b] tracking-tight group-hover:text-black transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">
                    {post.summary}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-black transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
