import { NextPage } from 'next';
import Head from 'next/head';

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | ECHOBYTE CONCEPT</title>
      </Head>

      <section className="bg-[#111827] text-white min-h-screen py-16 px-6 font-sans">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#facc15] mb-8">
          Privacy Policy
        </h1>

        <div className="max-w-3xl mx-auto space-y-6 text-gray-200">
          <p><strong>Effective Date:</strong> 20/02/2025</p>

          <p>
            This Privacy Policy explains how <strong>ECHOBYTE CONCEPT</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, discloses, and safeguards your information when you use our platform to buy or sell digital products.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">1. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Personal Information:</strong> Name, email, payment details, and contact info.</li>
            <li><strong>Account Information:</strong> Login credentials, activity logs.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device info, and usage statistics.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To operate and manage your account.</li>
            <li>To process payments and deliver digital products.</li>
            <li>To improve platform performance and user experience.</li>
            <li>To send you service updates, promotions, and announcements.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">3. Sharing Your Information</h2>
          <p>
            We do not sell your data. We may share your information with:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Service providers assisting in payment processing or hosting.</li>
            <li>Legal authorities if required by law.</li>
            <li>Buyers or sellers involved in a transaction, to ensure delivery.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">4. Cookies and Tracking</h2>
          <p>
            We use cookies and tracking tools to enhance functionality, personalize content, and monitor traffic. You can manage cookie preferences via your browser settings.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">5. Data Security</h2>
          <p>
            We implement industry-standard security practices to protect your data. However, no system is completely secure. Use the platform at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">6. Your Rights</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access and review your personal information.</li>
            <li>Request data deletion or correction.</li>
            <li>Withdraw consent for data usage where applicable.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">7. Third-Party Links</h2>
          <p>
            Our platform may contain links to external sites. We are not responsible for their privacy practices. Review their policies before interacting.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">8. Children&apos;s Privacy</h2>
          <p>
            Our platform is not intended for users under 13. We do not knowingly collect information from minors.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. You will be notified of major changes. Continued use of the platform signifies your acceptance of those changes.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">10. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this policy, please contact us at:
          </p>
          <p>
            <strong>ECHOBYTE CONCEPT</strong><br />
            Email: echobyteconcept@gmail.com<br />
            Phone: +234 706 348 0314
          </p>

          <p className="mt-10 font-semibold text-center text-[#facc15]">
            Thank you for trusting ECHOBYTE CONCEPT. Your privacy matters to us.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;