import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Scale,
  Heart,
  FileText,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Send,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Free Legal Aid",
    description:
      "Pro bono legal assistance for individuals who cannot afford legal representation. Our team of volunteer lawyers provides guidance on civil, criminal, and family matters.",
    features: [
      "Initial Legal Consultation",
      "Document Review",
      "Court Representation Referrals",
      "Legal Rights Education",
    ],
    cta: "Request Free Aid",
    ctaLink: "#request-form",
  },
  {
    icon: MessageSquare,
    title: "Legal Consultations",
    description:
      "Professional legal consultation services with experienced practitioners. Get expert advice on various legal matters at affordable rates.",
    features: [
      "One-on-One Sessions",
      "Case Evaluation",
      "Legal Strategy Planning",
      "Follow-up Support",
    ],
    cta: "Book Consultation",
    ctaLink: "#request-form",
  },
  {
    icon: FileText,
    title: "Drafting & Research Support",
    description:
      "Comprehensive legal drafting and research services for individuals, students, and organizations requiring professional legal documentation.",
    features: [
      "Contract Drafting",
      "Legal Opinions",
      "Case Law Research",
      "Pleading Preparation",
    ],
    cta: "Get Started",
    ctaLink: "#request-form",
  },
];

const LegalAid = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");

  // Auto-hide success after 30s
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 30000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);

    // Honeypot check
    if (data.get("company")) return;

    setSubmitting(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/legalaid@legalprudent.in",
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );

      if (!res.ok) throw new Error("Failed");

      formRef.current.reset();
      setService("");
      setSubmitted(true);

      toast({
        title: "Legal Aid Request Submitted",
        description:
          "Our legal aid team has received your request and will contact you shortly.",
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
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Scale className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">
                Legal Aid & Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Access to Justice <span className="gradient-text">For All</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that justice should not be a privilege. Our legal aid
              program provides free assistance to those in need, while our
              professional services offer affordable legal support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((serviceItem, index) => (
            <AnimatedSection key={serviceItem.title} delay={index * 0.1}>
              <GlassCard hover className="h-full flex flex-col p-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 w-fit mb-6">
                  <serviceItem.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {serviceItem.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {serviceItem.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {serviceItem.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="glassAccent" asChild>
                  <a href={serviceItem.ctaLink}>
                    {serviceItem.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="section-container">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <GlassCard className="p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="h-14 w-14 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Request Submitted
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. Our legal aid team will contact
                    you shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">
                      Request Legal Assistance
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Fill out the form below and our team will get back to you.
                    </p>
                  </div>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                    />

                    {/* FormSubmit config */}
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Legal Aid Request"
                    />
                    <input type="hidden" name="_template" value="table" />

                    {/* Hidden input for service */}
                    <input type="hidden" name="service" value={service} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Full Name</Label>
                        <Input name="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input name="phone" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <Input name="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label>Type of Service Needed</Label>
                      <Select
                        value={service}
                        onValueChange={setService}
                        required
                      >
                        <SelectTrigger className="h-11 rounded-xl bg-muted/30 border border-border/50">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-background/95 backdrop-blur-xl border border-border/50">
                          <SelectItem value="Free Legal Aid">
                            Free Legal Aid
                          </SelectItem>
                          <SelectItem value="Legal Consultation">
                            Legal Consultation
                          </SelectItem>
                          <SelectItem value="Drafting & Research">
                            Drafting & Research
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Describe Your Legal Matter</Label>
                      <Textarea
                        name="message"
                        rows={5}
                        required
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={submitting || !service}
                      className="w-full"
                    >
                      {submitting ? "Submitting..." : "Submit Request"}
                      <Send className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </>
              )}
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default LegalAid;
