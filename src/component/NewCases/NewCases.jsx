import React, { useState } from 'react';
import Head from 'next/head';

const BRCAllCases = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('EN');
  const [expandedCases, setExpandedCases] = useState({});

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    setActiveLanguage(lang);
  };

  const toggleCaseDetails = (caseId) => {
    setExpandedCases(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
  };

  const cases = [
    {
      id: '3001',
      name: 'Gomez',
      image: 'gomez.jpg',
      description: 'Repeated delays in contractor payments reported in Monterrey projects.',
      date: 'June 15, 2025',
      status: 'Published',
      statusColor: 'bg-green-100 text-green-800',
      details: {
        name: 'Carlos Gomez',
        rfc: 'GOMC810101MXA',
        curp: 'GOMC810101HDFXXX09',
        misconduct: 'Delayed payments reported by multiple subcontractors.',
        evidence: 'Invoice Scan, Screenshot',
        response: 'None yet',
        note: 'Similar patterns across region'
      }
    },
    {
      id: '3002',
      name: 'Martinez',
      image: 'Martinez.jpg',
      description: 'Complaint regarding misuse of government grant funds in Yucatan.',
      date: 'July 02, 2025',
      status: 'Closed',
      statusColor: 'bg-gray-200 text-gray-800',
      details: {
        name: 'Teresa Martinez',
        rfc: 'MATT830202YZ1',
        curp: 'MATT830202MYZZRS03',
        misconduct: 'Incomplete documentation and funding gaps discovered.',
        evidence: 'Audit File',
        response: 'Claimed technical issues',
        note: 'Investigated and closed'
      }
    },
    // Add all other cases in the same format
    {
      id: '3003_Ramos',
      name: 'Mario Ramos',
      rfc: 'RAMM770101ABC',
      curp: 'RAMM770101HJCLMR07',
      summary: 'Anonymous reports suggest land grabbing in rural Jalisco.',
      submitted: 'August 01, 2025',
      misconduct: 'Acquisition of communal land through influence.',
      evidence: 'Video, Testimony',
      response: 'Awaiting statement',
      note: 'Local authority notified',
      status: 'In Review'
    },
    {
      id: '3004_Rivera',
      name: 'Carlos Rivera',
      rfc: 'RIVC830304RTZ',
      curp: 'RIVC830304HJGHTR05',
      summary: 'Reported issue involving Carlos Rivera in contractual misconduct.',
      submitted: 'August 04, 2025',
      misconduct: 'Duplicate billing and project delays.',
      evidence: 'Contracts, Email',
      response: 'No comment',
      note: 'Escalated to ethics board',
      status: 'Published'
    },
    {
      id: '3005_Ortiz',
      name: 'Luis Ortiz',
      rfc: 'ORTL760909MNZ',
      curp: 'ORTL760909HHGNTL09',
      summary: 'Whistleblower reveals unregistered lobbying in Mexico City contracts.',
      submitted: 'August 05, 2025',
      misconduct: 'Unlicensed lobbying for foreign corporations.',
      evidence: 'PDF Report, WhatsApp Chat',
      response: 'In denial',
      note: 'Sent to federal review board',
      status: 'Flagged'
    },
    {
      id: '3006_Vega',
      name: 'Vega (Alias)',
      rfc: 'VEGA800101AAA',
      curp: 'VEGA800101HDFXXX00',
      summary: 'Allegations involving Vega in recent municipal dealings.',
      submitted: 'June 03, 2025',
      misconduct: 'Allegations involving Vega in recent municipal dealings.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Published'
    },
    {
      id: '3007_Lopez',
      name: 'Lopez (Alias)',
      rfc: 'LOPE800101AAA',
      curp: 'LOPE800101HDFXXX00',
      summary: 'Manipulated licensing records to benefit third-party contractors.',
      submitted: 'June 06, 2025',
      misconduct: 'Manipulated licensing records to benefit third-party contractors.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Closed'
    },
    {
      id: '3008_Castillo',
      name: 'Castillo (Alias)',
      rfc: 'CAST800101AAA',
      curp: 'CAST800101HDFXXX00',
      summary: 'Authorized suspicious infrastructure contracts without public bidding.',
      submitted: 'June 09, 2025',
      misconduct: 'Authorized suspicious infrastructure contracts without public bidding.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'In Review'
    },
    {
      id: '3009_Mendoza',
      name: 'Mendoza (Alias)',
      rfc: 'MEND800101AAA',
      curp: 'MEND800101HDFXXX00',
      summary: 'Allegations involving Mendoza in recent municipal dealings.',
      submitted: 'June 11, 2025',
      misconduct: 'Allegations involving Mendoza in recent municipal dealings.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Flagged'
    },
    {
      id: '3010_Garcia',
      name: 'Garcia (Alias)',
      rfc: 'GARC800101AAA',
      curp: 'GARC800101HDFXXX00',
      summary: 'Allegations involving Garcia in recent municipal dealings.',
      submitted: 'June 13, 2025',
      misconduct: 'Allegations involving Garcia in recent municipal dealings.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Closed'
    },
    {
      id: '3011_Herrera',
      name: 'Herrera (Alias)',
      rfc: 'HERR800101AAA',
      curp: 'HERR800101HDFXXX00',
      summary: 'Illicit use of construction permits for unauthorized developments.',
      submitted: 'June 16, 2025',
      misconduct: 'Illicit use of construction permits for unauthorized developments.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'In Review'
    },
    {
      id: '3012_Silva',
      name: 'Silva (Alias)',
      rfc: 'SILV800101AAA',
      curp: 'SILV800101HDFXXX00',
      summary: 'Unauthorized approvals for state-owned land sales.',
      submitted: 'June 18, 2025',
      misconduct: 'Unauthorized approvals for state-owned land sales.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Published'
    },
    {
      id: '3013_Torres',
      name: 'Torres (Alias)',
      rfc: 'TORR800101AAA',
      curp: 'TORR800101HDFXXX00',
      summary: 'Evidence of forged audit reports in procurement contracts.',
      submitted: 'June 20, 2025',
      misconduct: 'Evidence of forged audit reports in procurement contracts.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Flagged'
    },
    {
      id: '3014_Alvarez',
      name: 'Alvarez (Alias)',
      rfc: 'ALVA800101AAA',
      curp: 'ALVA800101HDFXXX00',
      summary: 'Diversion of disaster relief funds through shell companies.',
      submitted: 'June 22, 2025',
      misconduct: 'Diversion of disaster relief funds through shell companies.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'In Review'
    },
    {
      id: '3015_Jimenez',
      name: 'Jimenez (Alias)',
      rfc: 'JIME800101AAA',
      curp: 'JIME800101HDFXXX00',
      summary: 'Manipulation of voting systems during local elections.',
      submitted: 'June 25, 2025',
      misconduct: 'Manipulation of voting systems during local elections.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Closed'
    },
    {
      id: '3016_Rojas',
      name: 'Rojas (Alias)',
      rfc: 'ROJA800101AAA',
      curp: 'ROJA800101HDFXXX00',
      summary: 'Tampering with municipal records to erase financial liabilities.',
      submitted: 'June 27, 2025',
      misconduct: 'Tampering with municipal records to erase financial liabilities.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Flagged'
    },
    {
      id: '3017_Bautista',
      name: 'Bautista (Alias)',
      rfc: 'BAUT800101AAA',
      curp: 'BAUT800101HDFXXX00',
      summary: 'Misuse of educational grants to fund private business ventures.',
      submitted: 'June 30, 2025',
      misconduct: 'Misuse of educational grants to fund private business ventures.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'In Review'
    },
    {
      id: '3018_Santos',
      name: 'Santos (Alias)',
      rfc: 'SANT800101AAA',
      curp: 'SANT800101HDFXXX00',
      summary: 'Receiving bribes in exchange for zoning changes in protected areas.',
      submitted: 'July 02, 2025',
      misconduct: 'Receiving bribes in exchange for zoning changes in protected areas.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Published'
    },
    {
      id: '3019_Cabrera',
      name: 'Cabrera (Alias)',
      rfc: 'CABR800101AAA',
      curp: 'CABR800101HDFXXX00',
      summary: 'Falsification of travel records to claim inflated reimbursements.',
      submitted: 'July 04, 2025',
      misconduct: 'Falsification of travel records to claim inflated reimbursements.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Closed'
    },
    {
      id: '3020_Espinosa',
      name: 'Espinosa (Alias)',
      rfc: 'ESPI800101AAA',
      curp: 'ESPI800101HDFXXX00',
      summary: 'Improper awarding of sanitation contracts to relatives.',
      submitted: 'July 07, 2025',
      misconduct: 'Improper awarding of sanitation contracts to relatives.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Published'
    },
    {
      id: '3026_Salinas',
      name: 'Salinas (Alias)',
      rfc: 'SALI800101AAA',
      curp: 'SALI800101HDFXXX00',
      summary: 'Suspicious land reclassification benefiting private developer.',
      submitted: 'July 10, 2025',
      misconduct: 'Suspicious land reclassification benefiting private developer.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Flagged'
    },
    {
      id: '3027_Camacho',
      name: 'Camacho (Alias)',
      rfc: 'CAMA800101AAA',
      curp: 'CAMA800101HDFXXX00',
      summary: 'Misuse of emergency funds allocated for disaster relief.',
      submitted: 'July 12, 2025',
      misconduct: 'Misuse of emergency funds allocated for disaster relief.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'In Review'
    },
    {
      id: '3028_Solano',
      name: 'Solano (Alias)',
      rfc: 'SOLA800101AAA',
      curp: 'SOLA800101HDFXXX00',
      summary: 'Unlawful awarding of public contracts to a family-owned firm.',
      submitted: 'July 15, 2025',
      misconduct: 'Unlawful awarding of public contracts to a family-owned firm.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Closed'
    },
    {
      id: '3029_Villanueva',
      name: 'Villanueva (Alias)',
      rfc: 'VILL800101AAA',
      curp: 'VILL800101HDFXXX00',
      summary: 'Tampering with land registry records in suburban zones.',
      submitted: 'July 17, 2025',
      misconduct: 'Tampering with land registry records in suburban zones.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Published'
    },
    {
      id: '3030_Carrillo',
      name: 'Carrillo (Alias)',
      rfc: 'CARR800101AAA',
      curp: 'CARR800101HDFXXX00',
      summary: 'Accepting bribes in exchange for construction permits.',
      submitted: 'July 19, 2025',
      misconduct: 'Accepting bribes in exchange for construction permits.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Flagged'
    },
    {
      id: '3036_Zamora',
      name: 'Zamora (Alias)',
      rfc: 'ZAMO800101AAA',
      curp: 'ZAMO800101HDFXXX00',
      summary: 'Unauthorized demolition of heritage properties.',
      submitted: 'July 21, 2025',
      misconduct: 'Unauthorized demolition of heritage properties.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'In Review'
    },
    {
      id: '3037_Riveza',
      name: 'Riveza (Alias)',
      rfc: 'RIVE800101AAA',
      curp: 'RIVE800101HDFXXX00',
      summary: 'Forgery of government-issued permits for vendors.',
      submitted: 'July 23, 2025',
      misconduct: 'Forgery of government-issued permits for vendors.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Published'
    },
    {
      id: '3038_Padilla',
      name: 'Padilla (Alias)',
      rfc: 'PADI800101AAA',
      curp: 'PADI800101HDFXXX00',
      summary: 'Retaliation against whistleblowers within the department.',
      submitted: 'July 25, 2025',
      misconduct: 'Retaliation against whistleblowers within the department.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Closed'
    },
    {
      id: '3039_Fuentes',
      name: 'Fuentes (Alias)',
      rfc: 'FUEN800101AAA',
      curp: 'FUEN800101HDFXXX00',
      summary: 'Diversion of state funds to non-registered NGOs.',
      submitted: 'July 27, 2025',
      misconduct: 'Diversion of state funds to non-registered NGOs.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Flagged'
    },
    {
      id: '3040_Mora',
      name: 'Mora (Alias)',
      rfc: 'MORA800101AAA',
      curp: 'MORA800101HDFXXX00',
      summary: 'Falsified attendance records for ghost employees.',
      submitted: 'July 29, 2025',
      misconduct: 'Falsified attendance records for ghost employees.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'In Review'
    },
    {
      id: '3036_Zamori',
      name: 'Zamori (Alias)',
      rfc: 'ZAMO800101AAA',
      curp: 'ZAMO800101HDFXXX00',
      summary: 'Attempting to influence local court decisions through intermediaries.',
      submitted: 'July 21, 2025',
      misconduct: 'Attempting to influence local court decisions through intermediaries.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'In Review'
    },
    {
      id: '3037_Riverd',
      name: 'Riverd (Alias)',
      rfc: 'RIVE800101AAA',
      curp: 'RIVE800101HDFXXX00',
      summary: 'Organizing unlawful public tenders under false identities.',
      submitted: 'July 23, 2025',
      misconduct: 'Organizing unlawful public tenders under false identities.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Published'
    },
    {
      id: '3038_Padilli',
      name: 'Padilli (Alias)',
      rfc: 'PADI800101AAA',
      curp: 'PADI800101HDFXXX00',
      summary: 'Failure to report conflicts of interest in housing projects.',
      submitted: 'July 25, 2025',
      misconduct: 'Failure to report conflicts of interest in housing projects.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Closed'
    },
    {
      id: '3039_Fuenter',
      name: 'Fuenter (Alias)',
      rfc: 'FUEN800101AAA',
      curp: 'FUEN800101HDFXXX00',
      summary: 'Involvement in vote-buying activities during elections.',
      submitted: 'July 27, 2025',
      misconduct: 'Involvement in vote-buying activities during elections.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'Flagged'
    },
    {
      id: '3040_Moras',
      name: 'Moras (Alias)',
      rfc: 'MORA800101AAA',
      curp: 'MORA800101HDFXXX00',
      summary: 'Forgery of tax receipts for small business registrations.',
      submitted: 'July 29, 2025',
      misconduct: 'Forgery of tax receipts for small business registrations.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'In Review'
    },
    {
      id: '3046_Ortega',
      name: 'Ortega (Alias)',
      rfc: 'ORTE800101AAA',
      curp: 'ORTE800101HDFXXX00',
      summary: 'Negligence leading to data breach of citizen records.',
      submitted: 'July 30, 2025',
      misconduct: 'Negligence leading to data breach of citizen records.',
      evidence: 'Statement + Screenshot',
      response: 'None',
      note: 'Internal review complete',
      status: 'Published'
    },
    {
      id: '3047_Cervantes',
      name: 'Cervantes (Alias)',
      rfc: 'CERV800101AAA',
      curp: 'CERV800101HDFXXX00',
      summary: 'Abuse of office power for personal property acquisition.',
      submitted: 'July 31, 2025',
      misconduct: 'Abuse of office power for personal property acquisition.',
      evidence: 'Statement + Screenshot',
      response: 'Filed denial',
      note: 'Status closed by review panel',
      status: 'Closed'
    },
    {
      id: '3048_Rosales',
      name: 'Rosales (Alias)',
      rfc: 'ROSA800101AAA',
      curp: 'ROSA800101HDFXXX00',
      summary: 'Failure to report environmental violations at industrial sites.',
      submitted: 'August 1, 2025',
      misconduct: 'Failure to report environmental violations at industrial sites.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Awaiting additional reports',
      status: 'In Review'
    },
    {
      id: '3049_Flores',
      name: 'Flores (Alias)',
      rfc: 'FLOR800101AAA',
      curp: 'FLOR800101HDFXXX00',
      summary: 'Intimidation of media personnel covering corruption stories.',
      submitted: 'August 2, 2025',
      misconduct: 'Intimidation of media personnel covering corruption stories.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under escalation',
      status: 'Flagged'
    },
    {
      id: '3050_Sandoval',
      name: 'Sandoval (Alias)',
      rfc: 'SAND800101AAA',
      curp: 'SAND800101HDFXXX00',
      summary: 'Deliberate delay in public health program rollouts.',
      submitted: 'August 3, 2025',
      misconduct: 'Deliberate delay in public health program rollouts.',
      evidence: 'Statement + Screenshot',
      response: 'Official clarification provided',
      note: 'Verified and published',
      status: 'Published'
    },
    {
      id: '3051_Castro',
      name: 'Castro (Alias)',
      rfc: 'CAST800101AAA',
      curp: 'CAST800101HDFXXX00',
      summary: 'Falsification of education credentials for senior officials.',
      submitted: 'August 4, 2025',
      misconduct: 'Falsification of education credentials for senior officials.',
      evidence: 'Statement + Screenshot',
      response: 'Pending',
      note: 'Under evaluation',
      status: 'In Review'
    },
    {
      id: '3052_Salinaz',
      name: 'Salinaz (Alias)',
      rfc: 'SALI800101AAA',
      curp: 'SALI800101HDFXXX00',
      summary: 'Tampering with audit reports submitted to the national commission.',
      submitted: 'August 5, 2025',
      misconduct: 'Tampering with audit reports submitted to the national commission.',
      evidence: 'Statement + Screenshot',
      response: 'Official clarification provided',
      note: 'Cleared and validated',
      status: 'Published'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 px-6" style={{ marginTop: '40px' }}>
      {cases.map((caseItem) => (
        <CaseCard key={caseItem.id} caseData={caseItem} />
      ))}
    </div>
  );
};

export default CasesGrid;
  ];

  const relatives = [
    { name: 'Ernesto Sarmiento', link: 'https://www.facebook.com/share/1EZQQDEnJ4/?mibextid=wwXIfr' },
    { name: 'María Trinidad Sarmiento', link: 'https://www.facebook.com/share/15xf4eRp3n/?mibextid=wwXIfr' },
    { name: 'Judith Sarmiento', link: 'https://www.facebook.com/share/1BC58DZ91m/?mibextid=wwXIfr' },
    { name: 'Héctor Sarmiento Cantu', link: 'https://www.facebook.com/share/19TuW6iuCD/?mibextid=wwXIfr' },
    { name: 'Diana Sarmiento', link: 'https://www.facebook.com/share/16ftj2AS1H/?mibextid=wwXIfr' },
    { name: 'Patricia Sarmiento', link: 'https://www.facebook.com/share/16zDWUVc9V/?mibextid=wwXIfr' },
    { name: 'Saulo Sarmiento', link: 'https://www.facebook.com/share/1B1M4s6eMv/?mibextid=wwXIfr' },
    { name: 'Arturo Cervantes', link: 'https://www.facebook.com/arturo.cervantes1?mibextid=wwXIfr&mibextid=wwXIfr' },
    { name: 'Jessica Sarmiento', link: 'https://x.com/ernestosar17379?s=21' },
    { name: 'Cecilia Sarmiento Torres', link: 'https://www.facebook.com/share/1YCGse8TYP/?mibextid=wwXIfr' },
    { name: 'Alberto Sarmiento', link: 'https://www.facebook.com/share/1HVTqaM6hs/?mibextid=wwXIfr' },
    { name: 'Karla Sarmiento Torres', link: 'https://www.facebook.com/share/1ZGgiGc5FJ/?mibextid=wwXIfr' },
    { name: 'Ignacio Sarmiento Torres', link: 'https://www.facebook.com/share/16rPSJn8t9/?mibextid=wwXIfr' },
    { name: 'Cecilia Sarmiento', link: 'https://www.facebook.com/share/1AythJkRj9/?mibextid=wwXIfr' },
    { name: 'Tete Montero Sarmiento', link: 'https://www.facebook.com/share/1BJvnH2m5S/?mibextid=wwXIfr' },
    { name: 'Alma Sarmiento', link: 'https://www.facebook.com/share/1B8UYZA8vj/?mibextid=wwXIfr' },
    { name: 'Arturo Sarmiento (Tamo)', link: 'https://www.facebook.com/share/1Jcav1q57T/?mibextid=wwXIfr' },
    { name: 'Mauricio Sarmiento', link: 'https://www.facebook.com/share/1Bzy4CUNbw/?mibextid=wwXIfr' },
    { name: 'Héctor Sarmiento', link: 'https://www.facebook.com/share/16uVWbCt4d/?mibextid=wwXIfr' },
    { name: 'Karenne Sarmiento', link: 'https://www.facebook.com/share/1VQHjgStCs/?mibextid=wwXIfr' },
    { name: 'Alejandra Sarmiento', link: 'https://www.facebook.com/share/1Aw5VHL2xt/?mibextid=wwXIfr' }
  ];

  const tweets = [
    {
      id: 1,
      username: 'PinedoSarmiento',
      content: 'Parece que el negocio de moda es no pagar... #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda',
      image: 'pinedo7.JPG',
      date: '10:11 PM · Feb 26, 2025',
      views: '364 Views',
      translated: false,
      details: [
        'LA EMPRESA MOVELCO, S.A. DE C.V',
        'Y SAYS QUE LAS DOS HOMBRES INNIGIBILIARIA GICSA',
        'DE PAGO DE LO CONCEBREMENTE ENTRAMENTE',
        'DE GICSA POR LOS TRABAJOS SEGUENDO EL PLANO',
        'DE UNA PERDIENTE 54/69 (484,4%)'
      ]
    },
    // Add all other tweets in the same format
    // ...
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Head>
        <title>All Cases – BRC</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <style jsx>{`
        #mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        #mobile-menu.open {
          max-height: 500px;
        }
        .lang-toggle {
          background-color: #f3f4f6;
          border-radius: 9999px;
          padding: 0.25rem;
          display: inline-flex;
        }
        .lang-toggle button {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          transition: all 0.2s;
        }
        .lang-toggle button.active {
          background-color: #0d111c;
          color: white;
        }
        .hands-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .hand-container {
          text-align: center;
          width: 120px;
        }
        .tweet-container {
          margin-bottom: 1.5rem;
        }
        .tweet-image {
          max-height: 300px;
          object-fit: contain;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          margin-top: 1rem;
        }
        .info-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        .section-heading {
          background-color: #000;
          color: #fff;
          text-align: center;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        .full-width-section {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }
        .comment-actions {
          display: flex;
          gap: 16px;
          color: #64748b;
          font-size: 14px;
        }
        .comment-action {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .comment-action:hover {
          color: #3b82f6;
        }
        .comment-action svg {
          margin-right: 4px;
        }
        .comment-box {
          background-color: #f8fafc;
          border-radius: 0.5rem;
          padding: 1rem;
          margin-top: 1rem;
        }
        .comment-item {
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
        }
        .comment-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
        .reply-form {
          margin-top: 1rem;
          padding-left: 1rem;
          border-left: 2px solid #e2e8f0;
        }
        @media (max-width: 1024px) {
          .hands-row {
            gap: 1rem;
          }
          .hand-container {
            width: 100px;
          }
        }
        @media (max-width: 768px) {
          .hands-row {
            gap: 0.75rem;
          }
          .hand-container {
            width: 80px;
          }
        }
      `}</style>

      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-20">
        <div className="container mx-auto px-4 py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="brclogo.jpeg" alt="BRC Logo" className="h-14 sm:h-16 mr-3" />
              <a href="index.html" className="text-xl sm:text-2xl font-bold text-black"></a>
            </div>
            
            <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
              <nav className="flex space-x-4 sm:space-x-8">
                <a className="text-black hover:text-blue-600 px-2 sm:px-3 py-2 text-sm sm:text-base transition" href="index.html">Home</a>
                <a className="text-black hover:text-blue-600 px-2 sm:px-3 py-2 text-sm sm:text-base transition" href="bg.html">All Cases</a>
                <a className="text-black hover:text-blue-600 px-2 sm:px-3 py-2 text-sm sm:text-base transition font-semibold" href="cases_sarmiento_pinedo.html">Case #3000_Sarmiento</a>
                <a className="text-black hover:text-blue-600 px-2 sm:px-3 py-2 text-sm sm:text-base transition" href="#submit">Submit Case</a>
                <a className="text-black hover:text-blue-600 px-2 sm:px-3 py-2 text-sm sm:text-base transition" href="#donate">Donate</a>
                <a className="text-black hover:text-blue-600 px-2 sm:px-3 py-2 text-sm sm:text-base transition" href="index.html">Membership</a>
                <a className="text-black hover:text-blue-600 px-2 sm:px-3 py-2 text-sm sm:text-base transition" href="https://legales.cooperativa.cl/wpcontent/uploads/2023/08/VERSI%C3%93N-IMPRESA-Posesiones-Efectivas-deHerencias-Intestadas-16-08-2023-Extracto-109.pdf%E2%80%9D/">Legal</a>
              </nav>
              <div className="lang-toggle ml-4">
                <button 
                  id="langEN" 
                  className={`${activeLanguage === 'EN' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('EN')}
                >
                  EN
                </button>
                <button 
                  id="langES" 
                  className={`${activeLanguage === 'ES' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('ES')}
                >
                  ES
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4 md:hidden">
              <div className="lang-toggle">
                <button 
                  id="langENMobile" 
                  className={`${activeLanguage === 'EN' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('EN')}
                >
                  EN
                </button>
                <button 
                  id="langESMobile" 
                  className={`${activeLanguage === 'ES' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('ES')}
                >
                  ES
                </button>
              </div>
              <button id="mobile-menu-button" className="focus:outline-none" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          <div id="mobile-menu" className={`md:hidden bg-white ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="px-2 pt-2 pb-4 sm:pt-4 sm:pb-6 space-y-2 sm:space-y-3">
              <a className="block px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg text-black hover:bg-gray-100 rounded-lg" href="index.html">Home</a>
              <a className="block px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg text-black hover:bg-gray-100 rounded-lg" href="bg.html">All Cases</a>
              <a className="block px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg text-black hover:bg-gray-100 rounded-lg font-semibold" href="cases_sarmiento_pinedo.html">Sarmiento Case</a>
              <a className="block px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg text-black hover:bg-gray-100 rounded-lg" href="#submit">Submit Case</a>
              <a className="block px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg text-black hover:bg-gray-100 rounded-lg" href="#donate">Donate</a>
              <a className="block px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg text-black hover:bg-gray-100 rounded-lg" href="mind.html">Membership</a>
              <a className="block px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg text-black hover:bg-gray-100 rounded-lg" href="mind.html">Legal</a>
              <div className="lang-toggle w-full px-3 sm:px-4 py-2 sm:py-3">
                <button 
                  id="langENMobileExpanded" 
                  className={`w-1/2 ${activeLanguage === 'EN' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('EN')}
                >
                  English
                </button>
                <button 
                  id="langESMobileExpanded" 
                  className={`w-1/2 ${activeLanguage === 'ES' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('ES')}
                >
                  Español
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Public Case Archive</h1>
        <p className="text-lg max-w-2xl mx-auto">Search, filter, and access documented civil misconduct cases submitted to BRC.</p>
      </section>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 px-4 py-3 text-sm rounded-md my-6 max-w-5xl mx-auto">
        <strong>LEGAL NOTICE:</strong>
        This platform does not issue legal judgments. It documents citizen reports with supporting evidence and offers full right of reply.
        The individuals mentioned are presumed innocent. This is a transparency and prevention tool.
      </div>

      {/* Hands Grid */}
      <section className="bg-white py-10 px-6">
        {/* Row 1 - 9 Images */}
        <div className="hands-row">
          {[...Array(9)].map((_, i) => (
            <div className="hand-container" key={`hand-${i+1}`}>
              <img 
                src={`WhatsApp Image 2025-07-30 at ${i < 4 ? '5.54.'+(33-i)+' PM.jpeg' : '4.37.50 PM-removebg-preview.png'}`} 
                alt={`Hand ${i+1}`} 
                className="rounded-full w-24 h-24 object-cover border border-gray-300 shadow mx-auto" 
              />
              <p className="mt-2 text-sm">{i+1}</p>
              <p className="text-xs text-gray-500">Case #{3053+i}_Salinaz</p>
            </div>
          ))}
        </div>

        {/* Row 2 - 9 Images */}
        <div className="hands-row">
          {[...Array(9)].map((_, i) => (
            <div className="hand-container" key={`hand-${i+10}`}>
              <img 
                src={`WhatsApp_Image_2025-07-30_at_4.37.50_PM__${i > 0 ? i-1 : ''}${i > 0 ? '-' : ''}removebg-preview.png`} 
                alt={`Hand ${i+10}`} 
                className="rounded-full w-24 h-24 object-cover border border-gray-300 shadow mx-auto" 
              />
              <p className="mt-2 text-sm">{i+10}</p>
              <p className="text-xs text-gray-500">Case #{3062+i}_Salinaz</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Navy Box Section */}
      <section style={{backgroundColor: '#0D1220'}} className="w-full py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl font-bold uppercase tracking-widest mb-2">
            All Reported Cases
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Browse through anonymized case reports with submitted evidence and investigation status.
          </p>
        </div>
      </section>

      {/* Case Cards Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 px-6" style={{marginTop: '40px'}}>
        {cases.map((caseItem) => (
          <div className="bg-white shadow-md rounded-lg p-4 w-full" key={caseItem.id}>
            <div className="flex items-center space-x-4">
              <img src={caseItem.image} alt="Case Photo" className="w-16 h-16 rounded-full border border-gray-300" />
              <div>
                <h3 className="text-lg font-semibold">Case #{caseItem.id}_{caseItem.name}</h3>
                <p className="text-sm text-gray-600">{caseItem.description}</p>
                <p className="text-xs text-gray-400">Submitted: {caseItem.date}</p>
              </div>
              <span className={`ml-auto ${caseItem.statusColor} text-xs px-2 py-1 rounded-full`}>{caseItem.status}</span>
            </div>
            <div className="mt-4">
              <button 
                onClick={() => toggleCaseDetails(caseItem.id)}
                className="text-blue-600 hover:underline text-sm"
              >
                View Full Case
              </button>
              <div className={`${expandedCases[caseItem.id] ? '' : 'hidden'} mt-4 text-sm text-gray-700 space-y-4`}>
                <div><strong>Name:</strong> {caseItem.details.name}</div>
                <div><strong>RFC:</strong> {caseItem.details.rfc}</div>
                <div><strong>CURP:</strong> {caseItem.details.curp}</div>
                <div><strong>Misconduct:</strong> {caseItem.details.misconduct}</div>
                <div><strong>Evidence:</strong> {caseItem.details.evidence}</div>
                <div><strong>Response:</strong> {caseItem.details.response}</div>
                <div><strong>Note:</strong> {caseItem.details.note}</div>
                <span className={`inline-block ${caseItem.statusColor} text-xs px-3 py-1 rounded-full`}>Status: {caseItem.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Facebook Relatives Section */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="section-heading">
          <h2 className="text-2xl font-bold">FAMILIARES SARMIENTO (En segundo y tercer grado)</h2>
        </div>
        <div className="info-box">
          <ul className="list-disc pl-5 space-y-2">
            {relatives.map((relative, index) => (
              <li key={index}>
                <a href={relative.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {relative.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Facebook Comments Section */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Discussion</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              {/* Comment Form */}
              <div className="mb-6">
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3" placeholder="Add your comment..."></textarea>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Post</button>
                </div>
              </div>
              
              {/* Comments List */}
              <div className="space-y-4">
                {/* Comment 1 */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-semibold">Maria Gonzalez</h4>
                        <span className="text-gray-500 text-sm ml-2">2 hours ago</span>
                      </div>
                      <p className="mt-1 text-gray-700">This information is very helpful for my research. Thank you for compiling it.</p>
                      <div className="flex items-center mt-2 space-x-4 text-sm">
                        <button className="text-gray-500 hover:text-blue-600 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          12
                        </button>
                        <button className="text-gray-500 hover:text-blue-600">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Comment 2 */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-semibold">Carlos Mendez</h4>
                        <span className="text-gray-500 text-sm ml-2">1 day ago</span>
                      </div>
                      <p className="mt-1 text-gray-700">I recognize some of these names from previous cases. The network is larger than I thought.</p>
                      <div className="flex items-center mt-2 space-x-4 text-sm">
                        <button className="text-gray-500 hover:text-blue-600 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          5
                        </button>
                        <button className="text-gray-500 hover:text-blue-600">Reply</button>
                      </div>
                      
                      {/* Nested Reply */}
                      <div className="mt-4 pl-4 border-l-2 border-gray-200">
                        <div className="flex items-start">
                          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-8 h-8 rounded-full mr-2" />
                          <div>
                            <div className="flex items-center">
                              <h4 className="font-semibold text-sm">Laura Jimenez</h4>
                              <span className="text-gray-500 text-xs ml-2">12 hours ago</span>
                            </div>
                            <p className="mt-1 text-gray-700 text-sm">Yes, I've noticed the same pattern. There seems to be a recurring connection with construction businesses.</p>
                            <div className="flex items-center mt-2 space-x-4 text-xs">
                              <button className="text-gray-500 hover:text-blue-600 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                2
                              </button>
                              <button className="text-gray-500 hover:text-blue-600">Reply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Twitter Archive Section */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="section-heading">
          <h2 className="text-2xl font-bold">X Posts Archive</h2>
          <p className="mt-2">Collection of tweets related to the case:</p>
        </div>
        
        {tweets.map((tweet) => (
          <div className="bg-white shadow rounded-lg p-6 tweet-container" key={tweet.id}>
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex items-center">
                  <h3 className="font-bold text-lg">Sarmiento Pinedo <span className="text-gray-500 font-normal">@{tweet.username}</span></h3>
                  {tweet.translated && (
                    <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Translated</span>
                  )}
                </div>
                <p className="mt-2">
                  {tweet.content}
                </p>
                <img src={tweet.image} alt="Tweet" className="tweet-image" />
                {tweet.details && (
                  <div className="text-sm mt-4 space-y-2">
                    {tweet.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                )}
                <div className="flex space-x-4 text-sm text-gray-500 mt-2">
                  <span>{tweet.date}</span>
                  {tweet.views && <span>{tweet.views}</span>}
                </div>
              </div>
            </div>
            
            {/* Twitter Comment Section */}
            <div className="comment-box mt-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                <button className="comment-action">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>24</span>
                </button>
                <button className="comment-action">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>8</span>
                </button>
                <button className="comment-action">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
              </div>
              
              {/* Comment Form */}
              <div className="flex items-start space-x-3">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User" className="w-8 h-8 rounded-full" />
                <div className="flex-1">
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" rows="2" placeholder="Tweet your reply"></textarea>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition">Reply</button>
                  </div>
                </div>
              </div>
              
              {/* Replies/Comments */}
              <div className="mt-4 space-y-3">
                {/* Comment 1 */}
                <div className="comment-item">
                  <div className="flex items-start space-x-3">
                    <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="User" className="w-8 h-8 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="font-semibold text-sm">Ana Torres</h4>
                        <span className="text-gray-500 text-xs ml-2">@anatorres · 2h</span>
                      </div>
                      <p className="mt-1 text-sm">This is a serious accusation. Do you have any official documents to back this up?</p>
                      <div className="flex items-center mt-2 space-x-4 text-xs">
                        <button className="comment-action">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span>3</span>
                        </button>
                        <button className="comment-action">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Comment 2 */}
                <div className="comment-item">
                  <div className="flex items-start space-x-3">
                    <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="User" className="w-8 h-8 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="font-semibold text-sm">Luis Ramirez</h4>
                        <span className="text-gray-500 text-xs ml-2">@luisr · 45m</span>
                      </div>
                      <p className="mt-1 text-sm">I've heard similar complaints from other contractors. This needs investigation.</p>
                      <div className="flex items-center mt-2 space-x-4 text-xs">
                        <button className="comment-action">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span>1</span>
                        </button>
                        <button className="comment-action">Reply</button>
                      </div>
                      
                      {/* Nested Reply */}
                      <div className="reply-form mt-3">
                        <div className="flex items-start space-x-3">
                          <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="User" className="w-6 h-6 rounded-full" />
                          <div className="flex-1">
                            <textarea className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" rows="1" placeholder="Write a reply..."></textarea>
                            <div className="flex justify-end mt-1">
                              <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700 transition">Reply</button>

/* Main Content - Tweets Section */}
      <main className="max-w-2xl mx-auto py-8 px-4 space-y-6">
        {/* Tweet 1 */}
        <Tweet 
          username="PinedoSarmiento"
          displayName="Sarmiento Pinedo"
          timestamp="11:25 PM · Oct 22, 2024"
          views="111 Views"
          content="MARICONI: se le llama a la gente como @RuffoEstra73099 y #Josel.uisEstrasaMartinez que contratan un servicio y desaparecen a la hora de pagar. @ensenadanet @VigiaEnsenada @SPSEnsenada #Ensenada #BajaCalifornia #MexicanGP"
          image="pinedo11.JPG"
          likes={24}
          comments={8}
          isTranslated={true}
        />

        {/* Tweet 2 */}
        <Tweet 
          username="PinedoSarmiento"
          displayName="Sarmiento Pinedo"
          timestamp="2:57 AM · Apr 20, 2023"
          views="1,226 Views"
          content="El señor Mauricio Merikanskas nunca pagó por los trabajos contratados que hicimos para el basurero de San Mateo @GobNau @SEDEMA.CDMX @Edomex se para el cuello hablando de toda la gente que corrompió para obtener esa consesión .... Mucho ojo!"
          image="pinedo16.JPG"
          likes={42}
          comments={12}
          isTranslated={true}
        />

        {/* Additional tweets would follow the same pattern */}
      </main>

      {/* Economic and Corporate Ties Section */}
      <Section title="ECONOMIC AND CORPORATE TIES" bgColor="gray-900" textColor="white">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Individuals</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Héctor Guillermo Meade de Zamacona</strong> (married and in divorce proceedings from Tatiana Sela Gueyde)
              <ul className="list-circle pl-5 mt-1">
                <li>Appears in a judicial auction document, suggesting financial problems or legal disputes with third parties</li>
                <li>Possible capital figure or risk ally for José Sarmiento</li>
                <li>Has a reputation for being "unreliable" in previous testimonies</li>
              </ul>
            </li>
            <li>
              <strong>Ernesto Sarmiento</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>Image found but no clear documentary records</li>
                <li>Possible close male relative, perhaps a close cousin</li>
              </ul>
            </li>
            <li>
              <strong>ALFREDO SARMIENTO (Colombia)</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>Mentioned in Colombian registry ("resultados colombia.pdf" file)</li>
                <li>Could be a direct paternal line relative (unconfirmed)</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">COMPANIES LOCATED IN MEXICO</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>N-2017091005 EL CIRCO DE LA NOCHE, S.A. DE C.V. San Luis Potosí</li>
            <li>N-2018023351 BRIX CONSTRUCTORA, SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE Ciudad de México</li>
            <li>18630 EXCAVA TERRASEROS SA DE CV Naucalpan</li>
            <li>386358 JOXAM DE MEXICO, SOCIEDAD ANONIMA DE CAPITAL VARIABLE Ciudad de México</li>
            <li>70058 TELEPREPAGO, S.A. DE C.V. Guadalajara</li>
          </ul>
        </div>
      </Section>

      {/* Detected Patterns Section */}
      <Section title="DETECTED PATTERNS" bgColor="white" textColor="gray-900">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">PSYCHOLOGICAL AND BEHAVIORAL PROFILE</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Publicly projected personality traits:</strong> Shows an emotional, reactive and complaining communication style, with publications that reflect economic or emotional pressure.
              <ul className="list-circle pl-5 mt-1">
                <li>Uses social networks as a mechanism for indirect coercion</li>
                <li>Shows hypersensitivity to conflicts, externalizing blame and seeking public support</li>
              </ul>
            </li>
            <li>
              <strong>Modus vivendi and operational:</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>Involved in multiple companies in Mexico, USA and possibly Chile or Colombia</li>
                <li>Multiple family ties in Latin America</li>
                <li>Associates with controversial or informal individuals</li>
              </ul>
            </li>
            <li>
              <strong>Relevant detected behaviors:</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>Uses Twitter/X to report, threaten or suggest conflicts</li>
                <li>Probable use of family relationships to execute emotional pressure</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">RELEVANT PATTERNS AND STRUCTURE</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">A. Family and support structure</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>José Eduardo Sarmiento is surrounded by an extensive network of relatives</li>
                <li>Some relatives have been owners of assets or businesses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">B. Possible accomplices or pressure allies</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Héctor Guillermo Meade de Zamacona appears in auction lawsuits</li>
                <li>Ex-wife Huguette Valle Meade with active intra-family lawsuit</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Extortion Mitigation Strategy */}
      <Section title="EXTORTION MITIGATION STRATEGY" bgColor="gray-900" textColor="white">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Emotional channel closure:</h3>
            <p>Any contact should be made through formal and legal channels. Avoid WhatsApp or informal calls. If verbal contact is essential, record with authorization or leave a written record of what was discussed.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Narrative blocking:</h3>
            <p>Do not respond publicly on social networks. If there are reputational threats, accumulate screenshots, URLs, and dates to assemble an evidence folder and file a complaint for blackmail, coercion or indirect extortion if it escalates.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Third-party protection:</h3>
            <p>Warn the client to avoid having their family members exposed on open social networks or responding to messages that may come from this subject. In case of intimidating messages, save and forward to your control.</p>
          </div>
        </div>
      </Section>

      {/* Action Protocol */}
      <Section title="ACTION PROTOCOL FOR THE CLIENT AND FAMILY" bgColor="white" textColor="gray-900">
        <p className="mb-6 text-center">Regarding harassment, intimidation or suspicious contact related to the case</p>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. PROTOCOL OBJECTIVE</h3>
            <p>This protocol aims to protect the client's family from threats, publications, intimidating messages or contact attempts made on social networks, WhatsApp or digital platforms, derived from the hostile environment generated by José Sarmiento.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">2. SCOPE OF APPLICATION</h3>
            <p>Applies to:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Pedro Checa Patjane</li>
              <li>His wife, children, parents, siblings, in-laws, close cousins</li>
              <li>Close circle and public or family social networks</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">3. MAIN IDENTIFIED RISKS</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dissemination of private information (doxing)</li>
              <li>Intimidating or emotional blackmail messages</li>
              <li>Identity theft or manipulation of third parties</li>
              <li>Incitement to public scorn or reputational damage</li>
              <li>Possible direct harassment of minors through social networks</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">4. SPECIFIC OPERATING INSTRUCTIONS</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">A. Social Networks (Facebook, Instagram, TikTok, LinkedIn)</h4>
                <ul className="list-decimal pl-5 space-y-2 mt-2">
                  <li>Never respond to publications, messages or tags related to Pedro Checa</li>
                  <li>Immediately block any account that sends intimidating messages</li>
                  <li>Configure privacy settings to maximum</li>
                  <li>Report offensive or threatening content directly to the platform</li>
                  <li>Take screenshots and forward to legal control</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">B. Private Messaging (WhatsApp, SMS, Telegram, Messenger)</h4>
                <ul className="list-decimal pl-5 space-y-2 mt-2">
                  <li>If a message arrives from an unknown number: DO NOT RESPOND</li>
                  <li>If the message contains threats: Block the contact</li>
                  <li>If the message seems "friendly" but talks about the case: Do not engage</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">5. OFFICIAL RESPONSE CHANNELS</h3>
            <p>Any person who receives a message about this matter SHOULD NOT RESPOND. The only authorized response, if strictly necessary, will be sent from the law firm's designated legal channel.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">6. RECOMMENDED BEHAVIOR</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Do not discuss the case in social gatherings or digital forums</li>
              <li>Do not make publications expressing anger, mockery or confrontation</li>
              <li>Do not respond to provocations or indirect tags</li>
              <li>Temporarily disable comments on public posts</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">7. FORWARDING MESSAGES TO CONTROL</h3>
            <p>All suspicious messages should be sent immediately to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Secure email: austelio.mendoza@mexicanconsulting.com</li>
              <li>Control WhatsApp: 5559532569</li>
              <li>Include sending key: "FAMILY ALERT - [Recipient's Name] - [Date]"</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">8. IN CASE OF EMERGENCY</h3>
            <p>If any family member:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Receives death threats</li>
              <li>Is photographed without consent in public spaces</li>
              <li>Detects that their address or number was published</li>
            </ul>
            <p className="mt-2">Contact the case coordinator lawyer immediately.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">9. NOTE FOR MINORS</h3>
            <p>If children have social networks:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Review their devices</li>
              <li>Temporarily deactivate their accounts if they are public</li>
              <li>Remind them never to respond to messages from strangers or share personal data</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">10. PROTOCOL UPDATES</h3>
            <p>This document may be updated as the case evolves or new actors involved are identified.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

// Reusable Tweet Component
const Tweet = ({ username, displayName, timestamp, views, content, image, likes, comments, isTranslated }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-start">
        <div className="flex-1">
          <div className="flex items-center">
            <h3 className="font-bold text-lg">{displayName} <span className="text-gray-500 font-normal">@{username}</span></h3>
            {isTranslated && (
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Translated</span>
            )}
          </div>
          <p className="mt-2">{content}</p>
          {image && (
            <img src={image} alt="Tweet media" className="mt-4 rounded-lg w-full" />
          )}
          <div className="flex space-x-4 text-sm text-gray-500 mt-2">
            <span>{timestamp}</span>
            <span>{views}</span>
          </div>
        </div>
      </div>
      
      {/* Twitter Comment Section */}
      <div className="comment-box mt-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <button className="comment-action flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{likes}</span>
          </button>
          <button className="comment-action flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{comments}</span>
          </button>
          <button className="comment-action flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>Share</span>
          </button>
        </div>
        
        {/* Comment Form */}
        <div className="flex items-start space-x-3">
          <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User" className="w-8 h-8 rounded-full" />
          <div className="flex-1">
            <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" rows="2" placeholder="Tweet your reply"></textarea>
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition">Reply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, children, bgColor, textColor }) => {
  const bgClass = `bg-${bgColor}`;
  const textClass = `text-${textColor}`;
  
  return (
    <section className={`${bgClass} ${textClass} py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <div className={`${bgColor === 'gray-900' ? 'bg-gray-800' : 'bg-gray-50 border border-gray-200'} p-6 rounded-lg`}>
          <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
};

export default TwitterProfileAnalysis;


 {/* Detected Patterns Section */}
      <Section title="DETECTED PATTERNS" bgColor="white" textColor="gray-900">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">PSYCHOLOGICAL AND BEHAVIORAL PROFILE</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Publicly projected personality traits:</strong> Shows an emotional, reactive and complaining communication style, with publications that reflect economic or emotional pressure.
              <ul className="list-circle pl-5 mt-1">
                <li>Uses social networks as a mechanism for indirect coercion</li>
                <li>Shows hypersensitivity to conflicts, externalizing blame and seeking public support</li>
              </ul>
            </li>
            <li>
              <strong>Modus vivendi and operational:</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>Involved in multiple companies in Mexico, USA and possibly Chile or Colombia</li>
                <li>Multiple family ties in Latin America</li>
                <li>Associates with controversial or informal individuals</li>
              </ul>
            </li>
            <li>
              <strong>Relevant detected behaviors:</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>Uses Twitter/X to report, threaten or suggest conflicts</li>
                <li>Probable use of family relationships to execute emotional pressure</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">RELEVANT PATTERNS AND STRUCTURE</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">A. Family and support structure</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>José Eduardo Sarmiento is surrounded by an extensive network of relatives</li>
                <li>Some relatives have been owners of assets or businesses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">B. Possible accomplices or pressure allies</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Héctor Guillermo Meade de Zamacona appears in auction lawsuits</li>
                <li>Ex-wife Huguette Valle Meade with active intra-family lawsuit</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Extortion Mitigation Strategy */}
      <Section title="EXTORTION MITIGATION STRATEGY" bgColor="gray-900" textColor="white">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Emotional channel closure:</h3>
            <p>Any contact should be made through formal and legal channels. Avoid WhatsApp or informal calls. If verbal contact is essential, record with authorization or leave a written record of what was discussed.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Narrative blocking:</h3>
            <p>Do not respond publicly on social networks. If there are reputational threats, accumulate screenshots, URLs, and dates to assemble an evidence folder and file a complaint for blackmail, coercion or indirect extortion if it escalates.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Third-party protection:</h3>
            <p>Warn the client to avoid having their family members exposed on open social networks or responding to messages that may come from this subject. In case of intimidating messages, save and forward to your control.</p>
          </div>
        </div>
      </Section>

      {/* Action Protocol */}
      <Section title="ACTION PROTOCOL FOR THE CLIENT AND FAMILY" bgColor="white" textColor="gray-900">
        <p className="mb-6 text-center">Regarding harassment, intimidation or suspicious contact related to the case</p>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. PROTOCOL OBJECTIVE</h3>
            <p>This protocol aims to protect the client's family from threats, publications, intimidating messages or contact attempts made on social networks, WhatsApp or digital platforms, derived from the hostile environment generated by José Sarmiento.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">2. SCOPE OF APPLICATION</h3>
            <p>Applies to:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Pedro Checa Patjane</li>
              <li>His wife, children, parents, siblings, in-laws, close cousins</li>
              <li>Close circle and public or family social networks</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">3. MAIN IDENTIFIED RISKS</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dissemination of private information (doxing)</li>
              <li>Intimidating or emotional blackmail messages</li>
              <li>Identity theft or manipulation of third parties</li>
              <li>Incitement to public scorn or reputational damage</li>
              <li>Possible direct harassment of minors through social networks</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">4. SPECIFIC OPERATING INSTRUCTIONS</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">A. Social Networks (Facebook, Instagram, TikTok, LinkedIn)</h4>
                <ul className="list-decimal pl-5 space-y-2 mt-2">
                  <li>Never respond to publications, messages or tags related to Pedro Checa</li>
                  <li>Immediately block any account that sends intimidating messages</li>
                  <li>Configure privacy settings to maximum</li>
                  <li>Report offensive or threatening content directly to the platform</li>
                  <li>Take screenshots and forward to legal control</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">B. Private Messaging (WhatsApp, SMS, Telegram, Messenger)</h4>
                <ul className="list-decimal pl-5 space-y-2 mt-2">
                  <li>If a message arrives from an unknown number: DO NOT RESPOND</li>
                  <li>If the message contains threats: Block the contact</li>
                  <li>If the message seems "friendly" but talks about the case: Do not engage</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">5. OFFICIAL RESPONSE CHANNELS</h3>
            <p>Any person who receives a message about this matter SHOULD NOT RESPOND. The only authorized response, if strictly necessary, will be sent from the law firm's designated legal channel.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">6. RECOMMENDED BEHAVIOR</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Do not discuss the case in social gatherings or digital forums</li>
              <li>Do not make publications expressing anger, mockery or confrontation</li>
              <li>Do not respond to provocations or indirect tags</li>
              <li>Temporarily disable comments on public posts</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">7. FORWARDING MESSAGES TO CONTROL</h3>
            <p>All suspicious messages should be sent immediately to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Secure email: austelio.mendoza@mexicanconsulting.com</li>
              <li>Control WhatsApp: 5559532569</li>
              <li>Include sending key: "FAMILY ALERT - [Recipient's Name] - [Date]"</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">8. IN CASE OF EMERGENCY</h3>
            <p>If any family member:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Receives death threats</li>
              <li>Is photographed without consent in public spaces</li>
              <li>Detects that their address or number was published</li>
            </ul>
            <p className="mt-2">Contact the case coordinator lawyer immediately.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">9. NOTE FOR MINORS</h3>
            <p>If children have social networks:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Review their devices</li>
              <li>Temporarily deactivate their accounts if they are public</li>
              <li>Remind them never to respond to messages from strangers or share personal data</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">10. PROTOCOL UPDATES</h3>
            <p>This document may be updated as the case evolves or new actors involved are identified.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, children, bgColor, textColor }) => {
  return (
    <section className={`bg-${bgColor} text-${textColor} py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <div className={`${bgColor === 'gray-900' ? 'bg-gray-800' : 'bg-gray-50 border border-gray-200'} p-6 rounded-lg`}>
          <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
};

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BRCAllCases;