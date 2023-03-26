import { ButtonDefault } from "../ButtonDefault";
import styles from "./index.module.scss";

interface ButtonPrimary{
  value:string;
  className?:string;
  onClick?:() => void;
}

export const ButtonPrimary = (props:ButtonPrimary) => {
  const {value,className,onClick} = props

  return(
    <ButtonDefault onClick={onClick} value={value} className={className ? `${styles["button-primary"]} ${className}` : styles["button-primary"]}/>
  )
}