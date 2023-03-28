import { NavLink, useNavigate } from "react-router-dom";
import { MovieItem, SimilarMovies } from "../../types/MovieItem";
import { Genre } from "../Card/Genre";
import styles from "./index.module.scss";

export const CardRecommend = (props: SimilarMovies) => {
  const navigate = useNavigate();
  const { poster, name, id } = props;
  return (
    <div className={styles["card-recommend"]}>
      <div
        onClick={() => navigate(`/movieItem/${id}`)}
        className={styles["card-recommend__image-container"]}
      >
        <img
          src={poster.url}
          className={styles["card-recommend__image"]}
          alt=""
        />
      </div>
      <NavLink
        to={`movieItem/${id}`}
        className={styles["card-recommend__title"]}
      >
        {name}
      </NavLink>
    </div>
  );
};
