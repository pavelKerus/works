import styles from "./index.module.scss";

interface Input{
  type:string;
  placeholder?:string;
  label?:string;
  name?:string;
  defaultValue?:string;
}

export const Input = (props:Input) => {
  const {type,placeholder,label,name, defaultValue} = props
  return (
    <label htmlFor="" className={styles.label}>
      {label}
      <input className={styles.input} type={type} placeholder={placeholder} name={name} defaultValue={defaultValue}/>
    </label>
  )
}