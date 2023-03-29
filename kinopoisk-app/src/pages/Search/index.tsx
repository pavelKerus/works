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
import { asyncLoadSearchMoviesAction } from "../../reduxTools/search/actions";
import { calculateLimitOfMovies } from "../../components/screenSize/calculateLimitOfMovies";
import { LoadingInPage } from "../../components/LoadingInPage";

export const Search = () => {
  const searchResults = useSelector((state: AppState) => state.searchResults);
  const searchParams = useSelector((state: AppState) => state.searchParams);
  const dispatch = useDispatch();
  const screenSize = useResize();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingInPage, setLoadingInPage] = useState(false);
  let limit = 2;

  useEffect(() => {
    dispatch(asyncLoadSearchMoviesAction(searchParams, page, limit));
  }, [searchParams, page, limit]);

  useEffect(() => {
    setLoading(false);
  }, [searchResults]);

  return (
    <>
      {searchResults.docs.length > 0 ? (
        <div className={styles.search}>
          <div className={styles["cards-grid"]}>
            {searchResults.docs.map((movie) => (
              <Card
                movie={movie}
                id={movie.id}
                poster={movie.poster}
                rating={movie.rating}
                name={movie.name}
                genres={movie.genres}
                top10={movie.top250}
              />
            ))}
          </div>
          {searchResults.pages >= page + 1 ? (
            <ButtonShowMore
              loading={loading}
              onClick={() => {
                setLoading(true);
                setPage(page + 1);
              }}
            />
          ) : null}
        </div>
      ) : (
        <LoadingInPage/>
      )}
    </>
  );
};
