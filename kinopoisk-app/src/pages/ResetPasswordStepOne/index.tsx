import { NavLink } from "react-router-dom"
import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary"
import { FormTemplate } from "../../components/FormTemplate"
import { Input } from "../../components/Input"
import styles from "./index.module.scss"

export const ResetPasswordStepOne = () => {
  return(
    <FormTemplate title="Reset password">
      <Input type="email" label="Email" placeholder="Your email"/>
      <ButtonPrimary value="Reset"/>
    </FormTemplate>
  )
}