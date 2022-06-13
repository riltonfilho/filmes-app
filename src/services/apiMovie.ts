const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const API_BASE_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

const OPTIONS = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json;charset=utf-8",
  },
};

const movieFetch = async (endPoint: string) => {
  try {
    const response = await fetch(
      `${API_BASE_MOVIE}&language=pt-BR&query=${endPoint}`,
      OPTIONS
    );
    const data = await response.json();
    console.log(data.results);
    return data.results;
     
  } 
  catch (Error) {
      console.log(Error);
  } 
  finally {
    //    setIsLoad(false);
  }
};
export default movieFetch;
