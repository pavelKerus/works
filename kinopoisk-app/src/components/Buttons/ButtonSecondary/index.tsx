import { ButtonDefault } from "../ButtonDefault";
import styles from "./index.module.scss";

interface Button{
  value:string;
  className?:string;
}

export const ButtonSecondary = (props:Button) => {
  const {value, className} = props
  return(
    <ButtonDefault value={value} className={className ? `${styles["button-secondary"]} ${className}` : styles["button-secondary"]}/>
  )
}