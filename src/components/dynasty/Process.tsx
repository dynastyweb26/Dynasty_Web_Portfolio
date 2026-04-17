import { MessageCircle, LayoutGrid, Code2, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Discovery & strategy call",
    desc: "We learn your business, goals, and customers — then map the site around them.",
  },
  {
    num: "02",
    icon: LayoutGrid,
    title: "Design sprint (24–48 hours)",
    desc: "You get a custom design concept fast, tailored to your brand and industry.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Build, integrate & optimize",
    desc: "Hand-coded pages, forms, and SEO setup — built for speed and conversions.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "QA, launch & handoff",
    desc: "We test everything, launch your site, and hand over the keys with full support.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 border-t border-gold-faint bg-[#0A0A0A] overflow-hidden"
    >
      {/* Subtle gold gradient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, hsl(var(--gold) / 0.08), transparent 60%), radial-gradient(ellipse at 80% 100%, hsl(var(--gold) / 0.06), transparent 60%)",
        }}
      />
      {/* Subtle diagonal lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, hsl(var(--gold)) 0 1px, transparent 1px 24px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">— Our Process —</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-white">
            How our team builds your site
          </h2>
        </div>

        <div className="relative">
          {/* Connecting dotted gold line (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 top-12 h-px"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--gold) / 0.5) 50%, transparent 50%)",
              backgroundSize: "12px 1px",
              backgroundRepeat: "repeat-x",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="relative bg-white rounded-2xl border-t-2 border-gold p-7 md:p-8 shadow-[0_10px_40px_-20px_hsl(var(--gold)/0.35)] hover:-translate-y-1 transition-transform duration-300"
                >
                  {/* Icon badge — sits on the connecting line */}
                  <div className="relative -mt-12 mb-6 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-[#0A0A0A] border border-gold flex items-center justify-center">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
                    </div>
                  </div>

                  <div className="font-display text-gold text-xs tracking-[0.3em] mb-3 text-center">
                    {s.num}
                  </div>
                  <h3 className="font-display text-lg md:text-xl text-neutral-900 mb-3 text-center">
                    {s.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed text-center">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
