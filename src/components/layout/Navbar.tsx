"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { BRCLogo } from "@/components/ui/BRCLogo";
import { Container } from "@/components/ui/Container";
import { useContactModal } from "@/context/ContactModalContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-[#fafaf9]/95 backdrop-blur-md border-b",
          scrolled ? "border-black/[0.08] shadow-xs py-3" : "border-transparent py-4"
        )}
      >
        <Container size="xl">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex items-center">
              <BRCLogo size="md" theme="light" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#services"
                className="text-xs font-medium uppercase tracking-wider text-neutral-600 hover:text-black transition-colors"
              >
                Services
              </Link>
              <Link
                href="#why-brc"
                className="text-xs font-medium uppercase tracking-wider text-neutral-600 hover:text-black transition-colors"
              >
                About
              </Link>
              <button
                type="button"
                onClick={() => openModal()}
                className="text-xs font-medium uppercase tracking-wider text-neutral-600 hover:text-black transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Right Action Button -> Opens Query Popup */}
            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#09090b] hover:bg-neutral-800 rounded transition-colors cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 text-neutral-900 hover:text-black focus:outline-none cursor-pointer rounded"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[2]" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[2]" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden pt-20 bg-[#fafaf9] flex flex-col justify-between p-6">
          <div className="flex flex-col gap-6 pt-4">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-neutral-900 hover:text-black py-2 border-b border-black/[0.06]"
            >
              Services
            </Link>
            <Link
              href="#why-brc"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-neutral-900 hover:text-black py-2 border-b border-black/[0.06]"
            >
              About
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="text-lg font-bold text-neutral-900 hover:text-black py-2 border-b border-black/[0.06] text-left cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="pb-8 space-y-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#09090b] rounded cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="text-center text-xs font-mono text-neutral-500">
              <a href="mailto:contact@brc-tech.com" className="hover:underline">
                contact@brc-tech.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
