"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

export function QueryModal() {
  const { isOpen, closeModal, selectedNeed } = useContactModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    need: "Build something new",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedNeed) {
      setFormData((prev) => ({ ...prev, need: selectedNeed }));
    }
  }, [selectedNeed]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Your name is required.";
    if (!formData.email.trim()) {
      errs.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Please tell us a little about your project.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.need,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error occurred. Please email us directly at contact@brc-tech.com");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#09090b] text-white border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-neutral-800">
          <div>
            <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-400">
              START A CONVERSATION
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              Tell us what you need
            </h3>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors cursor-pointer"
            aria-label="Close query modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {status === "success" ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Thanks — we&apos;ve received your enquiry.
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xs mx-auto leading-relaxed">
                A senior engineer will review your project requirements and respond within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {status === "error" && (
                <div className="p-3 rounded bg-red-950/50 border border-red-800/60 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="popup-name"
                    className="block text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    id="popup-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2 rounded bg-[#181a22] border border-neutral-700/80 text-xs text-white placeholder:text-neutral-500 outline-none focus:border-white transition-colors"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 mt-0.5 block">{errors.name}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="popup-email"
                    className="block text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400 mb-1"
                  >
                    Work Email *
                  </label>
                  <input
                    id="popup-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2 rounded bg-[#181a22] border border-neutral-700/80 text-xs text-white placeholder:text-neutral-500 outline-none focus:border-white transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-0.5 block">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="popup-company"
                    className="block text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400 mb-1"
                  >
                    Company
                  </label>
                  <input
                    id="popup-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name"
                    className="w-full px-3.5 py-2 rounded bg-[#181a22] border border-neutral-700/80 text-xs text-white placeholder:text-neutral-500 outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="popup-phone"
                    className="block text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="popup-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2 rounded bg-[#181a22] border border-neutral-700/80 text-xs text-white placeholder:text-neutral-500 outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="popup-need"
                  className="block text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400 mb-1"
                >
                  What do you need?
                </label>
                <select
                  id="popup-need"
                  value={formData.need}
                  onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                  className="w-full px-3.5 py-2 rounded bg-[#181a22] border border-neutral-700/80 text-xs text-white outline-none focus:border-white transition-colors cursor-pointer"
                >
                  <option value="Build something new">Build something new</option>
                  <option value="Improve an existing product">Improve an existing product</option>
                  <option value="AI / Automation">AI / Automation</option>
                  <option value="Cloud / Infrastructure">Cloud / Infrastructure</option>
                  <option value="Security">Security</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Something else">Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="popup-message"
                  className="block text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400 mb-1"
                >
                  Tell us a little about your project... *
                </label>
                <textarea
                  id="popup-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  placeholder="Current setup, goals, timelines, or bottlenecks..."
                  className="w-full px-3.5 py-2 rounded bg-[#181a22] border border-neutral-700/80 text-xs text-white placeholder:text-neutral-500 outline-none focus:border-white transition-colors"
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 mt-0.5 block">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded transition-colors w-full cursor-pointer disabled:opacity-50 mt-1"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
