import { ClipLoader } from "react-spinners";
import styles from "./index.module.scss";

interface LoadingInPage{
  loading?:boolean;
}

export const LoadingInPage = (props:LoadingInPage) => {
  return (
    <div className={styles.loading}>
      <ClipLoader size={150} color="#7B61FF" className={styles.spinner} loading={props.loading} />
      <p className={styles["loading__text"]}>Loading...</p>
    </div>
  );
};
