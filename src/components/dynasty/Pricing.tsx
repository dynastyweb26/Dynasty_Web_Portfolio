import { Home, Rocket, ShieldCheck } from "lucide-react";

const tiers = [
  {
    label: "Starter Site",
    price: "$600",
    subtitle: "Get found. Look credible. Start capturing leads.",
    badge: "Best for new businesses",
    icon: Home,
    bullets: [
      "Single page custom design tailored to your brand",
      "Mobile responsive — perfect on every device",
      "Hero section with strong headline and CTA",
      "Services section clearly displaying what you offer",
      "Contact form with direct lead delivery to your phone",
      "Basic on-page SEO — titles, meta descriptions, keywords",
      "Google Maps embed",
      "Vercel deployment with fast loading URL",
      "1 round of revisions",
      "48-72 hour delivery",
    ],
    cta: "Get Started — $600",
    popular: false,
  },
  {
    label: "Growth Site",
    price: "$1000",
    subtitle: "Dominate locally. Convert visitors into booked jobs.",
    badge: "Most Popular",
    icon: Rocket,
    bullets: [
      "Everything in Starter",
      "Up to 5 pages — Home, About, Services, Gallery, Contact",
      "Interactive estimate funnel — visitors get an instant price range",
      "Photo gallery showcasing real completed work",
      "Scrolling testimonial section",
      "Trust badges and stat counters",
      "Google Business Profile integration",
      "Social media links and icons",
      "3 rounds of revisions",
      "Priority 48-hour turnaround",
      "30 days post-launch support",
    ],
    cta: "Get Started — $1000",
    popular: true,
  },
  {
    label: "Monthly Retainer",
    price: "$99/month",
    subtitle: "We keep it running. You keep working.",
    badge: "Add to any package",
    icon: ShieldCheck,
    bullets: [
      "Site stays live and fast on Vercel",
      "Content updates — photos, services, pricing changes",
      "Monthly performance check",
      "Priority response if anything breaks",
      "Dedicated support — we're your guy, always",
    ],
    cta: "Add Retainer — $50/mo",
    popular: false,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {tiers.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.label}
                className={`relative bg-surface-1 p-8 md:p-10 border flex flex-col ${
                  t.popular
                    ? "border-gold shadow-[0_15px_40px_-10px_hsl(var(--gold)/0.3)]"
                    : "border-gold-faint"
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground text-[10px] tracking-[0.25em] uppercase px-4 py-1 rounded-full font-medium">
                    Most Popular
                  </div>
                )}

                <Icon className="text-gold mb-6" size={36} strokeWidth={1.5} />

                <h3 className="font-display text-2xl md:text-3xl mb-2">{t.label}</h3>
                <div className="font-display text-gold text-2xl md:text-3xl mb-3">{t.price}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.subtitle}</p>

                <p className="text-[10px] tracking-[0.25em] uppercase text-gold/80 mb-6">
                  {t.badge}
                </p>

                <ul className="space-y-0 mb-10 flex-1">
                  {t.bullets.map((b, i) => (
                    <li
                      key={b}
                      className={`flex items-start gap-3 text-sm text-foreground/90 py-3 ${
                        i !== 0 ? "border-t border-gold-faint" : ""
                      }`}
                    >
                      <span className="text-gold mt-1 flex-shrink-0">✦</span>
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
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-xs md:text-sm text-muted-foreground">
          All sites include free discovery call and custom strategy before we build anything.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
