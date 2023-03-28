import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addFavoritesAction,
  deleteFavoritesAction,
} from "../../reduxTools/favorites/actions";
import { AppState } from "../../reduxTools/store";
import { MovieItem } from "../../types/MovieItem";
import { Favorite } from "./Favorite";
import { Genre } from "./Genre";
import styles from "./index.module.scss";
import { RatingKP } from "./RatingKP";
import { useEffect } from "react";
import { TopLabel } from "./TopLabel";

interface MovieItemWithFavorite extends MovieItem {
  movie: MovieItem;
}

export const Card = (props: MovieItemWithFavorite) => {
  const favorites = useSelector((state: AppState) => state.favorites.favorites);
  const { poster, rating, name, genres, id, movie, top250 } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className={styles.card}>
      <NavLink
        to={`movieItem/${id}`}
        className={styles["card__image-container"]}
      >
        {poster ? (
          <img src={poster.url} className={styles["card__image"]} alt="" />
        ) : (
          <div className={styles["card__no-image"]}>No poster</div>
        )}
        <div className={styles["card__labels"]}>
          {rating ? (
            <RatingKP rating={rating.kp} className={styles["card__rating"]} />
          ) : null}
          {top250 ? <TopLabel top250={top250} /> : null}
        </div>
      </NavLink>
      <Favorite
        checked={favorites.some((el) => (el.id === id ? true : false))}
        onChange={() =>
          favorites.some((el) => el.id === id)
            ? dispatch(deleteFavoritesAction(movie))
            : dispatch(addFavoritesAction(movie))
        }
      />
      <NavLink to={`movieItem/${id}`} className={styles["card__title"]}>
        {name}
      </NavLink>
      <div className={styles["card__genre-container"]}>
        {genres ? genres.map((genre) => <Genre genre={genre.name} />) : null}
      </div>
    </div>
  );
};
