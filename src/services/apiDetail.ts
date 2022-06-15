const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const API_BASE_MOVIE = `https://api.themoviedb.org/3/movie/`;

const OPTIONS = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json;charset=utf-8",
  },
};

const movieDetailtFetch = async (endPoint: string) => {
  try {
    const response = await fetch(
      `${API_BASE_MOVIE}${endPoint}?api_key=${API_KEY}&language=pt-BR`,
      OPTIONS
    );
    const data = await response.json();    
    return data ;
  } catch (Error) {
    console.log(Error);
  }
};
export default movieDetailtFetch;
