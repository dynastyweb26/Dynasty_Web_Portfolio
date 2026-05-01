const services = [
  { num: "01", name: "Show Up on Google", desc: "We build your site so locals find you first when they search for your service — before your competitors." },
  { num: "02", name: "Look Legit on Every Device", desc: "Your site works perfectly on any phone, tablet, or desktop — so you never lose a lead because of a broken layout." },
  { num: "03", name: "Get Quote Requests While You Sleep", desc: "Built-in contact and quote forms capture leads 24/7 — no missed calls, no phone tag." },
  { num: "04", name: "Rank in Your City", desc: "Google-ready SEO setup from day one so your business shows up where your customers are searching." },
  { num: "05", name: "A Brand That Builds Trust Instantly", desc: "Logo, colors, and fonts tailored to your trade — so customers trust you before they ever call." },
  { num: "06", name: "Show Off Your Work", desc: "Photo galleries and project showcases that prove your quality before the first conversation." },
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
