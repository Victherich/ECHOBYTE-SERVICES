import { NextPage } from 'next';
// import Head from 'next/head'; // Removed as it was declared but not used

const TermsAndConditionsServices: NextPage = () => {
  return (
    <>
      {/* <Head> was removed as it was defined but not used. If needed for this page, add it back and populate with <title> and <meta> tags. */}

      <section className="bg-[#111827] text-white min-h-screen py-16 px-6 font-sans">
        <h1 className="text-4xl md:text-3xl font-bold text-center text-[#facc15] mb-8" style={{ textDecoration: "underline" }}>
          Services
        </h1>

        <div className="max-w-3xl mx-auto space-y-6 text-gray-200">
          <p><strong>Effective Date:</strong> 20/02/2025</p>

          <p>
            Welcome to <strong>ECHOBYTE CONCEPT</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our services, which include but are not limited to **web development, digital marketing, app development, and all kinds of digital tech services**, you agree to comply with and be bound by the following Terms and Conditions.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">1. Acceptance of Terms</h2>
          <p>
            By engaging our services, using or Browse our platform, or entering into any agreement with us for digital tech services, you agree to these Terms. If you do not agree, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">2. Eligibility</h2>
          <p>
            You must be at least 18 years old or have reached the age of majority in your jurisdiction to engage our services. If you are entering into these Terms on behalf of an entity, you represent that you have the authority to bind such entity to these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">3. Scope of Services</h2>
          <p>
            ECHOBYTE CONCEPT offers a range of digital tech services including, but not limited to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>**Web Development:** Design, development, and maintenance of websites, e-commerce platforms, and web applications.</li>
            <li>**Digital Marketing:** Search Engine Optimization (SEO), Social Media Marketing (SMM), Content Marketing, Email Marketing, Pay-Per-Click (PPC) advertising, and other online promotional activities.</li>
            <li>**App Development:** Design, development, and deployment of mobile applications for various platforms (e.g., iOS, Android).</li>
            <li>**Other Digital Tech Services:** Any other technology-related services as agreed upon in a separate service agreement or project proposal.</li>
          </ul>
          <p>
            Specific details, deliverables, timelines, and costs for each service will be outlined in a separate **Project Proposal, Service Agreement, or Statement of Work (SOW)**, which, upon acceptance, will form an integral part of these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">4. Client Responsibilities</h2>
          <p>
            To ensure the successful delivery of our services, you agree to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide timely and accurate information, content, and feedback required for the project.</li>
            <li>Ensure that all materials provided to us (e.g., text, images, logos) do not infringe on the intellectual property rights of any third party.</li>
            <li>Approve deliverables and provide sign-offs within agreed-upon timelines.</li>
            <li>Make timely payments as per the agreed payment schedule.</li>
            <li>Appoint a primary contact person for all communications related to the project.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">5. Project Timelines and Deliverables</h2>
          <p>
            Project timelines and specific deliverables will be clearly defined in the respective Project Proposal, Service Agreement, or SOW. While we strive to adhere to agreed-upon schedules, delays may occur due to unforeseen circumstances, client delays in providing information, or scope changes. We will communicate any potential delays promptly.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">6. Payments and Fees</h2>
          <p>
            Fees for our services will be outlined in the Project Proposal, Service Agreement, or SOW. Unless otherwise specified, payments are due as per the agreed schedule. Failure to make timely payments may result in the suspension of services or project delays. All prices are subject to change with prior notice.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">7. Intellectual Property</h2>
          <p>
            Unless otherwise agreed in a separate written agreement:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Upon full and final payment for a specific project, the **client will own the intellectual property rights** to the final deliverables created specifically for them (e.g., website code, application source code, marketing creatives).</li>
            <li>ECHOBYTE CONCEPT retains ownership of any pre-existing tools, methodologies, frameworks, or generic code libraries used in the development process.</li>
            <li>All site content, including but not limited to text, graphics, logos, and software used on our own platform, is owned by or licensed to ECHOBYTE CONCEPT.</li>
            <li>You grant us a limited, non-exclusive, royalty-free license to use your company name, logo, and project details for our portfolio and marketing purposes, unless you explicitly request otherwise in writing.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">8. Revisions and Acceptance</h2>
          <p>
            The number of revisions included in a project will be specified in the Project Proposal or SOW. Any additional revisions beyond the agreed-upon scope may be subject to additional charges. Final deliverables will be subject to your review and acceptance within a specified period. Once accepted, any further changes may incur additional fees.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">9. Prohibited Conduct</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Breaking laws or regulations.</li>
            <li>Uploading or providing malicious content (e.g., viruses, malware).</li>
            <li>Infringing on the intellectual property or proprietary rights of others.</li>
            <li>Engaging in fraud or deception.</li>
            <li>Using our services for any illegal or unauthorized purpose.</li>
            <li>Interfering with or disrupting the integrity or performance of our services or data contained therein.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">10. Warranty and Disclaimers</h2>
          <p>
            We warrant that our services will be performed in a professional and workmanlike manner. **However, we do not guarantee that our services will be error-free, uninterrupted, or meet all of your specific requirements beyond what is explicitly agreed upon in the Project Proposal or SOW.** We are not responsible for:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Downtime, interruption of service, or data loss caused by third-party hosting providers, internet service providers, or other external factors beyond our direct control.</li>
            <li>Changes or issues arising from third-party integrations, plugins, or services not directly managed or developed by ECHOBYTE CONCEPT.</li>
            <li>The effectiveness of digital marketing campaigns, as results can vary due to market conditions, competition, and other external factors.</li>
          </ul>
          <p>
            **All services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, express or implied, except as expressly stated herein.**
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">11. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, ECHOBYTE CONCEPT shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services; (ii) any conduct or content of any third party on the services; (iii) any content obtained from the services; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose. **Our total liability for any claim arising out of or relating to these Terms or your use of our services shall not exceed the total fees paid by you to ECHOBYTE CONCEPT for the specific service from which the liability arose in the six (6) months preceding the event giving rise to the liability.**
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">12. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless ECHOBYTE CONCEPT, its directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees and costs, arising out of or in any way connected with your access to or use of our services, your violation of these Terms, or your infringement of any intellectual property or other right of any person or entity.</p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">13. Privacy</h2>
          <p>Your data and privacy are governed by our separate **Privacy Policy**, which is incorporated by reference into these Terms and Conditions. Please review our Privacy Policy to understand our practices regarding your personal information.</p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">14. Termination of Services</h2>
          <p>
            Either party may terminate a specific service agreement or project engagement as outlined in the Project Proposal or SOW. Without prejudice to any other rights, ECHOBYTE CONCEPT may suspend or terminate your access to our services, or any part thereof, if you breach these Terms and Conditions or the terms of any specific service agreement. Upon termination, you remain liable for all outstanding fees for services rendered up to the date of termination.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">15. Changes to Terms</h2>
          <p>We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms on this page and updating the &quot;Effective Date&quot; at the top of these Terms. Your continued use of our services after such modifications will constitute your acknowledgment of the modified Terms and agreement to abide and be bound by the modified Terms.</p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">16. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the services provided shall be resolved in the courts of this jurisdiction.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">17. Entire Agreement</h2>
          <p>
            These Terms and Conditions, together with any applicable Project Proposal, Service Agreement, or SOW, constitute the entire agreement between you and ECHOBYTE CONCEPT regarding the services, and supersede and replace any prior agreements, understandings, or representations, whether written or oral.
          </p>

          <h2 className="text-2xl font-semibold text-[#facc15] mt-8">18. Contact Us</h2>
          <p>
            <strong>ECHOBYTE CONCEPT</strong><br />
            Email: echobyteconcept@gmail.com<br />
            Phone: +234 706 348 0314
          </p>

          <p className="mt-10 font-semibold text-center text-[#facc15]">
            Thank you for choosing ECHOBYTE CONCEPT. We look forward to partnering with you on your digital journey!
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsServices;