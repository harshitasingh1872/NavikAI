import AnimatedSection from "@/components/AnimatedSection";
import { GlassCard } from "@/components/ui/glass-card";

const TermsConditions = () => {
  return (
    <section className="section-container pt-28 pb-20">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
            Terms & Conditions
          </h1>

          <p className="text-muted-foreground text-center mb-10">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </AnimatedSection>

        <GlassCard className="p-8 space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Legal Prudent Fraternity website, you
              agree to be bound by these Terms & Conditions. If you do not agree,
              please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              2. Nature of Services
            </h2>
            <p>
              Legal Prudent Fraternity provides legal information, legal aid
              facilitation, community collaboration, and educational resources.
              Information provided on this platform does not constitute a
              lawyer-client relationship unless explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              3. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide accurate and truthful information</li>
              <li>Use the platform lawfully and ethically</li>
              <li>Refrain from misuse, impersonation, or abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              4. Intellectual Property
            </h2>
            <p>
              All content, logos, articles, and materials on this website are
              the intellectual property of Legal Prudent Fraternity unless
              otherwise stated. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              Legal Prudent Fraternity shall not be liable for any direct,
              indirect, or consequential damages arising from the use or
              inability to use this website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              6. Modifications
            </h2>
            <p>
              We reserve the right to modify these Terms & Conditions at any
              time. Continued use of the website implies acceptance of updated
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              7. Governing Law
            </h2>
            <p>
              These terms shall be governed by and interpreted in accordance
              with the laws of India.
            </p>
          </section>
        </GlassCard>
      </div>
    </section>
  );
};

export default TermsConditions;

