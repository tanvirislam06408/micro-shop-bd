"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Zap,
  Star,
  Brain,
  HardDrive,
  Video,
} from "lucide-react";
import { createGeneralWhatsAppLink, createWhatsAppLink } from "@/lib/whatsapp";
import { products } from "@/data/products";

// Swiper core & module styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function HeroSlider() {
  const geminiProduct =
    products.find((p) => p.id === "gemini-ai-pro") || products[0];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="w-full pb-12 sm:pb-14"
      >
        {/* SLIDE 1: General Hero with Logo */}
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-800 text-xs sm:text-sm font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 animate-pulse" />
                <span>Verified AI Subscriptions Store</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                <span className="text-purple-600 font-bold">Fast Delivery</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                Unlock Premium{" "}
                <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                  AI Tools
                </span>{" "}
                at Best Prices
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Get instant access to Gemini AI Pro (18 Months @ ৳350), ChatGPT Plus Owner Account (৳1,550), CapCut Pro, and premium APIs directly on WhatsApp.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
                <a
                  href="#products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-bold text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Explore All Products</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href={createGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-slate-800 font-bold text-base border-2 border-purple-200 shadow-xs hover:bg-purple-50/60 hover:border-purple-300 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600/10" />
                  <span>WhatsApp: 01922458412</span>
                </a>
              </div>

              {/* Trust highlights */}
              <div className="pt-3 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 font-medium border-t border-purple-100/80 mt-4">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Instant Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  Personal Account
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  bKash / Nagad / Rocket
                </span>
              </div>
            </div>

            {/* Right Abstract CSS AI Visual featuring Brand Logo */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-950 rounded-3xl p-5 sm:p-6 border-2 border-purple-500/40 shadow-2xl shadow-purple-600/20 flex flex-col justify-between overflow-hidden">
                {/* Background ambient glow circles */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl"></div>

                {/* Top Card Floating Element */}
                <div className="relative z-10 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Brain className="w-5 h-5 text-amber-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-white">
                        Gemini AI Pro 18M
                      </span>
                      <span className="px-2 py-0.5 text-[9px] font-black rounded bg-emerald-500 text-slate-950 uppercase">
                        ৳350
                      </span>
                    </div>
                    <p className="text-[11px] text-purple-200 truncate">
                      Gemini Pro + Antigravity + Veo 3.1
                    </p>
                  </div>
                </div>

                {/* Center visual hub with brand logo */}
                <div className="relative z-10 py-3 sm:py-4 text-center my-auto flex flex-col items-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-purple-400/80 p-1 shadow-xl shadow-purple-500/40 mb-2 animate-pulse-slow">
                    <Image
                      src="/logo.png"
                      alt="Micro-Shop BD Official Brand Badge"
                      fill
                      sizes="(max-width: 640px) 80px, 96px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-white tracking-tight">
                    MICRO-SHOP BD
                  </h3>
                  <p className="text-[11px] sm:text-xs text-purple-300 font-semibold tracking-wider uppercase">
                    Smarter Tools. Better You.
                  </p>
                </div>

                {/* Floating Chips around */}
                <div className="relative z-10 grid grid-cols-2 gap-2">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/15 text-[10px] sm:text-[11px] font-semibold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    ChatGPT Owner ৳1550
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/15 text-[10px] sm:text-[11px] font-semibold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                    CapCut Pro ৳250
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2: Gemini AI Pro 18 Months Special */}
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs sm:text-sm font-bold">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Mega Deal</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-emerald-700 font-extrabold">18 Months @ ৳350</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                Gemini AI Pro —{" "}
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                  18 Months Plan
                </span>{" "}
                for ৳350
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Coding, research, AI image generation, Veo 3.1 video generation, and 5TB cloud storage activated directly on your personal account.
              </p>

              {/* Feature Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 sm:pt-2">
                {[
                  "Gemini Pro Advanced",
                  "Antigravity Dev",
                  "Nano Banana Pro Image AI",
                  "Veo 3.1 Video Gen",
                  "5TB Cloud Storage",
                  "Personal Account",
                  "18 Months Validity",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white border border-purple-200 text-purple-900 text-xs sm:text-sm font-semibold shadow-xs flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                    {chip}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4">
                <a
                  href={createWhatsAppLink(geminiProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Get Gemini Pro (৳350)</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Visual for Gemini AI Pro */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-5 sm:p-6 border-2 border-purple-200 shadow-xl shadow-purple-500/10 space-y-4">
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-purple-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-extrabold text-lg sm:text-xl shadow-md">
                      G
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-slate-900">
                        Gemini AI Pro
                      </h4>
                      <p className="text-xs text-purple-600 font-medium">
                        Personal Mail Activation
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
                    ৳350 / 18M
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      Gemini Pro Coding & Research
                    </span>
                    <span className="text-purple-700">Yes</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <span className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-indigo-600" />
                      Antigravity Dev & Nano Banana
                    </span>
                    <span className="text-purple-700">Included</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <span className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-pink-600" />
                      Veo 3.1 AI Video Generation
                    </span>
                    <span className="text-purple-700">Included</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <span className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-blue-600" />
                      5 TB Cloud Storage
                    </span>
                    <span className="text-purple-700 font-bold">5,000 GB</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500">Special Price</span>
                    <div className="text-xl sm:text-2xl font-extrabold text-purple-700">
                      ৳350{" "}
                      <span className="text-xs line-through text-slate-400 font-normal">
                        ৳1,500
                      </span>
                    </div>
                  </div>
                  <a
                    href={createWhatsAppLink(geminiProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-extrabold hover:bg-purple-700 transition-colors shadow-xs"
                  >
                    Buy via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3: ChatGPT Plus & CapCut Pro Collection */}
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Full AI & Creative Suite</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                ChatGPT Plus Owner &{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Premium Tools
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Get ChatGPT Plus Owner Account (৳1,550), CapCut Pro (৳250), ElevenLabs, Zoom Pro, Notion, VPNs, and Framer Pro with direct WhatsApp support.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 sm:pt-2 max-w-xl mx-auto lg:mx-0">
                <div className="p-3 bg-white rounded-2xl border border-purple-100 shadow-xs text-center">
                  <div className="font-extrabold text-base sm:text-lg text-purple-700">
                    ৳350
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500">Gemini Pro 18M</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-purple-100 shadow-xs text-center">
                  <div className="font-extrabold text-base sm:text-lg text-emerald-700">
                    ৳1,550
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500">ChatGPT Owner</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-purple-100 shadow-xs text-center">
                  <div className="font-extrabold text-base sm:text-lg text-pink-700">
                    ৳250
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500">CapCut Pro 1M</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4">
                <a
                  href="#products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-base shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>View Full Product List</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Stack of Product Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md space-y-2 sm:space-y-2.5">
                {[
                  {
                    name: "Gemini AI Pro (18 Months)",
                    price: "৳350",
                    tag: "Personal Mail",
                    bg: "border-purple-200 bg-purple-50/50",
                  },
                  {
                    name: "ChatGPT Plus Owner Account",
                    price: "৳1,550",
                    tag: "Personal Owner",
                    bg: "border-emerald-200 bg-emerald-50/50",
                  },
                  {
                    name: "CapCut Pro (1 Month)",
                    price: "৳250",
                    tag: "Editing Tools",
                    bg: "border-pink-200 bg-pink-50/50",
                  },
                  {
                    name: "ElevenLabs AI Voice",
                    price: "৳400",
                    tag: "Voice Cloning",
                    bg: "border-indigo-200 bg-indigo-50/50",
                  },
                  {
                    name: "NordVPN / Surfshark VPN",
                    price: "৳600",
                    tag: "Secure IP",
                    bg: "border-blue-200 bg-blue-50/50",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 sm:p-3.5 rounded-2xl border ${item.bg} bg-white shadow-xs flex items-center justify-between hover:scale-[1.01] transition-transform`}
                  >
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-slate-900">
                        {item.name}
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-100 text-purple-700">
                        {item.tag}
                      </span>
                    </div>
                    <span className="font-extrabold text-xs sm:text-base text-purple-700">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
