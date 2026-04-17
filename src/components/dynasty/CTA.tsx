const mailto =
  "mailto:dynstyweb26@gmail.com?subject=Website Quote Request&body=Hi Dynasty Web, I am interested in getting a website built for my business. My name is: %0AMy business is: %0AMy phone number is: %0APlease contact me!";

const CTA = () => {
  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-gold-faint overflow-hidden">
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
          Ready to build
          <br />
          <em className="italic text-gold font-bold">your</em> website?
        </h2>
        <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
          Whether you're a handyman, contractor, or entrepreneur — we'll build you something that
          makes your phone ring.
        </p>
        <a
          href={mailto}
          className="inline-block mt-10 px-9 py-4 rounded-full bg-gold text-primary-foreground text-sm font-medium tracking-wide hover:bg-gold-light transition-colors shadow-[0_15px_40px_-10px_hsl(var(--gold)/0.6)]"
        >
          Start your project
        </a>
      </div>
    </section>
  );
};

export default CTA;
