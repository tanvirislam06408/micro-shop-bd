import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { createGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 rounded-3xl p-8 sm:p-14 text-white text-center shadow-2xl shadow-purple-900/30 relative overflow-hidden">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-700/80 border border-purple-500/50 text-amber-300 text-xs font-bold shadow-md">
              <Sparkles className="w-4 h-4 fill-amber-300" />
              <span>Upgrade Your Workflow</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Upgrade Your AI Experience?
            </h2>

            <p className="text-base sm:text-lg text-purple-200 leading-relaxed max-w-2xl mx-auto">
              Choose your favorite AI subscription, digital tool, or premium plan and get instant WhatsApp delivery today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-purple-900 font-extrabold text-base hover:bg-purple-50 shadow-lg hover:scale-105 transition-all duration-200"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
