import styles from "./index.module.scss";
import { FavoritesIcon } from "../../assets/icons/FavoritesIcon/FavoritesIcon";

interface Favorite{
  checked?:boolean,
  onChange?:() => void
}

export const Favorite = (props:Favorite) => {
  const {checked,onChange} = props

  return(
    <label className={styles.favorite}>
      <input type="checkbox" checked={checked} onChange={onChange}/>
      <FavoritesIcon/>
    </label>
  )
}