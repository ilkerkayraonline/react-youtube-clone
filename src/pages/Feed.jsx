import { useContext } from "react";
import SideBar from "../components/SideBar";
import { YoutubeContext } from "../context/YoutubeContext";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  return (
    <div className="flex">
      <SideBar />
      <div className="video-layout">
        {/* 1) Eğer API'den henüz cevap gelmediyse yükleniyor bas 
      2) API'den cevap geldiyse sadece type'ı video olanlar için 
         ekrana video bas
  */}
        {!videos ? (
          <Loader/>
        ) : (
          videos.map(
            (item, i) =>
              item.type === "video" && <VideoCard key={i} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
