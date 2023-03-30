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
import { asyncLoadTop250Action } from "../../reduxTools/top250/actions";
import { calculateLimitOfMovies } from "../../components/screenSize/calculateLimitOfMovies";
import { LoadingInPage } from "../../components/LoadingInPage";

export const Top250 = () => {
  const top250 = useSelector((state: AppState) => state.top250);
  const dispatch = useDispatch();
  const screenSize = useResize();
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const limit = calculateLimitOfMovies(screenSize);

  useEffect(() => {
    dispatch(asyncLoadTop250Action(limit, page));
  }, [page, limit]);

  useEffect(() => {
    setLoading(false);
  }, [top250.docs]);

  return (
    <>
      {top250.docs.length > 0 ? (
        <div className={styles.top}>
          <div className={styles["cards-grid"]}>
            {top250.docs.map((movie) => {
              return (
                <Card
                  movie={movie}
                  id={movie.id}
                  poster={movie.poster}
                  rating={movie.rating}
                  name={movie.name}
                  genres={movie.genres}
                  top250={movie.top250}
                />
              );
            })}
          </div>

          {top250.pages >= page + 1 ? (
            <ButtonShowMore
              loading={loading}
              onClick={() => {
                setLoading(true);
                setPage((prev) => prev + 1);
              }}
            />
          ) : null}
        </div>
      ) : (
        <LoadingInPage />
      )}
    </>
  );
};
