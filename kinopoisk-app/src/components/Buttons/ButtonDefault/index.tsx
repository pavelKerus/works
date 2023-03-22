import styles from "./index.module.scss";

interface Button{
  value:string;
  className?:string;
}

export const ButtonDefault = (props:Button) => {
  const {value,className} = props
  return(
    <button className={className ? `${styles.button} ${className}` : styles.button}>
      {value}
    </button>
  )
}