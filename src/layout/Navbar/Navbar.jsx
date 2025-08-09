import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');

  const location = useLocation();
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "All Cases", link: "/all-Cases" },
    { title: "Case #3000_Sarmiento", link: "/case-sarmiento" },
    { title: "Submit Case", link: "/#submit" },
    { title: "Donate", link: "/#donate" },
    { title: "Membership", link: "/" },
    { title: "Legal", link: "/legal-disclaimer" },
  ];

  useEffect(() => {
    // Handle navigation to sections
    const handleScrollToSection = () => {
      if (location.pathname === '/') {
        const sectionId = location.hash.substring(1); // Remove the '#' from the hash
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            // Small timeout to ensure the page has rendered
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      }
    };

    handleScrollToSection();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleScrollToSection);
    
    return () => {
      window.removeEventListener('hashchange', handleScrollToSection);
    };
  }, [location]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLanguageChange = (lang) => {
    setActiveLang(lang);
    console.log('Language switched to:', lang);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-20">
      <div className="container mx-auto px-4 py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="brclogo.jpeg" alt="BRC Logo" className="h-14 sm:h-16 mr-3" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-9">
            <nav className="flex space-x-10">
              {navLinks.map(({ title, link }) => (
                <Link
                  key={title}
                  to={link}
                  className="text-black hover:text-blue-600 px-2 py-2 text-sm sm:text-base transition"
                >
                  {title}
                </Link>
              ))}
            </nav>
            <div className="lang-toggle ml-4">
              {['EN', 'ES'].map((lang) => (
                <button
                  key={lang}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activeLang === lang ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => handleLanguageChange(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <div className="lang-toggle mr-2">
              {['EN', 'ES'].map((lang) => (
                <button
                  key={lang}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activeLang === lang ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => handleLanguageChange(lang)}
                >
                  {lang}
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
            {navLinks.map(({ title, link }) => (
              <Link
                key={title}
                to={link}
                className="block px-3 py-2 text-base text-black hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {title}
              </Link>
            ))}
            <div className="flex w-full px-3 py-2 space-x-2 ">
              <button
                className={`w-1/2 py-[0.01rem] rounded-full bg font-semibold ${
                  activeLang === 'EN' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleLanguageChange('EN')}
              >
                English
              </button>
              <button
                className={`w-1/2 py-1 rounded-full font-semibold ${
                  activeLang === 'ES' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleLanguageChange('ES')}
              >
                Español
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
