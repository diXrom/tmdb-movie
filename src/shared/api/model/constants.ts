const API_URL = 'https://api.themoviedb.org/3/';
const API_IMG = 'https://image.tmdb.org/t/p/w500';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjRlODIxZTliOGRlMDJmMmJkN2JjMGQ2MzEyNWU5ZSIsInN1YiI6IjYxZjE0ZTEyZWEzN2UwMDA5ZTg5Zjg2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7IkIsAznAnU2Q7qAfo5z36k7Wzi7VaBCz_v-PyYK1n0';
const API_PATH = {
  MOVIE: 'discover/movie?sort_by=vote_count.desc',
  SEARCH: 'search/movie?',
};

export { API_URL, API_IMG, API_PATH, TOKEN };
