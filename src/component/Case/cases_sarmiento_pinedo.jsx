import { useState } from 'react';

const SarmientoCase = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    response: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
    setFormData({
      name: '',
      email: '',
      response: ''
    });
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Case Header - Centered */}
      <header className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold">Case Profile</h1>
          <p className="text-sm">José Eduardo Ignacio Sarmiento Pinedo</p>
        </div>
      </header>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 px-4 py-3 text-sm rounded-md my-6 max-w-5xl mx-auto">
        <strong>LEGAL NOTICE:</strong>
        This platform does not issue legal judgments. It documents citizen reports with supporting evidence and offers full right of reply.
        The individuals mentioned are presumed innocent. This is a transparency and prevention tool.
      </div>

      {/* Case Summary */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">1. Case Summary</h2>
        <div className="space-y-4">
          <p><strong>Relationship beginning:</strong> This relationship started as a friendship when the complainant was beginning a construction project. Three lump-sum, time-bound contracts were signed.</p>
          <p><strong>Conflict:</strong> Despite a fixed-price, fixed-term contract, he unjustifiably demanded more money. He had done full due diligence before signing, and third-party experts confirmed the info provided was more than sufficient. Other bidders even quoted lower prices.</p>
          <p><strong>Demands:</strong> He demanded additional payments without justification, even after signing a settlement agreement.</p>
          <p><strong>Threats:</strong> Two years later, threats and intimidating messages began, including social media posts.</p>
          <p><strong>Impact on third parties:</strong> Threats and defamation included family members (children, wife, mother), professional reputation, and social standing.</p>
        </div>
      </section>

      {/* Related Contacts */}
      <section className="bg-gray-100 py-8 px-4 max-w-5xl mx-auto rounded">
        <h3 className="text-xl font-semibold mb-2">Related Contacts</h3>
        <div className="text-sm space-y-2">
          <p><strong>Note:</strong> Contact information is kept confidential and only shared with authorized parties for verification purposes.</p>
          <p>To request verified contact information for legitimate purposes, please <a href="index.html" className="text-blue-600 underline">contact our Data Protection Officer</a> with your official request.</p>
        </div>
      </section>

      {/* Evidence */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">2. Public Evidence</h2>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">PDF Document</h4>
            <a className="text-blue-600 underline" href="https://limewire.com/d/HiXTs#eWezzkrK3k" target="_blank" rel="noopener noreferrer">View PDF Document</a>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Audio Evidence 1</h4>
            <audio controls className="w-full">
              <source src="Evidencia02_MensajesWhatsapp_Sarmiento colombiano Milton 14 de Julio.m4a" type="audio/mp4" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Audio Evidence 2</h4>
            <audio controls className="w-full">
              <source src="https://limewire.com/d/rvszB#1wj32tu3YP" type="audio/mp4" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Image (Social Media)</h4>
            <img src="20097a80-c735-47d4-b6bc-dac3beccbae9.png" alt="Facebook post evidence" className="rounded shadow max-w-full" />
          </div>

          <div>
            <h4 className="font-semibold mb-2">Facebook/WhatsApp Evidence Link</h4>
            <a className="text-blue-600 underline" href="https://limewire.com/d/zMJuz#HxcWBqSgRj" target="_blank" rel="noopener noreferrer">View social media post</a>
          </div>
        </div>
      </section>

      {/* Public Reply Form */}
      <section className="bg-gray-100 py-10 px-4 max-w-5xl mx-auto rounded">
        <h2 className="text-xl font-bold mb-4">3. Right to Reply</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name"
            placeholder="Full name" 
            className="w-full p-2 border rounded" 
            required 
            value={formData.name}
            onChange={handleInputChange}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email address" 
            className="w-full p-2 border rounded" 
            required 
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea 
            rows="4" 
            name="response"
            placeholder="Your public response..." 
            className="w-full p-2 border rounded" 
            required 
            value={formData.response}
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Submit Response</button>
        </form>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md mx-4">
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="mb-4">Thank you for submitting your response. José Eduardo Ignacio Sarmiento Pinedo will reply to your message.</p>
            <button 
              onClick={closeModal}
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 w-full"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
     

    </div>
  );
};

export default SarmientoCase;