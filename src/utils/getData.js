import axios from "axios";

// Yapılacak bütün API isteklerinin başına bu baseURL konulacak
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

const options = {
    params: {geo:'TR', lang:'tr'},
    headers: {
      'X-RapidAPI-Key': '9c6e3aded1msh5f2772a80ad1fb2p123b07jsn7fb1fa584ac5',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };

// parametre olarak aldığı URL'e API isteği atıp
// elde ettiği sonucu döndüren yardımcı fonksiyon
export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
