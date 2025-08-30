import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import brclogo from "../../assets/logo/brclogo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('ES'); // Default to ES
  const { i18n } = useTranslation();

  const location = useLocation();
  const navLinks = [
    { key: "home", link: "/" },
    { key: "case_3000", link: "/case-3000" },
    { key: "submit_case", link: "/#submit" },
    { key: "donate", link: "/#donate" },
    { key: "legal", link: "/legal-disclaimer" },
  ];

  useEffect(() => {
    // Set Spanish as default on first load
    i18n.changeLanguage('es-MX');
  }, [i18n]);

  useEffect(() => {
    // Handle navigation to sections
    const handleScrollToSection = () => {
      if (location.pathname === '/') {
        const sectionId = location.hash.substring(1);
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      }
    };

    handleScrollToSection();
    window.addEventListener('hashchange', handleScrollToSection);
    return () => {
      window.removeEventListener('hashchange', handleScrollToSection);
    };
  }, [location]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLanguageChange = (lang) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang === 'EN' ? 'en' : 'es-MX');
  };

  return (
    <header className="bg-white shadow sticky top-0 z-20">
      <div className="container mx-auto px-4 py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
          <Link to="/">
  <img src={brclogo} alt="BRC Logo" className="h-14 sm:h-16 mr-3" />
</Link>

          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-9">
            <nav className="flex space-x-10">
              {navLinks.map(({ key, link }) => (
                <Link
                  key={key}
                  to={link}
                  className="text-black hover:text-blue-600 px-2 py-2 text-sm sm:text-base transition"
                >
                  {i18n.t(`nav.${key}`)}
                </Link>
              ))}
            </nav>
            <div className="lang-toggle ml-4">
              {['ES', 'EN'].map((lang) => (
                <button
                  key={lang}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activeLang === lang ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => handleLanguageChange(lang)}
                >
                  {lang === 'ES' ? 'ES' : 'EN'}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <div className="lang-toggle mr-2">
              {['ES', 'EN'].map((lang) => (
                <button
                  key={lang}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activeLang === lang ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => handleLanguageChange(lang)}
                >
                  {lang === 'ES' ? 'Es' : 'En'}
                </button>
              ))}
            </div>
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-2">
            {navLinks.map(({ key, link }) => (
              <Link
                key={key}
                to={link}
                className="block px-3 py-2 text-base text-black hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {i18n.t(`nav.${key}`)}
              </Link>
            ))}
            <div className="flex w-full px-3 py-2 space-x-2 relative bottom-2 ">
              <button
                className={`w-1/2 py-1 rounded-full font-semibold ${
                  activeLang === 'ES' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleLanguageChange('ES')}
              >
                Español
              </button>
              <button
                className={`w-1/2 py-[0.01rem] rounded-full font-semibold ${
                  activeLang === 'EN' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleLanguageChange('EN')}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .lang-toggle {
          background-color: #f3f4f6;
          border-radius: 9999px;
          padding: 0.25rem;
          display: inline-flex;
        }
        .ethics-card {
          transition: all 0.3s ease;
        }
        .ethics-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      `}</style>
    </header>
  );
};

export default Navbar;
