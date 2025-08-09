import { useState } from 'react';

const CCPACompliance = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    setActiveLang(lang);
    console.log('Language switched to:', lang);
  };

  const rightsData = [
    {
      title: "Right to Know and Access",
      badges: ["CCPA"],
      content: (
        <>
          <p>You may request disclosure of:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Categories of personal information collected</li>
            <li>Sources of collection</li>
            <li>Business purposes for collection</li>
            <li>Categories of third parties we share with</li>
            <li>Specific pieces of personal information</li>
          </ul>
        </>
      )
    },
    {
      title: "Right to Deletion",
      badges: ["GDPR", "CCPA"],
      content: (
        <>
          <p>Request deletion of your personal data, subject to legal exceptions including:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Completion of transactions</li>
            <li>Security protections</li>
            <li>Legal compliance</li>
            <li>Public interest archiving</li>
          </ul>
        </>
      )
    },
    {
      title: "Right to Rectification",
      badges: ["GDPR"],
      content: <p>Request correction of inaccurate personal data and completion of incomplete data.</p>
    },
    {
      title: "Right to Restrict Processing",
      badges: ["GDPR"],
      content: <p>Request limitation of how we use your data in certain circumstances.</p>
    },
    {
      title: "Right to Data Portability",
      badges: ["GDPR"],
      content: <p>Receive your data in a structured, commonly used format and transmit it to another controller.</p>
    },
    {
      title: "Right to Object",
      badges: ["GDPR"],
      content: <p>Object to processing of your personal data in certain situations.</p>
    },
    {
      title: "Right to Opt-Out of Sale",
      badges: ["CCPA"],
      content: <p>The Citizen Reputational Bureau does not sell personal information to third parties.</p>
    },
    {
      title: "Right to Non-Discrimination",
      badges: ["CCPA"],
      content: <p>We will not discriminate against you for exercising your privacy rights.</p>
    }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Document metadata is handled by your main layout or index.html */}

      {/* Header with Navigation */}
     

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">CCPA/GDPR Compliance Notice</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">Your privacy rights under California and European Union data protection laws</p>
      </section>

      {/* Compliance Content */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="prose lg:prose-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">1. Introduction</h2>
          <p>The Citizen Reputational Bureau (BRC) is committed to compliance with both the California Consumer Privacy Act (CCPA) and the European Union's General Data Protection Regulation (GDPR). This notice explains your rights under both regulations and how we protect your personal data.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="compliance-card bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-lg mb-2">CCPA Overview</h3>
              <p className="text-gray-600">Provides California residents with specific rights regarding their personal information collected by businesses.</p>
            </div>
            <div className="compliance-card bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-lg mb-2">GDPR Overview</h3>
              <p className="text-gray-600">Regulates data protection and privacy for individuals within the European Union and European Economic Area.</p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">2. Data Collection Practices</h2>
          <p>We collect the following categories of personal information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Identifiers:</strong> Name, alias, contact information, IP address</li>
            <li><strong>Case Documentation:</strong> Information submitted in reputational cases</li>
            <li><strong>Financial Information:</strong> For donations and memberships</li>
            <li><strong>Technical Data:</strong> Browser type, device information, usage patterns</li>
            <li><strong>Location Data:</strong> Approximate geographic location</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">3. Your Rights</h2>
          
          {rightsData.map((right, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg mt-6">
              <div className="flex items-center mb-3">
                {right.badges.includes("CCPA") && (
                  <span className="regulation-badge bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold mr-2">
                    CCPA
                  </span>
                )}
                {right.badges.includes("GDPR") && (
                  <span className="regulation-badge bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold mr-2">
                    GDPR
                  </span>
                )}
                <h3 className="text-xl font-semibold">{right.title}</h3>
              </div>
              {right.content}
            </div>
          ))}

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">4. How to Exercise Your Rights</h2>
          <p>To submit a request regarding your personal data:</p>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Verifiable Request:</strong> Contact us through our designated request methods</li>
            <li><strong>Identity Verification:</strong> We will verify your identity before processing</li>
            <li><strong>Response Time:</strong> We aim to respond within required timeframes (30 days for CCPA, 1 month for GDPR)</li>
          </ol>

          <div className="bg-gray-100 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-semibold mb-3">Request Methods</h3>
            <p><strong>Online Portal:</strong> <a href="#" className="text-blue-600 hover:underline">Privacy Request Portal</a></p>
            <p className="mt-2"><strong>Email:</strong> privacy@brc-platform.org with "Privacy Request" in subject</p>
            <p className="mt-2"><strong>Toll-Free (US):</strong> 1-800-XXX-XXXX</p>
            <p className="mt-2"><strong>EU Representative:</strong> [Your EU Representative Details]</p>
            <p className="mt-2"><strong>Mail:</strong> Citizen Reputational Bureau, Attn: Privacy Officer, [Your Address]</p>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect personal data, including:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Encryption of sensitive data</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Staff training on data protection</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">6. International Data Transfers</h2>
          <p>For GDPR compliance, we ensure appropriate safeguards for international data transfers, including:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>EU Standard Contractual Clauses</li>
            <li>Adequacy decisions where applicable</li>
            <li>Other approved transfer mechanisms</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">7. Data Retention</h2>
          <p>We retain personal data only as long as necessary for:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>The purposes outlined in our Privacy Notice</li>
            <li>Legal and regulatory requirements</li>
            <li>Public interest archiving of reputational cases</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">8. Changes to This Notice</h2>
          <p>We may update this compliance notice periodically. Significant changes will be communicated through our website or directly to affected individuals when required.</p>

          <div className="bg-gray-100 p-6 rounded-lg mt-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Information</h3>
            <p><strong>Privacy Officer (Global)</strong><br />
            Email: privacy@brc-platform.org<br />
            Phone: 1-800-XXX-XXXX</p>
            
            <p className="mt-4"><strong>EU Representative</strong><br />
            [Representative Name]<br />
            [Representative Address]<br />
            Email: eurep@brc-platform.org</p>
            
            <p className="mt-4"><strong>UK Representative</strong><br />
            [Representative Name]<br />
            [Representative Address]<br />
            Email: ukrep@brc-platform.org</p>
            
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
        .compliance-card {
          transition: all 0.3s ease;
        }
        .regulation-badge {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default CCPACompliance;