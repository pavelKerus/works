import { NavLink } from "react-router-dom"
import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary"
import { FormTemplate } from "../../components/FormTemplate"
import { Input } from "../../components/Input"
import styles from "./index.module.scss"

export const SignIn = () => {
  return(
    <FormTemplate title="Sign In">
      <Input type="email" label="Email" placeholder="Your email"/>
      <Input type="password" label="Password" placeholder="Your password"/>
      <NavLink to="" className={styles["reset-link"]}>Forgot password?</NavLink>
      <ButtonPrimary value="Sign In"/>
      <p className={styles["signup-hint"]}>Don’t have an account?<NavLink to="/form/signUp" className={styles["signup-link"]}>Sign Up</NavLink></p>
    </FormTemplate>
  )
}