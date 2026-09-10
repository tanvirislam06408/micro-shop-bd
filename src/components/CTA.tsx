"use client";

import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { createGeneralWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 rounded-3xl p-8 sm:p-14 text-white text-center shadow-2xl shadow-purple-900/30 relative overflow-hidden"
        >
          {/* Background Ambient Glows */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-700/80 border border-purple-500/50 text-amber-300 text-xs font-bold shadow-md"
            >
              <Sparkles className="w-4 h-4 fill-amber-300" />
              <span>Upgrade Your Workflow</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Ready to Upgrade Your AI Experience?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-purple-200 leading-relaxed max-w-2xl mx-auto"
            >
              Choose your favorite AI subscription, digital tool, or premium plan and get instant WhatsApp delivery today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-purple-900 font-extrabold text-base hover:bg-purple-50 shadow-lg transition-colors"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base shadow-lg shadow-emerald-500/25 transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
