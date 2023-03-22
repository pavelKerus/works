import { NavLink } from "react-router-dom";
import { Logo } from "../assets/icons/Logo";
import { Container } from "../Container";
import { BurgerMenu } from "../BurgerMenu";
import styles from "./index.module.scss";
import { Search } from "./Search";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Container className={styles["header__container"]}>
        <div className={styles["header__content"]}>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <Search />
        </div>
      </Container>
    </div>
  );
};
