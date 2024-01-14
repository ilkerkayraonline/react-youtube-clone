import { useSearchParams } from "react-router-dom";
import SideBar from "./../components/SideBar";
import { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import Loader from "./../components/Loader";
import VideoCard from ".././components/VideoCard";

const SearchResults = () => {
  const [results, setResult] = useState(null);
  const [searhParams] = useSearchParams();
  const query = searhParams.get("search_query");

  useEffect(() => {
//her isteğin başında önceki istekten elde ettiğimiz verileri sil

setResult(null)

//yeni verileri al
    getData(`/search?query=${query}&type=video`).then((data) =>
      setResult(data)
    );
  }, [query]);

  return (
    <div className="flex">
      <SideBar />
      <div className=" flex justify-center flex-1 p-4 h-screen overflow-auto">
        <div className="max-w-lg flex flex-col gap-10">
          <p>{query}için sonuçlar</p>
        {!results ? (
          <Loader />
        ) : (
          results.data.map((item) => item.type === "video" && <VideoCard video={item} />)
        )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
