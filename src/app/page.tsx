import React from "react";
import { Hero } from "@/components/home/Hero";
import { WhatWeSolve } from "@/components/home/WhatWeSolve";
import { ServicesCompact } from "@/components/home/ServicesCompact";
import { WhyBRCCompact } from "@/components/home/WhyBRCCompact";
import { TrustCompact } from "@/components/home/TrustCompact";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <Hero />

      {/* 2. WHAT WE SOLVE (BUILD, IMPROVE, AUTOMATE, SCALE) */}
      <WhatWeSolve />

      {/* 3. SERVICES (01 TO 06) */}
      <ServicesCompact />

      {/* 4. WHY BRC (3 PRINCIPLES) */}
      <WhyBRCCompact />

      {/* 5. PRACTICAL OUTCOMES TRUST */}
      <TrustCompact />

      {/* 6. CONTACT / INLINE LEAD CONVERSION FORM */}
      <ContactSection />
    </>
  );
}
