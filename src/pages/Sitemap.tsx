import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { GlassCard } from "@/components/ui/glass-card";

const Sitemap = () => {
  return (
    <section className="section-container pt-28 pb-20">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
            Sitemap
          </h1>

          <p className="text-muted-foreground text-center mb-10">
            Quick access to all important pages of Legal Prudent Fraternity
          </p>
        </AnimatedSection>

        <GlassCard className="p-8 space-y-6">
          <ul className="space-y-3 text-lg">
            <li><Link to="/" className="text-accent hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-accent hover:underline">About Us</Link></li>
            <li><Link to="/blog" className="text-accent hover:underline">Blog</Link></li>
            <li><Link to="/legal-aid" className="text-accent hover:underline">Legal Aid</Link></li>
            <li><Link to="/collaborations" className="text-accent hover:underline">Collaborations</Link></li>
            <li><Link to="/events" className="text-accent hover:underline">Events</Link></li>
            <li><Link to="/join" className="text-accent hover:underline">Join Us</Link></li>
            <li><Link to="/contact" className="text-accent hover:underline">Contact</Link></li>
            <li><Link to="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" className="text-accent hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="text-accent hover:underline">Disclaimer</Link></li>
          </ul>
        </GlassCard>
      </div>
    </section>
  );
};

export default Sitemap;

