import AnimatedSection from "@/components/AnimatedSection";
import { GlassCard } from "@/components/ui/glass-card";

const Disclaimer = () => {
  return (
    <section className="section-container pt-28 pb-20">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
            Disclaimer
          </h1>

          <p className="text-muted-foreground text-center mb-10">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </AnimatedSection>

        <GlassCard className="p-8 space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              General Disclaimer
            </h2>
            <p>
              The information provided on Legal Prudent Fraternity is for
              general informational purposes only. It should not be considered
              legal advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              No Lawyer-Client Relationship
            </h2>
            <p>
              Use of this website or communication through it does not create a
              lawyer-client relationship unless expressly agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Accuracy of Information
            </h2>
            <p>
              While we strive to keep information accurate and up to date, we
              make no guarantees regarding completeness, reliability, or
              accuracy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              External Links
            </h2>
            <p>
              This website may contain links to third-party websites. Legal
              Prudent Fraternity is not responsible for their content or
              practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Limitation of Liability
            </h2>
            <p>
              Legal Prudent Fraternity shall not be held liable for any loss or
              damage arising from reliance on information provided on this
              platform.
            </p>
          </section>
        </GlassCard>
      </div>
    </section>
  );
};

export default Disclaimer;

