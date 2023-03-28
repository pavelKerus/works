import styles from "./index.module.scss";

interface Props {
  genre: string | null | undefined;
  className?: string;
}

export const Genre = (props: Props) => {
  const { genre, className } = props;
  return (
    <div
      className={
        className ? `${styles["genre"]} ${className}` : styles["genre"]
      }
    >
      {genre}
    </div>
  );
};
