const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
      {/* radial gold glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, hsl(var(--gold) / 0.18), transparent 70%)",
        }}
      />
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          className="inline-block opacity-0 animate-fade-up text-[11px] md:text-xs tracking-[0.25em] uppercase text-gold border border-gold/30 rounded-full px-4 py-1.5 bg-gold-faint"
          style={{ animationDelay: "0.05s" }}
        >
          Web Design &amp; Branding Studio
        </div>

        <h1
          className="opacity-0 animate-fade-up font-display font-black leading-[1.05] mt-8 text-5xl md:text-7xl lg:text-8xl tracking-tight"
          style={{ animationDelay: "0.2s" }}
        >
          We Build Sites
          <br />
          That <em className="italic text-gold font-bold">Win</em> Clients
        </h1>

        <p
          className="opacity-0 animate-fade-up max-w-2xl mx-auto mt-8 text-base md:text-lg text-muted-foreground leading-relaxed"
          style={{ animationDelay: "0.35s" }}
        >
          Dynasty Web creates professional websites for home service businesses and
          entrepreneurs — so you get found, look credible, and get the call.
        </p>

        <div
          className="opacity-0 animate-fade-up mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
          style={{ animationDelay: "0.5s" }}
        />

        <div
          className="opacity-0 animate-fade-up mt-10 flex justify-center gap-10 md:gap-20"
          style={{ animationDelay: "0.65s" }}
        >
          {[
            { num: "2", label: "Sites launched" },
            { num: "TX", label: "Based in Texas" },
            { num: "100%", label: "Custom built" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-gold">{s.num}</div>
              <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
