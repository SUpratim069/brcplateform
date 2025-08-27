import { useTranslation } from 'react-i18next';

const LegalDisclaimer = () => {
  const { t } = useTranslation();
  const sections = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
  ];
  const contact = t('legal_disclaimers.contact', { returnObjects: true });
  return (
    <div className="min-h-screen bg-white">
      <head>
        <title>{t('legal_disclaimers.title')} - BRC</title>
        <meta name="description" content={t('legal_disclaimers.subtitle')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://yourwebsite.com/legal-disclaimer" />
      </head>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t('legal_disclaimers.title')}</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">{t('legal_disclaimers.subtitle')}</p>
      </section>

      {/* Legal Content */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="prose lg:prose-xl">
          {sections.map((sec) => (
            <div key={sec}>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">{t(`legal_disclaimers.sections.${sec}.title`)}</h2>
              <p>{t(`legal_disclaimers.sections.${sec}.text`)}</p>
            </div>
          ))}
          <div className="mt-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-10">{t('legal_disclaimers.contact.title')}</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>{t('legal_disclaimers.contact.department')}</strong></li>
              <li><strong>{t('legal_disclaimers.contact.org')}</strong></li>
              <li><strong>{t('legal_disclaimers.contact.email_label')}</strong> {contact.email}</li>
              <li><strong>{t('legal_disclaimers.contact.phone_label')}</strong> {contact.phone}</li>
              <li><strong>{t('legal_disclaimers.contact.last_updated_label')}</strong> {contact.last_updated}</li>
            </ul>
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