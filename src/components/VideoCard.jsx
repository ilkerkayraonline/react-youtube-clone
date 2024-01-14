import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      className={`cursor-pointer ${isRow && "flex gap-2 items-center" }`}
    >
      {/* Fotoğraf Kısmı */}
      <div>
        <img
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[video.richThumbnail?.length - 1].url
              : video.thumbnail[video.thumbnail?.length - 1].url
          }
          className={`max-w-none rounded-lg w-full  ${isRow && "w-40 h-20" }`}
        />
      </div>

      {/* Alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          src={
            video.channelThumbnail
              ? video.channelThumbnail[0]?.url
              : "/default.png"
          }
          className={`w-14 h-14 rounded-full ${isRow && "hidden" }`}
        />
        <div className="text-[#aaa]">
          <h4 className={`font-bold text-white ${isRow && "line-clamp-1" }`}>{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className={`flex gap-2 ${isRow && "text-sm"}`}>
            <p className="line-clamp-1 whitespace-nowrap">{millify(video.viewCount)} görüntülenme</p>
            <p className="whitespace-nowrap">{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
