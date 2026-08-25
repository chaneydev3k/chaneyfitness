import type { Metadata } from "next";
import Link from "next/link";

import { LegalContact, LegalPage } from "@/components/layout/legal-page";

const EFFECTIVE = "August 25, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Chaney Fitness collects, uses, shares, and protects your personal information, and the privacy choices available to you.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated={EFFECTIVE}
      intro="This Privacy Policy explains how Chaney Fitness collects, uses, shares, and protects information about you when you visit our website, contact us, or use our services."
    >
      <p>
        Chaney Fitness (&ldquo;Chaney Fitness,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
        Privacy Policy describes the information we collect, how we use and
        share it, and the choices you have. By using our website or services,
        you agree to the practices described here.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly to us, such as when you
        fill out a form, request a consultation, purchase services, or
        communicate with us. This may include:
      </p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Telephone number</li>
        <li>Address or general location</li>
        <li>Fitness goals and preferences</li>
        <li>Information submitted through consultation and intake forms</li>
        <li>Purchase and payment-related information</li>
        <li>Communications you send to Chaney Fitness</li>
        <li>Fitness and wellness information you voluntarily provide</li>
        <li>Website usage information</li>
      </ul>

      <h2>Automatically Collected Information</h2>
      <p>
        When you visit our website, certain information may be collected
        automatically through cookies and similar technologies, including:
      </p>
      <ul>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Device type</li>
        <li>Operating system</li>
        <li>Pages visited</li>
        <li>Referring website</li>
        <li>General website usage information</li>
        <li>Cookies and similar technologies</li>
      </ul>

      <h2>How We Use Information</h2>
      <p>We may use the information we collect to:</p>
      <ul>
        <li>Respond to inquiries</li>
        <li>Schedule consultations</li>
        <li>Provide personal training</li>
        <li>Provide small-group training</li>
        <li>Provide online and virtual training</li>
        <li>Communicate with clients</li>
        <li>Process purchases</li>
        <li>Provide customer support</li>
        <li>Personalize our services</li>
        <li>Improve our website</li>
        <li>Analyze website usage</li>
        <li>Measure advertising performance</li>
        <li>Conduct marketing</li>
        <li>Maintain security</li>
        <li>Prevent fraud</li>
        <li>Comply with applicable law</li>
      </ul>

      <h2>Advertising and Analytics</h2>
      <p>
        We may use third-party advertising and analytics platforms to
        understand how our website is used and to promote our services. These
        may include platforms such as Meta (Facebook and Instagram), Google,
        and other analytics and advertising providers.
      </p>
      <p>
        These providers may use cookies, pixels, tags, and similar
        technologies for purposes such as:
      </p>
      <ul>
        <li>Advertising measurement</li>
        <li>Website analytics</li>
        <li>Retargeting</li>
        <li>Audience creation</li>
        <li>Marketing performance</li>
      </ul>

      <h2>SMS Communications</h2>
      <p>
        We may collect and use your telephone number when you voluntarily
        provide it and consent to receive SMS communications. For more detail,
        see our{" "}
        <Link href="/sms-terms">SMS Terms &amp; Conditions</Link>. Your consent
        to receive marketing text messages is not a condition of purchasing any
        service.
      </p>

      <h2>Email Communications</h2>
      <p>
        We may use your email address to send service-related messages (such as
        scheduling and account communications) and, where permitted,
        promotional messages. You can opt out of promotional emails at any time
        by following the unsubscribe instructions in those messages.
      </p>

      <h2>Information Sharing</h2>
      <p>
        We may share information with service providers that help us operate our
        business, such as:
      </p>
      <ul>
        <li>Payment processors</li>
        <li>Website providers</li>
        <li>Hosting providers</li>
        <li>Scheduling platforms</li>
        <li>Email providers</li>
        <li>SMS providers</li>
        <li>CRM and customer management platforms</li>
        <li>Analytics providers</li>
        <li>Advertising platforms</li>
        <li>Professional advisors</li>
      </ul>
      <p>
        We may also share information when required by law or to protect our
        rights, safety, or property. <strong>Chaney Fitness does not sell your
        personal information for money.</strong>
      </p>

      <h2>Payment Information</h2>
      <p>
        Payments are processed by third-party payment processors. Those
        processors handle your payment details, and Chaney Fitness generally
        does not need to store complete credit card information.
      </p>

      <h2>Data Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational measures
        designed to protect the information we collect. However, no method of
        transmission or storage is completely secure, and we cannot guarantee
        absolute security.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain information for as long as reasonably necessary for business,
        legal, accounting, security, and service purposes, and to comply with
        applicable law. When information is no longer needed, we take reasonable
        steps to delete or de-identify it.
      </p>

      <h2>Your Privacy Rights</h2>
      <p>
        Depending on where you live and applicable law, you may have certain
        rights regarding your personal information, which may include:
      </p>
      <ul>
        <li>Access to the information we hold about you</li>
        <li>Correction of inaccurate information</li>
        <li>Deletion of your information</li>
        <li>Information about our data practices</li>
        <li>Opting out of certain targeted advertising where applicable</li>
        <li>Withdrawing consent for certain communications</li>
      </ul>
      <p>
        To make a request, contact us using the information below. We will
        respond consistent with applicable law.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our website is intended for adults. We do not knowingly collect personal
        information from children under 13 through the website. If you believe a
        child has provided us with personal information, please contact us so we
        can take appropriate action.
      </p>

      <h2>Third-Party Websites</h2>
      <p>
        Our website may link to third-party websites or services that we do not
        control. We are not responsible for the privacy practices of those third
        parties, and we encourage you to review their privacy policies.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the effective date above. Your continued use of our website or
        services after changes take effect means you accept the updated policy.
      </p>

      <LegalContact />
    </LegalPage>
  );
}
