const LegalDisclaimer = () => {
  return (
    <div className="min-h-screen bg-white">
      <head>
        <title>Legal Disclaimers - BRC</title>
        <meta name="description" content="Legal disclaimers for the Citizen Reputational Bureau platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://yourwebsite.com/legal-disclaimer" />
      </head>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Legal Disclaimers</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">Important legal information regarding the use of the Citizen Reputational Bureau platform</p>
      </section>

      {/* Legal Content */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="prose lg:prose-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">1. General Disclaimer</h2>
          <p>The Citizen Reputational Bureau (BRC) is a civil justice platform where citizens can document personal, community, or systemic injustices. BRC is not a court of law, government agency, or official judicial body. The information contained on this platform represents user-submitted documentation and does not constitute legal findings or determinations of fact.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">2. Nature of Content</h2>
          <p>All case documentation, reports, and evidence submitted to BRC are provided by users of the platform. BRC does not independently verify the accuracy, completeness, or veracity of user-submitted content unless explicitly stated. Users are solely responsible for the content they submit.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">3. No Legal Advice</h2>
          <p>The materials and information on this platform are provided for informational purposes only and do not constitute legal advice. BRC is not a law firm and does not provide legal services or representation. Users should consult with qualified legal professionals for specific legal advice.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">4. Limitation of Liability</h2>
          <p>BRC shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>The use or inability to use the service</li>
            <li>Unauthorized access to or alteration of your transmissions or data</li>
            <li>Statements or conduct of any third party on the service</li>
            <li>Any other matter relating to the service</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">5. User Responsibilities</h2>
          <p>By using this platform, you agree:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>To provide accurate and truthful information in your submissions</li>
            <li>Not to submit defamatory, libelous, or knowingly false information</li>
            <li>To comply with all applicable laws and regulations</li>
            <li>To respect the privacy and rights of others</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">6. Intellectual Property</h2>
          <p>All content submitted to BRC remains the intellectual property of the original submitter. By submitting content, users grant BRC a non-exclusive, worldwide, royalty-free license to use, display, and distribute the content in connection with the platform's operations.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">7. Right to Response</h2>
          <p>Individuals named in case documentation have the right to submit responses or rebuttals, which will be published alongside the original content in accordance with our policies.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">8. Content Moderation</h2>
          <p>BRC reserves the right to remove or modify any content that violates our terms of service or community guidelines, including but not limited to content that is unlawful, threatening, abusive, harassing, defamatory, or otherwise objectionable.</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">9. Jurisdiction</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions. Any legal action relating to these terms or use of the platform shall be brought exclusively in the courts located in [Jurisdiction].</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">10. Changes to Disclaimers</h2>
          <p>BRC reserves the right to modify these disclaimers at any time. Continued use of the platform following any changes constitutes acceptance of the new terms.</p>

          <div className="bg-gray-100 p-6 rounded-lg mt-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Information</h3>
            <p><strong>Legal Department</strong><br />
            Citizen Reputational Bureau<br />
            Email: legal@brc-platform.org<br />
            Phone: 1-800-XXX-XXXX</p>
            <p className="mt-4">Last Updated: July 2025</p>
          </div>
        </div>
      </section>

      {/* Footer */}
     

      <style jsx global>{`
        .lang-toggle {
          background-color: #f3f4f6;
          border-radius: 9999px;
          padding: 0.25rem;
          display: inline-flex;
        }
      `}</style>
    </div>
  );
};

export default LegalDisclaimer;