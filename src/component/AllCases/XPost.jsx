import React, { useState } from 'react';
import { 
  FaRegComment, 
  FaRetweet, 
  FaRegHeart, 
  FaShareAlt, 
  FaEllipsisH,
  FaRegImage,
  FaRegSmile,
  FaSearch,
  FaFilter
} from 'react-icons/fa';
import { MdGif } from 'react-icons/md';  // Using Material Design GIF icon

const CivilMisconductDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCase, setSelectedCase] = useState(null);
  const [replyText, setReplyText] = useState('');

  const cases = [
    { id: '3053_Salinaz', title: 'Repeated delays in contractor payments reported in Monterrey projects.', date: 'June 15, 2025' },
    { id: '3054_Salinaz', title: 'Complaint regarding misuse of government grant funds in Yucatan.', date: 'July 02, 2025' },
    { id: '3055_Salinaz', title: 'Anonymous reports suggest land grabbing in rural Jalisco.', date: 'August 01, 2025' },
    { id: '3056_Salinaz', title: 'Reported issue involving Carlos Rivera in contractual misconduct.', date: 'August 04, 2025' },
    { id: '3057_Salinaz', title: 'Whistleblower reveals unregistered lobbying in Mexico City contracts.', date: 'August 05, 2025' },
    { id: '3058_Salinaz', title: 'Allegations involving Vega in recent municipal dealings.', date: 'June 03, 2025' },
    { id: '3059_Salinaz', title: 'Manipulated licensing records to benefit third-party contractors.', date: 'June 06, 2025' },
    { id: '3060_Salinaz', title: 'Authorized suspicious infrastructure contracts without public bidding.', date: 'June 09, 2025' },
    { id: '3061_Salinaz', title: 'Allegations involving Mendoza in recent municipal dealings.', date: 'June 11, 2025' },
    { id: '3062_Salinaz', title: 'Allegations involving Garcia in recent municipal dealings.', date: 'June 13, 2025' },
    { id: '3063_Salinaz', title: 'Illicit use of construction permits for unauthorized developments.', date: 'June 16, 2025' },
    { id: '3064_Salinaz', title: 'Unauthorized approvals for state-owned land sales.', date: 'June 18, 2025' },
    { id: '3065_Salinaz', title: 'Evidence of forged audit reports in procurement contracts.', date: 'June 20, 2025' },
    { id: '3066_Salinaz', title: 'Diversion of disaster relief funds through shell companies.', date: 'June 22, 2025' },
    { id: '3067_Salinaz', title: 'Manipulation of voting systems during local elections.', date: 'June 25, 2025' },
    { id: '3068_Salinaz', title: 'Tampering with municipal records to erase financial liabilities.', date: 'June 27, 2025' },
    { id: '3069_Salinaz', title: 'Misuse of educational grants to fund private business ventures.', date: 'June 30, 2025' },
    { id: '3070_Salinaz', title: 'Receiving bribes in exchange for zoning changes in protected areas.', date: 'July 02, 2025' }
  ];

  const comments = [
    {
      id: 1,
      user: 'Ana Torres',
      username: '@anatorres',
      time: '2h',
      content: 'This is a serious accusation. Do you have any official documents to back this up?',
      replies: 0,
      retweets: 3,
      likes: 0
    },
    {
      id: 2,
      user: 'Luis Ramirez',
      username: '@luisr',
      time: '45m',
      content: "I've heard similar complaints from other contractors. This needs investigation.",
      replies: 0,
      retweets: 1,
      likes: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Civil Misconduct Database
          </h1>
          <p className="text-gray-600">
            Search, filter, and access documented civil misconduct cases submitted to BRC.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Cases List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-3 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search cases..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 mt-3 text-blue-600 hover:text-blue-800">
                  <FaFilter size={14} />
                  <span className="text-sm">Filter</span>
                </button>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {cases.map((case_, index) => (
                  <div
                    key={case_.id}
                    className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                      selectedCase === case_.id ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                    onClick={() => setSelectedCase(case_.id)}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {index + 1}
                      </span>
                      <span className="font-medium text-sm">Case #{case_.id}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{case_.title}</p>
                    <p className="text-xs text-gray-500">Submitted: {case_.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Details */}
            <div className="bg-white rounded-lg shadow-sm border mt-4 p-4">
              <h3 className="font-semibold mb-3">Case Details</h3>
              <p className="text-sm text-gray-600 mb-3">
                Browse through anonymized case reports with submitted evidence and investigation status.
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-green-800">This information is very helpful for my research. Thank you for compiling it.</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-blue-800">I recognize some of these names from previous cases. The network is larger than I thought.</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="text-yellow-800">Yes, I've noticed the same pattern. There seems to be a recurring connection with construction businesses.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Social Media Posts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Posts Header */}
              <div className="bg-black text-white p-6 text-center rounded-t-lg">
                <h2 className="text-2xl font-bold mb-2">X Posts Archive</h2>
                <p className="text-gray-300 text-sm">Collection of tweets related to the case:</p>
              </div>

              {/* Main Post */}
              <div className="border-b border-gray-200 p-6">
                {/* User Header */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-black">Sarmiento Pinedo</span>
                      <span className="text-gray-500">@PinedoSarmiento</span>
                      <span className="text-gray-500">·</span>
                      <button className="text-gray-500 hover:text-gray-700">
                        <FaEllipsisH size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tweet Content */}
                <div className="mb-4">
                  <p className="text-black mb-3">
                    Parece que el negocio de moda es no pagar... #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda
                  </p>

                  {/* Embedded Tweet */}
                  <div className="border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="font-medium text-sm">Sarmiento Pinedo</span>
                          <span className="text-gray-500 text-sm">@PinedoSarmiento</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-3">
                      Parece que el negocio de moda es no pagar... #GICSA #CDMX #Acapulco #Cancun #aQuienCorresponda
                    </p>

                    {/* Images */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-blue-100 rounded-lg aspect-square"></div>
                      <div className="bg-gray-100 rounded-lg aspect-square"></div>
                    </div>

                    <p className="text-xs text-gray-500 mb-2">10:11 PM · Feb 26, 2025 · 364 Views</p>
                    
                    <div className="flex items-center space-x-6 text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-blue-500">
                        <FaRegComment size={16} />
                      </button>
                      <button className="flex items-center space-x-1 hover:text-green-500">
                        <FaRetweet size={16} />
                        <span className="text-xs">11</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-red-500">
                        <FaRegHeart size={16} />
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500">
                        <FaShareAlt size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Long Text Content */}
                  <div className="text-sm space-y-2 mb-4 bg-gray-50 p-4 rounded-lg">
                    <p><strong>LA EMPRESA MOVELCO, S.A. DE C.V</strong></p>
                    <p>Y SAYS QUE LAS DOS HOMBRES <strong>INMOBILIARIA GICSA</strong></p>
                    <p>DE PAGO DE LO CONCEBREMENT ENTRAMENTE</p>
                    <p>DE GICSA POR LOS TRABAJOS SEGUENDO EL PLANO</p>
                    <p><strong>DE UNA PERDIENTE 54/69 (484,4%)</strong></p>
                    
                    <p><strong>AL EMPRESA VIVERCA, S.A. DE C.V</strong></p>
                    <p>Y SAYS QUE LAS DOS HOMBRES <strong>INMOBILIARIA GICSA</strong></p>
                    <p>DE PAGO DE LO CONCEBREMENT ENTRAMENTE</p>
                    <p><strong>DE UNA PERDIENTE 54/69 (484,4%)</strong></p>
                    
                    <p><strong>MIEMBO</strong></p>
                    <p>PRODUCTO CON ALEXANDRA</p>
                    <p><strong>MANUALIDAD: 6/63</strong></p>
                    <p>El plazo de la crisis del año 2018 fue</p>
                    <p>de 30 días más probable para el TEMA</p>
                    <p><strong>QUE PERDIENTE 54/69 (484,4%)</strong></p>
                  </div>

                  <p className="text-gray-500 text-sm mb-4">10:11 PM · Feb 26, 2025 · 364 Views</p>
                </div>

                {/* Engagement Bar */}
                <div className="flex items-center justify-between text-gray-500 border-b border-gray-100 pb-4 mb-4">
                  <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                    <FaRegComment size={18} />
                    <span className="text-sm">24</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                    <FaRetweet size={18} />
                    <span className="text-sm">8</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                    <FaRegHeart size={18} />
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                    <FaShareAlt size={18} />
                    <span className="text-sm">Share</span>
                  </button>
                </div>

                {/* Reply Box */}
                <div className="flex space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Tweet your reply"
                      className="w-full p-3 text-xl placeholder-gray-500 resize-none border-none outline-none"
                      rows="3"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-blue-500">
                        <button className="hover:bg-blue-50 p-2 rounded-full">
                          <FaRegImage size={20} />
                        </button>
                        <button className="hover:bg-blue-50 p-2 rounded-full">
                          <MdGif size={20} />  {/* Fixed GIF icon */}
                        </button>
                        <button className="hover:bg-blue-50 p-2 rounded-full">
                          <FaRegSmile size={20} />
                        </button>
                      </div>
                      <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium">{comment.user}</span>
                          <span className="text-gray-500 text-sm">{comment.username} · {comment.time}</span>
                        </div>
                        <p className="text-sm mb-2">{comment.content}</p>
                        <div className="flex items-center space-x-4 text-gray-500">
                          <button className="flex items-center space-x-1 hover:text-blue-500">
                            <FaRegComment size={16} />
                          </button>
                          <button className="flex items-center space-x-1 hover:text-green-500">
                            <FaRetweet size={16} />
                            {comment.retweets > 0 && <span className="text-xs">{comment.retweets}</span>}
                          </button>
                          <button className="flex items-center space-x-1 hover:text-red-500">
                            <FaRegHeart size={16} />
                          </button>
                          <button className="text-sm hover:text-blue-500">Reply</button>
                        </div>

                        {/* Nested Reply Box for second comment */}
                        {comment.id === 2 && (
                          <div className="flex space-x-3 mt-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                            <div className="flex-1">
                              <input
                                type="text"
                                placeholder="Write a reply..."
                                className="w-full p-2 border border-gray-200 rounded-full text-sm outline-none focus:border-blue-500"
                              />
                              <div className="flex justify-end mt-2">
                                <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Safety Protocol Section */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
              <h3 className="font-bold text-red-800 mb-4">Safety Protocol</h3>
              <div className="text-sm text-red-700 space-y-3">
                <p><strong>Regarding harassment, intimidation or suspicious contact related to the case</strong></p>
                <p>This protocol aims to protect the client's family from threats, publications, intimidating messages or contact attempts made on social networks, WhatsApp or digital platforms.</p>
                
                <div className="bg-white p-4 rounded border border-red-200">
                  <p className="font-semibold mb-2">Important Guidelines:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Any contact should be made through formal and legal channels</li>
                    <li>Avoid WhatsApp or informal calls</li>
                    <li>Do not respond publicly on social networks</li>
                    <li>Save screenshots, URLs, and dates for evidence</li>
                    <li>Contact the case coordinator lawyer immediately if threatened</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilMisconductDatabase;
