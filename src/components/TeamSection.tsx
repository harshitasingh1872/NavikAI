import { GlassCard } from "@/components/ui/glass-card";
import AnimatedSection from "@/components/AnimatedSection";
import { teamMembers } from "@/data/teamMembers";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="section-container">
      <AnimatedSection>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <span className="text-accent text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet Our Founders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated group of legal professionals and advocates committed to legal aid, 
            legal awareness, and access to justice.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <AnimatedSection key={member.id} delay={index * 0.1}>
            <GlassCard hover className="h-full p-6 text-center">
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-xl" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-accent/30"
                />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-muted/30 hover:bg-accent/20 hover:text-accent transition-all duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {member.socialLinks.instagram && (
                  <a
                    href={member.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-muted/30 hover:bg-accent/20 hover:text-accent transition-all duration-300"
                    aria-label={`${member.name}'s Instagram`}
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-muted/30 hover:bg-accent/20 hover:text-accent transition-all duration-300"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {member.socialLinks.email && (
  <a
    href={`mailto:${member.socialLinks.email}`}
    className="p-2 rounded-lg bg-muted/30 hover:bg-accent/20 hover:text-accent transition-all"
    aria-label={`Email ${member.name}`}
  >
    <Mail className="h-4 w-4" />
  </a>
)}
              </div>
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
