import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CookiePolicy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cookiePrefs, setCookiePrefs] = useState({
    performance: true,
    analytics: true
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  
  const handleCookiePrefChange = (e) => {
    const { id, checked } = e.target;
    setCookiePrefs(prev => ({ ...prev, [id]: checked }));
  };

  const saveCookiePrefs = () => {
    alert(t('cookie_policy.preferences.save_alert'));
  };

  const cookiesData = [
    { name: 'session_id', purpose: 'Maintains user session state', duration: 'Session' },
    { name: 'preferences', purpose: 'Stores user preferences', duration: '30 days' },
    { name: '_ga', purpose: 'Google Analytics tracking', duration: '2 years' },
    { name: '_gid', purpose: 'Google Analytics tracking', duration: '24 hours' }
  ];

  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <head>
        <title>{t('cookie_policy.meta_title')}</title>
        <meta name="description" content={t('cookie_policy.meta_description')} />
        <link rel="canonical" href="https://yourwebsite.com/cookie-policy" />
      </head>

      {/* Header */}
    

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">{t('cookie_policy.title')}</h1>
        <p className="text-lg max-w-2xl mx-auto">{t('cookie_policy.subtitle')}</p>
      </section>

      {/* Cookie Policy Content */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="prose lg:prose-xl">
          <h2 className="text-2xl font-bold mb-6">{t('cookie_policy.sections.1.title')}</h2>
          <p>{t('cookie_policy.sections.1.text')}</p>

          <h2 className="text-2xl font-bold mb-6 mt-10">{t('cookie_policy.sections.2.title')}</h2>
          <p>{t('cookie_policy.sections.2.text')}</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>{t('cookie_policy.essential.title')}</strong> {t('cookie_policy.essential.text')}</li>
            <li><strong>{t('cookie_policy.performance.title')}</strong> {t('cookie_policy.performance.text')}</li>
            <li><strong>{t('cookie_policy.functionality.title')}</strong> {t('cookie_policy.functionality.text')}</li>
            <li><strong>{t('cookie_policy.analytics.title')}</strong> {t('cookie_policy.analytics.text')}</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10">{t('cookie_policy.sections.3.title')}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">{t('cookie_policy.table.name')}</th>
                  <th className="border px-4 py-2 text-left">{t('cookie_policy.table.purpose')}</th>
                  <th className="border px-4 py-2 text-left">{t('cookie_policy.table.duration')}</th>
                </tr>
              </thead>
              <tbody>
                {cookiesData.map((cookie, index) => (
                  <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                    <td className="border px-4 py-2">{cookie.name}</td>
                    <td className="border px-4 py-2">{cookie.purpose}</td>
                    <td className="border px-4 py-2">{cookie.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">{t('cookie_policy.sections.4.title')}</h2>
          <p>{t('cookie_policy.sections.4.text')}</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">{t('cookie_policy.browser_instructions.title')}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{t('cookie_policy.browser_instructions.chrome')}</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{t('cookie_policy.browser_instructions.firefox')}</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{t('cookie_policy.browser_instructions.safari')}</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{t('cookie_policy.browser_instructions.edge')}</a></li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10">{t('cookie_policy.sections.5.title')}</h2>
          <p>{t('cookie_policy.sections.5.text')}</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>{t('cookie_policy.third_party.analytics.title')}</strong> {t('cookie_policy.third_party.analytics.text')}</li>
            <li><strong>{t('cookie_policy.third_party.payments.title')}</strong> {t('cookie_policy.third_party.payments.text')}</li>
            <li><strong>{t('cookie_policy.third_party.social.title')}</strong> {t('cookie_policy.third_party.social.text')}</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10">{t('cookie_policy.sections.6.title')}</h2>
          <p>{t('cookie_policy.sections.6.text')}</p>

          <h2 className="text-2xl font-bold mb-6 mt-10">{t('cookie_policy.sections.7.title')}</h2>
          <p>{t('cookie_policy.sections.7.text')}</p>
          <p className="mt-4"><strong>{t('cookie_policy.contact.officer')}</strong><br />
          {t('cookie_policy.contact.org')}<br />
          {t('cookie_policy.contact.email_label')} info@brccheck.com<br />
          {t('cookie_policy.contact.last_updated_label')} {t('cookie_policy.contact.last_updated')}</p>

          <div className="bg-gray-100 p-6 rounded-lg mt-10">
            <h3 className="text-xl font-semibold mb-4">{t('cookie_policy.preferences.title')}</h3>
            <p>{t('cookie_policy.preferences.text')}</p>
            <div className="space-y-4 mt-4">
              <div className="flex items-center">
                <input type="checkbox" id="essential" checked disabled className="mr-2" />
                <label htmlFor="essential">{t('cookie_policy.preferences.essential')}</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="performance" 
                  checked={cookiePrefs.performance} 
                  onChange={handleCookiePrefChange}
                  className="mr-2" 
                />
                <label htmlFor="performance">{t('cookie_policy.preferences.performance')}</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="analytics" 
                  checked={cookiePrefs.analytics} 
                  onChange={handleCookiePrefChange}
                  className="mr-2" 
                />
                <label htmlFor="analytics">{t('cookie_policy.preferences.analytics')}</label>
              </div>
              <button 
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 mt-2"
                onClick={saveCookiePrefs}
              >
                {t('cookie_policy.preferences.save_button')}
              </button>
            </div>
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

export default CookiePolicy;