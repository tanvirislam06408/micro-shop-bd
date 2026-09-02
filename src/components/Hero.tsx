import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-b from-purple-100/60 via-purple-50/40 to-white overflow-hidden"
    >
      {/* Decorative background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-lavender-300/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#7e22ce 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>

      <HeroSlider />
    </section>
  );
}
