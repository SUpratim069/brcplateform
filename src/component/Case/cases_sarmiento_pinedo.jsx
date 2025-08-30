import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import music1 from "../../assets/audio/BRC-Evidencia03_Notificaciones_Sarmiento colombiano a mi mama 21 julio 2024.jpg_.m4a";
import music2 from "../../assets/audio/Evidencia02_MensajesWhatsapp_Sarmiento colombiano Milton 14 de Julio.m4a";
import img1 from "../../assets/pdf/face.jpg"
import img2 from "../../assets/pdf/face1.PNG"
import img3 from "../../assets/pdf/face2.PNG"
import img4 from "../../assets/pdf/face3.jpg"


const SarmientoCase = () => {
  const { t } = useTranslation();
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
          <h1 className="text-3xl font-bold">{t('sarmiento_case.case_profile')}</h1>
          <p className="text-sm">José Eduardo Ignacio Sarmiento Pinedo</p>
        </div>
      </header>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 px-4 py-3 text-sm rounded-md my-6 max-w-5xl mx-auto">
        <strong>{t('sarmiento_case.legal_notice_title')}:</strong> {t('sarmiento_case.legal_notice')}
      </div> 

      {/* Case Summary */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{t('sarmiento_case.case_summary')}</h2>
        <div className="space-y-4">
          <p><strong>{t('sarmiento_case.relationship_beginning')}:</strong> <br />  {t('sarmiento_case.relationship_beginning_text')}<br />  
           {t('sarmiento_case.relationship_beginning_text1')}<br />          
             {t('sarmiento_case.relationship_beginning_text2')}<br />  
             {t('sarmiento_case.relationship_beginning_text3')}<br />  
               {t('sarmiento_case.relationship_beginning_text3')}<br /> 
          </p>
          <p><strong>{t('sarmiento_case.conflict')}:</strong> {t('sarmiento_case.conflict_text')}</p>
          
          <p><strong>{t('sarmiento_case.demands')}:</strong> {t('sarmiento_case.demands_text')}</p>
          <p><strong>{t('sarmiento_case.threats')}:</strong> {t('sarmiento_case.threats_text')}</p>
          {/* <p><strong>{t('sarmiento_case.impact')}:</strong> {t('sarmiento_case.impact_text')}</p> */}
        </div>
      </section>

      {/* Related Contacts */}
      <section className="bg-gray-100 py-8 px-4 max-w-5xl mx-auto rounded">
        <h3 className="text-xl font-semibold mb-2">{t('sarmiento_case.related_contacts')}</h3>
        <div className="text-sm space-y-2">
          <p><strong>{t('sarmiento_case.contact_note')}:</strong> {t('sarmiento_case.contact_text')}</p>
          <p>{t('sarmiento_case.to_request_contact')} <a href="index.html" className="text-blue-600 underline">{t('sarmiento_case.contact_link')}</a> {t('sarmiento_case.with_your_request')}</p>
        </div>
      </section>

      {/* Evidence */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{t('sarmiento_case.public_evidence')}</h2>

        <div className="space-y-6">

     <div>
            <h4 className="font-semibold mb-2">{t('sarmiento_case.pdf_document')}</h4>
            <a className="text-blue-600 underline" href="https://docs.google.com/document/d/1zs1zLkRz05sfE5inkWwVIAgCCaJt7tQD27PCD6i6zsI/" target="_blank" rel="noopener noreferrer">{t('sarmiento_case.view_pdf')}</a>
          </div>

          <div>
            <h4 className="font-semibold mb-2">{t('sarmiento_case.pdf_document')}</h4>
            <a className="text-blue-600 underline" href="https://docs.google.com/document/d/1P85iqL-FHBeCFCSBuyXctA24WY6jd2-O/edit?tab=t.0" target="_blank" rel="noopener noreferrer">{t('sarmiento_case.view_pdf')}</a>
          </div>

           <div>
            <h4 className="font-semibold mb-2">{t('sarmiento_case.pdf_document')}</h4>
            <a className="text-blue-600 underline" href="https://drive.google.com/drive/folders/1raUrPC-9sVaTj2V3C80Mn_RXIRNbmjzL" target="_blank" rel="noopener noreferrer">{t('sarmiento_case.view_pdf')}</a>
          </div>

          <div>
            <h4 className="font-semibold mb-2">{t('sarmiento_case.audio_evidence_1')}</h4>
            <audio controls className="w-full">
              <source src={music2} type="audio/mp4" />
              {t('sarmiento_case.browser_no_audio')}
            </audio>
          </div>

          <div>
            <h4 className="font-semibold mb-2">{t('sarmiento_case.audio_evidence_2')}</h4>
           <audio controls className="w-full">
  <source src={music1} type="audio/mp4" />
  {t('sarmiento_case.browser_no_audio')}
</audio>
          </div>

          <div>
            <h4 className="font-semibold mb-2">{t('sarmiento_case.audio_evidence_5')}</h4>
           <audio controls className="w-full">
  <source src={music1} type="audio/mp4" />
  {t('sarmiento_case.browser_no_audio')}
</audio>
          </div>

<div>
  <h4 className="font-semibold mb-2">{t('sarmiento_case.social_media_evidence')}</h4>

  <a className="text-blue-600 underline" href={img1} target="_blank" rel="noopener noreferrer">
    {t('sarmiento_case.view_social_media')} 1
  </a><br />

  <a className="text-blue-600 underline" href={img2} target="_blank" rel="noopener noreferrer">
    {t('sarmiento_case.view_social_media')} 2
  </a><br />

  <a className="text-blue-600 underline" href={img3} target="_blank" rel="noopener noreferrer">
    {t('sarmiento_case.view_social_media')} 3
  </a><br />

  <a className="text-blue-600 underline" href={img4} target="_blank" rel="noopener noreferrer">
    {t('sarmiento_case.view_social_media')} 4
  </a>
</div>


        </div>
      </section>

      {/* Public Reply Form */}
      <section className="bg-gray-100 py-10 px-4 max-w-5xl mx-auto rounded">
        <h2 className="text-xl font-bold mb-4">{t('sarmiento_case.right_to_reply')}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name"
            placeholder={t('sarmiento_case.full_name')} 
            className="w-full p-2 border rounded" 
            required 
            value={formData.name}
            onChange={handleInputChange}
          />
          <input 
            type="email" 
            name="email"
            placeholder={t('sarmiento_case.email_address')} 
            className="w-full p-2 border rounded" 
            required 
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea 
            rows="4" 
            name="response"
            placeholder={t('sarmiento_case.public_response')} 
            className="w-full p-2 border rounded" 
            required 
            value={formData.response}
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            {t('sarmiento_case.submit_response')}
          </button>
        </form>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md mx-4">
            <h3 className="text-xl font-bold mb-2">{t('sarmiento_case.thank_you')}</h3>
            <p className="mb-4">{t('sarmiento_case.success_message')}</p>
            <button 
              onClick={closeModal}
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 w-full"
            >
              {t('sarmiento_case.ok')}
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
     

    </div>
  );
};

export default SarmientoCase;