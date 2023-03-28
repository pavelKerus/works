import ClipLoader from "react-spinners/ClipLoader";
import styles from "./index.module.scss";

interface Props {
  loading: boolean;
  onClick?: () => void;
}

export const ButtonShowMore = (props: Props) => {
  return (
    <button className={styles["button"]} onClick={props.onClick}>
      <p>Show more</p>
      <ClipLoader
        size={20}
        color="#7B61FF"
        className={styles.spinner}
        loading={props.loading}
      />
    </button>
  );
};
