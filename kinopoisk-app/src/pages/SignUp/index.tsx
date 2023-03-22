import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary"
import { FormTemplate } from "../../components/FormTemplate"
import { Input } from "../../components/Input"
import { NavLink } from "react-router-dom"
import styles from "./index.module.scss"

export const SignUp = () => {
  return(
    <FormTemplate title="SignUp">
      <Input type="text" placeholder="Your name" label="Name"/>
      <Input type="email" placeholder="Your email" label="Email"/>
      <Input type="password" placeholder="Your password" label="Password"/>
      <Input type="password" placeholder="Confirm password" label="Confirm password"/>
      <ButtonPrimary value="Sign up"/>
      <p className={styles["signin-hint"]}>Don’t have an account?<NavLink to="/form" className={styles["signin-link"]}>Sign In</NavLink></p>
    </FormTemplate>
  )
}