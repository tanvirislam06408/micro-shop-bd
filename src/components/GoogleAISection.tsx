import {
  Sparkles,
  Cpu,
  HardDrive,
  Image as ImageIcon,
  Video,
  UserCheck,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { createWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { products } from "@/data/products";

export default function GoogleAISection() {
  const geminiProduct =
    products.find((p) => p.id === "gemini-ai-pro") || products[0];

  const features = [
    {
      name: "Gemini Pro",
      tagline: "Advanced AI Model",
      description:
        "🤖 Coding, Research & দৈনন্দিন কাজের জন্য সবচেয়ে শক্তিশালী Google AI Assistant।",
      icon: Sparkles,
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Antigravity",
      tagline: "AI Development Platform",
      description:
        "💻 AI-powered coding & development platform speed analysis and project creation.",
      icon: Cpu,
      color: "from-indigo-600 to-blue-600",
    },
    {
      name: "Nano Banana Pro",
      tagline: "Advanced Image AI",
      description:
        "🎨 Advanced AI image generation & high-resolution photo editing in seconds.",
      icon: ImageIcon,
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Veo 3.1",
      tagline: "High-Quality Video AI",
      description:
        "🎬 AI দিয়ে cinematic high-quality video তৈরি ও animation rendering।",
      icon: Video,
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "5 TB Cloud Storage",
      tagline: "5,000 GB Space",
      description:
        "☁️ ছবি, ভিডিও ও ফাইলের জন্য বিশাল cloud storage আপনার Google Drive-এ।",
      icon: HardDrive,
      color: "from-blue-500 to-teal-600",
    },
    {
      name: "Personal Account",
      tagline: "100% Personal Mail",
      description:
        "👤 নিজের personal Gmail account-এ সরাসরি ব্যবহার করতে পারবেন safely।",
      icon: UserCheck,
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "18 Months Validity",
      tagline: "Full Warranty",
      description:
        "⏳ ১৮ মাসের দীর্ঘ মেয়াদী subscription guarantee hassle-free usage-এর জন্য।",
      icon: Clock,
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <section
      id="google-ai"
      className="py-16 md:py-24 bg-gradient-to-b from-white via-purple-100/50 to-white relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600 text-white text-xs font-extrabold shadow-md shadow-purple-500/20">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>🔥 Hot Special Offer — Only ৳350</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Gemini AI Pro — 18 Months Package
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Google-এর শক্তিশালী AI ecosystem পাবেন নিজের Personal Account-এ ১৮ মাসের জন্য মাত্র ৳৩৫০ টাকায়।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-700 pt-2">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-purple-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
              18 Months Full Validity
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-purple-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Personal Gmail Account Activation
            </span>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-purple-100/90 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                      {feature.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-2">
                    {feature.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl shadow-purple-900/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
              Limited Stock Deal
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Get Gemini AI Pro 18 Months for ৳350
            </h3>
            <p className="text-purple-200 text-sm max-w-xl">
              Instant activation directly on your WhatsApp ({WHATSAPP_DISPLAY}) with full warranty support.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={createWhatsAppLink(geminiProduct)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-purple-900 font-extrabold text-base hover:bg-purple-50 shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <span>Buy Now via WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
