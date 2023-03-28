import styles from "./index.module.scss";

interface Button {
  value: string | JSX.Element;
  className?: string;
  onClick?: () => void;
  name?: string;
}

export const ButtonDefault = (props: Button) => {
  const { value, className, onClick, name } = props;
  return (
    <button
      name={name}
      className={className ? `${styles.button} ${className}` : styles.button}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
