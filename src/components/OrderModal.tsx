"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/types/product";
import ProductBrandLogo from "@/components/ProductBrandLogo";
import { BkashLogo, NagadLogo } from "@/components/PaymentLogos";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import {
  X,
  CheckCircle2,
  Copy,
  Check,
  Smartphone,
  Mail,
  ShieldCheck,
  Send,
  Sparkles,
  Receipt,
  ArrowRight,
} from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  initialPlanIndex?: number;
}

const PAYMENT_DETAILS = {
  bkash: {
    name: "bKash",
    number: "01960515811",
    type: "Personal (Send Money)",
    color: "#E2136E",
    bgLight: "bg-pink-50/70",
    borderLight: "border-pink-200",
    borderActive: "border-[#E2136E]",
    ringActive: "ring-[#E2136E]/20",
  },
  nagad: {
    name: "Nagad",
    number: "01922458412",
    type: "Personal (Send Money)",
    color: "#F7941D",
    bgLight: "bg-amber-50/70",
    borderLight: "border-amber-200",
    borderActive: "border-[#ED1C24]",
    ringActive: "ring-[#ED1C24]/20",
  },
};

export default function OrderModal({
  isOpen,
  onClose,
  product,
  initialPlanIndex = 0,
}: OrderModalProps) {
  // Plan selection inside modal
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(initialPlanIndex);

  // Sync plan index if opened with a specific plan
  useEffect(() => {
    setSelectedPlanIndex(initialPlanIndex);
  }, [initialPlanIndex, isOpen]);

  // Payment method selection ('bkash' or 'nagad')
  const [paymentMethod, setPaymentMethod] = useState<"bkash" | "nagad">("bkash");

  // Customer form state
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerWhatsApp, setCustomerWhatsApp] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [customerNote, setCustomerNote] = useState("");

  // UI state
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; whatsapp?: string }>({});

  const currentPlan = product.plans ? product.plans[selectedPlanIndex] : undefined;
  const currentPrice = currentPlan ? currentPlan.price : product.price;
  const currentDuration = currentPlan ? currentPlan.name : product.duration;

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPayment = PAYMENT_DETAILS[paymentMethod];

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(currentPayment.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    const newErrors: { email?: string; whatsapp?: string } = {};

    if (!customerEmail.trim()) {
      newErrors.email = "Please enter your Gmail / Email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@gmail.com)";
    }

    if (!customerWhatsApp.trim()) {
      newErrors.whatsapp = "Please enter your WhatsApp phone number";
    } else if (customerWhatsApp.trim().replace(/\D/g, "").length < 10) {
      newErrors.whatsapp = "Please enter a valid phone number (e.g. 017XXXXXXXX)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMessage = () => {
    return `🛍️ *NEW ORDER CONFIRMATION - Micro-Shop BD*

📦 *Product:* ${product.name}
⏳ *Plan/Duration:* ${currentDuration}
💰 *Price:* ${currentPrice}

━━━━━━━━━━━━━━━━━━━
💳 *PAYMENT DETAILS*
• *Method:* ${currentPayment.name}
• *Merchant Number:* ${currentPayment.number}
• *TrxID / Sender No:* ${transactionId.trim() || "Not provided / Cash on confirmation"}

━━━━━━━━━━━━━━━━━━━
👤 *CUSTOMER DETAILS*
• *Gmail / Email:* ${customerEmail.trim()}
• *WhatsApp:* ${customerWhatsApp.trim()}
${customerNote.trim() ? `• *Customer Note:* ${customerNote.trim()}` : ""}

Please confirm my order and deliver the login / activation credentials. Thank you!`;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const message = constructWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleResetModal = () => {
    setIsSubmitted(false);
    setCustomerEmail("");
    setCustomerWhatsApp("");
    setTransactionId("");
    setCustomerNote("");
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleResetModal}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden z-10 my-auto animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white px-5 sm:px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-purple-200">
              <Receipt className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                {isSubmitted ? "Order Submitted" : "Make an Order"}
              </h3>
              <p className="text-xs text-purple-200">
                Instant delivery via WhatsApp & Email
              </p>
            </div>
          </div>

          <button
            onClick={handleResetModal}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            /* Order Success View */
            <div className="text-center py-4 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-extrabold text-slate-900">
                  Order Successfully Placed!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your order for <strong className="text-purple-700">{product.name} ({currentDuration})</strong> has been logged. We sent your order directly to our WhatsApp support team.
                </p>
              </div>

              {/* Order Receipt Card */}
              <div className="bg-purple-50/70 rounded-2xl p-4 border border-purple-100 text-left space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-purple-100">
                  <span className="text-slate-500">Product:</span>
                  <span className="font-bold text-slate-900">{product.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-purple-100">
                  <span className="text-slate-500">Plan:</span>
                  <span className="font-semibold text-purple-700">{currentDuration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-purple-100">
                  <span className="text-slate-500">Total Price:</span>
                  <span className="font-extrabold text-slate-900">{currentPrice}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-purple-100">
                  <span className="text-slate-500">Payment:</span>
                  <span className="font-semibold text-slate-900">{currentPayment.name} ({currentPayment.number})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-purple-100">
                  <span className="text-slate-500">Email:</span>
                  <span className="font-medium text-slate-800">{customerEmail}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">WhatsApp:</span>
                  <span className="font-medium text-slate-800">{customerWhatsApp}</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-left text-xs text-amber-900 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Delivery usually takes <strong>5 to 15 minutes</strong>. If your WhatsApp did not open automatically, please tap the button below.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(constructWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Open WhatsApp Order</span>
                </a>
                <button
                  onClick={handleResetModal}
                  className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Order Form View */
            <form onSubmit={handleSubmitOrder} className="space-y-5">
              
              {/* Product Autofill Summary Box */}
              <div className="bg-gradient-to-br from-purple-50/90 to-indigo-50/60 p-3.5 sm:p-4 rounded-2xl border border-purple-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-white border border-purple-100 p-1.5 shadow-xs flex items-center justify-center shrink-0">
                    <ProductBrandLogo
                      productId={product.id}
                      productName={product.name}
                      logoUrl={product.logoUrl}
                      imageUrl={product.imageUrl}
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base truncate">
                        {product.name}
                      </h4>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                        Instant Delivery
                      </span>
                    </div>
                    <p className="text-xs text-purple-700 font-semibold">
                      Selected Plan: {currentDuration}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900">
                    {currentPrice}
                  </div>
                  {product.plans && product.plans.length > 1 && (
                    <span className="text-[10px] text-slate-500 font-medium">
                      {product.plans.length} plans available
                    </span>
                  )}
                </div>
              </div>

              {/* Plan Switcher inside modal if product has multiple plans */}
              {product.plans && product.plans.length > 1 && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Choose Subscription Plan:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {product.plans.map((plan, idx) => (
                      <button
                        key={plan.name}
                        type="button"
                        onClick={() => setSelectedPlanIndex(idx)}
                        className={`p-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                          selectedPlanIndex === idx
                            ? "bg-purple-600 text-white border-purple-600 shadow-sm shadow-purple-600/20"
                            : "bg-white text-slate-700 border-slate-200 hover:border-purple-300"
                        }`}
                      >
                        <div className="truncate">{plan.name}</div>
                        <div className="text-[11px] opacity-90">{plan.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Payment Method Selector */}
              <div className="space-y-2 pt-1">
                <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
                  <span>Select Payment Method:</span>
                  <span className="text-[11px] font-normal text-slate-500">
                    bKash / Nagad Send Money
                  </span>
                </label>

                <div className="grid grid-cols-2 gap-3">
                  {/* bKash Option */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bkash")}
                    className={`p-3 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between ${
                      paymentMethod === "bkash"
                        ? "border-[#E2136E] bg-pink-50/50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-pink-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <BkashLogo className="h-6" />
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          paymentMethod === "bkash"
                            ? "border-[#E2136E] bg-[#E2136E] text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {paymentMethod === "bkash" && (
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-600 font-medium">
                      bKash Personal
                    </span>
                  </button>

                  {/* Nagad Option */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("nagad")}
                    className={`p-3 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between ${
                      paymentMethod === "nagad"
                        ? "border-[#ED1C24] bg-amber-50/50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-amber-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <NagadLogo className="h-6" />
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          paymentMethod === "nagad"
                            ? "border-[#ED1C24] bg-[#ED1C24] text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {paymentMethod === "nagad" && (
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-600 font-medium">
                      Nagad Personal
                    </span>
                  </button>
                </div>

                {/* Selected Payment Number Box with One-Click Copy */}
                <div
                  className={`p-3.5 rounded-2xl border ${currentPayment.bgLight} ${currentPayment.borderLight} transition-all mt-2.5`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900">
                          {currentPayment.name} Number:
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200">
                          {currentPayment.type}
                        </span>
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold tracking-wider text-slate-900">
                        {currentPayment.number}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyNumber}
                      className="px-3 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-200 shadow-xs flex items-center gap-1.5 transition-all shrink-0 active:scale-95"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-purple-600" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    💡 Please send <strong>{currentPrice}</strong> to this number via {currentPayment.name} (Send Money). Then enter your Gmail & WhatsApp number below.
                  </p>
                </div>
              </div>

              {/* Customer Contact & Verification Fields */}
              <div className="space-y-3.5 pt-1">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-purple-600" />
                    <span>Your Gmail / Email Address <span className="text-rose-500">*</span></span>
                  </label>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => {
                      setCustomerEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="e.g. yourname@gmail.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-rose-400 bg-rose-50/30 focus:ring-rose-200"
                        : "border-slate-200 bg-white focus:border-purple-500 focus:ring-purple-200"
                    }`}
                  />
                  {errors.email ? (
                    <p className="text-xs text-rose-600 font-medium">{errors.email}</p>
                  ) : (
                    <p className="text-[11px] text-slate-500">
                      Login credentials or invitation will be sent to this email.
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your WhatsApp Number <span className="text-rose-500">*</span></span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerWhatsApp}
                    onChange={(e) => {
                      setCustomerWhatsApp(e.target.value);
                      if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: undefined }));
                    }}
                    placeholder="e.g. 017XXXXXXXX"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.whatsapp
                        ? "border-rose-400 bg-rose-50/30 focus:ring-rose-200"
                        : "border-slate-200 bg-white focus:border-purple-500 focus:ring-purple-200"
                    }`}
                  />
                  {errors.whatsapp ? (
                    <p className="text-xs text-rose-600 font-medium">{errors.whatsapp}</p>
                  ) : (
                    <p className="text-[11px] text-slate-500">
                      We will contact you via WhatsApp for instant activation.
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                      <span>bKash / Nagad TrxID or Sender Number (Optional)</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="e.g. 9H82KA92 or your sending mobile number"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-purple-500 focus:ring-purple-200 transition-all"
                  />
                  <p className="text-[11px] text-slate-500">
                    If you already paid, paste the TrxID here to speed up verification.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 hover:shadow-purple-600/35 active:scale-[0.99] transition-all duration-200 disabled:opacity-70"
                >
                  <span>Confirm Order & Submit via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Genuine Subscriptions • 5-15 Min Delivery</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
