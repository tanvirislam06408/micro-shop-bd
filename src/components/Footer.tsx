import Image from "next/image";
import { MessageCircle, Facebook, ShieldCheck } from "lucide-react";
import { createGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-purple-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500 shadow-md">
                <Image
                  src="/logo.png"
                  alt="MICRO-SHOP BD Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-white">
                    MICRO-SHOP
                  </span>
                  <span className="text-xs font-black px-1.5 py-0.5 rounded bg-purple-600 text-white tracking-widest uppercase">
                    BD
                  </span>
                </div>
                <p className="text-[11px] text-purple-400 font-semibold tracking-wide">
                  Smarter Tools. Better You.
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Smart AI subscriptions. Simple pricing. Bangladesh's premier
              marketplace for Gemini AI Pro, ChatGPT Plus, CapCut Pro, APIs, and
              digital creative suites.
            </p>

            <div className="flex items-center gap-2 text-xs text-purple-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Guaranteed Activation & Instant WhatsApp Support</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-purple-400 transition-colors">
                  Products & Subscriptions
                </a>
              </li>
              <li>
                <a href="#google-ai" className="hover:text-purple-400 transition-colors">
                  Gemini AI Pro 18M
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-purple-400 transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-purple-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              WhatsApp Support
            </h4>
            <p className="text-xs text-slate-400">
              Direct Order & Support Hotline:
              <br />
              <strong className="text-emerald-400 text-sm">01922458412</strong>
            </p>

            <div className="flex items-center gap-3">
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 fill-white text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 text-center md:flex md:items-center md:justify-between text-xs text-slate-500">
          <p>© 2026 Micro-Shop BD. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-slate-400 font-medium">
            Hotline: 01922458412 • Smarter Tools. Better You.
          </p>
        </div>
      </div>
    </footer>
  );
}
