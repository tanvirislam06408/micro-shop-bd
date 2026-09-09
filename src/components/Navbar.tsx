"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu, X, ShieldCheck } from "lucide-react";
import { createGeneralWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Products", href: "#products" },
    { name: "Gemini AI Pro", href: "#google-ai" },
    { name: "Why Us", href: "#features" },
    { name: "How to Order", href: "#how-to-order" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-2xl shadow-black/60 py-3 border-b border-neutral-800 opacity-100 translate-y-0 text-white"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl p-1"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-neutral-700 shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Image
                src="/logo.png"
                alt="MICRO-SHOP BD Logo"
                fill
                sizes="(max-width: 640px) 40px, 44px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-sans">
                  MICRO-SHOP
                </span>
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-blue-600 text-white tracking-widest uppercase">
                  BD
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 font-medium tracking-wide flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                Verified AI Store
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/90 p-1.5 rounded-full border border-neutral-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white text-xs font-extrabold shadow-md shadow-emerald-500/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-emerald-500 text-white shadow-xs hover:bg-emerald-600 transition-colors"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-300 hover:bg-neutral-800 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-neutral-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-slide-down">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-200 hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-neutral-500 text-xs">→</span>
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-neutral-800">
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Chat on WhatsApp ({WHATSAPP_DISPLAY})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
