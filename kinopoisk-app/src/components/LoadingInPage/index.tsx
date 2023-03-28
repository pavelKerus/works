import { ClipLoader } from "react-spinners";
import styles from "./index.module.scss";

export const LoadingInPage = () => {
  return (
    <div className={styles.loading}>
      <ClipLoader size={150} color="#7B61FF" className={styles.spinner} />
      <p className={styles["loading__text"]}>Loading...</p>
    </div>
  );
};
