import { useSelector } from "react-redux";
import { EmptyFavorites } from "../../components/assets/icons/EmptyFavorites/EmptyFavorites";
import { AppState } from "../../reduxTools/store";
import styles from './index.module.scss';
import { Card } from "../../components/Card";
import { useEffect } from "react";

export const Favorites = () => {
  const favorites = useSelector((state:AppState) => state.favorites.favorites)

  useEffect(() => {
    localStorage.setItem("favorites",JSON.stringify(favorites))
  },[favorites])

  return(
    <>
      {favorites.length !== 0 
      ?
      <div className={styles["cards-grid"]}>
        {favorites.map(movie => 
          <Card 
            movie={movie}
            id={movie.id} 
            poster={movie.poster} 
            rating={movie.rating} 
            name={movie.name} 
            genres={movie.genres}
          />)}
      </div>
      :
      <div className={styles["favorites"]}>
        <EmptyFavorites/>
      </div>
      }
    </>
    
    
  )
}