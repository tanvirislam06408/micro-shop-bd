import {
  Tag,
  Zap,
  ShieldCheck,
  Headphones,
  Boxes,
  Smartphone,
  Sparkles,
} from "lucide-react";

export default function Features() {
  const featureList = [
    {
      title: "Affordable Pricing",
      description:
        "Get top-tier AI tools & subscriptions at up to 70% lower prices compared to direct USD dollar subscriptions.",
      icon: Tag,
      color: "text-purple-600 bg-purple-100",
    },
    {
      title: "Fast Activation",
      description:
        "Instant delivery within 5 to 30 minutes after order confirmation on WhatsApp. Zero waiting time.",
      icon: Zap,
      color: "text-amber-600 bg-amber-100",
    },
    {
      title: "Trusted Service",
      description:
        "100% genuine personal and team access with full warranty backup and replacement guarantees.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-100",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Dedicated friendly support team ready to assist you on WhatsApp whenever you need help.",
      icon: Headphones,
      color: "text-indigo-600 bg-indigo-100",
    },
    {
      title: "Multiple AI Products",
      description:
        "Everything in one shop: Google AI Pro, ChatGPT Plus, Claude Pro, Canva, Perplexity, Cursor Pro & more.",
      icon: Boxes,
      color: "text-pink-600 bg-pink-100",
    },
    {
      title: "Easy Ordering",
      description:
        "No credit cards required. Order in 3 clicks with local payment options like bKash, Nagad, or Rocket.",
      icon: Smartphone,
      color: "text-teal-600 bg-teal-100",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Micro-Shop BD is Your Best Choice
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            We provide a hassle-free, secure, and affordable way for everyone in
            Bangladesh to access world-class artificial intelligence tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-purple-50/40 border border-purple-100/80 hover:bg-white hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
