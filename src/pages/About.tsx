import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import AnimatedSection from "@/components/AnimatedSection";
import { Target, Eye, Heart, Users, Handshake, Shield, Lightbulb, Gavel, Scale, FileText } from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding the highest ethical standards in all legal endeavors, ensuring transparency and honesty in every interaction.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Fostering meaningful partnerships between advocates, legal professionals, and institutions for effective legal aid delivery.",
  },
  {
    icon: Lightbulb,
    title: "Awareness",
    description: "Spreading legal knowledge and procedural literacy to empower individuals to understand and exercise their legal rights.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "Providing resources, guidance, and support that enable individuals to access justice and advocates to serve effectively.",
  },
];

const legalEndeavors = [
  {
    icon: Gavel,
    title: "High Court Workgrounds",
    description: "Active engagement with High Court proceedings and legal procedures",
  },
  {
    icon: Users,
    title: "Advocate Networks",
    description: "Strong connections with practicing advocates across jurisdictions",
  },
  {
    icon: Heart,
    title: "Legal Aid Camps",
    description: "Regular legal awareness camps and on-ground assistance programs",
  },
  {
    icon: FileText,
    title: "Procedural Initiatives",
    description: "Real-world legal procedure guidance and documentation support",
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <span className="text-accent text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Story & <span className="gradient-text">Purpose</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Legal Prudent Fraternity is committed to providing legal aid, advocate support, 
              and procedural guidance to ensure access to justice for all.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-container pt-0">
        <AnimatedSection>
          <GlassCard className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Legal Prudent Fraternity was founded with a mission to bridge the gap between individuals seeking 
                    legal help and the complex procedural requirements of the Indian legal system. We believe that 
                    access to justice should not be hindered by a lack of understanding of legal procedures.
                  </p>
                  <p>
                    Our team of dedicated advocates and legal professionals work on-ground to provide legal aid, 
                    procedural guidance, and support to those who need it most. From High Court engagements to 
                    grassroots legal aid camps, we are committed to making legal assistance accessible.
                  </p>
                  <p>
                    Through our legal services, awareness initiatives, and the Legal Prudent Blog, we continue to 
                    simplify complex legal processes and empower individuals to navigate the justice system with confidence.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full" />
                <div className="relative space-y-4">
                  <GlassCard className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-accent/10">
                        <Scale className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Commitment to Legal Help</h4>
                        <p className="text-sm text-muted-foreground">Dedicated to access to justice</p>
                      </div>
                    </div>
                  </GlassCard>
                  <GlassCard className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Handshake className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Advocate Welfare</h4>
                        <p className="text-sm text-muted-foreground">Supporting legal professionals nationwide</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </section>

      {/* Mission & Vision */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <GlassCard hover className="h-full p-8">
              <div className="p-3 rounded-xl bg-accent/10 w-fit mb-6">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible legal aid and procedural guidance to individuals navigating the Indian legal system. 
                We aim to simplify complex legal processes, support advocate welfare, and ensure that access to justice 
                is not limited by a lack of procedural knowledge. Through our services, awareness programs, and 
                the Legal Prudent Blog, we empower people with practical legal solutions.
              </p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <GlassCard hover className="h-full p-8">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's leading platform for legal aid and procedural assistance, where individuals 
                can access clear guidance on navigating the justice system. We envision a future where every person 
                has access to quality legal help, where advocates are supported in their welfare, and where legal 
                procedures are demystified for the common citizen.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Legal Endeavors & Field Engagements */}
      <section className="section-container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Legal Endeavors & Field Engagements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our on-ground initiatives and real-world legal engagements across India
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {legalEndeavors.map((endeavor, index) => (
            <AnimatedSection key={endeavor.title} delay={index * 0.1}>
              <GlassCard hover className="h-full text-center p-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 w-fit mx-auto mb-4">
                  <endeavor.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{endeavor.title}</h4>
                <p className="text-sm text-muted-foreground">{endeavor.description}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="section-container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every action we take
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.1}>
              <GlassCard hover className="h-full text-center p-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <AnimatedSection>
          <GlassCard glow className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Need Legal Assistance?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our team of advocates and legal professionals is ready to help you navigate the legal system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/legal-aid">Get Legal Help</Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </GlassCard>
        </AnimatedSection>
      </section>
    </>
  );
};

export default About;
