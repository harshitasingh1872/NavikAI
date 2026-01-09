import AnimatedSection from "@/components/AnimatedSection";
import { GlassCard } from "@/components/ui/glass-card";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { Scale, Shield, Clock, MessageSquare } from "lucide-react";
import nyayikaiLogo from "@/assets/navikailogo.png";

const features = [
  {
    icon: Scale,
    title: "Legal Guidance",
    description: "Get instant answers to your legal questions",
  },
  {
    icon: Shield,
    title: "Confidential",
    description: "Your conversations are private and secure",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Access legal assistance anytime, anywhere",
  },
  {
    icon: MessageSquare,
    title: "Easy to Use",
    description: "Simple chat interface for quick answers",
  },
];

const NyayikAI = () => {
  return (
    <>
      <section className="section-container pt-32">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                <MessageSquare className="h-4 w-4 text-accent" />
                <span className="text-accent text-sm font-medium">AI Legal Assistant</span>
              </div>
              <div className="flex justify-center mb-6">
                <img
                  src={nyayikaiLogo}
                  alt="NyayikAI"
                  className="h-32 w-32 object-contain"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                NyayikAI
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your intelligent legal companion for instant guidance and support
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <GlassCard className="h-[700px]">
                  <ChatInterface isFullPage />
                </GlassCard>
              </AnimatedSection>
            </div>

            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <GlassCard className="p-6">
                  <h2 className="text-xl font-bold mb-4">Features</h2>
                  <div className="space-y-4">
                    {features.map((feature) => (
                      <div key={feature.title} className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <feature.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <GlassCard className="p-6 bg-accent/5">
                  <h3 className="font-semibold mb-3 text-sm">Important Notice</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    NyayikAI provides general legal information and guidance. This is not a substitute
                    for professional legal advice. For specific legal matters, please consult with Shiv (shiv@legalprudent.in) or contact our legal aid team (enquiries@legalprudent.in).
                  </p>
                </GlassCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NyayikAI;
