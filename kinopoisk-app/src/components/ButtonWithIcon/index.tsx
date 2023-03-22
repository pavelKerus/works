import styles from "./index.module.scss";

interface Props{
  children:React.ReactNode;
  className?:string;
}

export const ButtonWithIcon = (props:Props) => {
  const {children,className} = props
  return(
    <div className={className ? `${styles["button"]} ${className}` : styles["button"]}>
      {children}
    </div>
  )
}