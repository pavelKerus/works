import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeMenuStateAction } from "../../reduxTools/burgerMenu/actions";
import { AppState } from "../../reduxTools/store";
import styles from "./index.module.scss";
import { useCallback } from "react";

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: AppState) => state.burgerMenu.isOpen);

  const changeHamburgerIsOpen = useCallback(() => {
    dispatch(changeMenuStateAction());
  }, []);

  return (
    <div
      className={
        isMenuOpen
          ? `${styles["burger-menu"]} ${styles["open"]}`
          : styles["burger-menu"]
      }
      onClick={changeHamburgerIsOpen}
    >
      <div className={styles["burger-menu__container"]}>
        <span></span>
      </div>
    </div>
  );
};
