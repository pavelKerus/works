import { NavLink } from "react-router-dom";
import { Logo } from "../assets/icons/Logo";
import { Container } from "../Container";
import styles from "./index.module.scss";
import { Search } from "./Search";
import { User } from "./User";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Container className={styles["header__container"]}>
        <div className={styles["header__content"]}>
          <NavLink to="/" className={styles["header__logo"]}>
            <Logo />
          </NavLink>
          <Search />
          <User/>
        </div>
      </Container>
    </div>
  );
};
