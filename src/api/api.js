const APIKey = "4457be09c5af554fa0cbacc4346c7fde";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKey}&with_genres=99`,
};
export default requests;
