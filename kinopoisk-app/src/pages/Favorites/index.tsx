import { EmptyFavorites } from "../../components/assets/icons/EmptyFavorites/EmptyFavorites";
import styles from './index.module.scss';

export const Favorites = () => {
  return(
    <div className={styles["favorites"]}>
      <EmptyFavorites/>
    </div>
  )
}