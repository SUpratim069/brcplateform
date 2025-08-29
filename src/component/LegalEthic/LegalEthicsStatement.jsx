import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const LegalEthicsStatement = () => {
  const { t } = useTranslation();
  const ethicalPrinciples = t('legal_ethics.sections.principles.items', { returnObjects: true });

  const renderListItems = (items) => {
    if (!Array.isArray(items)) return null;
    
    return items.map((item, index) => {
      if (typeof item === 'string') {
        const [title, ...descParts] = item.split(': ');
        const description = descParts.join(': ');
        
        return (
          <li key={index}>
            {description ? (
              <>
                <strong>{title}:</strong> {description}
              </>
            ) : (
              title
            )}
          </li>
        );
      }
      return null;
    });
  };

  const renderSection = (sectionKey) => {
    const section = t(`legal_ethics.sections.${sectionKey}`, { returnObjects: true });
    if (!section) return null;

    return (
      <>
        <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">{section.title}</h2>
        <p>{section.description}</p>
        {section.items && (
          <ul className="list-disc pl-6 space-y-2 mt-4">
            {renderListItems(section.items)}
          </ul>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{t('legal_ethics.meta_title')}</title>
        <meta name="description" content={t('legal_ethics.meta_description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://yourwebsite.com/legal-ethics" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          {t('legal_ethics.title')}
        </h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">
          {t('legal_ethics.subtitle')}
        </p>
      </section>

      {/* Ethics Content */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="prose lg:prose-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            {t('legal_ethics.sections.principles.title')}
          </h2>
          <p>{t('legal_ethics.sections.principles.description')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {Array.isArray(ethicalPrinciples) && ethicalPrinciples.map((principle, index) => (
              <div 
                key={index} 
                className="ethics-card bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>

          {renderSection('documentation_standards')}
          {renderSection('right_to_response')}
          {renderSection('moderation_ethics')}
          {renderSection('conflict_of_interest')}
          {renderSection('continuous_improvement')}

          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg mt-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              {t('legal_ethics.sections.contact.title')}
            </h3>
            <p>{t('legal_ethics.sections.contact.description')}</p>
            <p className="mt-2">
              <strong>{t('legal_ethics.sections.contact.officer')}</strong>
              <br />
              {t('legal_ethics.sections.contact.org')}
              <br />
              {t('legal_ethics.sections.contact.email')}
              {/* <br /> */}
              {/* {t('legal_ethics.sections.contact.phone')} */}
              <br />
              {t('legal_ethics.sections.contact.last_updated')}
            </p>
          </div>
        </div>
      </section>

      <style jsx global>{`
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