"use client";

import {
  Sparkles,
  Cpu,
  HardDrive,
  Video,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Zap,
  Clock,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { createWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { products } from "@/data/products";

const features = [
  {
    icon: Sparkles,
    badge: "Advanced Model",
    title: "Gemini 1.5 Pro AI",
    desc: "Coding, research, reasoning and daily problem-solving powered by Google's premier multimodal model.",
  },
  {
    icon: ShieldCheck,
    badge: "18 Months • ৳350",
    title: "Personal Mail Activation",
    desc: "Activated safely on your personal Gmail account with 18 months full replacement warranty.",
    highlight: true,
  },
  {
    icon: HardDrive,
    badge: "5,000 GB Storage",
    title: "5 TB Cloud Storage",
    desc: "Massive Google One cloud space for high-res photos, 4K videos, and files directly in your Google Drive.",
  },
  {
    icon: Cpu,
    badge: "Dev & Image Gen",
    title: "Antigravity & Nano Banana",
    desc: "AI developer platform integration with high-speed coding assistance and studio-grade image generation.",
  },
  {
    icon: Video,
    badge: "Cinematic Video",
    title: "Veo 3.1 Video AI Generation",
    desc: "Render cinematic AI video scenes, animations, and video content with cutting-edge prompt control.",
  },
];

export default function GoogleAISection() {
  const geminiProduct =
    products.find((p) => p.id === "gemini-ai-pro") || products[0];

  return (
    <section
      id="google-ai"
      className="py-20 md:py-28 bg-white px-4 sm:px-6 relative min-h-screen overflow-hidden"
    >
      {/* 1. Signature Masked Horizon Background Construction */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f5f3ff_0px_1px,transparent_1px_8px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_35%,rgba(243,232,255,0.7)_70%,rgba(147,51,234,0.25)_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Section Heading with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200/80 text-purple-800 text-xs sm:text-sm font-bold shadow-xs mb-5">
            <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
            <span>🔥 Mega Offer — Gemini AI Pro (18 Months @ ৳350)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5 text-balance">
            Gemini AI Pro —{" "}
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              18 Months Package
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            Google-এর শক্তিশালী AI ইকোসিস্টেম এখন নিজের Personal Gmail অ্যাকাউন্টে ব্যবহার করুন ১৮ মাসের ফুল ওয়ারেন্টি সহ মাত্র ৳৩৫০ টাকায়।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-700 pt-4">
            <span className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-purple-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              18 Months Guaranteed Access
            </span>
            <span className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-purple-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              Personal Gmail Activation
            </span>
            <span className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-purple-200 shadow-xs">
              <Zap className="w-4 h-4 text-amber-500" />
              5-30 Min Fast WhatsApp Delivery
            </span>
          </div>
        </motion.div>

        {/* Feature Hero Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 sm:gap-y-12 md:gap-y-14 gap-x-8 lg:gap-x-12 mb-16">
          {/* Row 1: 3 Cards (Middle card raised with shadow and desktop scale) */}
          {features.slice(0, 3).map((f, i) => (
            <FeatureCard key={i} index={i} {...f} />
          ))}

          {/* Row 2: 2 Cards Centered */}
          <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-y-8 sm:gap-y-12 md:gap-y-14 gap-x-8 lg:gap-x-12">
            {features.slice(3).map((f, i) => (
              <div key={i} className="md:w-1/3">
                <FeatureCard index={i + 3} {...f} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  icon: Icon,
  badge,
  title,
  desc,
  highlight,
  index = 0,
}: {
  icon: any;
  badge?: string;
  title: string;
  desc: string;
  highlight?: boolean;
  index?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className={cn(
      "flex flex-col items-center group transition-colors duration-300 p-6 sm:p-8 rounded-3xl bg-white/85 backdrop-blur-md border border-purple-100/90 shadow-sm hover:bg-white hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 cursor-default",
      highlight &&
        "md:scale-105 bg-white border-purple-300 shadow-2xl shadow-purple-500/15 ring-2 ring-purple-500/20"
    )}
  >
    <div
      className={cn(
        "w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-300",
        highlight
          ? "bg-gradient-to-tr from-purple-600 via-purple-700 to-indigo-600 text-white shadow-xl shadow-purple-500/40 scale-110"
          : "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:scale-105"
      )}
    >
      <Icon className="w-7 h-7" />
    </div>

    {badge && (
      <span
        className={cn(
          "text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-2xs",
          highlight
            ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
            : "bg-purple-50 text-purple-700 border border-purple-100"
        )}
      >
        {badge}
      </span>
    )}

    <h3 className="text-xl font-bold mb-2.5 text-slate-900 tracking-tight text-center group-hover:text-purple-700 transition-colors">
      {title}
    </h3>
    <p className="text-slate-600 leading-relaxed text-sm max-w-xs mx-auto text-pretty text-center">
      {desc}
    </p>
  </motion.div>
);

