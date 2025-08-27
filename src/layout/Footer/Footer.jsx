import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const sections = [
    {
      title: 'Citizen Reputational Bureau',
      content: 'A civic platform for documenting misconduct, empowering communities, and defending reputation through transparent, evidence-based records.',
      isList: false,
    },
    {
      title: 'Legal',
      links: [
        { label: 'Legal Disclaimers', href: '/legal-disclaimer' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Privacy Notice (GDPR)', href: '/privacy' },
        { label: 'Legal Ethics Statement', href: '/legal-Ethics' },
        { label: 'Terms Of Use', href: '/terms-of-use' },
        { label: 'CCPA Compliance', href: '/CCPA-Compliance' },
      ],
      isList: true,
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Submit a Case', href: '/#submit' },
        { label: 'Make a Donation', href: '/#donate' },
        { label: 'Join as Member', href: '#' },
      ],
      isList: true,
    },
  ];

  return (
    <footer className="bg-[#0d111c] text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-xs sm:text-sm">
        {sections.map(({ title, content, links, isList }, i) => (
          <div key={i}>
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{title}</h4>
            {isList ? (
              <ul className="space-y-1 sm:space-y-2 text-gray-400">
                {links.map(({ label, href }, idx) => {
                  // Use regular <a> if href is just #, otherwise use <Link> for navigation
                  const isAnchor = href === '#';
                  return (
                    <li key={idx}>
                      {isAnchor ? (
                        <a className="hover:underline text-xs sm:text-sm" href={href}>
                          {label}
                        </a>
                      ) : (
                        <Link className="hover:underline text-xs sm:text-sm" to={href}>
                          {label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-gray-300 text-xs sm:text-sm">{content}</p>
            )}
          </div>
        ))}
      </div>
      <div className="text-center text-xs text-gray-500 mt-6 sm:mt-10">
        ©️ 2025 BRC Platform – A citizen-led public registry for documenting misconduct and enabling verified right of reply
      </div>
    </footer>
  );
};

export default Footer;
