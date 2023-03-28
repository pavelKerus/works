import { ButtonDefault } from "../ButtonDefault";
import styles from "./index.module.scss";

interface ButtonPrimary{
  value:string | JSX.Element;
  className?:string;
  onClick?:() => void;
  name?:string
}

export const ButtonPrimary = (props:ButtonPrimary) => {
  const {value,className,onClick,name} = props

  return(
    <ButtonDefault onClick={onClick} name={name} value={value} className={className ? `${styles["button-primary"]} ${className}` : styles["button-primary"]}/>
  )
}