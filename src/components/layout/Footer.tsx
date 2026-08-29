import React from "react";
import { BRCLogo } from "@/components/ui/BRCLogo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090b] text-neutral-400 py-12 border-t border-neutral-800">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-10 border-b border-neutral-800 items-start">
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-2">
            <BRCLogo size="md" theme="dark" showTagline={true} />
            <p className="text-xs text-neutral-500 max-w-sm mt-1 leading-relaxed">
              Technology systems designed, built and improved for businesses that need things done right.
            </p>
          </div>

          {/* Vertical Contact & Social Links */}
          <div className="flex flex-col sm:items-end gap-2.5 text-xs font-mono">
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
              DIRECT CHANNELS
            </span>
            <a
              href="mailto:contact@brc-tech.com"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              contact@brc-tech.com
            </a>
            <span className="text-neutral-400">+1 (800) 555-0199</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              LinkedIn &rarr;
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono">
          <div>&copy; {currentYear} BRC. All rights reserved.</div>
          <div>SIMPLIFY TOUGH</div>
        </div>
      </Container>
    </footer>
  );
}
