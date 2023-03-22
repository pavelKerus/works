import styles from "./index.module.scss";

interface Input{
  type:string;
  placeholder?:string;
  label:string;
}

export const Input = (props:Input) => {
  const {type,placeholder,label} = props
  return (
    <label htmlFor="" className={styles.label}>
      {label}
      <input className={styles.input} type={type} placeholder={placeholder}/>
    </label>
  )
}