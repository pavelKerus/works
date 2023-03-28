import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../reduxTools/store";
import { LogoForm } from "../assets/icons/Logo";
import { Container } from "../Container";

export const LayoutForm = () => {
  const theme = useSelector((state: AppState) => state.theme.themeState);
  return (
    <div className={theme == "dark" ? `${styles.root} dark` : styles.root}>
      <Container className={styles["logo-container"]}>
        <LogoForm />
      </Container>
      <Container className={styles["form-container"]}>
        <Outlet />
      </Container>
      <div className={styles.rights}>© All Rights Reserved</div>
    </div>
  );
};
