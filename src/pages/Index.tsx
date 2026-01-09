import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import AnimatedSection from "@/components/AnimatedSection";
import TeamSection from "@/components/TeamSection";
import { Scale, BookOpen, Users, Handshake, ArrowRight, Gavel, FileText, Heart } from "lucide-react";

const highlightCards = [
  {
    icon: Heart,
    title: "Advocate Welfare & Legal Assistance",
    description: "Dedicated support for advocates and individuals navigating the legal system, with on-ground assistance and procedural guidance across India.",
    link: "/legal-aid",
    linkText: "Get Assistance",
  },
  {
    icon: BookOpen,
    title: "Legal Prudent Blog",
    description: "Comprehensive legal articles, judgment breakdowns, current affairs analysis, and procedural guidance for legal awareness and professional development.",
    link: "/blog",
    linkText: "Read Articles",
  },
  {
    icon: Handshake,
    title: "Legal Aid & Services",
    description: "Access free legal aid for those in need and professional legal consultation services including drafting, research support, and procedural assistance.",
    link: "/legal-aid",
    linkText: "Get Help",
  },
];

const stats = [
  { value: "500+", label: "Community Members" },
  { value: "200+", label: "Legal Articles" },
  { value: "50+", label: "Legal Aid Cases" },
  { value: "10+", label: "Legal & Social Partners" },
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8">
                <Scale className="h-4 w-4 text-accent" />
                <span className="text-accent text-sm font-medium">Legal Help. Legal Procedure. Legal Empowerment.</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                Legal Prudent Fraternity
                <span className="block gradient-text mt-2">Where Legal Minds Unite for Justice</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Dedicated to assisting individuals in understanding legal procedures and accessing legal remedies with clarity and confidence. 
                We provide legal aid, advocate-led support, and procedural guidance to help people navigate the justice system effectively.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/legal-aid">
                    Get Legal Help
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/blog">Explore Legal Prudent Blog</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlight Cards Section */}
      <section className="section-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Providing comprehensive legal aid, procedural guidance, and awareness initiatives for access to justice
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlightCards.map((card, index) => (
            <AnimatedSection key={card.title} delay={index * 0.1}>
              <GlassCard hover className="h-full flex flex-col">
                <div className="p-3 rounded-xl bg-accent/10 w-fit mb-6">
                  <card.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all duration-300"
                >
                  {card.linkText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container">
        <AnimatedSection>
          <GlassCard className="p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>
      </section>

      {/* Mission Preview */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-primary text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Legal Help. Legal Procedure. Legal Empowerment.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Legal Prudent Fraternity is dedicated to assisting individuals in understanding legal procedures 
                and accessing legal remedies with clarity and confidence. We focus on providing legal aid, 
                advocate-led support, and procedural guidance to help people navigate the justice system effectively.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through our legal services, awareness initiatives, and the Legal Prudent Blog, we simplify 
                complex legal processes and support access to justice across India.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="p-1.5 rounded-lg bg-accent/20">
                    <Gavel className="h-4 w-4 text-accent" />
                  </div>
                  Legal Aid
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="p-1.5 rounded-lg bg-accent/20">
                    <Users className="h-4 w-4 text-accent" />
                  </div>
                  Advocate Support
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="p-1.5 rounded-lg bg-accent/20">
                    <FileText className="h-4 w-4 text-accent" />
                  </div>
                  Procedural Guidance
                </div>
              </div>
              <Button variant="glass" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <GlassCard className="relative p-8 text-center">
                <Scale className="h-20 w-20 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Legal Aid & Advocate Welfare</h3>
                <p className="text-muted-foreground mb-6">
                  Providing on-ground legal assistance, procedural support, and advocate-led initiatives 
                  to ensure access to justice for all across India.
                </p>
                <Button variant="glassAccent" asChild>
                  <Link to="/legal-aid">Get Legal Help</Link>
                </Button>
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="section-container">
        <AnimatedSection>
          <GlassCard glow className="p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Need Legal Assistance?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Whether you need legal aid, procedural guidance, or want to contribute to our legal awareness initiatives, 
                we're here to help you navigate the legal system.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/legal-aid">Get Legal Help</Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </section>
    </>
  );
};

export default Index;
