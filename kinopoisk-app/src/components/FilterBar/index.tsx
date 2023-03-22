import { useSelector } from "react-redux";
import { CloseButton } from "../assets/icons/CloseButton/CloseButton";
import { ButtonPrimary } from "../Buttons/ButtonPrimary";
import { ButtonSecondary } from "../Buttons/ButtonSecondary";
import { Input } from "../Input";
import styles from "./index.module.scss";
import { AppState } from "../../reduxTools/store";
import { useDispatch } from "react-redux";
import { closeFilterAction } from "../../reduxTools/filter/actions";

export const FilterBar = () => {
  const isOpenFilter = useSelector((state:AppState) => state.filter.isOpen)
  const dispatch = useDispatch()
  
  return(
    <div className={isOpenFilter ? `${styles.filters} ${styles.open}`: styles.filters }>
      <div className={styles["filters__header"]}>
        <p className={styles["filters__title"]}>Filters</p>
        <div className={styles["filters__close-button"]} onClick={() => dispatch(closeFilterAction()) }><CloseButton/></div>
      </div>

      <div className={styles["filters__buttons-group"]}>
        <ButtonSecondary value="Clear filter"/>
        <ButtonPrimary value="Show results"/>
      </div>
      
    </div>    
  )
}