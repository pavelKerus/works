import styles from "./index.module.scss";

interface Button{
  value:string;
  className?:string;
  onClick?:() => void;
}

export const ButtonDefault = (props:Button) => {
  const {value,className, onClick} = props
  return(
    <button className={className ? `${styles.button} ${className}` : styles.button} onClick={onClick}>
      {value}
    </button>
  )
}