import { stats } from "@/data/stats";
import { Users, Sparkles, Headphones, Zap } from "lucide-react";

export default function Stats() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Users":
        return <Users className="w-5 h-5 text-purple-600" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case "Headphones":
        return <Headphones className="w-5 h-5 text-purple-600" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-purple-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section className="py-6 bg-white border-y border-purple-100 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl bg-purple-50/50 border border-purple-100/80 hover:bg-white hover:border-purple-300 hover:shadow-md hover:shadow-purple-500/5 transition-all duration-200 flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white text-purple-600 border border-purple-200/70 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-200">
                {getIcon(stat.iconName)}
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
