import { useState } from 'react';

const CookiePolicy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');
  const [cookiePrefs, setCookiePrefs] = useState({
    performance: true,
    analytics: true
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    setActiveLang(lang);
    console.log('Language switched to:', lang);
  };

  const handleCookiePrefChange = (e) => {
    const { id, checked } = e.target;
    setCookiePrefs(prev => ({ ...prev, [id]: checked }));
  };

  const saveCookiePrefs = () => {
    alert('Cookie preferences saved. Note: This is a demonstration. Actual cookie preferences would be implemented with proper cookie management tools.');
  };

  const cookiesData = [
    { name: 'session_id', purpose: 'Maintains user session state', duration: 'Session' },
    { name: 'preferences', purpose: 'Stores user preferences', duration: '30 days' },
    { name: '_ga', purpose: 'Google Analytics tracking', duration: '2 years' },
    { name: '_gid', purpose: 'Google Analytics tracking', duration: '24 hours' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <head>
        <title>Cookie Policy - BRC</title>
        <meta name="description" content="Our Cookie Policy explains how we use cookies and similar technologies on our website." />
        <link rel="canonical" href="https://yourwebsite.com/cookie-policy" />
      </head>

      {/* Header */}
    

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-lg max-w-2xl mx-auto">Information about how we use cookies on the Citizen Reputational Bureau platform</p>
      </section>

      {/* Cookie Policy Content */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="prose lg:prose-xl">
          <h2 className="text-2xl font-bold mb-6">1. What Are Cookies?</h2>
          <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.</p>

          <h2 className="text-2xl font-bold mb-6 mt-10">2. How We Use Cookies</h2>
          <p>The Citizen Reputational Bureau (BRC) uses cookies for several purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences to enhance your experience</li>
            <li><strong>Analytics Cookies:</strong> Help us improve our website by collecting anonymous information</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10">3. Types of Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Cookie Name</th>
                  <th className="border px-4 py-2 text-left">Purpose</th>
                  <th className="border px-4 py-2 text-left">Duration</th>
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

          <h2 className="text-2xl font-bold mb-6 mt-10">4. Managing Cookies</h2>
          <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Browser-Specific Instructions:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10">5. Third-Party Cookies</h2>
          <p>We may use third-party services that place cookies on your device. These include:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Analytics Services:</strong> Such as Google Analytics to help us analyze website usage</li>
            <li><strong>Payment Processors:</strong> Cookies necessary for processing donations</li>
            <li><strong>Social Media:</strong> Cookies from embedded content like Twitter or Facebook feeds</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10">6. Changes to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date below.</p>

          <h2 className="text-2xl font-bold mb-6 mt-10">7. Contact Us</h2>
          <p>If you have any questions about our use of cookies, please contact us at:</p>
          <p className="mt-4"><strong>Data Protection Officer</strong><br />
          Citizen Reputational Bureau<br />
          Email: privacy@brc-platform.org<br />
          Last Updated: July 2025</p>

          <div className="bg-gray-100 p-6 rounded-lg mt-10">
            <h3 className="text-xl font-semibold mb-4">Your Cookie Preferences</h3>
            <p>You can manage your cookie preferences below:</p>
            <div className="space-y-4 mt-4">
              <div className="flex items-center">
                <input type="checkbox" id="essential" checked disabled className="mr-2" />
                <label htmlFor="essential">Essential Cookies (Required)</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="performance" 
                  checked={cookiePrefs.performance} 
                  onChange={handleCookiePrefChange}
                  className="mr-2" 
                />
                <label htmlFor="performance">Performance Cookies</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="analytics" 
                  checked={cookiePrefs.analytics} 
                  onChange={handleCookiePrefChange}
                  className="mr-2" 
                />
                <label htmlFor="analytics">Analytics Cookies</label>
              </div>
              <button 
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 mt-2"
                onClick={saveCookiePrefs}
              >
                Save Preferences
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