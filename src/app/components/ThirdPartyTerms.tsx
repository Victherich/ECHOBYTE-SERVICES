
import { NextPage } from 'next';

const ThirdPartyTerms: NextPage = () => {
  return (
    <section className="bg-[#111827] text-white min-h-screen py-16 px-6 font-sans">
      <h1 className="text-4xl md:text-3xl font-bold text-center text-[#facc15] mb-8" style={{ textDecoration: "underline" }}>
        Third-Party Services
      </h1>

      <div className="max-w-3xl mx-auto space-y-6 text-gray-200">
        <p><strong>Effective Date:</strong> 20/02/2025</p>

        <p>
          These Terms and Conditions govern your use of third-party services provided through or in connection with <strong>ECHOBYTE CONCEPT</strong> (“we”, “us”, or “our”), including but not limited to domain registration, web hosting, databases, and payment integrations. By using any third-party services arranged or implemented by us, you agree to be bound by these terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">1. Third-Party Providers</h2>
        <p>
          We may engage third-party vendors to provide certain components of your solution. These vendors include domain registrars, hosting companies, cloud database providers, and payment gateway operators (e.g., Stripe, Paystack, etc.). All such services are subject to the terms and policies of the respective third-party providers.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">2. Limited Role</h2>
        <p>
          ECHOBYTE CONCEPT acts solely as a facilitator in integrating or arranging third-party services and does not own, control, or provide warranties for their performance, reliability, uptime, or security. All interactions, transactions, or disputes regarding third-party services are between you and the provider.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">3. Client Responsibility</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>It is your responsibility to review and accept the third-party provider’s terms and conditions.</li>
          <li>You must ensure prompt payment of any applicable fees directly or via us, where applicable, to avoid service disruption.</li>
          {/* <li>You are responsible for the management of third-party service accounts (e.g., credentials, renewal alerts, usage policies).</li> */}
        </ul>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">4. No Warranty</h2>
        <p>
          We make no warranties or representations regarding the quality, availability, security, or suitability of third-party services. These services are offered “as is” and are subject to change, disruption, or discontinuation at the sole discretion of the third-party provider.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">5. Downtime & Service Interruptions</h2>
        <p>
          We are not liable for downtime, data loss, or service unavailability caused by third-party platforms. This includes, but is not limited to, domain DNS propagation delays, hosting outages, payment gateway downtime, or external database service failures.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">6. Termination or Suspension</h2>
        <p>
          Third-party providers may suspend or terminate services independently of our involvement. We are not responsible for reinstating or recovering such services, though we may assist upon request for a separate fee.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">7. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless ECHOBYTE CONCEPT and its affiliates from and against any and all claims, liabilities, damages, or costs arising from your use of third-party services or your violation of the provider’s terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">8. Refunds and Disputes</h2>
        <p>
          Payments made for third-party services are non-refundable once processed unless otherwise stated by the third-party provider. All refund requests or disputes must be directed to the provider. We do not guarantee or manage any outcomes related to such disputes.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">9. Ownership and Access</h2>
        <p>
          Depending on the service model, ownership of accounts (e.g., domain control panels, payment gateways) may reside with you or ECHOBYTE CONCEPT as agreed. Upon full payment and completion of obligations, ownership may be transferred if not previously specified.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">10. Security & Compliance</h2>
        <p>
          While we implement best practices during integrations, ultimate responsibility for ensuring PCI-DSS, GDPR, or other compliance standards lies with the third-party provider and with you as the account holder.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">11. Limitation of Liability</h2>
        <p>
          Under no circumstances shall ECHOBYTE CONCEPT be liable for direct, indirect, incidental, consequential, or punitive damages resulting from the use of or inability to use any third-party service. Our maximum liability is limited to any service fee paid to us (not to the third party) within the past 30 days for integration-related work only.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">12. Updates to These Terms</h2>
        <p>
          We reserve the right to update these Terms and Conditions at any time. Continued use of our services implies acceptance of any revised terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#facc15] mt-8">13. Contact</h2>
        <p>
          For any questions or clarifications regarding these terms, please contact us at:<br />
          <strong>ECHOBYTE CONCEPT</strong><br />
          Email: echobyteconcept@gmail.com<br />
          Phone: +234 706 348 0314
        </p>

        <p className="mt-10 font-semibold text-center text-[#facc15]">
          Thank you for trusting ECHOBYTE CONCEPT with your digital infrastructure and third-party integrations.
        </p>
      </div>
    </section>
  );
};

export default ThirdPartyTerms;
