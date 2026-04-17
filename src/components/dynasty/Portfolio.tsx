import ProjectCard from "./ProjectCard";
import crazy1 from "@/assets/crazy-1.jpg";
import crazy2 from "@/assets/crazy-2.jpg";
import crazy3 from "@/assets/crazy-3.jpg";
import vydale1 from "@/assets/vydale-1.jpg";
import vydale2 from "@/assets/vydale-2.jpg";
import vydale3 from "@/assets/vydale-3.jpg";
import vydale4 from "@/assets/vydale-4.jpg";

const Portfolio = () => {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-gold-faint">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">— Work —</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">Recent projects</h2>
        </div>

        <div className="space-y-28 md:space-y-40">
          <ProjectCard
            tag="Project 01"
            name="Crazy Door"
            niche="Handyman & Home Services · East Texas"
            images={[crazy1, crazy2, crazy3]}
            palette={[
              { color: "#0A0A0A", label: "Black" },
              { color: "#E22B2B", label: "Red" },
              { color: "#F5F5F5", label: "White" },
            ]}
            paletteLabel="Black · Red · White"
            bullets={[
              "Bold dark theme with red accents — instantly communicates a strong, no-nonsense brand",
              "Hero quote form lets homeowners request a quote directly — no phone tag needed",
              "Services section clearly displays every trade they offer so customers know exactly what to ask for",
              "Photo gallery showcases real completed work — builds trust before the first call",
              "Trust badges (Faithfully Serving Texas, Quality Guaranteed) reinforce credibility above the fold",
              "Mobile-optimized so customers can find and contact them from any device",
            ]}
          />

          <ProjectCard
            reverse
            tag="Project 02"
            name="Vydale T.C. Projects"
            niche="Speaker · Author · Youth Empowerment"
            images={[vydale1, vydale2, vydale3, vydale4]}
            palette={[
              { color: "#3B0D6E", label: "Purple" },
              { color: "#D4A017", label: "Gold" },
              { color: "#FFFFFF", label: "White" },
            ]}
            paletteLabel="Purple · Gold · White"
            bullets={[
              "Rich purple & gold brand palette conveys purpose, prestige, and empowerment",
              "“Book Vydale” CTA is visible on every page — makes converting easy for event organizers",
              "Scrolling testimonial marquee creates immediate social proof at a glance",
              "About section with founder story and award badges builds authority and personal connection",
              "Full navigation — Home, Speaking, Products, Gallery, Contact — serves every type of visitor",
              "Stat counters (5+ years, 100+ lives, 5 nominations) make impact feel real and verifiable",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
