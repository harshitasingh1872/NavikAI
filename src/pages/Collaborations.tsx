import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, Handshake, Building, Award, ArrowRight, Users, BookOpen, Globe } from "lucide-react";

const partners = [
  {
    name: "Chandigarh University",
    type: "Primary Academic Partner",
    description: "Our flagship partnership with one of India's premier universities, enabling student internships, joint research projects, and legal awareness programs.",
    highlights: ["Student Internship Programs", "Legal Research Collaboration", "Moot Court Sponsorships", "Guest Lecture Series"],
    featured: true,
  },
  {
    name: "Punjab University Law Department",
    type: "Academic Partner",
    description: "Collaborative initiatives focused on legal education and student development programs.",
    highlights: ["Workshop Collaborations", "Legal Aid Clinics"],
    featured: false,
  },
  {
    name: "Himachal Pradesh National Law University",
    type: "Academic Partner",
    description: "Partnership for academic exchanges and joint legal research initiatives.",
    highlights: ["Research Publications", "Student Exchanges"],
    featured: false,
  },
  {
    name: "District Legal Services Authority",
    type: "Government Partner",
    description: "Working together to provide legal aid services to underserved communities in the region.",
    highlights: ["Free Legal Aid Camps", "Legal Literacy Programs"],
    featured: false,
  },
];

const benefits = [
  {
    icon: Users,
    title: "Student Opportunities",
    description: "Internships, mentorship programs, and hands-on legal experience for aspiring lawyers.",
  },
  {
    icon: BookOpen,
    title: "Research Collaboration",
    description: "Joint research projects and publications with academic institutions.",
  },
  {
    icon: Award,
    title: "Recognition Programs",
    description: "Awards and certifications for outstanding contributions to legal education.",
  },
  {
    icon: Globe,
    title: "Expanded Network",
    description: "Access to a nationwide network of legal professionals and institutions.",
  },
];

const Collaborations = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Handshake className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">Collaborations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Building <span className="gradient-text">Partnerships</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We collaborate with leading universities, law schools, and legal institutions 
              to create meaningful opportunities for students and professionals alike.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Partner - Chandigarh University */}
      <section className="section-container pt-8">
        <AnimatedSection>
          <GlassCard glow className="p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-primary text-sm font-medium">Primary Partner</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground">Chandigarh University</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our partnership with Chandigarh University represents the cornerstone of Legal Prudent Fraternity's 
                  academic initiatives. Together, we have created a comprehensive ecosystem that bridges theoretical 
                  legal education with practical experience.
                </p>
                <ul className="space-y-3">
                  {partners[0].highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-foreground">
                      <div className="p-1 rounded-full bg-accent/20">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full" />
                  <div className="relative p-12 rounded-3xl bg-gradient-to-br from-muted/40 to-muted/20 border border-border/30">
                    <GraduationCap className="h-32 w-32 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </section>

      {/* Other Partners */}
      <section className="section-container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Partner Network</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Collaborating with institutions across India to expand legal education and services.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.slice(1).map((partner, index) => (
            <AnimatedSection key={partner.name} delay={index * 0.1}>
              <GlassCard hover className="h-full p-6">
                <div className="p-3 rounded-xl bg-muted/50 w-fit mb-4">
                  <Building className="h-6 w-6 text-accent" />
                </div>
                <span className="text-xs text-accent font-medium">{partner.type}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1 mb-3">{partner.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                <div className="flex flex-wrap gap-2">
                  {partner.highlights.map((highlight) => (
                    <span key={highlight} className="category-tag text-xs">
                      {highlight}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container">
        <AnimatedSection>
          <GlassCard className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">Benefits of Our Collaborations</h2>
              <p className="text-muted-foreground">What our partnerships bring to the legal community</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 w-fit mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="section-container">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Interested in Partnering With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking to expand our network of collaborators. If you represent an educational 
              institution or legal organization, let's explore partnership opportunities.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default Collaborations;
