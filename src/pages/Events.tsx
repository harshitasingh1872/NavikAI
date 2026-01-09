import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, MapPin, Clock, Users, Video, Briefcase, ArrowRight, Gavel } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Constitutional Law Webinar: Interpreting Fundamental Rights",
    type: "Webinar",
    date: "January 15, 2025",
    time: "6:00 PM IST",
    location: "Online (Zoom)",
    speaker: "Hon. Justice (Retd.) K.S. Radhakrishnan",
    description: "An insightful session exploring the evolving interpretation of fundamental rights by the Indian judiciary.",
    registrationOpen: true,
  },
  {
    id: 2,
    title: "Legal Research & Writing Workshop",
    type: "Workshop",
    date: "January 22-23, 2025",
    time: "10:00 AM - 5:00 PM IST",
    location: "Chandigarh University, Punjab",
    speaker: "Prof. Dr. Anita Sharma",
    description: "A two-day intensive workshop on legal research methodology, citation formats, and professional legal writing.",
    registrationOpen: true,
  },
  {
    id: 3,
    title: "National Moot Court Competition 2025",
    type: "Moot Court",
    date: "February 8-10, 2025",
    time: "9:00 AM onwards",
    location: "Chandigarh University",
    speaker: "Multiple Judges",
    description: "Annual inter-university moot court competition focusing on constitutional and criminal law.",
    registrationOpen: true,
  },
];

const opportunities = [
  {
    id: 1,
    title: "Legal Research Internship",
    organization: "Legal Prudent Fraternity",
    duration: "3 Months",
    type: "Remote/Hybrid",
    description: "Assist in legal research, article writing, and case law analysis for our blog and publications.",
    eligibility: "Law students (3rd year onwards)",
  },
  {
    id: 2,
    title: "Legal Aid Volunteer Program",
    organization: "Legal Prudent Fraternity",
    duration: "Flexible",
    type: "Hybrid",
    description: "Contribute to our legal aid initiatives by assisting with case documentation and client interaction.",
    eligibility: "Law graduates and advocates",
  },
  {
    id: 3,
    title: "Content Writing Fellowship",
    organization: "Legal Prudent Blog",
    duration: "6 Months",
    type: "Remote",
    description: "Create engaging legal content including articles, judgment summaries, and educational materials.",
    eligibility: "Law students and legal professionals",
  },
];

const Events = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Webinar":
        return Video;
      case "Workshop":
        return Users;
      case "Moot Court":
        return Gavel;
      default:
        return Calendar;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Calendar className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">Events & Opportunities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Learn, Grow, <span className="gradient-text">Participate</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover upcoming webinars, workshops, moot courts, and exclusive opportunities 
              to enhance your legal career with Legal Prudent Fraternity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-container pt-8">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Upcoming Events</h2>
            <span className="text-accent text-sm font-medium">{upcomingEvents.length} events scheduled</span>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {upcomingEvents.map((event, index) => {
            const TypeIcon = getTypeIcon(event.type);
            return (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <GlassCard hover className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium">
                          <TypeIcon className="h-3 w-3" />
                          {event.type}
                        </span>
                        {event.registrationOpen && (
                          <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                            Registration Open
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-accent" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-accent" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-accent" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="hero">
                        Register Now
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Opportunities */}
      <section className="section-container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Career Opportunities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore internships, volunteer programs, and fellowships to kickstart your legal career.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opp, index) => (
            <AnimatedSection key={opp.id} delay={index * 0.1}>
              <GlassCard hover className="h-full flex flex-col p-6">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{opp.title}</h3>
                <p className="text-accent text-sm mb-3">{opp.organization}</p>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{opp.description}</p>
                <div className="space-y-2 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">Duration:</span>
                    {opp.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">Type:</span>
                    {opp.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">Eligibility:</span>
                    {opp.eligibility}
                  </div>
                </div>
                <Button variant="glassAccent" size="sm">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <AnimatedSection>
          <GlassCard glow className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Want to Host an Event With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We're open to collaborating on webinars, workshops, and other legal events. 
              Reach out to explore partnership opportunities.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contact Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </GlassCard>
        </AnimatedSection>
      </section>
    </>
  );
};

export default Events;
