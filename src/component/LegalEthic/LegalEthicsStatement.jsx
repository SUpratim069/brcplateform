const LegalEthicsStatement = () => {
  const ethicalPrinciples = [
    {
      title: "Truth & Accuracy",
      description: "We prioritize factual accuracy and require verifiable evidence for all submissions, while acknowledging the complexity of truth in reputational matters."
    },
    {
      title: "Due Process",
      description: "All subjects of documentation receive notice and opportunity to respond before publication, with clear procedures for rebuttal and appeal."
    },
    {
      title: "Proportionality",
      description: "We assess the severity of claims against available evidence, ensuring documentation reflects appropriate scope and context."
    },
    {
      title: "Public Interest",
      description: "Documentation serves legitimate civic purposes - exposing misconduct, protecting communities, and promoting accountability."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <head>
        <title>Legal Ethics Statement - BRC</title>
        <meta name="description" content="Legal and Ethical Standards for the Citizen Reputational Bureau" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://yourwebsite.com/legal-ethics" />
      </head>

      {/* Header with Navigation */}
     

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Legal Ethics Statement</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">Our commitment to ethical standards in documentation and reputational justice</p>
      </section>

      {/* Ethics Content */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="prose lg:prose-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">1. Foundational Principles</h2>
          <p>The Citizen Reputational Bureau operates under these core ethical principles that guide all our activities and platform operations:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {ethicalPrinciples.map((principle, index) => (
              <div key={index} className="ethics-card bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-lg mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">2. Documentation Standards</h2>
          <p>All case documentation must meet these ethical standards:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Verification:</strong> Submitters must provide supporting evidence for factual claims</li>
            <li><strong>Context:</strong> Documentation must include relevant background and circumstances</li>
            <li><strong>Balance:</strong> Submitters should acknowledge any contradictory evidence</li>
            <li><strong>Privacy:</strong> Personal information not relevant to the case should be redacted</li>
            <li><strong>Timeliness:</strong> Documentation should reflect current information or clearly note historical context</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">3. Right to Response</h2>
          <p>We uphold these ethical practices regarding responses:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Subjects receive notification before publication with clear response instructions</li>
            <li>Responses receive equal prominence to original documentation</li>
            <li>We facilitate mediation in cases of factual disputes</li>
            <li>Corrections are published promptly with clear change documentation</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">4. Moderation Ethics</h2>
          <p>Our content moderation follows these principles:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Transparency in moderation decisions and criteria</li>
            <li>Consistency in applying platform rules</li>
            <li>Opportunity for appeal of moderation decisions</li>
            <li>Protection against misuse while preserving legitimate documentation</li>
            <li>Regular review of moderation practices by independent ethics advisors</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">5. Conflict of Interest</h2>
          <p>We maintain strict policies regarding conflicts:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Staff and reviewers must disclose potential conflicts</li>
            <li>Cases involving BRC personnel receive independent review</li>
            <li>Funding sources are transparent and do not influence case documentation</li>
            <li>No paid removals or alterations of documentation</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">6. Continuous Improvement</h2>
          <p>Our ethical framework evolves through:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Annual ethics reviews by external experts</li>
            <li>Public comment periods for policy changes</li>
            <li>Case studies of ethical dilemmas for staff training</li>
            <li>Transparent reporting on ethical challenges faced</li>
          </ul>

          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg mt-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Ethics Committee Contact</h3>
            <p>To report ethical concerns or seek guidance:</p>
            <p className="mt-2"><strong>Ethics Review Board</strong><br />
            Citizen Reputational Bureau<br />
            Email: ethics@brc-platform.org<br />
            Confidential Hotline: +1 (555) 123-4567<br />
            Last Reviewed: July 2025</p>
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
        .ethics-card {
          transition: all 0.3s ease;
        }
        .ethics-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default LegalEthicsStatement;