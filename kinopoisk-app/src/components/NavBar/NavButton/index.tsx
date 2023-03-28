import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeMenuStateAction } from "../../../reduxTools/burgerMenu/actions";
import { AppState } from "../../../reduxTools/store";
import styles from "./index.module.scss";

interface Props {
  to: string;
  icon: JSX.Element;
  text: string;
}

export const NavButton = (props: Props) => {
  const { to, icon, text } = props;
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(closeMenuStateAction());
  };

  return (
    <NavLink
      to={to}
      onClick={closeMenu}
      className={({ isActive }) =>
        isActive
          ? `${styles["nav-button"]} ${styles.active}`
          : styles["nav-button"]
      }
    >
      <div className={styles["nav-button__icon"]}>{icon}</div>
      <p className={styles["nav-button__text"]}>{text}</p>
    </NavLink>
  );
};
