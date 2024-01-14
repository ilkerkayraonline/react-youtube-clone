import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../utils/getData";

// 1)  Context temeli oluştur

export const YoutubeContext = createContext();

// 2) context'te tutulan verileri uygulamaya aktaracak

export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);

  // 3) selectedCategory her değiştiğinde API'den
  // ilgili kategorinin verilerini çek

  useEffect(() => {
    setVideos(null);
    // 4) eğerki seçili kategorinin tipi home veya trending ise
    // o kategorinin tipinin ismine istek at
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      getData(`/${selectedCategory.type}`)
        .then((data) => setVideos(data.data))
        .catch((error) => console.error("getData error:", error));
    }

    //eğer ki seçili kategorynin tipi category ise search endpointine istek atıcaz

    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((data) =>
        setVideos(data.data)
      );
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
