import logo from "@/assets/logo.jpg";

const Nav = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-gold-faint">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Dynasty Web logo" className="h-9 w-9 rounded-full object-cover ring-1 ring-gold/40" />
          <span className="font-display text-lg tracking-wide">Dynasty Web</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
          <a href="#work" className="hover:text-gold transition-colors">Work</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="text-xs md:text-sm font-medium tracking-wide px-4 py-2 rounded-full border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
};

export default Nav;
