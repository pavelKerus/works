import { ButtonDefault } from "../ButtonDefault";
import styles from "./index.module.scss";

interface Button{
  value:string;
  className?:string;
  onClick?:() => void;
  name?:string
}

export const ButtonSecondary = (props:Button) => {
  const {value, className,onClick,name} = props
  return(
    <ButtonDefault onClick={onClick} name={name} value={value} className={className ? `${styles["button-secondary"]} ${className}` : styles["button-secondary"]}/>
  )
}