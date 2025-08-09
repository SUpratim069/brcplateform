import React, { useState } from 'react';

const PrivacyNoticeGDPR = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLanguageToggle = (lang) => {
    setActiveLang(lang);
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header with Navigation */}
    

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Privacy Notice (GDPR)</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">How we collect, use, and protect your personal data in compliance with the General Data Protection Regulation</p>
      </section>

      {/* Privacy Notice Content */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="prose lg:prose-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">1. Data Controller Information</h2>
          <p>The Citizen Reputational Bureau (BRC) is the data controller responsible for your personal data.</p>
          <p className="mt-4"><strong>Contact Details:</strong><br />
          Data Protection Officer<br />
          Citizen Reputational Bureau<br />
          Email: dpo@brc-platform.org<br />
          Postal Address: [Your Registered Office Address]</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">2. Information We Collect</h2>
          <p>We may collect and process the following categories of personal data:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Identity Data:</strong> Name, username, or similar identifier</li>
            <li><strong>Contact Data:</strong> Email address, telephone numbers, postal address</li>
            <li><strong>Case Data:</strong> Information submitted when documenting cases</li>
            <li><strong>Technical Data:</strong> IP address, browser type, operating system</li>
            <li><strong>Usage Data:</strong> Information about how you use our website</li>
            <li><strong>Marketing Data:</strong> Your preferences for receiving communications</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>To register you as a user of our platform</li>
            <li>To process and document cases of reputational concern</li>
            <li>To manage our relationship with you</li>
            <li>To administer and protect our platform</li>
            <li>To deliver relevant website content</li>
            <li>To use data analytics to improve our platform</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">4. Legal Basis for Processing</h2>
          <p>Under GDPR, we rely on the following legal bases for processing personal data:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Consent:</strong> When you have given clear consent</li>
            <li><strong>Contract:</strong> When processing is necessary for a contract</li>
            <li><strong>Legal Obligation:</strong> When processing is required by law</li>
            <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate interests</li>
            <li><strong>Public Interest:</strong> When processing is necessary for a task carried out in the public interest</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">5. Data Sharing and Transfers</h2>
          <p>We may share your personal data with the following parties:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Service providers who provide IT and system administration services</li>
            <li>Professional advisers including lawyers, bankers, and insurers</li>
            <li>Government bodies that require us to report processing activities</li>
            <li>Third parties to whom we may choose to transfer parts of our operations</li>
          </ul>
          <p className="mt-4">We require all third parties to respect the security of your personal data and to treat it in accordance with the law.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">6. Data Security</h2>
          <p>We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. These include:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Access controls and authentication procedures</li>
            <li>Staff training on data protection</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">7. Data Retention</h2>
          <p>We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
          <p className="mt-4">Our standard retention periods are:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>User accounts:</strong> 5 years after last activity</li>
            <li><strong>Case documentation:</strong> 10 years from case closure</li>
            <li><strong>Financial records:</strong> 7 years for tax purposes</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">8. Your Legal Rights</h2>
          <p>Under GDPR, you have rights including:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Right to access:</strong> Request copies of your personal data</li>
            <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Right to erasure:</strong> Request deletion of your personal data</li>
            <li><strong>Right to restrict processing:</strong> Request limitation of processing</li>
            <li><strong>Right to data portability:</strong> Request transfer of your data</li>
            <li><strong>Right to object:</strong> Object to certain types of processing</li>
            <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time</li>
          </ul>
          <p className="mt-4">To exercise any of these rights, please contact our Data Protection Officer.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">9. Changes to This Notice</h2>
          <p>We may update this privacy notice from time to time. The current version will always be posted on our website with an updated revision date.</p>

          <div className="bg-gray-100 p-6 rounded-lg mt-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <p>For questions about this privacy notice or our data practices, please contact:</p>
            <p className="mt-4"><strong>Data Protection Officer</strong><br />
            Citizen Reputational Bureau<br />
            Email: dpo@brc-platform.org<br />
            Postal Address: [Your Registered Office Address]<br />
            Last Updated: July 2025</p>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default PrivacyNoticeGDPR;