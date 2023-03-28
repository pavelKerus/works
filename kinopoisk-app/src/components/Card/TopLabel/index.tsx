import { Top } from "../../assets/icons/Top";
import styles from "./index.module.scss";

interface Props{
  top250:number | undefined,
  className?:string
}

export const TopLabel = (props:Props) => {
  const {top250,className} = props
  return(
    <div className={className ? `${styles["top-label"]} ${className}` : styles["top-label"]}>
      <Top/>
      <p className={styles.position}>{top250 ? top250 : null}</p>
    </div>
  )
}