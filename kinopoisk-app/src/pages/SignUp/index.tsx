import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary"
import { FormTemplate } from "../../components/FormTemplate"
import { Input } from "../../components/Input"
import { NavLink } from "react-router-dom"
import styles from "./index.module.scss"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { AppState } from "../../reduxTools/store"
import { asyncRegistrationUserAction } from "../../reduxTools/registration/registrationActions"

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const register = useSelector((state:AppState) => state.register);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const username = e.currentTarget.username.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    dispatch(
      asyncRegistrationUserAction(username, email, password, () =>
        navigate("/registrationConfirmation")
      )
    );
  };
  return(
    <FormTemplate title="SignUp" className={styles["signup"]}>
      <Input type="text" placeholder="Your name" label="Name"/>
      <Input type="email" placeholder="Your email" label="Email"/>
      <Input type="password" placeholder="Your password" label="Password"/>
      <Input type="password" placeholder="Confirm password" label="Confirm password"/>
      <ButtonPrimary value="Sign up"/>
      <p className={styles["signup-hint"]}>Don’t have an account?<NavLink to="/form" className={styles["signup-link"]}>Sign In</NavLink></p>
    </FormTemplate>
  )
}