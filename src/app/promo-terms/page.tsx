'use client';

import React from 'react';
import { FaShieldAlt, FaExclamationTriangle, FaHandshake, FaLock, FaFileContract, FaArrowLeft } from 'react-icons/fa';

const PromoTerms = () => {
  const returnUrl = "/promo"; // Link back to your main promo or home page

  return (
    <section className="w-full bg-slate-100 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 font-sans min-h-screen">
      <div className="w-full max-w-4xl mx-auto space-y-8">

        {/* Back Link */}
        <div>
          <a 
            href={returnUrl} 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors bg-white px-4 py-2 rounded-xl shadow-xs border border-slate-200"
          >
            <FaArrowLeft />
            <span>Back to Empowerment Promo</span>
          </a>
        </div>

        {/* Header Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-50 text-blue-600 mb-4 shadow-sm border border-blue-100">
            <FaFileContract className="text-3xl" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Promotion Terms & Conditions
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Please read these terms carefully before participating in the <strong className="text-slate-900">EchoByte Concept Reseller Empowerment Promo</strong>. By making payment, you agree to be bound by these policies.
          </p>
          <div className="mt-4 text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
            Last Updated: July 2026 • EchoByte Concept Legal Framework
          </div>
        </div>

        {/* Terms Sections */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">

          {/* Section 1 */}
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <FaShieldAlt className="text-blue-600" />
              <h2>1. Scope of the Promotion</h2>
            </div>
            <p>
              The EchoByte Concept Reseller Empowerment Promo grants participants the right to claim up to three (3) professionally built websites under a one-time promotional fee of ₦50,000. This package is specifically structured to allow participants to utilize one site for personal/business use and reserve two (2) slots for external clients, keeping 100% of their individual client service earnings.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <FaLock className="text-blue-600" />
              <h2>2. Payment, Finality & Non-Refundability</h2>
            </div>
            <p>
              All payments made for the ₦50,000 empowerment promo are <strong className="text-slate-900">strictly non-refundable</strong> under any circumstances. Once payment is processed and verified, your participant slot is locked in. EchoByte Concept maintains a strict zero-refund policy to protect resource allocation and structural delivery commitments.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <FaHandshake className="text-blue-600" />
              <h2>3. Slot Allocation & Reseller Responsibilities</h2>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Unused client slots remain in reserve indefinitely until the participant provides project details for a client website build.</li>
              <li>Participants act as independent resellers/intermediaries. EchoByte Concept handles technical development and code deployment, while the participant is solely responsible for client acquisition, client management, and individual pricing negotiations.</li>
              <li>EchoByte Concept bears no liability for disputes between the reseller and their respective end-clients regarding direct service contracts, independent pricing, or custom scope creep outside standard delivery templates.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <FaExclamationTriangle className="text-amber-500" />
              <h2>4. Hosting, Maintenance & Operational Boundaries</h2>
            </div>
            <p>
              Promotional website builds include standard hosting and maintenance configurations as specified in the package details. EchoByte Concept reserves the right to suspend, throttle, or terminate web deployments if a website is found to host malicious material, engage in fraudulent activities, spamming, copyright infringement, or violations of local and international digital laws.
            </p>
          </div>

          {/* Domain Allocation & Custom Domain Policy */}
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <FaShieldAlt className="text-blue-600" />
              <h2>5. Domain Allocation & Custom Domains</h2>
            </div>
            <p>
              Websites are deployed on our high-speed standard platform subdomain (e.g., <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600 font-mono text-xs">clientname.vercel.app</code>), which includes full performance optimization and SSL security.
            </p>
            <p className="mt-2">
              If a client desires a custom domain (e.g., <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-900 font-mono text-xs">yourbusiness.com</code>), the acquisition and purchase of the domain remain the sole responsibility of the client. However, EchoByte Concept can optionally facilitate the custom domain purchase and configuration on behalf of the client for a professional service fee, which varies depending on the chosen domain extension (e.g., <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-mono text-xs">.com</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-mono text-xs">.ng</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-mono text-xs">.com.ng</code>).
            </p>
          </div>

          {/* Annual Hosting & Domain Renewal Policy */}
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <FaShieldAlt className="text-blue-600" />
              <h2>6. Annual Hosting & Domain Renewals</h2>
            </div>
            <p>
              Website hosting and custom domains operate on an annual renewal cycle, and maintaining these active services is the sole financial responsibility of the client. 
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 mt-2">
              <li>
                <strong className="text-slate-900">Hosting Renewal:</strong> Continued hosting and maintenance of your website on our high-speed infrastructure is billed at an annual renewal fee of <strong className="text-slate-900">₦ 30,000</strong> per year for each website.
              </li>
              <li>
                <strong className="text-slate-900">Custom Domain Renewal:</strong> If using a custom domain, the annual domain registry renewal cost will depend entirely on the current rates set by the official domain registrar and extension choice (e.g., <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-mono text-xs">.com</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-mono text-xs">.com.ng</code>).
              </li>
            </ul>
            <p className="mt-2 text-xs text-slate-500">
              Failure to renew hosting or domain services prior to the expiration date may result in temporary service suspension or data archival until payment is settled.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <FaShieldAlt className="text-blue-600" />
              <h2>7. Limitation of Liability</h2>
            </div>
            <p>
              EchoByte Concept, its directors, developers, and affiliates shall not be held liable for any direct, indirect, incidental, or consequential damages—including loss of profits, data loss, business interruption, or server downtimes caused by third-party infrastructure failures—arising out of the use or inability to use the websites provided under this promotion.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <FaFileContract className="text-blue-600" />
              <h2>8. Modification and Termination of Promo</h2>
            </div>
            <p>
              EchoByte Concept reserves the absolute right to modify, suspend, or terminate this promotional campaign, pricing model, or associated terms at any time without prior notice. 
            </p>
          </div>

        </div>

        {/* Footer Action Card */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white text-center shadow-xl space-y-3">
          <h3 className="font-bold text-sm sm:text-base">Have questions regarding these terms?</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Reach out to our support team for further questions.
          </p>
          <div>
            <a 
              href='/contactus'
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:scale-105 transition-all"
            >
             Contact us 
            </a>
          </div>

              <div>
          <a 
            href={returnUrl} 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors bg-white px-4 py-2 rounded-xl shadow-xs border border-slate-200"
          >
            <FaArrowLeft />
            <span>Back to Empowerment Promo</span>
          </a>
        </div>
        </div>

      </div>
    </section>
  );
};

export default PromoTerms;