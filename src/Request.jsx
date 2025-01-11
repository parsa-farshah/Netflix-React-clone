const key = "753b60c7699183e7c3bc3f1625ab934b";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language-en=US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language-en=US&page=2`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language-en=US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language-en=US&page=1`,
};

export default requests;
