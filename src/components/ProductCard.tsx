"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { createWhatsAppLink, createGeneralWhatsAppLink } from "@/lib/whatsapp";
import {
  Sparkles,
  MessageSquare,
  BrainCircuit,
  Palette,
  Search,
  Image as ImageIcon,
  Code,
  Video,
  PenTool,
  Terminal,
  Check,
  MessageCircle,
  ArrowUpRight,
  Clock,
} from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Plan selection state if product has multiple plans
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(0);

  const selectedPlan = product.plans
    ? product.plans[selectedPlanIndex]
    : undefined;

  const currentPrice = selectedPlan ? selectedPlan.price : product.price;
  const currentOldPrice = selectedPlan
    ? selectedPlan.oldPrice
    : product.oldPrice;

  // Icon mapping
  const getProductIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-white" };
    switch (iconName) {
      case "Sparkles":
        return <Sparkles {...props} />;
      case "MessageSquare":
        return <MessageSquare {...props} />;
      case "BrainCircuit":
        return <BrainCircuit {...props} />;
      case "Palette":
        return <Palette {...props} />;
      case "Search":
        return <Search {...props} />;
      case "Image":
        return <ImageIcon {...props} />;
      case "Code":
        return <Code {...props} />;
      case "Video":
        return <Video {...props} />;
      case "PenTool":
        return <PenTool {...props} />;
      case "Terminal":
        return <Terminal {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const whatsappUrl = createWhatsAppLink(product, selectedPlan);

  return (
    <div className="bg-white rounded-3xl border border-purple-100 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between relative group">
      {/* Top badges */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${
            product.color || "from-purple-600 to-indigo-600"
          } flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-200`}
        >
          {getProductIcon(product.iconName)}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800 border border-purple-200/80">
              {product.badge}
            </span>
          )}
          {product.popular && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
              Popular
            </span>
          )}
        </div>
      </div>

      {/* Main product info */}
      <div className="space-y-2 mb-4">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs font-semibold text-purple-600 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {product.duration}
        </p>
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Plan selection selector if multiple plans exist */}
      {product.plans && product.plans.length > 1 && (
        <div className="mb-4 p-1.5 rounded-2xl bg-purple-50/70 border border-purple-100">
          <p className="text-[11px] font-semibold text-slate-600 mb-1 px-2">
            Select Plan:
          </p>
          <div className="grid grid-cols-2 gap-1">
            {product.plans.map((plan, idx) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlanIndex(idx)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-medium text-center transition-all ${
                  selectedPlanIndex === idx
                    ? "bg-white text-purple-900 font-bold shadow-xs border border-purple-200"
                    : "text-slate-600 hover:text-purple-700 hover:bg-white/50"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Feature list */}
      <div className="space-y-2 mb-6 border-t border-purple-100/70 pt-4">
        {product.features.slice(0, 4).map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2 text-xs text-slate-700"
          >
            <div className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Pricing & CTAs */}
      <div className="space-y-3 pt-2 border-t border-purple-100">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-extrabold text-slate-900">
              {currentPrice}
            </span>
            {currentOldPrice && (
              <span className="ml-2 text-xs text-slate-400 line-through">
                {currentOldPrice}
              </span>
            )}
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
            Instant Delivery
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {/* Primary Buy Now Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-purple-500/20 hover:shadow-purple-500/30 flex items-center justify-center gap-2 group-hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
          >
            <span>Buy Now via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Secondary Chat on WhatsApp option */}
          <a
            href={createGeneralWhatsAppLink(
              `Hi Micro-Shop BD, I have a question about ${product.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-2xl bg-purple-50 hover:bg-purple-100/80 text-purple-800 font-semibold text-xs border border-purple-200/80 flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/10" />
            <span>Ask Question on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
