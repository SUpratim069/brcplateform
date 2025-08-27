import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail } from 'react-icons/fi';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const ComingSoon = () => {
  const { t } = useTranslation();

  return (
    <section className="relative isolate min-h-[80vh] sm:min-h-[85vh] flex items-center">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-24 right-1/3 h-72 w-72 rounded-full blur-3xl opacity-20 bg-indigo-300" />
      </div>

      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            {t('coming_soon.title')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {t('coming_soon.description')}
          </p>

          {/* Notify form */}
          <div className="mt-8">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto max-w-xl flex flex-col sm:flex-row gap-3 items-center"
            >
              <div className="relative w-full">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder={t('coming_soon.email_placeholder')}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-md font-medium transition-colors"
              >
                {t('coming_soon.notify_me')}
              </button>
            </form>
            <p className="mt-6 text-sm text-gray-500">
              {t('coming_soon.stay_updated')}
            </p>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center justify-center gap-5 text-gray-500">
            <p className="text-sm text-gray-500">
              {t('coming_soon.follow_us')}
            </p>
            <a href="#" aria-label="Twitter" className="hover:text-gray-800 transition-colors">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-800 transition-colors">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-800 transition-colors">
              <FaFacebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;