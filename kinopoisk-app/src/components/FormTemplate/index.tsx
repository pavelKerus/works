import styles from "./index.module.scss"

interface Props{
  children:React.ReactNode;
  title:string
}

export const FormTemplate = (props:Props) => {
  return(
    <form className={styles.form}>
      <p className={styles["form__title"]}>{props.title}</p>
      {props.children}
    </form>
  )
}