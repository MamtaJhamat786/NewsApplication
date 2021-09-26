import { NEWS_API_KEY } from "../../config";
export const getAllNewsfromApi = async (topic) => {
  
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    console.log(json);
    return json;
  
};

