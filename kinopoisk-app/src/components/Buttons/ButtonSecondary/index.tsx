import { ButtonDefault } from "../ButtonDefault";
import styles from "./index.module.scss";

interface Button{
  value:string;
  className?:string;
  onClick?:() => void;
}

export const ButtonSecondary = (props:Button) => {
  const {value, className,onClick} = props
  return(
    <ButtonDefault onClick={onClick} value={value} className={className ? `${styles["button-secondary"]} ${className}` : styles["button-secondary"]}/>
  )
}