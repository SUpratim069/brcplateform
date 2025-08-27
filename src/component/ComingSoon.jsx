import React from 'react'
import { FiMail } from 'react-icons/fi'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

const ComingSoon = () => {
  return (
    <section className="relative isolate min-h-[80vh] sm:min-h-[85vh] flex items-center">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" /> */}
        {/* <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl opacity-25 bg-blue-300" /> */}
        <div className="absolute -bottom-24 right-1/3 h-72 w-72 rounded-full blur-3xl opacity-20 bg-indigo-300" />
      </div>

      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="mx-auto max-w-10xl text-center">
          {/* Logo */}
          {/* <div className="flex justify-center mb-6">
            <img
              src="/brclogo.jpeg"
              alt="BRC Logo"
              className="h-16 sm:h-20 w-auto rounded-md shadow-sm"
            />
          </div> */}

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Something meaningful is coming soon
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We’re putting the final touches on our next release. Stay tuned for updates and early access.
          </p>

          {/* Notify form */}
          {/* <div className="mt-8">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto max-w-xl flex flex-col sm:flex-row gap-3 items-center"
            >
              <div className="relative w-full">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email to get notified"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors shadow-sm"
              >
                Notify me
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
          </div> */}

          {/* Highlights */}
          {/* <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">Privacy-first</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">Community-led</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">Open dialogue</span>
          </div> */}

          {/* Social links */}
          {/* <div className="mt-10 flex items-center justify-center gap-5 text-gray-500">
            <a href="#" aria-label="Twitter" className="hover:text-gray-800 transition-colors">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-800 transition-colors">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-800 transition-colors">
              <FaFacebook className="h-5 w-5" />
            </a>
          </div> */}

          {/* ETA note */}
          {/* <p className="mt-8 text-sm text-gray-500">ETA: Q4 — Thanks for your patience.</p> */}
        </div>
      </div>
    </section>
  )
}

export default ComingSoon