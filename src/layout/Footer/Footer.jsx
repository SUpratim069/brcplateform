import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const sections = [
    {
      title: t('footer.title'),
      content: t('footer.desc'),
      isList: false,
    },
    {
      title: t('footer.links.legal'),
      links: [
        { label: t('footer.links.legal_disclaimers'), href: '/legal-disclaimer' },
        { label: t('footer.links.cookies'), href: '/cookies' },
        { label: t('footer.links.privacy'), href: '/privacy' },
        { label: t('footer.links.ethics'), href: '/legal-Ethics' },
        { label: t('footer.links.terms'), href: '/terms-of-use' },
        { label: t('footer.links.ccpa'), href: '/CCPA-Compliance' },
      ],
      isList: true,
    },
    {
      title: t('footer.involve.title', 'Get Involved'),
      links: [
        { label: t('footer.involve.submit'), href: '/#submit' },
        { label: t('footer.involve.donate'), href: '/#donate' },
        { label: t('footer.involve.join'), href: '#' },
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
        {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;
