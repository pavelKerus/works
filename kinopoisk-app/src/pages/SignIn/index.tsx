import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary"
import { FormTemplate } from "../../components/FormTemplate"
import { Input } from "../../components/Input"
import { getUserAsyncAction } from "../../reduxTools/auth/actions"
import styles from "./index.module.scss"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Validator, { ValidationError } from 'fastest-validator'
import { AppState } from "../../reduxTools/store"
import { useEffect } from "react"

const signInValidationSchema = {
  email: {
      type: 'email',
      optional: true
  },
  password: {
      type: 'string',
      min: 8,
      max: 16,
      optional: true,
      nullable: true
  },
}

export const check = (schema: Object, data: Object) => {
  const validator = new Validator()
  const compiledValidator = validator.compile(schema)

  return compiledValidator(data)
}

export const SignIn = () => {
  const [formError, setFormError] = useState<ValidationError[]>([])
  const auth = useSelector((state:AppState) => state.auth)
  const [apiErrors, setApiErrors] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/'  
  const signInSubmit = ((e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const result = check(signInValidationSchema, {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    })

    if (result === true) {
      setFormError(formError)
      const email: string = e.currentTarget.email.value;
      const password: string = e.currentTarget.password.value;
      dispatch(getUserAsyncAction(email, password, () => navigate(fromPage)));
      console.log(email, password);
    } else { setFormError(result as ValidationError[]) }
  })

  useEffect(() => {
    for (const key in auth.errors) {
        if (auth.errors === null) {
            setApiErrors(apiErrors)
            console.log(auth.errors);

        } else {
            const errors: any = (auth.errors[key])
            setApiErrors(errors)
        }
    }
  }, [auth.errors, apiErrors])

  return(
    <FormTemplate title="Sign In" onSubmit={signInSubmit}>
      <span> {apiErrors}</span>
      <Input type="email" label="Email" placeholder="Your email" name="email"/>
      {formError.map(err => (
                    <span key={err.field}>{err.field === 'email' ? err.message : ''}</span>
                ))}
      <Input type="password" label="Password" placeholder="Your password" name="password"/>
      {formError.map(err => (
                    <span key={err.field}>{err.field === 'password' ? err.message : ''}</span>
                ))}
      <NavLink to="" className={styles["reset-link"]}>Forgot password?</NavLink>
      <ButtonPrimary value="Sign In"/>
      <p className={styles["signup-hint"]}>Don’t have an account?<NavLink to="/form/signUp" className={styles["signup-link"]}>Sign Up</NavLink></p>
    </FormTemplate>
  )
}