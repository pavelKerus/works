import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Card } from "../../components/Card";
import { AppState } from "../../reduxTools/store";
import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import { asyncLoadMoviesAction } from "../../reduxTools/movies/actions";
import { useResize } from "../../components/screenSize/useResize";
import { ButtonShowMore } from "../../components/ButtonShowMore";
import { MovieItem } from "../../types/MovieItem";
import { moviesOffline } from "../../reduxTools/offlineStates/moviesOffline";
import { calculateLimitOfMovies } from "../../components/screenSize/calculateLimitOfMovies";
import { LoadingInPage } from "../../components/LoadingInPage";

export const Home = () => {
  const movies = useSelector((state: AppState) => state.movies.docs);
  const dispatch = useDispatch();
  const screenSize = useResize();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState<number>(
    calculateLimitOfMovies(screenSize)
  );

  const limit = calculateLimitOfMovies(screenSize);

  useEffect(() => {
    dispatch(asyncLoadMoviesAction(limit, page));
  }, [limit, page]);

  useEffect(() => {
    setLoading(false);
  }, [movies]);

  return (
    <>
      {movies.length > 0 ? (
        <div className={styles.home}>
          <div className={styles["cards-grid"]}>
            {movies.map((movie) => (
              <Card
                movie={movie}
                id={movie.id}
                poster={movie.poster}
                rating={movie.rating}
                name={movie.name}
                genres={movie.genres}
                top250={movie.top250}
              />
            ))}
          </div>
          <ButtonShowMore
            loading={loading}
            onClick={() => {
              setLoading(true);
              setPage((prev) => prev + 1);
            }}
          />
        </div>
      ) : (
        <LoadingInPage />
      )}
    </>
  );
};
