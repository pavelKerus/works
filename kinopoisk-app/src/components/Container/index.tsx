import styles from "./index.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string | undefined;
}

export const Container = (props: Props) => {
  return (
    <div
      className={
        props.className
          ? `${styles.container} ${props.className}`
          : styles.container
      }
    >
      {props.children}
    </div>
  );
};
