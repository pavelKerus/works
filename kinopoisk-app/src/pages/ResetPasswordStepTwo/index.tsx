import { NavLink } from "react-router-dom"
import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary"
import { FormTemplate } from "../../components/FormTemplate"
import { Input } from "../../components/Input"
import styles from "./index.module.scss"

export const ResetPasswordStepTwo = () => {
  return(
    <FormTemplate title="Reset password">
      <p className={styles["signin-reset"]}>You will receive an email example@gmail.com with a link to reset your password!</p>
      <Input type="email" label="Email" placeholder="Your email"/>
      <ButtonPrimary value="Reset"/>
    </FormTemplate>
  )
}