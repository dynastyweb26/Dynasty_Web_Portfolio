const tiers = [
  {
    label: "Starter Site",
    price: "Starting at $400",
    desc: "Perfect for new businesses ready to look professional and start capturing leads online.",
    bullets: [
      "Custom design tailored to your brand",
      "Mobile-optimized layout",
      "Quote & contact form",
      "Basic SEO setup",
      "5+ pages",
    ],
    popular: false,
  },
  {
    label: "Growth Site",
    price: "Starting at $800",
    desc: "For businesses ready to dominate locally — more pages, more trust signals, more conversions.",
    bullets: [
      "Everything in Starter",
      "Up to 5 pages",
      "Photo gallery or portfolio section",
      "Google Business integration",
      "3 rounds of revisions",
      "Priority 48-hour turnaround",
    ],
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 border-t border-gold-faint">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">— Investment —</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            No hourly rates. No surprise fees. One flat investment for a site that works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.label}
              className={`relative bg-surface-1 p-8 md:p-10 border transition-colors ${
                t.popular ? "border-gold shadow-[0_15px_40px_-10px_hsl(var(--gold)/0.3)]" : "border-gold-faint"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground text-[10px] tracking-[0.25em] uppercase px-4 py-1 rounded-full font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl md:text-3xl mb-3">{t.label}</h3>
              <div className="font-display text-gold text-xl md:text-2xl mb-1">{t.price}</div>
              <p className="text-xs text-muted-foreground/80 italic mb-5">
                or finance from <span className="text-gold not-italic">$200/month</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{t.desc}</p>

              <ul className="space-y-3 mb-10">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="text-gold mt-1 flex-shrink-0"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-block w-full text-center px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-colors ${
                  t.popular
                    ? "bg-gold text-primary-foreground hover:bg-gold-light"
                    : "border border-gold text-gold hover:bg-gold hover:text-primary-foreground"
                }`}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Not sure which fits?{" "}
          <a href="#contact" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">
            Let's talk
          </a>{" "}
          — consultations are free.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
