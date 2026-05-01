import { useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import { toast } from "@/hooks/use-toast";

// TODO: Replace with your EmailJS credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const services = [
  "Starter Site ($800)",
  "Growth Site ($1,500)",
  "Brand Identity Only",
  "Not Sure Yet — Let's Talk",
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: "Message sent",
        description: "Thanks! We'll get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      console.error("EmailJS error", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at dynstyweb26@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-surface-1 border border-gold-faint px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-gold transition-colors";

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-gold-faint">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">— Contact —</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Let's Build Something
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-gold mb-2">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={100}
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-gold mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={255}
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs tracking-[0.2em] uppercase text-gold mb-2">
              Phone Number <span className="text-muted-foreground/60 normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              maxLength={30}
              value={form.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs tracking-[0.2em] uppercase text-gold mb-2">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="" disabled>
                Select a service...
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-gold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              maxLength={2000}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your business and what you need..."
              className={inputClasses}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-9 py-4 rounded-full bg-gold text-primary-foreground text-sm font-medium tracking-wide hover:bg-gold-light transition-colors shadow-[0_15px_40px_-10px_hsl(var(--gold)/0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send My Project Details"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
