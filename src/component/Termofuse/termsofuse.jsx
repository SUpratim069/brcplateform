import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const TermsOfUse = () => {
  const { t } = useTranslation();

  const renderSection = (sectionKey) => {
    const section = t(`terms_of_use.sections.${sectionKey}`, { returnObjects: true });
    if (!section) return null;

    return (
      <div key={sectionKey}>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 mt-8">{section.title}</h2>
        {section.content && <p className="mb-4">{section.content}</p>}
        {section.items && (
          <ul className="list-disc pl-6 space-y-2 mb-4">
            {section.items.map((item, index) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Helmet>
        <title>{t('terms_of_use.meta_title')}</title>
        <meta name="description" content={t('terms_of_use.meta_description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          {t('terms_of_use.title')}
        </h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">
          {t('terms_of_use.subtitle')}
        </p>
      </section>

      {/* Terms Content */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="prose lg:prose-xl">
          {[
            'acceptance',
            'eligibility',
            'account_registration',
            'user_conduct',
            'content_submission',
            'privacy_policy',
            'intellectual_property',
            'dispute_resolution',
            'limitation_of_liability',
            'termination',
            'governing_law'
          ].map(sectionKey => renderSection(sectionKey))}

          <div className="bg-gray-100 p-6 rounded-lg mt-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              {t('terms_of_use.sections.contact.title')}
            </h3>
            <p>{t('terms_of_use.sections.contact.content')}</p>
            <div className="mt-4 space-y-1">
              <p className="font-semibold">{t('terms_of_use.sections.contact.department')}</p>
              <p>{t('terms_of_use.sections.contact.org')}</p>
              <p>{t('terms_of_use.sections.contact.email')}</p>
              <p className="text-sm text-gray-600 mt-2">{t('terms_of_use.sections.contact.last_updated')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default TermsOfUse;