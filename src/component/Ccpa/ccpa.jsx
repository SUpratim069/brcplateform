import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const CCPACompliance = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const renderRights = () => {
    const rights = t('ccpa_gdpr.sections.your_rights.rights', { returnObjects: true });
    return rights.map((right, index) => (
      <div key={index} className="bg-gray-100 p-6 rounded-lg mt-6">
        <div className="flex items-center mb-3">
          {right.badges?.includes("CCPA") && (
            <span className="regulation-badge bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold mr-2">
              CCPA
            </span>
          )}
          {right.badges?.includes("GDPR") && (
            <span className="regulation-badge bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold mr-2">
              GDPR
            </span>
          )}
          <h3 className="text-xl font-semibold">{right.title}</h3>
        </div>
        {right.content && <p className="mb-4">{right.content}</p>}
        {right.items && (
          <ul className="list-disc pl-6 space-y-2 mt-2">
            {right.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    ));
  };

  const renderContactInfo = () => {
    const contact = t('ccpa_gdpr.sections.contact', { returnObjects: true });
    return (
      <div className="bg-gray-100 p-6 rounded-lg mt-10">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{contact.title}</h3>
        <p><strong>{contact.privacy_officer.title}</strong><br />
        {t('ccpa_gdpr.contact.email')}: {contact.privacy_officer.email}<br />
        {t('ccpa_gdpr.contact.phone')}: {contact.privacy_officer.phone}</p>
        
        <p className="mt-4"><strong>{contact.eu_representative.title}</strong><br />
        {contact.eu_representative.name}<br />
        {contact.eu_representative.address}<br />
        {t('ccpa_gdpr.contact.email')}: {contact.eu_representative.email}</p>
        
        <p className="mt-4"><strong>{contact.uk_representative.title}</strong><br />
        {contact.uk_representative.name}<br />
        {contact.uk_representative.address}<br />
        {t('ccpa_gdpr.contact.email')}: {contact.uk_representative.email}</p>
        
        <p className="mt-4">{contact.last_updated}</p>
      </div>
    );
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Helmet>
        <title>{t('ccpa_gdpr.meta_title')}</title>
        <meta name="description" content={t('ccpa_gdpr.meta_description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          {t('ccpa_gdpr.title')}
        </h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">
          {t('ccpa_gdpr.subtitle')}
        </p>
      </section>

      {/* Compliance Content */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="prose lg:prose-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            {t('ccpa_gdpr.sections.introduction.title')}
          </h2>
          <p className="mb-6">{t('ccpa_gdpr.sections.introduction.content')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {t('ccpa_gdpr.sections.introduction.overviews', { returnObjects: true }).map((overview, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-lg mb-2">{overview.title}</h3>
                <p className="text-gray-600">{overview.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">
            {t('ccpa_gdpr.sections.data_collection.title')}
          </h2>
          <p>{t('ccpa_gdpr.sections.data_collection.content')}</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            {t('ccpa_gdpr.sections.data_collection.items', { returnObjects: true }).map((item, index) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">
            {t('ccpa_gdpr.sections.your_rights.title')}
          </h2>
          {renderRights()}

          <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">
            {t('ccpa_gdpr.sections.exercise_rights.title')}
          </h2>
          <p className="mb-4">{t('ccpa_gdpr.sections.exercise_rights.intro')}</p>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            {t('ccpa_gdpr.sections.exercise_rights.items', { returnObjects: true }).map((item, i) => (
              <li key={i} className="mb-2">{item}</li>
            ))}
          </ol>

          <div className="bg-gray-100 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-semibold mb-3">
              {t('ccpa_gdpr.sections.exercise_rights.request_methods.title')}
            </h3>
            <ul className="space-y-2">
              {t('ccpa_gdpr.sections.exercise_rights.request_methods.items', { returnObjects: true }).map((method, i) => (
                <li key={i}>{method}</li>
              ))}
            </ul>
          </div>

          {['data_security', 'data_transfers', 'data_retention', 'changes'].map((section) => (
            <React.Fragment key={section}>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">
                {t(`ccpa_gdpr.sections.${section}.title`)}
              </h2>
              <p>{t(`ccpa_gdpr.sections.${section}.content`)}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {Array.isArray(t(`ccpa_gdpr.sections.${section}.items`, { returnObjects: true })) && 
                  t(`ccpa_gdpr.sections.${section}.items`, { returnObjects: true }).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))
                }
              </ul>
            </React.Fragment>
          ))}

          {renderContactInfo()}
        </div>
      </section>

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