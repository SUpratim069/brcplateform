import React from "react";
import { FaRegComment, FaRegHeart, FaShare, FaImage } from "react-icons/fa";
import { MdGif } from "react-icons/md";
import img1 from "../../assets/comment/pinedo11.JPG";

const First = ({
  name = "Sarmiento Pinedo",
  handle = "@PinedoSarmiento",
  translatedLabel = "Translated",
  embedImage = img1,
  timestamp = "11:25 PM · Oct 22, 2024 · 111 Views",
  likesCount = 15,
  commentsCount = 4,
  shareLabel = "Share",
  replyAvatarUrl = "https://i.pravatar.cc/32?img=5",
  replyPlaceholder = "Tweet your reply",
  commentUserName = "Juan Perez",
  commentUserMeta = "@juanperez · 3h",
  commentText = "This is unfortunately a common issue in the construction industry. Many small contractors face this problem.",
  commentLikes = 7,
  commentAvatarUrl = "https://i.pravatar.cc/32?img=12",
  mainContent,
}) => {
  return (
    <div className="mx-auto w-full max-w-[900px] p-4 font-sans ">
      {/* Tweet Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          {/* Header */}
          <div className="mb-3">
            <h3 className="font-bold text-[18px] text-black">
              {name}
              <span className="ml-2 font-normal text-gray-600">{handle}</span>
              <span className="ml-2 bg-blue-100 font-normal text-blue-800 text-xs px-2 py-1 rounded">
                {translatedLabel}
              </span>
            </h3>
          </div>

          {/* Main Tweet Text */}
          {mainContent ? mainContent : (
            <p className="text-[16px] leading-6 text-black mb-4">
              MARICONI: se le llama a la gente como <span className="text-black">@RuffoEstra73099</span> y
              <span className="text-black"> #JoseLuisEstrasaMartinez</span> que contratan un servicio y
              desaparecen a la hora de pagar. @ensenadanet @VigiaEnsenada @SPSEnsenada #Ensenada #BajaCalifornia
              #MexicanGP
            </p>
          )}

          {/* Embedded Tweet (quoted tweet) */}
          <div className="p-4 mb-3">
            <div className="text-[12px] text-gray-500 mb-2">Translate post</div>
            <div className="mb-2">
              <p className="text-[14px] text-black">
               <img src={embedImage} alt="img" className="h-[20rem] border rounded-2xl"/>
              </p>
            </div>
            {/* minimal actions row in quoted tweet */}
            <div className="mt-3 flex items-center justify-between text-gray-500 text-[13px]">
              {/* <span>11:25 PM · Oct 22, 2024 · 111 Views</span> */}
              {/* <div className="flex items-center gap-6">
                <div className="flex items-center gap-1"><FaRegComment /> <span>1</span></div>
                <div className="flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 1l4 4-4 4"/><path d="M3 11v-1a4 4 0 014-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v1a4 4 0 01-4 4H3"/></svg> <span>1</span></div>
                <div className="flex items-center gap-1"><FaRegHeart /> <span>1</span></div>
              </div> */}
            </div>
          </div>

          {/* Timestamp for the main tweet */}
          <p className="text-gray-500 text-[13px]">{timestamp}</p>
        </div>

        {/* Reply Box */}
        <div className="border p-2 max-w-3xl ml-6 mb-4 rounded-2xl bg-slate-100">
          <div className="flex items-center gap-8 mt-3 ml-6 text-gray-600 text-[14px]">
            <div className="flex items-center gap-2">
              <FaRegHeart /> 
              <span>{likesCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegComment /> 
              <span>{commentsCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShare /> 
              <span>{shareLabel}</span>
            </div>
          </div>

          <div className="px-5 pb-5 mt-2">
            <div className="bg-white shadow border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <img
                  src={replyAvatarUrl}
                  alt="Your avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <input
                  type="text"
                  placeholder={replyPlaceholder}
                  className="flex-1 bg-transparent outline-none text-[14px] placeholder-gray-500"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-600">
                  <FaImage />
                  <MdGif />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-[14px]">
                  Reply
                </button>
              </div>
            </div>
          </div>

          {/* One Comment */}
          <div className="px-6 pb-6">
            <div className="flex items-start gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src={commentAvatarUrl} 
                    alt={commentUserName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(commentUserName) + '&background=random';
                    }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[14px]">
                  {commentUserName} 
                  <span className="text-gray-500 font-normal ml-1">
                    {commentUserMeta}
                  </span>
                </p>
                <p className="text-[14px] mt-1 text-gray-800">
                  {commentText}
                </p>
                <div className="mt-2 flex items-center gap-4 text-black text-[13px]">
                  <button className="flex items-center gap-1 hover:text-red-500">
                    <FaRegHeart className="text-[14px]" />
                    <span className="ml-1">{commentLikes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <FaRegComment className="text-[14px]" />
                    <span className="ml-1">Reply</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
