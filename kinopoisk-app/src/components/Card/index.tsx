import { NavLink } from "react-router-dom";
import { MovieItem} from "../../types/MovieItem";
import { Genre } from "./Genre";
import styles from "./index.module.scss";
import { RatingKP } from "./RatingKP";

export const Card = (props: MovieItem) => {
  const { poster, rating, name, genres,id} = props;
  return (
    <div className={styles.card}>
      <NavLink to={`movieItem/${id}`} className={styles["card__image-container"]}>
        <img src={poster.url} className={styles["card__image"]} alt="" />
        {rating ? <RatingKP rating={rating.kp} className={styles["card__rating"]}/> : null}
      </NavLink>
      <NavLink to={`movieItem/${id}`} className={styles["card__title"]} >{name}</NavLink>
      <div className={styles["card__genre-container"]}>
        {genres ? genres.map((genre) => <Genre genre={genre.name}/>) : null}
      </div>
      
    </div>
  );
};
