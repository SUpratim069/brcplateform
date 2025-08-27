import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo/brclogo.jpeg";
import { Link } from 'react-router-dom';
import PayPalButton from '../PayPalButton';
import StripeButton from '../StripeButton';
import { useTranslation } from 'react-i18next';

const BRCPlatform = () => {
  const { t } = useTranslation();
  const navLinks = [
    {title: "Home", link: "/"},
    {title: "All Cases", link: "/case-all"},
    {title: "Case #3000_Sarmiento", link: "/case-sarmiento"},
    {title: "Submit Case", link: "#submit"},
    {title: "Donate", link: "#donate"},
    {title: "Membership", link: "/membership"},
    {title: "Legal", link: "/legal"},
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLanguageToggle = (lang) => {
    setActiveLang(lang);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPopupOpen(true);
    e.target.reset();
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  // Handle scroll to sections when hash is present in URL
  useEffect(() => {
    const handleScrollToSection = () => {
      const sectionId = window.location.hash.substring(1); // Remove the '#' from the hash
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          // Small timeout to ensure the page has rendered
          setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleScrollToSection();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleScrollToSection);
    
    return () => {
      window.removeEventListener('hashchange', handleScrollToSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     

      {/* Merged Hero & Features Section */}
      <section className="bg-[#0d111c] text-white py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6">
            {t('hero.subtitle')} {t('hero.description')}
          </p>
          <a className="inline-block bg-yellow-500 text-gray-900 px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-400 mb-8" href="#submit">
            {t('hero.cta')}
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="p-4 sm:p-6 bg-[#1a2236] rounded-lg shadow-lg text-white border border-gray-700">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {t('sections.ledger.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {t('sections.ledger.desc')}
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-[#1a2236] rounded-lg shadow-lg text-white border border-gray-700">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {t('sections.validation.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {t('sections.validation.desc')}
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-[#1a2236] rounded-lg shadow-lg text-white border border-gray-700">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {t('sections.empowerment.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {t('sections.empowerment.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-black">
            {t('how_it_works.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 text-left mb-8">
            {/* Step 1 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-center sm:text-left mb-2">{t('how_it_works.steps.1')}</h3>
              <p className="text-sm text-gray-600 text-center sm:text-left">{t('how_it_works.steps.1_desc')}</p>
            </div>
            {/* Step 2 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-center sm:text-left mb-2">{t('how_it_works.steps.2')}</h3>
              <p className="text-sm text-gray-600 text-center sm:text-left">{t('how_it_works.steps.2_desc')}</p>
            </div>
            {/* Step 3 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-center sm:text-left mb-2">{t('how_it_works.steps.3')}</h3>
              <p className="text-sm text-gray-600 text-center sm:text-left">{t('how_it_works.steps.3_desc')}</p>
            </div>
            {/* Step 4 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-center sm:text-left mb-2">{t('how_it_works.steps.4')}</h3>
              <p className="text-sm text-gray-600 text-center sm:text-left">{t('how_it_works.steps.4_desc')}</p>
            </div>
            {/* Step 5 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-center sm:text-left mb-2">{t('how_it_works.steps.5')}</h3>
              <p className="text-sm text-gray-600 text-center sm:text-left">{t('how_it_works.steps.5_desc')}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#submit" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold transition">
              {t('hero.cta')}
            </a>
            <a href="#" className="bg-[#0d111c] hover:bg-[#1a2236] text-white px-6 py-3 rounded-full font-semibold transition">
              {t('learn_more', 'Learn More')}
            </a>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{t('cases.title')}</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600">{t('cases.subtitle', 'Documented on BRC')}</h3>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="font-semibold text-base sm:text-lg">
              {t('cases.1123.title')}
            </p>
            <p className="text-sm sm:text-base text-black/80">
              {t('cases.1123.desc')}
            </p>
            <p className="text-sm sm:text-base  text-black/80" >
government negligence public health            </p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="font-semibold text-base sm:text-lg">
              {t('cases.1047.title')}
            </p>
            <p className="text-sm sm:text-base  text-black/80">
              {t('cases.1047.desc')}
            </p>
            <p className="text-sm sm:text-base  text-black/80">
workplace harassment retaliation            </p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="font-semibold text-base sm:text-lg">
              {t('cases.1355.title')}
            </p>
            <p className="text-sm sm:text-base  text-black/80">
              {t('cases.1355.desc')}
            </p>
            <p className="text-sm sm:text-base  text-black/80">
education community funding            </p>
          </div>
        </div>
      </section>

      {/* Submit */}
      <section className="bg-[#0d111c] text-white py-12 sm:py-20 px-4 sm:px-6" id="submit">
        {/* Warning */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-start border border-white/5 py-10 px-7 bg-white/5 rounded-xl">
            {/* Icon */}
            <svg 
              className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 mt-1 flex-shrink-0" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>

            {/* Text */}
            <div className="ml-3">
              <h3 className="text-sm md:text-xl font-semibold text-yellow-400 mb-2">
                {t('form.warning.title')}
              </h3>
              <p className="text-sm md:text-lg text-gray-300 mb-3">
                {t('form.warning.description')}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-lg text-gray-400">
                {t('form.warning.items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            {t('form.title')}
          </h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg">
            {t('form.description')}
          </p>
          
          <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4 text-left max-w-xl mx-auto" encType="multipart/form-data">
            <input 
              className="w-full p-2 sm:p-3 rounded bg-[#1a2236] text-white border border-gray-700 text-sm sm:text-base" 
              placeholder={t('form.fields.name')} 
              type="text" 
              required 
            />
            <input 
              className="w-full p-2 sm:p-3 rounded bg-[#1a2236] text-white border border-gray-700 text-sm sm:text-base" 
              placeholder={t('form.fields.email')} 
              type="email" 
              required 
            />
            <input 
              className="w-full p-2 sm:p-3 rounded bg-[#1a2236] text-white border border-gray-700 text-sm sm:text-base" 
              placeholder={t('form.fields.phone')} 
              type="tel" 
              required 
            />
            <input 
              className="w-full p-2 sm:p-3 rounded bg-[#1a2236] text-white border border-gray-700 text-sm sm:text-base" 
              placeholder={t('form.fields.tags')} 
              type="text" 
              required 
            />
            <textarea 
              className="w-full p-2 sm:p-3 rounded bg-[#1a2236] text-white border border-gray-700 text-sm sm:text-base" 
              placeholder={t('form.fields.description')} 
              rows="4" 
              required
            ></textarea>
            
            <div>
              <label className="block text-white mb-1 sm:mb-2 text-sm sm:text-base" htmlFor="evidence">
                {t('form.fields.evidence')}
              </label>
              <input 
                className="w-full p-1 sm:p-2 rounded bg-[#1a2236] text-white border border-gray-700 text-xs sm:text-sm" 
                type="file" 
                id="evidence" 
                name="evidence" 
                accept=".pdf,.png,.jpg,.jpeg,.mp3,.wav" 
                required 
              />
            </div>
            
            {/* Confirmation checkboxes */}
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <input type="checkbox" id="reviewCheckbox" required />
                <label htmlFor="reviewCheckbox" className="text-white text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: t('form.checkboxes.review') }} />
              </div>
              <div className="flex items-start space-x-2">
                <input type="checkbox" id="storageCheckbox" required />
                <label htmlFor="storageCheckbox" className="text-white text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: t('form.checkboxes.storage') }} />
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <input type="checkbox" id="termsCheckbox" required />
              <label htmlFor="termsCheckbox" className="text-white text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: t('form.checkboxes.terms') }} />
            </div>
            
            <button 
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-5 sm:px-6 py-2 sm:py-3 rounded font-semibold w-full text-sm sm:text-base" 
              type="submit"
            >
              {t('form.submit')}
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          {t('cta_section.title')}
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-4 sm:mb-6">
          {t('cta_section.desc')}
        </p>
        <a 
          className="inline-block bg-[#0d111c] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#1a2236] text-sm sm:text-base" 
          href="#submit"
        >
          {t('cta_section.button')}
        </a>
      </section>

      {/* Donations */}
      <section className="bg-[#0d111c] text-white py-12 sm:py-20 px-4 sm:px-6" id="donate">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            {t('donations.title')}
          </h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-12">
            {t('donations.desc')}
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
            {t('donations.onetime')}
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">

            <StripeButton />
            <div className="relative z-10">
  <PayPalButton />
</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-left">
            <div className="bg-[#1a2236] border border-gray-700 rounded-lg p-4 sm:p-6 shadow text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                {t('donations.options.founder.title')}
              </h4>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">{t('donations.options.founder.price')}</p>
              <ul className="text-xs sm:text-sm list-disc pl-4 sm:pl-5 mb-3 sm:mb-4 text-gray-300">
                {(Array.isArray(t('donations.options.founder.benefits', { returnObjects: true })) ? t('donations.options.founder.benefits', { returnObjects: true }) : []).map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <a className="inline-block bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-700 text-xs sm:text-sm" href="#">
                {t('donations.options.founder.cta')}
              </a>
            </div>

            <div className="bg-[#1a2236] border border-gray-700 rounded-lg p-4 sm:p-6 shadow text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                {t('donations.options.citizen.title')}
              </h4>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">{t('donations.options.citizen.price')}</p>
              <ul className="text-xs sm:text-sm list-disc pl-4 sm:pl-5 mb-3 sm:mb-4 text-gray-300">
                {(Array.isArray(t('donations.options.citizen.benefits', { returnObjects: true })) ? t('donations.options.citizen.benefits', { returnObjects: true }) : []).map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <a className="inline-block bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-700 text-xs sm:text-sm" href="#">
                {t('donations.options.citizen.cta')}
              </a>
            </div>

            <div className="bg-[#1a2236] border border-gray-700 rounded-lg p-4 sm:p-6 shadow text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                {t('donations.options.ally.title')}
              </h4>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">{t('donations.options.ally.price')}</p>
              <ul className="text-xs sm:text-sm list-disc pl-4 sm:pl-5 mb-3 sm:mb-4 text-gray-300">
                {(Array.isArray(t('donations.options.ally.benefits', { returnObjects: true })) ? t('donations.options.ally.benefits', { returnObjects: true }) : []).map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <a className="inline-block bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-700 text-xs sm:text-sm" href="#">
                {t('donations.options.ally.cta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Decentralized Publishing */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">
            {t('decentralized.title')}
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-800 max-w-3xl mx-auto">
            {t('decentralized.desc')}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 italic">
            {t('decentralized.coming')}
          </p>
        </div>
      </section>

      {/* Footer */}
     

      {/* Popup Notification */}
      {popupOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div 
            className="bg-[#0d111c] text-white p-6 rounded-lg w-11/12 max-w-md text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">YOUR REPUTATIONAL CASE HAS BEEN SUBMITTED</h3>
            <p className="mb-6">Thank you for contributing to our collective memory and accountability efforts. We'll review your submission and get back to you soon.</p>
            <button 
              className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BRCPlatform;
