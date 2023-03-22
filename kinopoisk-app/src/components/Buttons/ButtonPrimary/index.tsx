import { ButtonDefault } from "../ButtonDefault";
import styles from "./index.module.scss";

interface ButtonPrimary{
  value:string;
  className?:string;
}

export const ButtonPrimary = (props:ButtonPrimary) => {
  const {value,className} = props

  return(
    <ButtonDefault value={value} className={className ? `${styles["button-primary"]} ${className}` : styles["button-primary"]}/>
  )
}