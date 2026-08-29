"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Software Engineering",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Business Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Please describe your project or challenge.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again or email us directly.");
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#fafaf9]">
      {/* Header */}
      <section className="pb-16 border-b border-black/[0.08]">
        <Container size="xl">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            START A CONVERSATION
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#09090b] max-w-3xl leading-tight">
            Have something difficult to solve?
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Tell us what you&apos;re working on. We&apos;ll figure out where we can help.
          </p>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="border border-black/[0.08] bg-white rounded-lg p-8 sm:p-10 shadow-xs">
                {status === "success" ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#09090b]">Message Received</h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                      Thank you. A senior BRC technical architect is reviewing your submission and will get in touch within 24 hours.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setStatus("idle");
                          setFormData({
                            name: "",
                            company: "",
                            email: "",
                            phone: "",
                            service: "Software Engineering",
                            message: "",
                          });
                        }}
                        className="text-xs font-semibold uppercase tracking-wider text-neutral-900 underline underline-offset-4"
                      >
                        Submit another note
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {status === "error" && (
                      <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 mb-2"
                        >
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: "" });
                          }}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3 rounded border border-neutral-300 text-sm text-neutral-900 outline-none focus:border-black transition-colors"
                        />
                        {errors.name && (
                          <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 mb-2"
                        >
                          Company / Organization
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Acme Corp"
                          className="w-full px-4 py-3 rounded border border-neutral-300 text-sm text-neutral-900 outline-none focus:border-black transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 mb-2"
                        >
                          Business Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded border border-neutral-300 text-sm text-neutral-900 outline-none focus:border-black transition-colors"
                        />
                        {errors.email && (
                          <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 mb-2"
                        >
                          Practice Area
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded border border-neutral-300 text-sm text-neutral-900 outline-none focus:border-black bg-white transition-colors"
                        >
                          <option value="Software Engineering">Software Engineering</option>
                          <option value="AI & Automation">AI & Automation</option>
                          <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                          <option value="Data & Analytics">Data & Analytics</option>
                          <option value="Technology Consulting">Technology Consulting</option>
                          <option value="Other">Other Challenge</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 mb-2"
                      >
                        Tell us about the challenge *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        placeholder="Current tech stack, goals, timelines, or bottlenecks..."
                        className="w-full px-4 py-3 rounded border border-neutral-300 text-sm text-neutral-900 outline-none focus:border-black transition-colors"
                      />
                      {errors.message && (
                        <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#09090b] hover:bg-neutral-800 rounded transition-colors w-full cursor-pointer disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border border-black/[0.08] bg-white rounded-lg p-8 space-y-4">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  DIRECT CONTACT
                </div>
                <div className="space-y-3 text-sm text-neutral-700">
                  <div>
                    <div className="font-semibold text-neutral-900">Email:</div>
                    <a href="mailto:contact@brc-tech.com" className="text-neutral-600 hover:text-black">
                      contact@brc-tech.com
                    </a>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Technical Briefings:</div>
                    <p className="text-neutral-600 text-xs mt-1">
                      Direct consultation with Senior Technical Architects with 24-hour turnaround.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
