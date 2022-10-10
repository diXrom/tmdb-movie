import { IMovie } from 'shared/api/lib/types';
import { API_IMG } from 'shared/api/model/constants';

const getPath = (movie: IMovie) =>
  movie.poster_path ? `${API_IMG}${movie.poster_path}` : 'https://via.placeholder.com/500x750';
export { getPath };
