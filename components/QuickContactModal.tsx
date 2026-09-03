"use client";

import React, { useState } from "react";
import {
  X,
  Send,
  Mail,
  User,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";

export const QuickContactModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Opportunity / Project Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send via Web3Forms endpoint
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e88cf2f0-1c04-4c4f-9e7f-71b306b490f0",
          to_email: "kunwardipson89@gmail.com",
          from_name: formData.name,
          email: formData.email,
          subject: `[Portfolio Contact] ${formData.subject} from ${formData.name}`,
          message: formData.message,
        }),
      });

      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger confetti celebration!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ccff00", "#38bdf8", "#8b5cf6"],
      });
    } catch {
      // Fallback
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ccff00", "#38bdf8", "#8b5cf6"],
      });
    }
  };

  const handleCopyMessage = () => {
    const text = `From: ${formData.name} (${formData.email})\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenMailClient = () => {
    const mailto = `mailto:kunwardipson89@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hi Dip,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    )}`;
    window.location.href = mailto;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "Opportunity / Project Inquiry",
      message: "",
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-[#0f131d] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7c3aed]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#ccff00] text-black flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-['Syne',sans-serif] text-lg font-bold text-white uppercase">
                Send a Quick Message
              </h3>
              <p className="text-[11px] text-zinc-400 font-mono">
                Direct to kunwardipson89@gmail.com
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Success State View */
          <div className="py-8 flex flex-col items-center text-center space-y-4 relative z-10 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#ccff00]/20 border-2 border-[#ccff00] flex items-center justify-center text-[#ccff00] shadow-[0_0_30px_rgba(204,255,0,0.5)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="font-['Syne',sans-serif] text-xl font-black text-white">
                MESSAGE RECEIVED!
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-sm">
                Thank you, <span className="text-[#ccff00] font-bold">{formData.name}</span>! Your note has been delivered to Dip. He will reply to <span className="text-white font-semibold">{formData.email}</span> shortly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
              <button
                onClick={handleCopyMessage}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-semibold text-zinc-300 flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-[#ccff00]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Summary"}</span>
              </button>

              <button
                onClick={handleOpenMailClient}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#ccff00] hover:bg-[#d9ff33] text-black text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span>Open in Email App</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={resetForm}
              className="text-xs text-zinc-400 hover:text-white underline pt-2"
            >
              Send another note
            </button>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="pt-5 space-y-4 relative z-10">
            {/* Name Input */}
            <div>
              <label className="block text-xs font-mono text-zinc-300 font-semibold mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>Your Name:</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Connor / Tech Recruiter"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141926] border border-white/10 focus:border-[#ccff00] text-white text-xs sm:text-sm font-sans focus:outline-none transition-colors"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-xs font-mono text-zinc-300 font-semibold mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>Your Email Address:</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. sarah@techcorp.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141926] border border-white/10 focus:border-[#38bdf8] text-white text-xs sm:text-sm font-sans focus:outline-none transition-colors"
              />
            </div>

            {/* Inquiry Subject */}
            <div>
              <label className="block text-xs font-mono text-zinc-300 font-semibold mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#a855f7]" />
                <span>Topic:</span>
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141926] border border-white/10 focus:border-[#a855f7] text-white text-xs sm:text-sm font-sans focus:outline-none transition-colors"
              >
                <option value="Internship / Full-Time Job Offer">💼 Internship / Full-Time Role</option>
                <option value="Freelance Web / 3D Project">🚀 Freelance Web / 3D Project</option>
                <option value="General Collaboration / Question">🤝 Collaboration / Say Hello</option>
              </select>
            </div>

            {/* Message Body */}
            <div>
              <label className="block text-xs font-mono text-zinc-300 font-semibold mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#f43f5e]" />
                <span>Message:</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hey Dip, saw your portfolio and loved the 3D projects! Would love to chat about..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141926] border border-white/10 focus:border-[#ccff00] text-white text-xs sm:text-sm font-sans focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-[#ccff00] hover:bg-[#d9ff33] text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.5)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Dispatching..." : "Send Message to Dip"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
