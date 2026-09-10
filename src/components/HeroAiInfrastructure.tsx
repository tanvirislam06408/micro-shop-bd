'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { TimelineAnimation } from '@/components/ui/timeline-animation';
import { useMediaQuery } from '@/hooks/use-media-query';
import MotionDrawer from '@/components/ui/motion-drawer';
import { createGeneralWhatsAppLink, WHATSAPP_DISPLAY } from '@/lib/whatsapp';

// Dynamically import WebGL shader gradient components with ssr: false to guarantee clean client hydration
const ShaderGradientCanvas = dynamic(
  () => import('@shadergradient/react').then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
);

const ShaderGradient = dynamic(
  () => import('@shadergradient/react').then((mod) => mod.ShaderGradient),
  { ssr: false }
);

export const HeroAiInfrastructure = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      ref={timelineRef}
      className="relative min-h-screen flex flex-col bg-[#0b051c] text-white w-full overflow-hidden"
    >
      {/* 1. Signature Shader-lit infrastructure field in Micro-Shop BD Purple & Indigo */}
      {mounted && (
        <Suspense fallback={null}>
          <ShaderGradientCanvas
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '120vh',
            }}
            lazyLoad={undefined}
            fov={undefined}
            pixelDensity={1}
            pointerEvents="none"
          >
            <ShaderGradient
              animate="on"
              type="sphere"
              wireframe={false}
              shader="defaults"
              uTime={0}
              uSpeed={0.3}
              uStrength={0.4}
              uDensity={0.8}
              uFrequency={5.5}
              uAmplitude={7}
              positionX={0}
              positionY={0}
              positionZ={0}
              rotationX={0}
              rotationY={0}
              rotationZ={140}
              color1="#9333ea"
              color2="#4f46e5"
              color3="#0a0319"
              reflection={0.5}
              // View (camera) props
              cAzimuthAngle={250}
              cPolarAngle={140}
              cDistance={1.5}
              cameraZoom={12.5}
              // Effect props
              lightType="3d"
              brightness={1.5}
              envPreset="city"
              grain="on"
              // Tool props
              toggleAxis={false}
              zoomOut={false}
              hoverState=""
              enableTransition={false}
            />
          </ShaderGradientCanvas>
        </Suspense>
      )}

      {/* Mobile Drawer Navigation */}
      {/* {isMobile && (
        <div className="relative z-20 flex gap-4 justify-between items-center px-6 pt-5">
          <MotionDrawer
            direction="left"
            width={280}
            backgroundColor={'#0f0728'}
            clsBtnClassName="bg-purple-950/80 border border-purple-800 text-white rounded-md"
            contentClassName="bg-[#0f0728] border-r border-purple-900/60 text-white"
            btnClassName="bg-purple-600 hover:bg-purple-500 text-white relative w-fit p-2 rounded-md shadow-md"
          >
            <nav className="space-y-4">
              <div className="flex items-center gap-3 text-white pb-4 border-b border-purple-900/50">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/40 shrink-0">
                  <Image src="/logo.png" alt="Micro-Shop BD" fill className="object-cover" />
                </div>
                <span className="font-bold tracking-tight text-lg">MICRO-SHOP BD</span>
              </div>
              <a
                href="#products"
                className="block p-2 text-purple-200 hover:bg-purple-900/50 hover:text-white rounded transition text-sm font-medium"
              >
                Products & Subscriptions
              </a>
              <a
                href="#google-ai"
                className="block p-2 text-purple-200 hover:bg-purple-900/50 hover:text-white rounded transition text-sm font-medium"
              >
                Gemini AI Pro (৳350)
              </a>
              <a
                href="#features"
                className="block p-2 text-purple-200 hover:bg-purple-900/50 hover:text-white rounded transition text-sm font-medium"
              >
                Why Choose Us
              </a>
              <a
                href="#how-to-order"
                className="block p-2 text-purple-200 hover:bg-purple-900/50 hover:text-white rounded transition text-sm font-medium"
              >
                How to Order
              </a>
              <a
                href="#faq"
                className="block p-2 text-purple-200 hover:bg-purple-900/50 hover:text-white rounded transition text-sm font-medium"
              >
                FAQ & Support
              </a>
              <div className="pt-4 border-t border-purple-900/50">
                <a
                  href={createGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-extrabold rounded-md shadow-md"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </a>
              </div>
            </nav>
          </MotionDrawer>

          <TimelineAnimation
            as="a"
            href={createGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            timelineRef={timelineRef}
            animationNum={2}
            className="cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
          >
            <MessageCircle size={14} className="fill-white text-emerald-600" />
            <span>WhatsApp Order</span>
          </TimelineAnimation>
        </div>
      )} */}

      {/* Desktop Header */}
      {!isMobile && (
        <header className="relative z-10 flex items-center max-w-7xl mx-auto w-full justify-between px-8 py-6">
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={1}
            className="flex items-center gap-6"
          >
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-purple-500/60 shadow-md group-hover:scale-105 transition-transform shrink-0">
                <Image src="/logo.png" alt="Micro-Shop BD" fill className="object-cover" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                MICRO-SHOP <span className="text-purple-400">BD</span>
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-purple-200/90 font-medium">
              <a href="#products" className="hover:text-white transition">
                Products
              </a>
              <a href="#google-ai" className="hover:text-white transition">
                Gemini AI Pro
              </a>
              <a href="#features" className="hover:text-white transition">
                Features
              </a>
              <a href="#how-to-order" className="hover:text-white transition">
                How To Order
              </a>
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </nav>
          </TimelineAnimation>
          <div className="flex items-center gap-4">
            <TimelineAnimation
              as="a"
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              timelineRef={timelineRef}
              animationNum={2}
              className="cursor-pointer bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all px-5 py-2.5 rounded-full text-xs font-extrabold text-white shadow-md shadow-emerald-500/20 flex items-center gap-2"
            >
              <MessageCircle size={16} className="fill-white text-emerald-600" />
              <span>WhatsApp</span>
            </TimelineAnimation>
          </div>
        </header>
      )}

      {/* Main Content */}
      <div className="relative z-10 grow flex flex-col items-center justify-center text-center px-4 pt-16 md:pt-24 mb-10">
        {/* Top Feature Pill */}
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={3}
          className="border border-purple-500/30 flex items-center gap-2 rounded-full p-1 pr-4 bg-purple-950/60 backdrop-blur-lg mb-4 text-xs sm:text-sm shadow-md shadow-purple-950/40"
        >
          <span className="py-0.5 px-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-xs">
            Mega Deal
          </span>
          <span className="text-purple-200 font-medium">Gemini AI Pro 18 Months for ৳350 • Instant Delivery</span>
        </TimelineAnimation>

        {/* Display Headline */}
        <TimelineAnimation
          timelineRef={timelineRef}
          as="h1"
          animationNum={4}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[115%] max-w-5xl my-4 sm:my-6 text-white"
        >
          Premium AI Subscriptions <br />
          & Tools for{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
            Bangladesh
          </span>
        </TimelineAnimation>

        {/* Supporting Copy */}
        <TimelineAnimation
          timelineRef={timelineRef}
          as="p"
          animationNum={5}
          className="text-purple-200/90 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 font-normal leading-relaxed"
        >
          Instant WhatsApp activation for Gemini AI Pro (18M @ ৳350), ChatGPT Plus Owner Account (৳1,550), CapCut Pro, Claude & ElevenLabs. 100% genuine personal mail delivery with bKash and Nagad payment.
        </TimelineAnimation>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto justify-center">
          <TimelineAnimation
            timelineRef={timelineRef}
            as="a"
            animationNum={6}
            href={createGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto cursor-pointer bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white px-8 py-3.5 rounded-full font-extrabold flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm sm:text-base"
          >
            <MessageCircle size={18} className="fill-white text-emerald-600" />
            <span>Order via WhatsApp ({WHATSAPP_DISPLAY})</span>
            <ArrowRight size={18} />
          </TimelineAnimation>
          <TimelineAnimation
            timelineRef={timelineRef}
            as="a"
            animationNum={7}
            href="#products"
            className="w-full sm:w-auto cursor-pointer relative bg-white/10 hover:bg-white/20 transition px-8 py-3.5 rounded-full font-bold border border-purple-400/40 backdrop-blur-md text-white text-sm sm:text-base flex items-center justify-center hover:border-purple-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore All Products
          </TimelineAnimation>
        </div>

        {/* Signature Translucent Glass Product Highlight Dock */}
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={7}
          className="w-full max-w-4xl mt-12 sm:mt-16 p-4 sm:p-6 rounded-3xl bg-white/[0.05] border border-purple-400/20 backdrop-blur-xl shadow-2xl shadow-purple-950/60"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 hover:border-purple-400/60 transition-colors">
              <div className="flex items-center justify-between text-[11px] text-purple-300 font-semibold mb-1">
                <span>GEMINI PRO</span>
                <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-200 font-bold">18 Months</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">৳350</div>
              <p className="text-[11px] text-purple-200/70 mt-1">Personal Mail • 5TB Cloud</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-400/60 transition-colors">
              <div className="flex items-center justify-between text-[11px] text-emerald-300 font-semibold mb-1">
                <span>CHATGPT PLUS</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-200 font-bold">Owner</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">৳1,550</div>
              <p className="text-[11px] text-emerald-200/70 mt-1">Full Owner Control • GPT-4o</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-pink-950/30 border border-pink-500/30 hover:border-pink-400/60 transition-colors">
              <div className="flex items-center justify-between text-[11px] text-pink-300 font-semibold mb-1">
                <span>CAPCUT PRO</span>
                <span className="px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-200 font-bold">1 Month</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">৳250</div>
              <p className="text-[11px] text-pink-200/70 mt-1">Mobile & PC Video Export</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 hover:border-indigo-400/60 transition-colors">
              <div className="flex items-center justify-between text-[11px] text-indigo-300 font-semibold mb-1">
                <span>ELEVENLABS</span>
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-200 font-bold">Voice AI</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">৳400</div>
              <p className="text-[11px] text-indigo-200/70 mt-1">Ultra-Realistic Voice Cloning</p>
            </div>
          </div>

          <div className="mt-4 pt-3.5 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-3 text-xs text-purple-200/90 px-1">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 size={15} className="text-emerald-400" />
              Instant 5-30 Min Delivery
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck size={15} className="text-purple-400" />
              100% Replacement Warranty
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Zap size={15} className="text-amber-400" />
              bKash • Nagad • Rocket
            </span>
          </div>
        </TimelineAnimation>
      </div>

      {/* Trusted AI Ecosystem / Partners */}
      <div className="relative z-10 py-12 md:py-16 flex flex-col items-center border-t border-purple-900/40">
        <TimelineAnimation
          timelineRef={timelineRef}
          as="p"
          animationNum={8}
          className="text-purple-300/80 md:text-base text-xs sm:text-sm text-center mb-8 px-4 font-medium"
        >
          Direct activation across world-leading{' '}
          <span className="text-white font-bold">Generative AI Labs</span> & Creative Suites
        </TimelineAnimation>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 opacity-85 px-6">
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={9}
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-neutral-200 hover:text-white transition"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span>Google Gemini</span>
          </TimelineAnimation>

          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={10}
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-neutral-200 hover:text-white transition"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span>OpenAI ChatGPT</span>
          </TimelineAnimation>

          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={11}
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-neutral-200 hover:text-white transition"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span>Anthropic Claude</span>
          </TimelineAnimation>

          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={12}
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-neutral-200 hover:text-white transition"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-pink-400"></span>
            <span>CapCut Pro</span>
          </TimelineAnimation>

          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={13}
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-neutral-200 hover:text-white transition"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
            <span>ElevenLabs</span>
          </TimelineAnimation>
        </div>
      </div>

      {/* Smooth transition into light/lavender page content */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#faf5ff] to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default HeroAiInfrastructure;
