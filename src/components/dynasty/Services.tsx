const services = [
  { num: "01", name: "Custom Website Design", desc: "Designed from scratch to match your brand — no cookie-cutter templates." },
  { num: "02", name: "Mobile-Friendly Layouts", desc: "Looks perfect on every phone, tablet, and desktop your clients use." },
  { num: "03", name: "Quote & Contact Forms", desc: "Let customers request a quote or reach you directly from the site — 24/7." },
  { num: "04", name: "Google-Ready SEO Setup", desc: "Built to show up when locals search for your services in your city." },
  { num: "05", name: "Brand Identity", desc: "Logo, colors, and fonts that make your business look established and trustworthy." },
  { num: "06", name: "Portfolio & Gallery Sections", desc: "Show off your work with photo galleries that build instant credibility." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-gold-faint">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">— Services —</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Everything your business needs online
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold-faint">
          {services.map((s) => (
            <div
              key={s.num}
              className="group bg-background hover:bg-surface-1 transition-colors p-8 md:p-10"
            >
              <div className="font-display text-gold text-sm tracking-widest mb-6">{s.num}</div>
              <h3 className="font-display text-xl md:text-2xl mb-3 group-hover:text-gold transition-colors">
                {s.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
