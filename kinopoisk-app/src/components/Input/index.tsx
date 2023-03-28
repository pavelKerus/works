import styles from "./index.module.scss";

interface Input {
  type: string;
  placeholder?: string;
  label?: string;
  name?: string;
  defaultValue?: string;
  error?: boolean;
}

export const Input = (props: Input) => {
  const { type, placeholder, label, name, defaultValue, error } = props;
  return (
    <label htmlFor="" className={styles.label}>
      {label}
      <input
        className={error ? `${styles.input} ${styles.error}` : styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
      />
    </label>
  );
};
