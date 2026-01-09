import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import FormSlideWrapper from "@/components/FormSlideWrapper";
import { toast } from "@/components/ui/use-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Users,
  GraduationCap,
  Briefcase,
  Heart,
  CheckCircle,
  Star,
  BookOpen,
  Award,
  Network,
  Send,
} from "lucide-react";

/* ================= DATA ================= */

const membershipTypes = [
  {
    id: "student",
    icon: GraduationCap,
    title: "Student Member",
    description: "For law students actively pursuing their legal education",
    eligibility: "Currently enrolled in a law program",
    benefits: [
      "Access to Legal Prudent Blog premium content",
      "Internship & opportunity listings",
      "Mentorship program access",
      "Workshop & webinar discounts",
      "Certificate of membership",
    ],
  },
  {
    id: "professional",
    icon: Briefcase,
    title: "Professional Member",
    description:
      "For practicing advocates, legal advisors, and law graduates",
    eligibility: "LLB/LLM graduate or practicing advocate",
    benefits: [
      "All Student Member benefits",
      "Professional networking events",
      "Guest speaker opportunities",
      "Research collaboration invites",
      "Priority legal aid referrals",
      "Continuing education credits",
    ],
  },
  {
    id: "volunteer",
    icon: Heart,
    title: "Volunteer Member",
    description:
      "For those passionate about contributing to legal awareness",
    eligibility: "Open to all with passion for legal awareness",
    benefits: [
      "Legal aid project participation",
      "Community outreach programs",
      "Skill development workshops",
      "Volunteer recognition awards",
      "Impact tracking dashboard",
    ],
  },
];

const whyJoin = [
  {
    icon: BookOpen,
    title: "Publish Your Work",
    description:
      "Get your legal articles, case analyses, and research published.",
  },
  {
    icon: Network,
    title: "Build Your Network",
    description: "Connect with students, advocates, and professionals.",
  },
  {
    icon: Star,
    title: "Develop Skills",
    description: "Workshops, mentorships, and hands-on exposure.",
  },
  {
    icon: Award,
    title: "Earn Recognition",
    description: "Certificates, awards, and recommendations.",
  },
];

/* ================= COMPONENT ================= */

const Join = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [selectedType, setSelectedType] = useState("student");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => setSubmitted(false), 30000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    if (data.get("company")) return;

    data.set("membership_type", selectedType);
    setSubmitting(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/shiv@legalprudent.in",
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );

      if (!res.ok) throw new Error("Failed");

      formRef.current.reset();
      setSelectedType("student");
      setSubmitted(true);

      toast({
        title: "Application Submitted",
        description:
          "Thank you for joining Legal Prudent. Our team will reach out shortly.",
      });
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Users className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">
                Join the Fraternity
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Become a <span className="gradient-text">Member</span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Join our growing community of legal enthusiasts and make your mark in the legal world. Whether you're a student, professional, or volunteer, there's a place for you here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= WHY JOIN ================= */}
      <section className="section-container pt-12">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Join Legal Prudent Fraternity?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyJoin.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <GlassCard hover className="h-full text-center p-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 w-fit mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ================= MEMBERSHIP ================= */}
      <section className="section-container">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-3">
            Choose Your Membership
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Select the membership type that best suits your profile
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {membershipTypes.map((type, index) => (
            <AnimatedSection key={type.id} delay={index * 0.1}>
              <GlassCard
                hover
                onClick={() => setSelectedType(type.id)}
                className={`cursor-pointer p-6 transition-all ${
                  selectedType === type.id
                    ? "border-accent/50 shadow-lg shadow-accent/10"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-3 rounded-xl ${
                      selectedType === type.id
                        ? "bg-accent/20"
                        : "bg-muted/50"
                    }`}
                  >
                    <type.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{type.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {type.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 my-5">
                  {type.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-accent mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-muted-foreground pt-2 border-t border-border/40">
                  <strong>Eligibility:</strong> {type.eligibility}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ================= SIGN UP FORM ================= */}
      <section className="section-container pt-0">
        <AnimatedSection>
          <GlassCard className="max-w-2xl mx-auto p-8 md:p-10 overflow-visible">
            <FormSlideWrapper
              submitted={submitted}
              form={
                <>
                  <h3 className="text-2xl font-bold mb-2">Sign Up Now</h3>
                  <p className="text-muted-foreground mb-6">
                    Complete the form below to begin your membership application.
                  </p>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                    />

                    <input
                      type="hidden"
                      name="_subject"
                      value="New Membership Application"
                    />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        name="first_name"
                        placeholder="First Name"
                        required
                      />
                      <Input
                        name="last_name"
                        placeholder="Last Name"
                        required
                      />
                    </div>

                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />

                    <Input
                      name="phone"
                      placeholder="Phone Number"
                    />

                    <Input
                      name="institution"
                      placeholder="Institution / Organization"
                    />

                    <Select
                      value={selectedType}
                      onValueChange={setSelectedType}
                    >
                      <SelectTrigger className="h-11 rounded-xl bg-muted/30 border border-border/50">
                        <SelectValue placeholder="Select membership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student Member</SelectItem>
                        <SelectItem value="professional">
                          Professional Member
                        </SelectItem>
                        <SelectItem value="volunteer">
                          Volunteer Member
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <p className="text-xs text-muted-foreground">
  By submitting this form, you agree to our{" "}
  <a
    href="/terms-conditions"
    className="font-semibold underline underline-offset-2 hover:text-accent transition-colors"
  >
    Terms & Conditions
  </a>{" "}
  and{" "}
  <a
    href="/privacy-policy"
    className="font-semibold underline underline-offset-2 hover:text-accent transition-colors"
  >
    Privacy Policy
  </a>.
</p>


                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Submit Application"}
                      <Send className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </>
              }
              success={
                <div className="text-center py-10">
                  <CheckCircle className="h-14 w-14 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Application Submitted
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We’ll get in touch with you shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another application
                  </Button>
                </div>
              }
            />
          </GlassCard>
        </AnimatedSection>
      </section>
    </>
  );
};

export default Join;
