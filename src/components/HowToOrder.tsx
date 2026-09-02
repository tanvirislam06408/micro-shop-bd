import { MousePointerClick, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";

export default function HowToOrder() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Product",
      description:
        "Browse our AI subscription marketplace and pick the AI tool or plan that fits your needs.",
      icon: MousePointerClick,
    },
    {
      number: "02",
      title: "Contact Us on WhatsApp",
      description:
        "Click 'Buy Now' to automatically open a pre-filled order message directly on WhatsApp.",
      icon: MessageCircle,
    },
    {
      number: "03",
      title: "Get Your Product Activated",
      description:
        "Complete payment via bKash/Nagad and get instant activation credentials & setup guide.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="how-to-order" className="py-16 md:py-24 bg-purple-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Simple Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How to Place Your Order
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Get your favorite AI subscription activated in just 3 quick and easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 -translate-y-8 z-0"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-purple-100 shadow-md shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 relative z-10 text-center flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-200 relative">
                  <Icon className="w-8 h-8" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-amber-400 text-slate-900 font-extrabold text-xs flex items-center justify-center shadow-xs border-2 border-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
