import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './assets/i18n/i18n';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/index";
import Case from "./component/Case/cases_sarmiento_pinedo";
import BRCPlatform from './component/BRCPlatform/BRCPlatform';
import CookiesLink from './pages/cookiesLink';
import LegalLink from "./pages/LegalLink";
import LegalEthicLink from "./pages/LegalEthicLink";
import PrivacyLink from "./pages/privacyLink";
import TermsConditions from "./pages/termsConditons";
import Termofcase from "./pages/TermsofFocus";
import Navbar from "./layout/Navbar/Navbar"
import Footer from './layout/Footer/Footer';
import CCPACompliance from './component/Ccpa/ccpa';
import ScrollToTop from './ScrollToTop';
import AllCases from './pages/AllcaseLink';
import ComingSoon from './pages/ComingLink';
const App = () => {
  const [activeLang, setActiveLang] = React.useState('en');
  return (
    <I18nextProvider i18n={i18n}>
      <div className="app">
        <ScrollToTop/>
        <Navbar activeLang={activeLang} setActiveLang={setActiveLang} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-3000" element={<Case />} />
            <Route path="/cookies" element={<CookiesLink />} />
            <Route path="/legal-Ethics" element={<LegalEthicLink />} />
            <Route path="/legal-disclaimer" element={<LegalLink />} />
            <Route path="/privacy" element={<PrivacyLink />} />
            <Route path="/terms&conditions" element={<TermsConditions />} />
            <Route path="/terms-of-use" element={<Termofcase />} />
            <Route path="/CCPA-Compliance" element={<CCPACompliance />} />
            <Route path="/all-Cases" element={<AllCases />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            {/* Example: BRCPlatform route with language support */}
            <Route path="/brc-platform" element={<BRCPlatform activeLang={activeLang} setActiveLang={setActiveLang} />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </I18nextProvider>
  );
}

export default App
