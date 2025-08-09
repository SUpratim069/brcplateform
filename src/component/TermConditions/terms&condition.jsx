import React, { useState } from 'react';

const TermsAndConditions = () => {
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">Last Updated: July 2025</p>
      </section>

      {/* Terms Content */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="prose lg:prose-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
          <p>By accessing or using the BRC Platform ("Platform"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Platform.</p>
          <p>We reserve the right to modify these Terms at any time. Your continued use of the Platform following any changes constitutes acceptance of those changes.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">2. Platform Description</h2>
          <p>The BRC Platform provides a secure way for individuals to report incidents of workplace issues, corruption, civic concerns, and other matters. We facilitate the submission, documentation, and potential investigation of these cases.</p>
          <p>The Platform is not a substitute for legal action or official reporting channels, but rather a complementary tool for civic documentation.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">3. User Responsibilities</h2>
          <p>When using our Platform, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Provide accurate and truthful information in all submissions</li>
            <li>Only submit information you have the right to disclose</li>
            <li>Not submit false, misleading, or defamatory content</li>
            <li>Not use the Platform for illegal purposes or harassment</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">4. Case Submissions</h2>
          <p>By submitting a case, you:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Affirm the information is true to the best of your knowledge</li>
            <li>Grant BRC a non-exclusive license to use the information for Platform purposes</li>
            <li>Understand we may contact you for verification</li>
            <li>Acknowledge submission doesn't guarantee any specific outcome</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">5. Evidence Guidelines</h2>
          <p>When submitting evidence (documents, images, audio):</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>You must own or have rights to share all materials</li>
            <li>Files must not exceed 25MB each</li>
            <li>Acceptable formats: PDF, JPG, PNG, MP3, WAV</li>
            <li>No illegal, pornographic, or harmful content</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">6. Intellectual Property</h2>
          <p>The BRC Platform and its original content, features, and functionality are owned by us and protected by international copyright, trademark, and other intellectual property laws.</p>
          <p>User-submitted content remains the property of the submitter, but you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute your submissions in connection with the Platform.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, BRC Platform shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Loss of data, profits, or business opportunities</li>
            <li>Accuracy of user-submitted information</li>
            <li>Actions taken based on Platform content</li>
          </ul>
          <p>Our total liability shall not exceed $100 USD in any circumstance.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">8. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>
          <p>Any disputes shall be resolved exclusively in the courts located in San Francisco County, California.</p>

          <div className="bg-gray-100 p-6 rounded-lg mt-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Information</h3>
            <p>For questions about these Terms, please contact us at:</p>
            <p className="mt-4"><strong>Legal Team</strong><br />
            Citizen Reputational Bureau<br />
            Email: legal@brc-platform.org<br />
            Phone: (415) 555-0199</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default TermsAndConditions;