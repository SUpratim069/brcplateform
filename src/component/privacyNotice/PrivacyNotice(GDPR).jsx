import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyNoticeGDPR = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const { t } = useTranslation();

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header with Navigation */}
    

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t('privacy_notice_gdpr.title')}</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">{t('privacy_notice_gdpr.subtitle')}</p>
      </section>

      {/* Privacy Notice Content */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="prose lg:prose-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">{t('privacy_notice_gdpr.sections.1.title')}</h2>
          <p>{t('privacy_notice_gdpr.sections.1.text')}</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">{t('privacy_notice_gdpr.sections.2.title')}</h2>
          <p>{t('privacy_notice_gdpr.sections.2.text')}</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>{t('privacy_notice_gdpr.sections.2.list.identity')}</strong>: {t('privacy_notice_gdpr.sections.2.list.identity_data')}</li>
            <li><strong>{t('privacy_notice_gdpr.sections.2.list.contact')}</strong>: {t('privacy_notice_gdpr.sections.2.list.contact_data')}</li>
            <li><strong>{t('privacy_notice_gdpr.sections.2.list.case')}</strong>: {t('privacy_notice_gdpr.sections.2.list.case_data')}</li>
            <li><strong>{t('privacy_notice_gdpr.sections.2.list.technical')}</strong>: {t('privacy_notice_gdpr.sections.2.list.technical_data')}</li>
            <li><strong>{t('privacy_notice_gdpr.sections.2.list.usage')}</strong>: {t('privacy_notice_gdpr.sections.2.list.usage_data')}</li>
            <li><strong>{t('privacy_notice_gdpr.sections.2.list.marketing')}</strong>: {t('privacy_notice_gdpr.sections.2.list.marketing_data')}</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">{t('privacy_notice_gdpr.sections.3.title')}</h2>
          <p>{t('privacy_notice_gdpr.sections.3.text')}</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>{t('privacy_notice_gdpr.sections.3.list.register')}</li>
            <li>{t('privacy_notice_gdpr.sections.3.list.process')}</li>
            <li>{t('privacy_notice_gdpr.sections.3.list.manage')}</li>
            <li>{t('privacy_notice_gdpr.sections.3.list.admin')}</li>
            <li>{t('privacy_notice_gdpr.sections.3.list.deliver')}</li>
            <li>{t('privacy_notice_gdpr.sections.3.list.analytics')}</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">{t('privacy_notice_gdpr.sections.4.title')}</h2>
          <p>{t('privacy_notice_gdpr.sections.4.text')}</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>{t('privacy_notice_gdpr.sections.4.list.consent')}</li>
            <li>{t('privacy_notice_gdpr.sections.4.list.contract')}</li>
            <li>{t('privacy_notice_gdpr.sections.4.list.legal_obligation')}</li>
            <li>{t('privacy_notice_gdpr.sections.4.list.legitimate_interests')}</li>
            <li>{t('privacy_notice_gdpr.sections.4.list.public_interest')}</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">{t('privacy_notice_gdpr.sections.5.title')}</h2>
          <p>{t('privacy_notice_gdpr.sections.5.text')}</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>{t('privacy_notice_gdpr.sections.5.list.service_providers')}</li>
            <li>{t('privacy_notice_gdpr.sections.5.list.advisers')}</li>
            <li>{t('privacy_notice_gdpr.sections.5.list.government')}</li>
            <li>{t('privacy_notice_gdpr.sections.5.list.third_parties')}</li>
          </ul>
          <p className="mt-4">{t('privacy_notice_gdpr.sections.5.note')}</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">{t('privacy_notice_gdpr.sections.6.title')}</h2>
          <p>{t('privacy_notice_gdpr.sections.6.text')}</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>{t('privacy_notice_gdpr.sections.6.list.encryption')}</li>
            <li>{t('privacy_notice_gdpr.sections.6.list.assessments')}</li>
            <li>{t('privacy_notice_gdpr.sections.6.list.access_controls')}</li>
            <li>{t('privacy_notice_gdpr.sections.6.list.training')}</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">{t('privacy_notice_gdpr.sections.7.title')}</h2>
          <p>{t('privacy_notice_gdpr.sections.7.text')}</p>
          <p className="mt-4">{t('privacy_notice_gdpr.sections.7.note')}</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>{t('privacy_notice_gdpr.sections.7.list.user_accounts')}</li>
            <li>{t('privacy_notice_gdpr.sections.7.list.case_docs')}</li>
            <li>{t('privacy_notice_gdpr.sections.7.list.financial')}</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">{t('privacy_notice_gdpr.sections.8.title')}</h2>
          <p>{t('privacy_notice_gdpr.sections.8.text')}</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>{t('privacy_notice_gdpr.sections.8.list.access')}</li>
            <li>{t('privacy_notice_gdpr.sections.8.list.rectification')}</li>
            <li>{t('privacy_notice_gdpr.sections.8.list.erasure')}</li>
            <li>{t('privacy_notice_gdpr.sections.8.list.restrict')}</li>
            <li>{t('privacy_notice_gdpr.sections.8.list.portability')}</li>
            <li>{t('privacy_notice_gdpr.sections.8.list.object')}</li>
            <li>{t('privacy_notice_gdpr.sections.8.list.withdraw')}</li>
          </ul>
          <p className="mt-4">{t('privacy_notice_gdpr.sections.8.note')}</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">{t('privacy_notice_gdpr.sections.9.title')}</h2>
          <p>{t('privacy_notice_gdpr.sections.9.text')}</p>

          <div className="bg-gray-100 p-6 rounded-lg mt-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t('privacy_notice_gdpr.sections.contact.title')}</h3>
            <p>{t('privacy_notice_gdpr.sections.contact.text')}</p>
            <p className="mt-4"><strong>{t('privacy_notice_gdpr.sections.contact.officer')}</strong><br />
            {t('privacy_notice_gdpr.sections.contact.org')}<br />
            {t('privacy_notice_gdpr.sections.contact.email')}<br />
            {t('privacy_notice_gdpr.sections.contact.address')}<br />
            {t('privacy_notice_gdpr.sections.contact.last_updated')}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default PrivacyNoticeGDPR;