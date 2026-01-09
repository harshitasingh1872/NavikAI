import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Instagram,
  Twitter,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

/* ---------------------------------- */
/* Static Data                         */
/* ---------------------------------- */

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "enquiries@legalprudent.in",
    description: "We typically respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Supreme Court, New Delhi",
    description: "Operating across India",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 9608762166",
    description: "Mon–Sat, 10:00 AM – 6:00 PM IST",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/70905461/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/legalprudent/",
  },
  {
    icon: Twitter,
    label: "Twitter/X",
    href: "https://x.com/LegalPrudent",
  },
];

/* ---------------------------------- */
/* Component                           */
/* ---------------------------------- */

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* Auto-hide success after 30 seconds */
  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 30000);
    return () => clearTimeout(timer);
  }, [submitted]);

  /* ---------------------------------- */
  /* Submit Handler                     */
  /* ---------------------------------- */

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("company")) return;

    setLoading(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/enquiries@legalprudent.in", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setSubmitted(true);
        toast({
          title: "Message sent successfully",
          description:
            "Thank you for reaching out. Our team will get back to you shortly.",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  /* ---------------------------------- */
  /* Render                             */
  /* ---------------------------------- */

  return (
    <>
      {/* Hero */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our legal services or collaborations?  
              We’d love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-container pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <GlassCard hover className="text-center p-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 w-fit mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-accent font-medium">{item.value}</p>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Form + Social */}
      <section className="section-container pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form */}
          <AnimatedSection className="lg:col-span-2">
            <GlassCard className="p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-14 w-14 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Thank you for contacting us!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been sent successfully.  
                    We’ll be in touch shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input name="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input name="email" type="email" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Subject</Label>
                    <Input name="subject" required />
                  </div>

                  <div className="space-y-2">
                    <Label>Message</Label>
                    <Textarea name="message" rows={6} required />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={loading}
                    className="w-full sm:w-auto"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </GlassCard>
          </AnimatedSection>

          {/* Social */}
          <AnimatedSection delay={0.2}>
            <GlassCard className="p-6">
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-muted/30 hover:bg-accent/20 transition"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>

        </div>
      </section>
    </>
  );
};

export default Contact;
