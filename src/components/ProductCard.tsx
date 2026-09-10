"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { createWhatsAppLink } from "@/lib/whatsapp";
import ProductBrandLogo from "@/components/ProductBrandLogo";
import OrderModal from "@/components/OrderModal";
import {
  Check,
  ShoppingBag,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Plan selection state if product has multiple plans
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(0);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);

  const selectedPlan = product.plans
    ? product.plans[selectedPlanIndex]
    : undefined;

  const currentPrice = selectedPlan ? selectedPlan.price : product.price;
  const currentOldPrice = selectedPlan
    ? selectedPlan.oldPrice
    : product.oldPrice;

  const whatsappUrl = createWhatsAppLink(product, selectedPlan);

  return (
    <div className="bg-white rounded-3xl border border-purple-100 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between relative group">
      {/* Top badges & Brand Logo */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 p-2 shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-purple-300 group-hover:shadow-md transition-all duration-200">
          <ProductBrandLogo
            productId={product.id}
            productName={product.name}
            logoUrl={product.logoUrl}
            imageUrl={product.imageUrl}
            className="w-10 h-10"
          />
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
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-purple-500/20 hover:shadow-purple-500/30 flex items-center justify-center gap-2 group-hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
          >
            <span>Buy Now via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Secondary Make Order button */}
          <button
            type="button"
            onClick={() => setIsOrderModalOpen(true)}
            className="w-full py-2.5 px-4 rounded-2xl bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs border border-purple-200/90 shadow-xs flex items-center justify-center gap-2 hover:border-purple-300 transition-all duration-200 active:scale-[0.98]"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-purple-700" />
            <span>Make Order</span>
          </button>
        </div>
      </div>

      {/* Order Modal with autofilled product, bKash & Nagad payments and customer details */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        product={product}
        initialPlanIndex={selectedPlanIndex}
      />
    </div>
  );
}
