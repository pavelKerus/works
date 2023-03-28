import { MovieItem, MovieItemTop } from "./MovieItem";

export interface Movies {
  docs: MovieItem[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface MoviesTop {
  docs: MovieItemTop[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
