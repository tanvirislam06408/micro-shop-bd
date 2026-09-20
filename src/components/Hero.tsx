"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Star,
  Flame,
  ChevronLeft,
  ChevronRight,
  BadgePercent,
  Clock,
  Layers,
  Crown,
} from "lucide-react";
import {
  createGeneralWhatsAppLink,
  createWhatsAppLink,
  WHATSAPP_DISPLAY,
} from "@/lib/whatsapp";
import { products } from "@/data/products";
import OrderModal from "@/components/OrderModal";
import { Product } from "@/types/product";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

interface SlideOffer {
  id: string;
  badge: string;
  badgeColor: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  price: string;
  oldPrice: string;
  discountBadge: string;
  validity: string;
  image: string;
  imageAlt: string;
  features: string[];
  productRefId?: string;
  accentGradient: string;
  glowColor: string;
  buttonText: string;
  secondaryLink?: string;
}

const offers: SlideOffer[] = [
  {
    id: "gemini-pro-18m",
    badge: "🔥 মেগা ডিল • ৭৬% বিশেষ ছাড়",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    titlePrefix: "গুগল জেমিনি এআই প্রো",
    titleHighlight: "১৮ মাসের মেগা প্যাক",
    titleSuffix: "মাত্র ৩৫০ টাকায়",
    description:
      "আপনার পার্সোনাল ইমেইলে সরাসরি অ্যাক্টিভেশন। সাথে পাচ্ছেন জেমিনি প্রো, অ্যান্টিগ্র্যাভিটি ডেভ স্যুট, ন্যানো ব্যানানা প্রো ইমেজ এআই, ভিও ৩.১ এআই ভিডিও এবং ৫ টিবি ক্লাউড স্টোরেজ।",
    price: "৳৩৫০",
    oldPrice: "৳১,৫০০",
    discountBadge: "৭৬% ছাড়",
    validity: "১৮ মাসের ফুল গ্যারান্টি",
    image: "/images/offers/gemini-offer.jpg",
    imageAlt: "গুগল জেমিনি এআই প্রো ১৮ মাসের অফার ব্যানার",
    features: [
      "৫ টিবি গুগল ক্লাউড স্টোরেজ",
      "ভিও ৩.১ এআই ভিডিও জেনারেশন",
      "অ্যান্টিগ্র্যাভিটি ও ন্যানো ব্যানানা এআই",
      "নিজস্ব পার্সোনাল ইমেইল অ্যাক্টিভেশন",
    ],
    productRefId: "gemini-ai-pro",
    accentGradient: "from-purple-500 via-indigo-500 to-fuchsia-500",
    glowColor: "rgba(168, 85, 247, 0.35)",
    buttonText: "জেমিনি প্রো কিনুন (৳৩৫০)",
    secondaryLink: "#google-ai",
  },
  {
    id: "chatgpt-plus-owner",
    badge: "⚡ ১০০% পার্সোনাল ওনার অ্যাকাউন্ট",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    titlePrefix: "চ্যাটজিপিটি প্লাস",
    titleHighlight: "ওনার অ্যাকাউন্ট",
    titleSuffix: "GPT-4o ও ক্যানভাস সহ",
    description:
      "সম্পূর্ণ ব্যক্তিগত মেইল ওনার অ্যাক্সেস। আনলিমিটেড GPT-4o, DALL-E 3 ইমেজ জেনারেশন, ক্যানভাস কোডিং ওয়ার্কস্পেস, লাইভ ভয়েস মোড ও কাস্টম জিপিটি।",
    price: "৳১,৫৫০",
    oldPrice: "৳২,৪০০",
    discountBadge: "টপ সেলার",
    validity: "পার্সোনাল মেইল ওনার অ্যাক্সেস",
    image: "/images/offers/chatgpt-offer.jpg",
    imageAlt: "চ্যাটজিপিটি প্লাস ওনার অ্যাকাউন্ট স্পেশাল অফার",
    features: [
      "GPT-4o অমনিমোডাল হাই স্পিড",
      "DALL-E 3 ও ক্যানভাস এআই স্টুডিও",
      "সম্পূর্ণ নিজস্ব ওনার অ্যাকাউন্ট",
      "কোনো শেয়ারিং নেই / ফুল প্রাইভেট",
    ],
    productRefId: "chatgpt-plus-owner",
    accentGradient: "from-emerald-400 via-teal-400 to-cyan-400",
    glowColor: "rgba(16, 185, 129, 0.35)",
    buttonText: "চ্যাটজিপিটি প্লাস কিনুন (৳১,৫৫০)",
    secondaryLink: "#products",
  },
  {
    id: "creator-capcut-eleven",
    badge: "🎬 ক্রিয়েটর পাওয়ার কম্বো",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
    titlePrefix: "ক্যাপকাট প্রো ও",
    titleHighlight: "ইলেভেনল্যাবস এআই ভয়েস",
    titleSuffix: "স্টুডিও",
    description:
      "ভিডিও ক্রিয়েটরদের জন্য সেরা বান্ডেল। আনলক করুন ৪K ৬০FPS এক্সপোর্ট, প্রো ট্রানজিশন, অটো-ক্যাপশন এবং মানুষের মতো রিয়েলিস্টিক ভয়েস ক্লোনিং।",
    price: "৳২৫০",
    oldPrice: "৳৮০০",
    discountBadge: "ক্রিয়েটর স্পেশাল",
    validity: "ইনস্ট্যান্ট হোয়াটসঅ্যাপ ডেলিভারি",
    image: "/images/offers/capcut-offer.jpg",
    imageAlt: "ক্যাপকাট প্রো ও ইলেভেনল্যাবস ক্রিয়েটর স্টুডিও ব্যানার",
    features: [
      "ক্যাপকাট প্রো ১ মাস (৳২৫০) ৪K এক্সপোর্ট",
      "ইলেভেনল্যাবস ভয়েস ক্লোনিং (৳৪০০)",
      "প্রো টেমপ্লেট ও স্মার্ট অটো-ক্যাপশন",
      "পিসি ও মোবাইলে ক্রস-প্ল্যাটফর্ম সাপোর্ট",
    ],
    productRefId: "capcut-pro",
    accentGradient: "from-pink-500 via-rose-400 to-purple-500",
    glowColor: "rgba(244, 63, 94, 0.35)",
    buttonText: "ক্যাপকাট প্রো কিনুন (৳২৫০)",
    secondaryLink: "#products",
  },
  {
    id: "mega-store-sale",
    badge: "🚀 বাংলাদেশের বিশ্বস্ত এআই স্টোর",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    titlePrefix: "মাইক্রো-শপ বিডি",
    titleHighlight: "স্পেশাল ফ্ল্যাশ সেল",
    titleSuffix: "৮০% পর্যন্ত ছাড়",
    description:
      "সব সেরা এআই টুলস এক জায়গায়: জেমিনি প্রো, চ্যাটজিপিটি, ক্লড ৩.৫, কোডেক্স এপিআই, নোশন এআই, জুম প্রো ও নর্ডভিপিএন সরাসরি বিকাশ ও নগদে।",
    price: "শুরু মাত্র ৳২৫০",
    oldPrice: "৳১,৫০০+",
    discountBadge: "৮০% পর্যন্ত ছাড়",
    validity: "১০০% রিপ্লেসমেন্ট ওয়ারেন্টি",
    image: "/images/offers/mega-sale-offer.jpg",
    imageAlt: "মাইক্রো-শপ বিডি মেগা সেল এবং ডিসকাউন্ট অফার",
    features: [
      "৫-৩০ মিনিটে ইনস্ট্যান্ট হোয়াটসঅ্যাপ ডেলিভারি",
      "বিকাশ • নগদ • রকেট পেমেন্ট সাপোর্ট",
      "১০০% ফুল রিপ্লেসমেন্ট ওয়ারেন্টি",
      "২৪/৭ ডেডিকেটেড কাস্টমার সাপোর্ট",
    ],
    accentGradient: "from-amber-400 via-fuchsia-400 to-indigo-400",
    glowColor: "rgba(245, 158, 11, 0.35)",
    buttonText: "সকল প্রোডাক্ট দেখুন",
    secondaryLink: "#products",
  },
];

export default function Hero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOpenOrder = (productRefId?: string) => {
    if (productRefId) {
      const found = products.find((p) => p.id === productRefId);
      if (found) {
        setSelectedProduct(found);
        setIsOrderModalOpen(true);
        return;
      }
    }
    // Fallback to general WhatsApp
    window.open(createGeneralWhatsAppLink(), "_blank");
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-[#080315] text-white pt-4 sm:pt-6 pb-12 md:pb-16 overflow-hidden select-none"
    >
      {/* Background Ambience / Glow Blobs */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[700px] h-[300px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Subtle Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between py-3 mb-6 sm:mb-8 border-b border-purple-500/15">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-purple-400/60 shadow-lg shadow-purple-500/20 shrink-0">
              <Image
                src="/logo.png"
                alt="মাইক্রো-শপ বিডি অফিশিয়াল"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black tracking-tight text-white">
                  MICRO-SHOP <span className="text-purple-400">BD</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ভেরিফাইড স্টোর
                </span>
              </div>
              <p className="text-[11px] text-purple-200/80 font-medium hidden xs:block">
                বাংলাদেশে প্রিমিয়াম এআই সাবস্ক্রিপশন ও সফটওয়্যার সেবা
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#products"
              className="hidden md:inline-flex items-center gap-1 text-xs font-bold text-purple-200 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>সকল প্রোডাক্ট</span>
            </a>
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-extrabold shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>

        {/* Hero Main Slider Container */}
        <div className="relative rounded-3xl p-1 sm:p-2 bg-gradient-to-b from-purple-500/20 via-purple-900/10 to-indigo-950/20 border border-purple-500/30 backdrop-blur-2xl shadow-2xl shadow-purple-950/80">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={750}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full rounded-2xl overflow-hidden"
          >
            {offers.map((offer, index) => {
              const matchedProduct = offer.productRefId
                ? products.find((p) => p.id === offer.productRefId)
                : null;
              const directWhatsAppUrl = matchedProduct
                ? createWhatsAppLink(matchedProduct)
                : createGeneralWhatsAppLink();

              return (
                <SwiperSlide key={offer.id}>
                  <div className="p-4 sm:p-7 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center min-h-[500px] sm:min-h-[520px] lg:min-h-[550px]">
                    {/* Left Details Column */}
                    <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left flex flex-col justify-center">
                      {/* Top Badges Row */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold border ${offer.badgeColor} shadow-xs backdrop-blur-md`}
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{offer.badge}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black bg-emerald-500 text-slate-950 uppercase tracking-wide shadow-xs">
                          <Zap className="w-3 h-3 fill-slate-950" />
                          <span>{offer.discountBadge}</span>
                        </span>
                      </div>

                      {/* Main Title */}
                      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25]">
                        {offer.titlePrefix}{" "}
                        <span
                          className={`bg-gradient-to-r ${offer.accentGradient} bg-clip-text text-transparent`}
                        >
                          {offer.titleHighlight}
                        </span>{" "}
                        {offer.titleSuffix && (
                          <span className="text-white">{offer.titleSuffix}</span>
                        )}
                      </h1>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal max-w-xl">
                        {offer.description}
                      </p>

                      {/* Feature Bullet Points / Chips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {offer.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-purple-100 font-medium bg-white/5 border border-purple-400/20 px-3 py-2 rounded-xl backdrop-blur-sm hover:border-purple-300/50 transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price Section & CTAs */}
                      <div className="pt-3 sm:pt-4 border-t border-purple-500/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <div>
                          <span className="text-xs text-purple-300/80 font-medium block">
                            অফার মূল্য ({offer.validity})
                          </span>
                          <div className="flex items-baseline gap-2.5">
                            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                              {offer.price}
                            </span>
                            {offer.oldPrice && (
                              <span className="text-sm text-purple-300/60 line-through">
                                {offer.oldPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                          {/* Main WhatsApp Direct Buy */}
                          <a
                            href={directWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                          >
                            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                            <span>{offer.buttonText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>

                          {/* Quick Order Modal Trigger if product exists */}
                          {offer.productRefId && (
                            <button
                              type="button"
                              onClick={() => handleOpenOrder(offer.productRefId)}
                              className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-purple-400/30 backdrop-blur-md transition-all hover:border-purple-300 active:scale-[0.98]"
                              title="সরাসরি ওয়েবসাইট থেকে অর্ডার করুন"
                            >
                              অর্ডার ফর্ম
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right High-Impact Offer Photo Visual Column */}
                    <div className="lg:col-span-6 flex justify-center items-center">
                      <div className="relative w-full max-w-md lg:max-w-lg aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-400/40 shadow-2xl group">
                        {/* Glow Behind the Photo */}
                        <div
                          className="absolute inset-0 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none"
                          style={{
                            background: `radial-gradient(circle, ${offer.glowColor} 0%, transparent 70%)`,
                          }}
                        />

                        {/* Offer Image */}
                        <Image
                          src={offer.image}
                          alt={offer.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                          priority={index === 0}
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />

                        {/* High-Tech Gradient Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080315]/90 via-transparent to-transparent opacity-60 pointer-events-none" />

                        {/* Floating Price Floating Pill on Top Right of Photo */}
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-purple-400/50 shadow-xl flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-xs sm:text-sm font-extrabold text-white">
                            {offer.price}
                          </span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-600 text-white uppercase">
                            অফার
                          </span>
                        </div>

                        {/* Bottom Bar Info on Photo */}
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 p-2.5 sm:p-3 rounded-xl bg-slate-950/75 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2 text-purple-200">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span className="font-semibold truncate">
                              জেনুইন পার্সোনাল মেইলে অ্যাক্টিভেশন
                            </span>
                          </div>
                          <span className="text-[11px] font-bold text-amber-300 shrink-0 hidden xs:inline-block">
                            ⚡ ইনস্ট্যান্ট ৫-৩০ মি.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Slider Navigation Controls Bar */}
          <div className="mt-2 pt-3 pb-2 px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 border-t border-purple-500/20">
            {/* Slide Indicators / Thumb Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {offers.map((off, idx) => (
                <button
                  key={off.id}
                  onClick={() => swiperInstance?.slideToLoop(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeIndex === idx
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 scale-105"
                      : "bg-white/5 text-purple-300/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      activeIndex === idx ? "bg-emerald-400" : "bg-purple-400/40"
                    }`}
                  />
                  <span className="hidden sm:inline">
                    {idx === 0
                      ? "জেমিনি প্রো"
                      : idx === 1
                      ? "চ্যাটজিপিটি প্লাস"
                      : idx === 2
                      ? "ক্যাপকাট ও ভয়েস"
                      : "ফ্ল্যাশ সেল"}
                  </span>
                  <span className="sm:hidden">{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => swiperInstance?.slidePrev()}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-purple-400/30 flex items-center justify-center text-white transition hover:scale-105 active:scale-95 shadow-sm"
                aria-label="আগের অফার"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => swiperInstance?.slideNext()}
                className="w-9 h-9 rounded-full bg-purple-600 hover:bg-purple-500 flex items-center justify-center text-white transition hover:scale-105 active:scale-95 shadow-md shadow-purple-600/30"
                aria-label="পরের অফার"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Highlights / Trust Ribbon Below Slider */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-400/40 text-purple-300 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white">
                ১০০% জেনুইন
              </div>
              <p className="text-[11px] text-purple-300/80">
                পার্সোনাল ইমেইল অ্যাক্টিভেশন
              </p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white">
                ৫-৩০ মিনিটে ডেলিভারি
              </div>
              <p className="text-[11px] text-purple-300/80">
                হোয়াটসঅ্যাপে দ্রুত অ্যাক্টিভেশন
              </p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white">
                ফুল ওয়ারেন্টি
              </div>
              <p className="text-[11px] text-purple-300/80">
                ১০০% রিপ্লেসমেন্ট গ্যারান্টি
              </p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-600/30 border border-pink-400/40 text-pink-300 flex items-center justify-center shrink-0">
              <BadgePercent className="w-5 h-5 text-pink-300" />
            </div>
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white">
                বিকাশ ও নগদ
              </div>
              <p className="text-[11px] text-purple-300/80">
                সহজ ও নিরাপদ পেমেন্ট
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      {selectedProduct && (
        <OrderModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
          product={selectedProduct}
        />
      )}
    </section>
  );
}



