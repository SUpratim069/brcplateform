import React, { useState } from 'react';

const TermsOfUse = () => {
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Terms of Use</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">The rules and guidelines governing your use of the Citizen Reputational Bureau platform</p>
      </section>

      {/* Terms Content */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="prose lg:prose-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
          <p>By accessing or using the Citizen Reputational Bureau ("BRC") platform, you agree to be bound by these Terms of Use. If you do not agree to these terms, you may not use our services. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">2. User Eligibility</h2>
          <p>To use BRC services, you must:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
            <li>Have the legal capacity to enter into binding agreements</li>
            <li>Not be prohibited from receiving our services under applicable laws</li>
            <li>Provide accurate and complete registration information</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">3. Account Registration</h2>
          <p>Some features may require account registration. You agree to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Provide accurate and current information</li>
            <li>Maintain the security of your credentials</li>
            <li>Be responsible for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">4. User Conduct</h2>
          <p>You agree not to use the platform to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Submit false, misleading, or defamatory information</li>
            <li>Violate any laws or third-party rights</li>
            <li>Harass, threaten, or intimidate others</li>
            <li>Upload malicious code or interfere with platform operations</li>
            <li>Impersonate any person or entity</li>
            <li>Engage in fraudulent or deceptive activities</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">5. Content Submission</h2>
          <p>By submitting content to BRC, you:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Affirm you have the right to share the content</li>
            <li>Grant BRC a non-exclusive license to use, display, and distribute the content</li>
            <li>Understand content may be publicly visible</li>
            <li>Acknowledge BRC may remove content that violates these terms</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">6. Privacy Policy</h2>
          <p>Your use of BRC is subject to our Privacy Notice, which explains how we collect, use, and protect your information. By using BRC, you consent to our data practices as described in the Privacy Notice.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">7. Intellectual Property</h2>
          <p>All platform content, including text, graphics, logos, and software, is owned by BRC or its licensors and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without express permission.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">8. Dispute Resolution</h2>
          <p>Any disputes arising from these terms shall be resolved through binding arbitration in [Jurisdiction], in accordance with the rules of [Arbitration Organization]. The arbitration shall be conducted in English, and the arbitrator's decision shall be final and binding.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">9. Limitation of Liability</h2>
          <p>BRC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform, even if advised of the possibility of such damages.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">10. Termination</h2>
          <p>BRC reserves the right to suspend or terminate your access to the platform at any time, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties, or for any other reason.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">11. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.</p>

          <div className="bg-gray-100 p-6 rounded-lg mt-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Information</h3>
            <p>For questions about these Terms of Use, please contact:</p>
            <p className="mt-4"><strong>Legal Department</strong><br />
            Citizen Reputational Bureau<br />
            Email: legal@brc-platform.org<br />
            Last Updated: July 2025</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default TermsOfUse;