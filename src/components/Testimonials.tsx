import { testimonials } from "@/data/testimonials";
import { Star, Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Customer Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our Customers Say
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Real feedback from Bangladesh creators, developers, and professionals who upgraded their AI tools with Micro-Shop BD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-purple-50/40 rounded-3xl p-6 border border-purple-100/90 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-200/60 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 mt-4 border-t border-purple-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                  {review.avatarInitials}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">
                    {review.name}
                  </div>
                  <div className="text-[11px] text-purple-600 font-medium">
                    {review.role} • {review.location}
                  </div>
                  <span className="inline-block mt-0.5 text-[10px] font-semibold px-2 py-0.2 rounded bg-purple-100 text-purple-800">
                    Bought: {review.productBought}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
