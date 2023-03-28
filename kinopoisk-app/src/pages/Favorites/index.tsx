import { useSelector } from "react-redux";
import { EmptyFavorites } from "../../components/assets/icons/EmptyFavorites/EmptyFavorites";
import { AppState } from "../../reduxTools/store";
import styles from "./index.module.scss";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { useResize } from "../../components/screenSize/useResize";
import { calculateLimitOfMovies } from "../../components/screenSize/calculateLimitOfMovies";
import { ButtonShowMore } from "../../components/ButtonShowMore";

export const Favorites = () => {
  const favorites = useSelector((state: AppState) => state.favorites.favorites);
  const screenSize = useResize();
  const [count, setCount] = useState<number>(
    calculateLimitOfMovies(screenSize)
  );
  const [loading, setLoading] = useState<boolean>(false);

  const limit = calculateLimitOfMovies(screenSize);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      {favorites.length !== 0 ? (
        <div>
          <div className={styles["cards-grid"]}>
            {favorites.slice(0, count).map((movie, index) => (
              <Card
                key={index.toString()}
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
          {favorites.length >= count ? (
            <ButtonShowMore
              loading={loading}
              onClick={() => {
                setLoading(true);
                setCount((prev) => prev + limit);
              }}
            />
          ) : null}
        </div>
      ) : (
        <div className={styles["favorites"]}>
          <EmptyFavorites />
        </div>
      )}
    </>
  );
};
