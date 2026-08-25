import type { Metadata } from "next";
import Link from "next/link";

import { LegalContact, LegalPage } from "@/components/layout/legal-page";

const EFFECTIVE = "August 25, 2026";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the Chaney Fitness website and services, including training, payments, results disclaimers, and liability.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated={EFFECTIVE}
      intro="These Terms & Conditions govern your use of the Chaney Fitness website and services. Please read them carefully."
    >
      <h2>1. Agreement to Terms</h2>
      <p>
        By using our website, contacting Chaney Fitness, purchasing services, or
        participating in Chaney Fitness services, you agree to these Terms &amp;
        Conditions and any additional terms disclosed to you. If you do not
        agree, please do not use our website or services.
      </p>

      <h2>2. Services</h2>
      <p>Chaney Fitness may provide services that include:</p>
      <ul>
        <li>Personal training</li>
        <li>Small-group training</li>
        <li>Fitness programming</li>
        <li>Online and virtual training</li>
        <li>Fitness coaching</li>
        <li>Nutrition guidance</li>
        <li>Fitness education</li>
        <li>Related fitness services</li>
      </ul>
      <p>
        Our services and offerings may change from time to time at our
        discretion.
      </p>

      <h2>3. No Medical Advice</h2>
      <p>
        Chaney Fitness is not a medical provider. Training, exercise, nutrition,
        wellness, and fitness information provided by Chaney Fitness is for
        general fitness purposes and is not medical advice, diagnosis, or
        treatment. You should consult an appropriate qualified healthcare
        professional before beginning any exercise or nutrition program, and
        whenever you have a medical concern.
      </p>

      <h2>4. Assumption of Risk</h2>
      <p>
        Exercise and physical training involve inherent risks. These risks
        include, but are not limited to:
      </p>
      <ul>
        <li>Muscle soreness</li>
        <li>Strains</li>
        <li>Sprains</li>
        <li>Falls</li>
        <li>Injury</li>
        <li>Cardiovascular events</li>
        <li>Other potential physical complications</li>
      </ul>
      <p>
        You participate in training voluntarily and are responsible for
        communicating relevant injuries, limitations, medical restrictions, or
        other concerns. To the extent permitted by applicable law, you
        acknowledge and accept these inherent risks when participating in our
        services.
      </p>

      <h2>5. Client Responsibilities</h2>
      <p>As a client, you are responsible for:</p>
      <ul>
        <li>Providing accurate information</li>
        <li>Following training instructions</li>
        <li>Communicating injuries or limitations</li>
        <li>Following medical and professional guidance</li>
        <li>Using equipment appropriately</li>
        <li>Following facility rules</li>
        <li>Arriving prepared and on time</li>
      </ul>

      <h2>6. Payments</h2>
      <p>
        You agree to pay for the services you purchase. Some services may
        involve recurring payments. You are responsible for any applicable taxes
        or fees, and for keeping your payment information current so that
        payments are not declined or delayed. Pricing may change from time to
        time.
      </p>
      <p>
        Any applicable cancellation, refund, or recurring-payment terms will be
        disclosed to you at the time of purchase.
      </p>

      <h2>7. Scheduling and Cancellations</h2>
      <p>
        Appointments, rescheduling, cancellations, missed appointments, and late
        arrivals may affect the availability and length of your sessions. We ask
        that you provide reasonable notice when you need to reschedule or cancel.
        Any specific scheduling or cancellation terms that apply to your services
        will be communicated to you.
      </p>

      <h2>8. Results Disclaimer</h2>
      <p>
        Chaney Fitness does not guarantee specific results. We make no guarantee
        of weight loss, fat loss, muscle gain, strength increases, athletic
        performance, body composition changes, or any other specific fitness
        outcome. Results vary based on individual circumstances, consistency,
        nutrition, lifestyle, genetics, training history, and other factors.
      </p>

      <h2>9. Website Content</h2>
      <p>
        Content on our website is provided for general informational and
        educational purposes only and may change without notice.
      </p>

      <h2>10. Intellectual Property</h2>
      <p>
        The Chaney Fitness logo, branding, website content, training programs,
        written content, photography, video, graphics, and other proprietary
        materials are owned by or licensed to Chaney Fitness and are protected by
        applicable law. You may not copy, reproduce, distribute, or make
        commercial use of these materials without our prior written permission.
      </p>

      <h2>11. User Conduct</h2>
      <p>When using our website or services, you agree not to engage in:</p>
      <ul>
        <li>Fraudulent activity</li>
        <li>Unauthorized access</li>
        <li>Attempts to interfere with the website</li>
        <li>Scraping or unauthorized data collection</li>
        <li>Copying proprietary materials</li>
        <li>Abusive or unlawful behavior</li>
      </ul>

      <h2>12. Third-Party Services</h2>
      <p>
        We may use third-party platforms to help operate our business, including
        for payments, scheduling, email, SMS, analytics, advertising, website
        functionality, and customer management. Your use of those services may be
        subject to the third party&apos;s own terms and policies.
      </p>

      <h2>13. Privacy</h2>
      <p>
        Our collection and use of your information is described in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>, which is incorporated
        into these Terms by reference.
      </p>

      <h2>14. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by applicable law, Chaney Fitness and its
        owner, employees, and contractors will not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising out of
        or related to your use of our website or services. To the extent
        permitted by applicable law, our total liability for any claim will not
        exceed the amount you paid to Chaney Fitness for the services giving rise
        to the claim. Nothing in these Terms limits liability that cannot be
        limited under applicable law.
      </p>

      <h2>15. Indemnification</h2>
      <p>
        To the extent permitted by applicable law, you agree to indemnify and
        hold harmless Chaney Fitness and its owner, employees, and contractors
        from and against reasonable claims, losses, and expenses arising out of
        your breach of these Terms or your misuse of our website or services.
      </p>

      <h2>16. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Florida, without
        regard to its conflict-of-laws principles, subject to applicable law.
      </p>

      <h2>17. Changes to These Terms</h2>
      <p>
        We may update these Terms &amp; Conditions from time to time. When we do,
        we will revise the effective date above. Your continued use of our
        website or services after changes take effect means you accept the
        updated Terms.
      </p>

      <h2>18. Contact Information</h2>
      <p>If you have questions about these Terms, please contact us:</p>

      <LegalContact heading="Chaney Fitness" />
    </LegalPage>
  );
}
