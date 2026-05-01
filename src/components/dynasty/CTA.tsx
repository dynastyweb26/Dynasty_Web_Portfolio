const CTA = () => {
  return (
    <section className="relative py-28 md:py-40 border-t border-gold-faint overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, hsl(var(--gold) / 0.15), transparent 70%)",
        }}
      />
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.05]">
          Makes your
          <br />
          <em className="italic text-gold font-bold">phone</em> ring!
        </h2>
        <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
          Whether you're a handyman, contractor, or entrepreneur — we'll build you something that
          makes your phone ring.
        </p>
      </div>
    </section>
  );
};

export default CTA;
