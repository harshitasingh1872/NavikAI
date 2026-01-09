
import AnimatedSection from "@/components/AnimatedSection";
import { GlassCard } from "@/components/ui/glass-card";

const PrivacyPolicy = () => {
  return (
    <section className="section-container pt-28 pb-20">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
            Privacy Policy
          </h1>

          <p className="text-muted-foreground text-center mb-10">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </AnimatedSection>

        <GlassCard className="p-8 space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              1. Introduction
            </h2>
            <p>
              Legal Prudent Fraternity ("we", "our", "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or engage with our legal services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              2. Information We Collect
            </h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Personal details such as name, email address, and phone number</li>
              <li>Information shared through contact forms or legal aid requests</li>
              <li>Non-personal data such as browser type and usage statistics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To provide legal aid and related services</li>
              <li>To respond to inquiries and support requests</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              4. Sharing of Information
            </h2>
            <p>
              We do not sell or rent your personal information. Information may
              be shared only with trusted legal professionals or authorities
              when required by law or necessary to provide legal assistance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              disclosure, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, update, or request deletion of your
              personal information. You may contact us for any privacy-related
              concerns.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="mt-2 font-medium text-foreground">
              legalprudentfraternity@gmail.com
            </p>
          </section>
        </GlassCard>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
