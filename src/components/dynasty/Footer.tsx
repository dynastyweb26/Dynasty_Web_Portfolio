import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-gold-faint py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" aria-hidden className="h-7 w-7 rounded-full object-cover ring-1 ring-gold/30" />
          <span className="font-display text-base">Dynasty Web</span>
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 Dynasty Web · Web Design &amp; Branding · Kaufman, TX
        </div>
      </div>
    </footer>
  );
};

export default Footer;
