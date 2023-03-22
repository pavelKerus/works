import { MovieItem } from "./MovieItem";

export interface Movies {
  docs: MovieItem[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
