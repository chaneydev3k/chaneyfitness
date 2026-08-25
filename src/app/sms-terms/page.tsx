import type { Metadata } from "next";
import Link from "next/link";

import { LegalContact, LegalPage } from "@/components/layout/legal-page";

const EFFECTIVE = "August 25, 2026";

export const metadata: Metadata = {
  title: "SMS Terms & Conditions",
  description:
    "How the Chaney Fitness text messaging program works, including consent, message frequency, opting out, and help.",
  alternates: { canonical: "/sms-terms" },
};

export default function SmsTermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="SMS Terms & Conditions"
      updated={EFFECTIVE}
      intro="These SMS Terms & Conditions describe the Chaney Fitness text messaging program and the choices available to you."
    >
      <h2>SMS Program</h2>
      <p>
        Chaney Fitness may send SMS/text messages to individuals who voluntarily
        provide their phone number and give the appropriate consent. These
        messages may include:
      </p>
      <ul>
        <li>Consultation follow-ups</li>
        <li>Appointment reminders</li>
        <li>Training-related communications</li>
        <li>Customer service communications</li>
        <li>Promotional and marketing messages where properly permitted</li>
        <li>Other communications relating to Chaney Fitness services</li>
      </ul>

      <h2>Consent</h2>
      <p>
        SMS consent is voluntary. Your consent to receive marketing text messages
        is not a condition of purchasing any Chaney Fitness service. Please
        provide your phone number only if you want to receive the applicable
        communications. Marketing SMS consent is collected through an appropriate
        opt-in mechanism.
      </p>

      <h2>Message Frequency</h2>
      <p>
        Message frequency may vary depending on your interactions with Chaney
        Fitness. We do not promise a specific number of messages.
      </p>

      <h2>Message and Data Rates</h2>
      <p>Message and data rates may apply.</p>

      <h2>Opt Out</h2>
      <p>
        You may opt out of marketing text messages at any time by replying{" "}
        <strong>STOP</strong>. After you opt out, you should no longer receive
        marketing SMS messages, except where another type of communication is
        legally permitted or necessary to provide a service you requested.
      </p>

      <h2>Help</h2>
      <p>
        You may reply <strong>HELP</strong> for assistance where supported, or
        contact us using the information below.
      </p>

      <h2>Re-subscribe</h2>
      <p>
        If you have opted out, you may re-subscribe to SMS communications by
        following the applicable opt-in process provided by Chaney Fitness.
      </p>

      <h2>Carriers</h2>
      <p>
        Wireless carriers are not responsible for delayed or undelivered
        messages. Delivery of messages is subject to effective transmission by
        your carrier and may be affected by factors outside our control.
      </p>

      <h2>Privacy</h2>
      <p>
        Our handling of your information is described in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Terms</h2>
      <p>
        Your use of our services is also governed by our{" "}
        <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>.
      </p>

      <h2>Contact</h2>
      <p>If you have questions about our SMS program, please contact us:</p>

      <LegalContact heading="Chaney Fitness" />
    </LegalPage>
  );
}
