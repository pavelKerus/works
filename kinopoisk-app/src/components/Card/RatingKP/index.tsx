import styles from "./index.module.scss";

interface Props {
  rating: number | undefined;
  className?: string;
}

export const RatingKP = (props: Props) => {
  const { rating, className } = props;
  return (
    <p
      className={
        className ? `${styles["rating"]} ${className}` : styles["rating"]
      }
    >
      {rating ? rating.toFixed(1) : null}
    </p>
  );
};
