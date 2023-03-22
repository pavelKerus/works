import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppState } from "../../reduxTools/store";
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { asyncLoadMovieItemAction } from "../../reduxTools/movieItem/actions";
import styles from "./index.module.scss";
import { Genre } from "../../components/Card/Genre";
import { RatingKP } from "../../components/Card/RatingKP";
import { ImdbLogo } from "../../components/assets/icons/ImdbLogo";
// import { movie } from "./example";
import { SimpleSlider } from "../../components/SimpleSlider";
import { CardRecommend } from "../../components/CardRecommend";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";
import { FavoritesIcon } from "../../components/assets/icons/FavoritesIcon/FavoritesIcon";
import { ShareIcon } from "../../components/assets/icons/ShareIcon/ShareIcon";

export const MovieItem = () => {
  const {id} = useParams()
  const movie = useSelector((state:AppState) => state.movieItem.movie)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(asyncLoadMovieItemAction(id))
  },[id])
  
  return(
    <>
      {JSON.stringify(movie) != JSON.stringify({}) ?
      <div className={styles['movie-item']}>
        <div className={styles["movie-item__info"]}>
          <div className={styles["movie-item__genres-container"]}>
            {movie.genres ? movie.genres.map((genre) => (<Genre genre={genre.name}/>)) : null}
          </div>
          <p className={styles["movie-item__title"]}>{movie.name}</p>
          <div className={styles["movie-item__rating-container"]}>
            <RatingKP rating={movie.rating.kp ? movie.rating.kp : 1}/>
            <div className={styles["movie-item__rating-imdb"]}><ImdbLogo/><p className={styles["movie-item__imdb-text"]}>{movie.rating.imdb}</p></div>
            <div className={styles["movie-item__movie-length"]}>{movie.movieLength} min</div>
          </div>

          <div className={styles["movie-item__poster-side"]}>
            <div className={styles["movie-item__poster-container"]}>
              <img src={movie.poster.url} className={styles["movie-item__poster"]} alt=""/>
            </div>
            <div className={styles["movie-item__buttons-group"]}>
              <ButtonWithIcon className={styles["movie-item__favorite-button"]}>
                <FavoritesIcon/>
              </ButtonWithIcon>
              <div className={styles["line"]}>
              </div>
              <ButtonWithIcon className={styles["movie-item__share-button"]}>
                <ShareIcon/>
              </ButtonWithIcon>
            </div>
          </div>

          <div className={styles["movie-item__specs-container"]}>
            <div className={styles["movie-item__description"]}>{movie.description}</div>
            <div className={styles["movie-item__specs-grid"]}>
              <p className={styles["movie-item__spec-name"]}>Year</p>
              <p>{movie.year}</p>
              <p className={styles["movie-item__spec-name"]}>Released</p>
              <p>{movie.premiere ? movie.premiere.world : null}</p>
              <p className={styles["movie-item__spec-name"]}>BoxOffice</p>
              <p>{movie.fees ? `${movie.fees.world.currency}${movie.fees.world.value}` : null}</p>
              <p className={styles["movie-item__spec-name"]}>Country</p>
              <p className={styles["movie-item__spec-value"]}>{movie.countries ? movie.countries.map((country) => <p>{country.name}</p>) : null}</p>
              <p className={styles["movie-item__spec-name"]}>Production</p>
              <p className={styles["movie-item__spec-value"]}>{movie.productionCompanies ? movie.productionCompanies.map((company) => <p>{company.name}</p>) : null}</p>
              <p className={styles["movie-item__spec-name"]}>Actors</p>
              <p className={styles["movie-item__spec-value"]}>{movie.persons ? movie.persons.map((person) => {
                if(person.enProfession == "actor"){
                  return <p>{person.name}</p>
                }}) : null}
              </p>
              <p className={styles["movie-item__spec-name"]}>Director</p>
              <p className={styles["movie-item__spec-value"]}>
                {movie.persons ? movie.persons.map((person) => {
                  if(person.enProfession == "director"){
                    return <p>{person.name}</p>
                  }}) : null}
              </p>
              <p className={styles["movie-item__spec-name"]}>Writers</p>
              <p className={styles["movie-item__spec-value"]}>
                {movie.persons ? movie.persons.map((person) => {
                  if(person.enProfession == "writer"){
                    return <p>{person.name}</p>
                  }
                }) : null}
              </p>
            </div>
            <p className={styles["movie-item__title-recommendation"]}>Recommendations</p>
            {/* <div className={styles["movie-item__recommendation"]}>
              <SimpleSlider>
                {movie.similarMovies ? movie.similarMovies.map(movie => <CardRecommend name={movie.name} id={movie.id} poster={movie.poster}/>) : null}
              </SimpleSlider> 
            </div> */}
          </div>
        </div>
      </div>
      : null}
    </>
    
  )
}