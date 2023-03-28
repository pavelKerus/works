import styles from "./index.module.scss";

interface Props {
  children: React.ReactNode;
}

export const ContainerForIcon = (props: Props) => {
  return <div className={styles.container}>{props.children}</div>;
};
