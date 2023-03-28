import styles from "./index.module.scss";

interface Props {
  children: React.ReactNode;
  title: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export const FormTemplate = (props: Props) => {
  return (
    <form
      className={
        props.className ? `${styles.form} ${props.className}` : styles.form
      }
      onSubmit={props.onSubmit}
    >
      <p className={styles["form__title"]}>{props.title}</p>
      {props.children}
    </form>
  );
};
