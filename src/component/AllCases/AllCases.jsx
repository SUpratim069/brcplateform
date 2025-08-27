import React from "react";
import img1 from "../../assets/allcase/WhatsApp_Image_2025-07-30_at_4.37.50_PM-removebg-preview.png";
import {
  FaRegThumbsUp,
  FaThumbsUp,
  FaRegCommentDots,
  FaPaperclip,
  FaRegImage,
  FaReply,
  FaImage,
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaShare
} from "react-icons/fa";
import img2 from "../../assets/allcase/pinedo7.JPG"
import XPostsArchive from "./XPost";
import First from "../coments/first";
import img19 from "../../assets/comment/2.jpeg"
import img3 from "../../assets/comment/3.jpeg"
import img4 from "../../assets/comment/4.jpeg"
import img5 from "../../assets/comment/5.jpeg"
import img6 from "../../assets/comment/6.jpeg"
import img7 from "../../assets/comment/7.jpeg"
import img8 from "../../assets/comment/8.jpeg"
import img9 from "../../assets/comment/9.jpeg"
import img10 from "../../assets/comment/10.jpeg"
import img11 from "../../assets/comment/11.jpeg"
import img12 from "../../assets/comment/12.jpeg"
import img13 from "../../assets/comment/13.jpeg"
import img14 from "../../assets/comment/14.jpeg"
import img15 from "../../assets/comment/15.jpeg"
import img16 from "../../assets/comment/16.jpeg"
import img17 from "../../assets/comment/17.jpeg"
import img18 from "../../assets/comment/18.jpeg"

const AllCases = () => {
  // State to track which cases are expanded
  const [expandedCases, setExpandedCases] = React.useState({});

  // Toggle function to show/hide case details
  const toggleCaseDetails = (caseId) => {
    setExpandedCases(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
  };
const cases = [
  { id: 1, img: "https://randomuser.me/api/portraits/women/1.jpg", label: "Case #3053_Salinaz" },
  { id: 2, img: "https://randomuser.me/api/portraits/men/2.jpg", label: "Case #3054_Gonzalez" },
  { id: 3, img: "https://randomuser.me/api/portraits/women/3.jpg", label: "Case #3055_Ramirez" },
  { id: 4, img: "https://randomuser.me/api/portraits/men/4.jpg", label: "Case #3056_Morales" },
  { id: 5, img: "https://randomuser.me/api/portraits/women/5.jpg", label: "Case #3057_Perez" },
  { id: 6, img: "https://randomuser.me/api/portraits/men/6.jpg", label: "Case #3058_Hernandez" },
  { id: 7, img: "https://randomuser.me/api/portraits/women/7.jpg", label: "Case #3059_Lopez" },
  { id: 8, img: "https://randomuser.me/api/portraits/men/8.jpg", label: "Case #3060_Diaz" },
  { id: 9, img: "https://randomuser.me/api/portraits/women/9.jpg", label: "Case #3061_Torres" },
  { id: 10, img: "https://randomuser.me/api/portraits/men/10.jpg", label: "Case #3062_Santos" },
  { id: 11, img: "https://randomuser.me/api/portraits/women/11.jpg", label: "Case #3063_Cruz" },
  { id: 12, img: "https://randomuser.me/api/portraits/men/12.jpg", label: "Case #3064_Vargas" },
  { id: 13, img: "https://randomuser.me/api/portraits/women/13.jpg", label: "Case #3065_Martinez" },
  { id: 14, img: "https://randomuser.me/api/portraits/men/14.jpg", label: "Case #3066_Rivera" },
  { id: 15, img: "https://randomuser.me/api/portraits/women/15.jpg", label: "Case #3067_Rojas" },
  { id: 16, img: "https://randomuser.me/api/portraits/men/16.jpg", label: "Case #3068_Ortega" },
  { id: 17, img: "https://randomuser.me/api/portraits/women/17.jpg", label: "Case #3069_Castillo" },
  { id: 18, img: "https://randomuser.me/api/portraits/men/18.jpg", label: "Case #3070_Suarez" },
  { id: 19, img: "https://randomuser.me/api/portraits/women/19.jpg", label: "Case #3071_Padilla" },
  { id: 20, img: "https://randomuser.me/api/portraits/men/20.jpg", label: "Case #3072_Flores" },
  { id: 21, img: "https://randomuser.me/api/portraits/women/21.jpg", label: "Case #3073_Ramos" },
  { id: 22, img: "https://randomuser.me/api/portraits/men/22.jpg", label: "Case #3074_Vasquez" },
  { id: 23, img: "https://randomuser.me/api/portraits/women/23.jpg", label: "Case #3075_Mendoza" },
  { id: 24, img: "https://randomuser.me/api/portraits/men/24.jpg", label: "Case #3076_Alvarez" },
  { id: 25, img: "https://randomuser.me/api/portraits/women/25.jpg", label: "Case #3077_Moreno" },
  { id: 26, img: "https://randomuser.me/api/portraits/men/26.jpg", label: "Case #3078_Campos" },
  { id: 27, img: "https://randomuser.me/api/portraits/women/27.jpg", label: "Case #3079_Guerrero" },
  { id: 28, img: "https://randomuser.me/api/portraits/men/28.jpg", label: "Case #3080_Cabrera" },
  { id: 29, img: "https://randomuser.me/api/portraits/women/29.jpg", label: "Case #3081_Vega" },
  { id: 30, img: "https://randomuser.me/api/portraits/men/30.jpg", label: "Case #3082_Mejia" },
  { id: 31, img: "https://randomuser.me/api/portraits/women/31.jpg", label: "Case #3083_Acosta" },
  { id: 32, img: "https://randomuser.me/api/portraits/men/32.jpg", label: "Case #3084_Silva" },
  { id: 33, img: "https://randomuser.me/api/portraits/women/33.jpg", label: "Case #3085_Ponce" },
  { id: 34, img: "https://randomuser.me/api/portraits/men/34.jpg", label: "Case #3086_Contreras" },
  { id: 35, img: "https://randomuser.me/api/portraits/women/35.jpg", label: "Case #3087_Cordova" },
  { id: 36, img: "https://randomuser.me/api/portraits/men/36.jpg", label: "Case #3088_Maldonado" },
];



  // Add details to each case
const cases2 = [
    {
      id: "3001_Gomez",
      name: "Case #3001_Gomez",
      description:
        "Repeated delays in contractor payments reported in Monterrey projects.",
      submitted: "June 15, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "3002_Martinez",
      name: "Case #3002_Martinez",
      description:
        "Complaint regarding misuse of government grant funds in Yucatan.",
      submitted: "July 02, 2025",
      status: "Closed",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "3003_Ramos",
      name: "Case #3003_Ramos",
      description: "Anonymous reports suggest land grabbing in rural Jalisco.",
      submitted: "August 01, 2025",
      status: "In Review",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: "3004_Rivera",
      name: "Case #3004_Rivera",
      description:
        "Reported issue involving Carlos Rivera in contractual misconduct.",
      submitted: "August 04, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
    },
    {
      id: "3005_Ortiz",
      name: "Case #3005_Ortiz",
      description:
        "Whistleblower reveals unregistered lobbying in Mexico City contracts.",
      submitted: "August 05, 2025",
      status: "Flagged",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: "3006_Vega",
      name: "Case #3006_Vega",
      description: "Allegations involving Vega in recent municipal dealings.",
      submitted: "June 03, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
      id: "3007_Lopez",
      name: "Case #3007_Lopez",
      description:
        "Manipulated licensing records to benefit third-party contractors.",
      submitted: "June 06, 2025",
      status: "Closed",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      id: "3008_Castillo",
      name: "Case #3008_Castillo",
      description:
        "Authorized suspicious infrastructure contracts without public bidding.",
      submitted: "June 09, 2025",
      status: "In Review",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      id: "3009_Mendoza",
      name: "Case #3009_Mendoza",
      description:
        "Allegations involving Mendoza in recent municipal dealings.",
      submitted: "June 11, 2025",
      status: "Flagged",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      id: "3010_Fernandez",
      name: "Case #3010_Fernandez",
      description:
        "Fraudulent activity detected in recent procurement process.",
      submitted: "July 10, 2025",
      status: "Closed",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
    },
    {
      id: "3011_Sanchez",
      name: "Case #3011_Sanchez",
      description:
        "Complaint about environmental violations in Chiapas mining operations.",
      submitted: "July 12, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
    },
    {
      id: "3012_Diaz",
      name: "Case #3012_Diaz",
      description:
        "Suspicious transfer of funds linked to public housing projects.",
      submitted: "July 14, 2025",
      status: "Flagged",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: "3013_Hernandez",
      name: "Case #3013_Hernandez",
      description:
        "Anonymous tip regarding bribery in state infrastructure tenders.",
      submitted: "July 16, 2025",
      status: "In Review",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: "3014_Torres",
      name: "Case #3014_Torres",
      description:
        "Investigation into improper disposal of industrial waste in Sonora.",
      submitted: "July 18, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: "3015_Garcia",
      name: "Case #3015_Garcia",
      description: "Overbilling detected in municipal service contracts.",
      submitted: "July 20, 2025",
      status: "Closed",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      id: "3016_Morales",
      name: "Case #3016_Morales",
      description: "Conflict of interest involving senior government advisor.",
      submitted: "July 22, 2025",
      status: "In Review",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      id: "3017_Alvarez",
      name: "Case #3017_Alvarez",
      description: "Report of illegal land sale without municipal approval.",
      submitted: "July 24, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      id: "3018_Dominguez",
      name: "Case #3018_Dominguez",
      description: "Mismanagement of public healthcare resources in Veracruz.",
      submitted: "July 26, 2025",
      status: "Flagged",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      id: "3019_Silva",
      name: "Case #3019_Silva",
      description: "Unlawful acquisition of heritage property in Puebla.",
      submitted: "July 28, 2025",
      status: "Closed",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      id: "3020_Cruz",
      name: "Case #3020_Cruz",
      description: "Suspected tax evasion linked to offshore accounts.",
      submitted: "July 30, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
      id: "3021_Mejia",
      name: "Case #3021_Mejia",
      description: "Conflict of interest in recent defense equipment purchase.",
      submitted: "August 02, 2025",
      status: "Flagged",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: "3022_Campos",
      name: "Case #3022_Campos",
      description:
        "Non-compliance with labor laws in Baja California factories.",
      submitted: "August 03, 2025",
      status: "In Review",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      id: "3023_Reyes",
      name: "Case #3023_Reyes",
      description: "Unauthorized sale of public transportation routes.",
      submitted: "August 05, 2025",
      status: "Closed",
      image: "https://randomuser.me/api/portraits/men/37.jpg",
    },
    {
      id: "3024_Fuentes",
      name: "Case #3024_Fuentes",
      description: "Improper awarding of scholarships in educational programs.",
      submitted: "August 06, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    {
      id: "3025_Moreno",
      name: "Case #3025_Moreno",
      description:
        "Unaccounted funds in cultural heritage restoration projects.",
      submitted: "August 07, 2025",
      status: "In Review",
      image: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: "3026_Cabrera",
      name: "Case #3026_Cabrera",
      description: "Suspected favoritism in agricultural subsidy distribution.",
      submitted: "August 08, 2025",
      status: "Flagged",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
    },
    {
      id: "3027_Paredes",
      name: "Case #3027_Paredes",
      description: "Illegal export of endangered wildlife species.",
      submitted: "August 09, 2025",
      status: "Closed",
      image: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      id: "3028_Soto",
      name: "Case #3028_Soto",
      description:
        "Violation of safety regulations in oil refinery operations.",
      submitted: "August 10, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/women/16.jpg",
    },
    {
      id: "3029_Rojas",
      name: "Case #3029_Rojas",
      description: "Money laundering investigation tied to political campaign.",
      submitted: "August 11, 2025",
      status: "In Review",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: "3030_Aguilar",
      name: "Case #3030_Aguilar",
      description: "Bribery allegations in recent customs clearance processes.",
      submitted: "August 12, 2025",
      status: "Flagged",
      image: "https://randomuser.me/api/portraits/women/61.jpg",
    },
    {
      id: "3031_Perez",
      name: "Case #3031_Perez",
      description: "Illegal use of government vehicles for personal purposes.",
      submitted: "August 13, 2025",
      status: "Closed",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      id: "3032_Vargas",
      name: "Case #3032_Vargas",
      description: "Improper disposal of hazardous chemicals in rural zones.",
      submitted: "August 14, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/women/27.jpg",
    },
    {
      id: "3033_Guerrero",
      name: "Case #3033_Guerrero",
      description:
        "Discrepancies found in local government financial statements.",
      submitted: "August 15, 2025",
      status: "Flagged",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: "3034_Salazar",
      name: "Case #3034_Salazar",
      description: "Extortion threats against small business owners.",
      submitted: "August 16, 2025",
      status: "In Review",
      image: "https://randomuser.me/api/portraits/women/49.jpg",
    },
    {
      id: "3035_Palacios",
      name: "Case #3035_Palacios",
      description: "Corruption scandal in public transport authority.",
      submitted: "August 17, 2025",
      status: "Closed",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    {
      id: "3036_Cortez",
      name: "Case #3036_Cortez",
      description: "Illegal construction on protected coastal land.",
      submitted: "August 18, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/women/53.jpg",
    },
    {
      id: "3037_Luna",
      name: "Case #3037_Luna",
      description: "Theft of public records from municipal archives.",
      submitted: "August 19, 2025",
      status: "In Review",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    {
      id: "3038_Macias",
      name: "Case #3038_Macias",
      description: "Unlawful detainment of activists protesting land seizures.",
      submitted: "August 20, 2025",
      status: "Flagged",
      image: "https://randomuser.me/api/portraits/women/37.jpg",
    },
    {
      id: "3039_Miranda",
      name: "Case #3039_Miranda",
      description: "Smuggling of precious stones across border checkpoints.",
      submitted: "August 21, 2025",
      status: "Closed",
      image: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    {
      id: "3040_Espinosa",
      name: "Case #3040_Espinosa",
      description: "Forgery of official land ownership documents.",
      submitted: "August 22, 2025",
      status: "Published",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      id: "3041_Navarro",
      name: "Case #3041_Navarro",
      description: "Negligence in maintenance of public hospital facilities.",
      submitted: "August 23, 2025",
      status: "In Review",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
      id: "3042_Cardenas",
      name: "Case #3042_Cardenas",
      description: "Illegal diversion of river water for private companies.",
      submitted: "August 24, 2025",
      status: "Flagged",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
    },
  ];

  const familyMembers = [
    "Ernesto Sarmiento",
    "María Trinidad Sarmiento",
    "Judith Sarmiento",
    "Héctor Sarmiento Cantu",
    "Diana Sarmiento",
    "Patricia Sarmiento",
    "Saulo Sarmiento",
    "Arturo Cervantes",
    "Jessica Sarmiento",
    "Cecilia Sarmiento Torres",
    "Alberto Sarmiento",
    "Karla Sarmiento Torres",
    "Ignacio Sarmiento Torres",
    "Cecilia Sarmiento",
    "Tete Montero Sarmiento",
    "Alma Sarmiento",
    "Arturo Sarmiento (Tamo)",
    "Mauricio Sarmiento",
    "Héctor Sarmiento",
    "Karenne Sarmiento",
    "Alejandra Sarmiento",
  ];

  const statusClasses = {
    Published: "bg-green-100 text-green-700",
    Closed: "bg-gray-100 text-gray-700",
    "In Review": "bg-yellow-100 text-yellow-700",
    Flagged: "bg-red-100 text-red-700",
  };

  // Add status color mapping
  const statusColorMap = {
    'Published': 'text-green-600',
    'In Review': 'text-yellow-600',
    'Closed': 'text-gray-600',
    'Flagged': 'text-red-600'
  };

  return (
    <div>
      <div className="w-full">
        {/* Header */}
        <div className="bg-[#0e1525] py-12 text-center">
          <h1 className="text-3xl font-bold text-white">Public Case Archive</h1>
          <p className="text-white mt-3 max-w-2xl mx-auto">
            Search, filter, and access documented civil misconduct cases
            submitted to BRC.
          </p>
        </div>

        {/* Legal Notice */}
        <div className="bg-white py-6 flex justify-center">
          <div className="bg-[#fff5d1] border-l-4 border-yellow-500 px-6 py-3 max-w-5xl rounded">
            <p className="text-sm text-gray-800">
              <span className="font-bold text-yellow-800">LEGAL NOTICE:</span>{" "}
              This platform does not issue legal judgments. It documents citizen
              reports with supporting evidence and offers full right of reply.
              The individuals mentioned are presumed innocent. This is a
              transparency and prevention tool.
            </p>
          </div>
        </div>

        {/* Case Grid */}
        <div className="bg-white py-8">
          <div className="max-w-6xl mx-auto grid grid-cols-3 p-2 md:p-0 sm:grid-cols-3 md:grid-cols-9 gap-y-8 gap-x-6">
            {cases.map((c) => (
              <div key={c.id} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow">
                  <img
                    src={c.img}
                    alt={c.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm font-medium">{c.id}</p>
                <p className="text-xs text-gray-500">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 py-10">
          {/* Header */}
          <div className="bg-[#0c0e18] text-white text-center py-10 rounded-none">
            <h1 className="text-3xl font-bold tracking-wide">
              ALL REPORTED CASES
            </h1>
            <p className="mt-2 text-gray-300">
              Browse through anonymized case reports with submitted evidence and
              investigation status.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {cases2.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow rounded-lg p-4 flex items-start gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{item.name}</h3>
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        statusClasses[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Submitted: {item.submitted}
                  </p>
                  <button 
                    onClick={() => toggleCaseDetails(item.id)}
                    className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline"
                  >
                    {expandedCases[item.id] ? 'Hide Details' : 'View Full Case'}
                  </button>
                  {expandedCases[item.id] && (
                    <div className="mt-4 text-sm text-gray-700 space-y-4">
                      <div><strong>Name:</strong> {item.name.split('_')[1]}</div>
                      <div><strong>RFC:</strong> {item.rfc || 'Not provided'}</div>
                      <div><strong>CURP:</strong> {item.curp || 'Not provided'}</div>
                      <div><strong>Misconduct:</strong> {item.description}</div>
                      <div><strong>Evidence:</strong> {item.evidence || 'Statement + Screenshot'}</div>
                      <div><strong>Response:</strong> {item.response || 'Pending'}</div>
                      <div><strong>Note:</strong> {item.note || 'Under evaluation'}</div>
                      <span className={`inline-block ${statusClasses[item.status].replace('text-', 'bg-')} text-xs px-3 py-1 rounded-full`}>
                        Status: {item.status}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4">
          {/* Header */}
          <div className="bg-black text-white text-center py-7 font-bold text-2xl uppercase">
            FAMILIARES SARMIENTO (En segundo y tercer grado)
          </div>

          {/* Family Members List */}
          <div className="bg-gray-50 p-6 rounded-lg mt-4 border border-gray-200 shadow-sm">
            <ul className="list-disc pl-5 space-y-1 text-blue-600 text-lg">
              {familyMembers.map((name, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Discussion Section */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="font-semibold mb-4 text-xl">Discussion</h2>

            {/* Comment Input */}
            <div className="flex items-start gap-3 border border-gray-300 rounded-lg p-3 mb-4">
              <textarea
                placeholder="Add your comment..."
                className="flex-1 resize-none outline-none border-none focus:ring-0"
                rows={2}
              ></textarea>
              <div className="flex flex-col gap-2 text-gray-500">
                <FaPaperclip className="cursor-pointer hover:text-gray-700" />
                <FaImage className="cursor-pointer hover:text-gray-700" />
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">
              Post
            </button>

            {/* Comment List */}
            <div className="mt-6 space-y-6">
              {/* Comment 1 */}
              <div className="flex gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Maria Gonzalez"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="font-semibold">María Gonzalez</div>
                    <p className="text-sm text-gray-600">
                      This information is very helpful for my research. Thank you
                      for compiling it.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-1 text-sm text-gray-500">
                    <span>2 hours ago</span>
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      <FaThumbsUp /> 12
                    </button>
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      <FaReply /> Reply
                    </button>
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Carlos Mendez"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="font-semibold">Carlos Mendez</div>
                    <p className="text-sm text-gray-600">
                      I recognize some of these names from previous cases. The
                      network is larger than I thought.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-1 text-sm text-gray-500">
                    <span>1 day ago</span>
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      <FaThumbsUp /> 5
                    </button>
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      <FaReply /> Reply
                    </button>
                  </div>

                  {/* Reply to Carlos */}
                  <div className="flex gap-3 mt-4 ml-10">
                    <img
                      src="https://randomuser.me/api/portraits/women/46.jpg"
                      alt="Laura Jimenez"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="font-semibold">Laura Jimenez</div>
                        <p className="text-sm text-gray-600">
                          Yes, I've noticed the same pattern. There seems to be a
                          recurring connection with construction businesses.
                        </p>
                      </div>
                      <div className="flex gap-4 mt-1 text-sm text-gray-500">
                        <span>12 hours ago</span>
                        <button className="flex items-center gap-1 hover:text-gray-700">
                          <FaThumbsUp /> 2
                        </button>
                        <button className="flex items-center gap-1 hover:text-gray-700">
                          <FaReply /> Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Twitter Archive Section */}
      <div className="max-w-4xl mx-auto p-4 font-sans">
        {/* Header */}
        <div className="bg-black text-white text-center py-7 font-bold text-2xl uppercase">
          X Posts Archive
          <p className="text-gray-300 text-sm font-normal">
            Collection of tweets related to the case:
          </p>
        </div>

        {/* Tweet Card */}
        <div className="bg-white shadow p-6">
          {/* User Info */}
          <div className="flex items-center mb-4">
            <img
              src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-bold">Sarmiento Pinedo</p>
              <p className="text-gray-500 text-sm">@PinedoSarmiento</p>
            </div>
          </div>

          {/* Tweet Text */}
          <p className="mb-3">
            Parece que el negocio de moda es no pagar... #GICSA #CDMX #Acapulco
            #Cancun #aQuienCorresponda
          </p>

          {/* Embedded Tweet Image */}
          <img
            src={img2}
            alt="Tweet"
            className="rounded-lg border mb-3 h-80"
          />

          {/* Tweet Body Text */}
          <div className="text-sm space-y-3">
            <p className="font-bold">
              LA EMPRESA MOVELCO, S.A. DE C.V <br />
              Y SAYS QUE LAS DOS HOMBRES ININIGILIARIA GICSA <br />
              DE PAGO DE LO CONSORCIMENTE ENTRAMENTE <br />
              DE GICSA POR LOS TRABAJOS SEGUENDO EL PLANO <br />
              DE UNA PERDIENTE 54/98 (484,4%)
            </p>
            <p className="font-bold">
              AL EMPRESA LIVERCS, S.A. DE C.V <br />
              Y SAYS QUE LAS DOS HOMBRES ININIGILIARIA GICSA <br />
              DE PAGO DE LO CONSORCIMENTE ENTRAMENTE <br />
              DE UNA PERDIENTE 54/98 (484,4%)
            </p>
            <p>
              MIENDO <br />
              PRODUCTO CON ALEXANDRA <br />
              MANUALIDAD: 6/63 <br />
              El plazo de las crisis del año 2018 fue <br />
              de 30 días mas probable para el TEMA <br />
              QUE PERDIENTE 54/98 (484,4%)
            </p>
          </div>

          {/* Timestamp */}
          <p className="text-gray-500 text-xs mt-4">
            10:11 PM · Feb 26, 2025 · 364 Views
          </p>

          {/* Icons Row */}
          <div className="flex items-center space-x-6 mt-3 text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <FaRegComment />
              <span>2</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaRetweet />
              <span>8</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaRegHeart />
              <span>4</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaShare />
              <span>Share</span>
            </div>
          </div>
        </div>

        {/* Comment Input */}
        <div className="bg-white shadow p-4 mt-4 flex items-center space-x-3 rounded-lg">
          <input
            type="text"
            placeholder="Tweet your reply"
            className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
            Reply
          </button>
        </div>

        {/* Comments Section */}
        <div className="bg-white shadow p-6 mt-4 space-y-6">
          {/* Comment 1 */}
          <div>
            <p className="font-bold">Ana Torres</p>
            <p className="text-gray-500 text-sm">@anatorres · 2h</p>
            <p className="mt-1">
              This is a serious accusation. Do you have any official documents to
              back this up?
            </p>
            <button className="text-blue-500 text-sm mt-1">Reply</button>
          </div>

          {/* Comment 2 */}
          <div>
            <p className="font-bold">Luis Ramirez</p>
            <p className="text-gray-500 text-sm">@luisr · 45m</p>
            <p className="mt-1">
              I've heard similar complaints from other contractors. This needs
              investigation.
            </p>
            <button className="text-blue-500 text-sm mt-1">Reply</button>
          </div>
        </div>
      </div>

       <First
         tweetText="MARICONI: se le llama a la gente como @RuffoEstra73099 y #JoseLuisEstrasaMartinez que contratan un servicio y desaparecen a la hora de pagar. @ensenadanet @VigiaEnsenada @SPSEnsenada #Ensenada #BajaCalifornia #MexicanGP"
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img19}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="El señor Mauricio Merikanskas nunca pagó por los trabajos contratados que hicimos para el basurero de San Mateo @GobNau @SEDEMA.CDMX @Edomex se para el cuello hablando de toda la gente que corrompió para obtener esa consesión .... Mucho ojo!!"
         replyAvatarUrl="https://i.pravatar.cc/32?img=11"
         replyPlaceholder="Write a reply"
         commentUserName="Roberto Sanchez"
         commentUserMeta="@robertosan · 1h"
         commentText="This is concerning. The San Mateo landfill project has been controversial for years. Have you filed a formal complaint?"
         commentLikes={3}
       />

<First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img3}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@Jeep @JeepMx @TabascoHOY @AutomoTab De verdad que no hay peor servicio ni un equipo de gente más indiferente. Aquí me tienen si quieren seguir con la mala fama..."
         replyAvatarUrl="https://i.pravatar.cc/32?img=14"
         commentAvatarUrl="https://i.pravatar.cc/32?img=16" 
         replyPlaceholder="Write a reply"
         commentUserName="Sofia Hernandez"
         commentUserMeta="@sofiah · 1h"
         commentText="I had a similar experience with Jeep service last month. They kept my car for 3 weeks!"
         commentLikes={10}
       />

       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img4}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="La empresa #CAMEX se quedó con el dinero de contratistas que trabajaron para el @TrenMayaMX y @Defensamx1 en el Tramo 7 F6 `CENTENARIO`. Desconocen y bloquean los teléfonos de la gente que exige su dinero. #justicia #obras #TrenMaya #campeche #ClaudiaSheinbaum"
         replyAvatarUrl="https://i.pravatar.cc/32?img=12"
         commentAvatarUrl="https://i.pravatar.cc/32?img=19" 
         replyPlaceholder="Write a reply"
         commentUserName="Miguel Angel"
         commentUserMeta="@miguelangel · 4h"
         commentText="This is a serious issue that needs more attention. Many small businesses suffer from this."
         commentLikes={6}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img5}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="#CAMEX empresa proveedora de la @Defensamx1 se robó el dinero de los proveedores que trabajaron a marchas forzadas para construir el @TrenMayaMX . La empresa es de un señor de nombre Ricardo González de #Coatzacoalcos #Veracruz ."
         replyAvatarUrl="https://i.pravatar.cc/32?img=13"
  commentAvatarUrl="https://i.pravatar.cc/32?img=20" 
         replyPlaceholder="Write a reply"
         commentUserName="Patricia Lopez"
         commentUserMeta="@patylopez · 3h"
         commentText="This is a serious issue that needs more attention. Many small businesses suffer from this."
         commentLikes={4}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img6}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="No vuelvo a volar por @LATAM_CHI jamas! Es la peor experiencia de mi vida... #airline #2020Elections #Covid_19 #Lima #Biden2020 #falabella
#Retwittear #malservicio
#irresponsable
#DGAC
#tercermundo"
         replyAvatarUrl="https://i.pravatar.cc/32?img=22"
         commentAvatarUrl="https://i.pravatar.cc/32?img=20" 
         replyPlaceholder="Write a reply"
         commentUserName="Miguel Angel"
         commentUserMeta="@miguelangel · 4h"
         commentText="This is a serious issue that needs more attention. Many small businesses suffer from this."
         commentLikes={6}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img7}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@CondusefMX @bbva muy prudente el horario en el que marcan a cobrar muchachos! #thanksgiving #blackfriday"
  replyAvatarUrl="https://i.pravatar.cc/32?img=25"
         commentAvatarUrl="https://i.pravatar.cc/32?img=27" 
                  replyPlaceholder="Write a reply"
         commentUserName="Miguel Angel"
         commentUserMeta="@miguelangel · 4h"
         commentText="This is a serious issue that needs more attention. Many small businesses suffer from this."
         commentLikes={6}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img8}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@GICSAoficial @GICSA_IR No pagar a los contratistas es su política? #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda"
      replyAvatarUrl="https://i.pravatar.cc/32?img=30"
         commentAvatarUrl="https://i.pravatar.cc/32?img=28" 
         replyPlaceholder="Write a reply"
         commentUserName="Carlos Mendoza"
         commentUserMeta="@carlosm · 4h"
         commentText="GICSA has a history of these issues. Have you considered legal action?"
         commentLikes={5}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img9}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@GICSAoficial @GICSA_IR Por qué no pagan a los contratistas? Es su política no pagar? #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda"
  replyAvatarUrl="https://i.pravatar.cc/32?img=9"
         commentAvatarUrl="https://i.pravatar.cc/32?img=5" 
                  replyPlaceholder="Write a reply"
         commentUserName="Maria Fernandez"
         commentUserMeta="@mariaf · 3h"
         commentText="This is a serious accusation. Do you have documentation to support this claim?"
         commentLikes={2}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img10}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@GICSAoficial @GICSA_IR Por qué no pagan a los contratistas? Es su política no pagar? #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda"
          replyAvatarUrl="https://i.pravatar.cc/32?img=11"
         commentAvatarUrl="https://i.pravatar.cc/32?img=32" 
         replyPlaceholder="Write a reply"
         commentUserName="Jorge Ramirez"
         commentUserMeta="@jorger · 2h"
         commentText="This is a serious accusation. Do you have documentation to support this claim?"
         commentLikes={5}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img11}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@GICSAoficial @GICSA_IR Por qué no pagan a los contratistas? Es su política no pagar? #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda"
                replyAvatarUrl="https://i.pravatar.cc/32?img=6"
         commentAvatarUrl="https://i.pravatar.cc/32?img=34" 

         replyPlaceholder="Write a reply"
         commentUserName="Ana Gutierrez"
         commentUserMeta="@anag · 3h"
         commentText="Have you tried contacting the authorities about this? The labor board might be able to help."
         commentLikes={3}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img12}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@GICSAoficial @GICSA_IR Por qué no pagan a los contratistas? Es su política no pagar? #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda"
          replyAvatarUrl="https://i.pravatar.cc/32?img=4"
         commentAvatarUrl="https://i.pravatar.cc/32?img=36" 

         replyPlaceholder="Write a reply"
         commentUserName="Maria Fernandez"
         commentUserMeta="@mariaf · 3h"
         commentText="This is a serious accusation. Do you have documentation to support this claim?"
         commentLikes={2}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img13}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@GICSAoficial @GICSA_IR Por qué no pagan a los contratistas? Es su política no pagar? #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda"
                  replyAvatarUrl="https://i.pravatar.cc/32?img=16"
         commentAvatarUrl="https://i.pravatar.cc/32?img=35" 

         replyPlaceholder="Write a reply"
         commentUserName="Maria Fernandez"
         commentUserMeta="@mariaf · 3h"
         commentText="This is a serious accusation. Do you have documentation to support this claim?"
         commentLikes={2}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img14}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@GICSAoficial @GICSA_IR Por qué no pagan a los contratistas? Es su política no pagar? #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda"
            replyAvatarUrl="https://i.pravatar.cc/32?img=18"
         commentAvatarUrl="https://i.pravatar.cc/32?img=37" 

         replyPlaceholder="Write a reply"
         commentUserName="Maria Fernandez"
         commentUserMeta="@mariaf · 3h"
         commentText="This is a serious accusation. Do you have documentation to support this claim?"
         commentLikes={2}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img15}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@GICSAoficial @GICSA_IR Por qué no pagan a los contratistas? Es su política no pagar? #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda"
          replyAvatarUrl="https://i.pravatar.cc/32?img=19"
         commentAvatarUrl="https://i.pravatar.cc/32?img=38" 

         replyPlaceholder="Write a reply"
         commentUserName="Maria Fernandez"
         commentUserMeta="@mariaf · 3h"
         commentText="This is a serious accusation. Do you have documentation to support this claim?"
         commentLikes={2}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img16}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@GICSAoficial @GICSA_IR Por qué no pagan a los contratistas? Es su política no pagar? #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda"
           replyAvatarUrl="https://i.pravatar.cc/32?img=50"
         commentAvatarUrl="https://i.pravatar.cc/32?img=40" 

         replyPlaceholder="Write a reply"
         commentUserName="Maria Fernandez"
         commentUserMeta="@mariaf · 3h"
         commentText="This is a serious accusation. Do you have documentation to support this claim?"
         commentLikes={2}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img17}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@GICSAoficial @GICSA_IR Por qué no pagan a los contratistas? Es su política no pagar? #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda"
         replyAvatarUrl="https://i.pravatar.cc/32?img=51"
         commentAvatarUrl="https://i.pravatar.cc/32?img=41" 
         replyPlaceholder="Write a reply"
         commentUserName="Maria Fernandez"
         commentUserMeta="@mariaf · 3h"
         commentText="This is a serious accusation. Do you have documentation to support this claim?"
         commentLikes={2}
       />
       <First
         name="Sarmiento Pinedo"
         handle="@PinedoSarmiento"
         translatedLabel="Translated"
         embedImage={img18}
         timestamp="10:00 AM · Aug 10, 2025 · 1,234 Views"
         likesCount={42}
         commentsCount={7}
         shareLabel="Share"
         tweetText="@GICSAoficial @GICSA_IR Por qué no pagan a los contratistas? Es su política no pagar? #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda"
   replyAvatarUrl="https://i.pravatar.cc/32?img=52"
         commentAvatarUrl="https://i.pravatar.cc/32?img=42" 
         replyPlaceholder="Write a reply"
         commentUserName="Maria Fernandez"
         commentUserMeta="@mariaf · 3h"
         commentText="This is a serious accusation. Do you have documentation to support this claim?"
         commentLikes={2}
       />


      
      {/* Case Report Section */}
      <div className="bg-[#0B1623] min-h-screen py-10 px-4 font-sans">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* ECONOMIC AND CORPORATE TIES */}
          <section className="bg-[#0e1726] border border-[#223041] rounded-xl shadow-2xl px-6 py-5 text-white">
            <div className="bg-white border text-black border-[#223041] rounded-md px-4 py-2 -mt-8 mb-4 w-fit mx-auto shadow">
              <h2 className="text-center text-[13px] sm:text-sm md:text-lg  tracking-wider font-extrabold uppercase">
                Economic and Corporate Ties
              </h2>
            </div>

            <div className="space-y-5 text-[12px] sm:text-[16px] leading-relaxed">
              <div>
                <h3 className="font-semibold text-[13px] mb-1">Key Individuals</h3>
                <ul className="list-disc pl-6 space-y-1 marker:text-slate-300">
                  <li>
                    <span className="font-semibold">Héctor Guillermo Meade de Zamacona</span> (married and in divorce proceedings from Tatiana Selo Quayde)
                    <ul className="list-disc pl-6 space-y-1 marker:text-slate-300">
                      <li>Appears in a judicial auction document, suggesting financial problems or legal disputes with third parties</li>
                      <li>Possible capital figure or risk ally for José Sarmiento</li>
                      <li>Has a reputation for being “unreliable” in previous testimonies</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">Ernesto Sarmiento</span>
                    <ul className="list-disc pl-6 space-y-1 marker:text-slate-300">
                      <li>Image found but no clear documentary records</li>
                      <li>Possible close male relative, perhaps a close cousin</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">Alfredo Sarmiento (Colombia)</span>
                    <ul className="list-disc pl-6 space-y-1 marker:text-slate-300">
                      <li>Mentioned in Colombian registry (“resultados colombia.pdf” file)</li>
                      <li>Could be a direct paternal line relative (unconfirmed)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-[#223041]">
                <h3 className="font-semibold text-[13px] mb-1">Companies Located in Mexico</h3>
                <ul className="list-disc pl-6 space-y-1 marker:text-slate-300">
                  <li>N-201709051 EL CIRCO DE LA NOCHE, S.A. DE C.V. San Luis Potosí</li>
                  <li>N-201823581 BRIX CONSTRUCTORA, SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE Ciudad de México</li>
                  <li>16830 ECXAXA TERRABESOS SA DE CV Naucualpan</li>
                  <li>385838 JOVA DE MEXICO, SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE Ciudad de México</li>
                  <li>70065 TELEPREGAGO, S.A. DE C.V. Guadalajara</li>
                </ul>
              </div>

              <p className="text-[11px] text-slate-300/70 italic mt-2">*Data compiled from public registries and open sources. Subject to verification.</p>
            </div>
          </section>

          {/* DETECTED PATTERNS */}
          <section className="bg-slate-50 text-slate-800 border border-slate-200 rounded-xl shadow px-6 py-5">
            <div className="bg-white text-black border-slate-200 rounded-md px-4 py-2 -mt-8 mb-4 w-fit mx-auto shadow-sm">
              <h2 className="text-center text-[13px] sm:text-sm md:text-lg tracking-wider font-extrabold uppercase">Detected Patterns</h2>
            </div>

            <div className="space-y-10 text-[12px] sm:text-[18px] leading-relaxed">
              <div>
                <h3 className="font-semibold text-[13px] mb-1">Psychological and Behavioral Profile</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Publicly projected personality traits: Shows an emotional, reactive and complaining communication style, with publications that reflect economic or emotional pressure.</li>
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <h3 className="font-semibold text-[13px] mb-1">Modus vivendi and operational</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Involved in multiple companies in Mexico, USA and possibly Chile or Colombia</li>
                  <li>Multiple family ties in Latin America</li>
                  <li>Associates with controversial or informal individuals</li>
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <h3 className="font-semibold text-[13px] mb-1">Relevant detected behaviors</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Uses Twitter/X to report, threaten or suggest conflicts</li>
                  <li>Probable use of family relationships to execute emotional pressure</li>
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <h3 className="font-semibold text-[13px] mb-1">Relevant Patterns and Structure</h3>
                <ol className="list-[upper-alpha] pl-6 space-y-1">
                  <li>Family and support structure
                    <ul className="list-disc pl-6 space-y-1">
                      <li>José Eduardo Sarmiento is surrounded by an extensive network of relatives</li>
                      <li>Some relatives have been owners of assets or businesses</li>
                    </ul>
                  </li>
                  <li>Possible accomplices or pressure allies
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Héctor Guillermo Meade de Zamacona appears in auction lawsuits</li>
                      <li>Ex-wife Huguette Valle Meade with active intra-family lawsuit</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* EXTORTION MITIGATION STRATEGY */}
          <section className="bg-[#0e1726] border border-[#223041] rounded-xl shadow-2xl px-6 py-5 text-white">
            <div className="bg-white text-black border border-[#223041] rounded-md px-4 py-2 -mt-8 mb-4 w-fit mx-auto shadow">
              <h2 className="text-center text-[13px] sm:text-sm md:text-lg tracking-wider font-extrabold uppercase">Extortion Mitigation Strategy</h2>
            </div>

            <div className="space-y-10 text-[12px] sm:text-[18px] leading-relaxed">
              <div>
                <h3 className="font-semibold text-[13px]">Emotional channel closure</h3>
                <p>Any contact should be made through formal and legal channels. Avoid WhatsApp or informal calls. If verbal contact is essential, record with authorization or leave a written record of what was discussed.</p>
              </div>
              <div className="pt-2 border-t border-[#223041]">
                <h3 className="font-semibold text-[13px]">Narrative blocking</h3>
                <p>Do not respond publicly on social networks. If there are reputational threats, accumulate screenshots, URLs, and dates to assemble an evidence folder and file a complaint for blackmail, coercion or indirect extortion if it escalates.</p>
              </div>
              <div className="pt-2 border-t border-[#223041]">
                <h3 className="font-semibold text-[13px]">Third-party protection</h3>
                <p>Warn the client to avoid having their family members exposed on open social networks or responding to messages that may come from this subject. In case of intimidating messages, save and forward to your control.</p>
              </div>
            </div>
          </section>

          {/* ACTION PROTOCOL */}
          <section className="bg-slate-50 text-slate-800 border border-slate-200 rounded-xl shadow px-6 py-5">
            <div className="bg-white text-black border border-slate-200 rounded-md px-4 py-2 -mt-8 mb-4 w-fit mx-auto shadow-sm">
              <h2 className="text-center text-[13px] sm:text-sm md:text-lg tracking-wider font-extrabold uppercase">Action Protocol for the Client and Family</h2>
            </div>

            <p className="text-xs sm:text-[18px] mb-3 text-center">Regarding harassment, intimidation or suspicious contact related to the case</p>

            <ol className="list-decimal pl-6 space-y-10 text-[12px] sm:text-[18px]">
              <li><span className="font-semibold">Protocol Objective</span>: This protocol aims to establish clear guidelines for handling potential harassment or suspicious contacts.</li>
              <li><span className="font-semibold">Scope of Application</span>: Applies to all family members and close associates who might be targeted.</li>
              <li><span className="font-semibold">Main Identified Risks</span>: Dissemination of private information, reputational damage, and personal safety concerns.</li>
              <li><span className="font-semibold">Specific Operating Instructions</span>: Social Networks - Strict privacy settings, no acceptance of unknown contacts, immediate reporting of suspicious activities.</li>
              <li><span className="font-semibold">Official Response Channels</span>: Any person receiving suspicious communications should immediately report to the designated security contact.</li>
              <li><span className="font-semibold">Recommended Behavior</span>: Do not discuss sensitive matters over unsecured channels, verify identities before sharing information.</li>
              <li><span className="font-semibold">Forwarding Messages to Control</span>: All suspicious messages should be forwarded immediately without responding.</li>
              <li><span className="font-semibold">In Case of Emergency</span>: If any family member feels threatened, contact local authorities and the security team immediately.</li>
              <li><span className="font-semibold">Note for Minors</span>: If children have social networks, ensure strict privacy settings and parental monitoring.</li>
              <li><span className="font-semibold">Protocol Updates</span>: This document may be updated as the situation evolves or new threats are identified.</li>
            </ol>
          </section>
          {/* <XPostsArchive/> */}
        
        </div>
      </div>
    </div>
  );
};

export default AllCases;
