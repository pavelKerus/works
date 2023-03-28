import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";
import { FormTemplate } from "../../components/FormTemplate";
import { Input } from "../../components/Input";
import { getUserAsyncAction } from "../../reduxTools/auth/actions";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Validator, { ValidationError } from "fastest-validator";
import { AppState } from "../../reduxTools/store";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const signInValidationSchema = {
  email: {
    type: "email",
    optional: true,
  },
  password: {
    type: "string",
    min: 8,
    max: 16,
    optional: true,
    nullable: true,
  },
};

export const check = (schema: Object, data: Object) => {
  const validator = new Validator();
  const compiledValidator = validator.compile(schema);

  return compiledValidator(data);
};

export const SignIn = () => {
  const [formError, setFormError] = useState<ValidationError[]>([]);
  const auth = useSelector((state: AppState) => state.auth);
  const [apiErrors, setApiErrors] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  const fromPage = location.state?.from?.pathname || "/";
  const emailErrorArray = formError.map((err) => err.field === "email");
  const passwordErrorArray = formError.map((err) => err.field === "password");

  const signInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const result = check(signInValidationSchema, {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });

    if (result === true) {
      setFormError(formError);
      const email: string = e.currentTarget.email.value;
      const password: string = e.currentTarget.password.value;
      dispatch(getUserAsyncAction(email, password, () => navigate(fromPage)));
      console.log(email, password);
    } else {
      setFormError(result as ValidationError[]);
    }
  };

  useEffect(() => {
    if (auth.errors || auth.user || formError.length > 0) {
      setLoading(false);
    }

    for (const key in auth.errors) {
      if (auth.errors === null) {
        setApiErrors(apiErrors);
        console.log(auth.errors);
      } else {
        const errors: any = auth.errors[key];
        setApiErrors(errors);
      }
    }
  }, [auth.errors, apiErrors, auth.user, formError]);

  return (
    <FormTemplate
      title="Sign In"
      onSubmit={signInSubmit}
      className={styles["sign-in"]}
    >
      <span className={styles["sign-in__errors"]}> {apiErrors}</span>
      <Input
        type="email"
        label="Email"
        placeholder="Your email"
        name="email"
        error={emailErrorArray.length > 0 ? true : false}
      />
      {formError.length > 0
        ? formError.map((err) => (
            <p className={styles["sign-in__form-errors"]} key={err.field}>
              {err.field === "email" ? err.message : ""}
            </p>
          ))
        : null}
      <Input
        type="password"
        label="Password"
        placeholder="Your password"
        name="password"
        error={passwordErrorArray.length > 0 ? true : false}
      />
      {formError.length > 0
        ? formError.map((err) => (
            <p key={err.field} className={styles["sign-in__form-errors"]}>
              {err.field === "password" ? err.message : null}
            </p>
          ))
        : null}
      <NavLink to="/form/signInResetOne" className={styles["reset-link"]}>
        Forgot password?
      </NavLink>
      <ButtonPrimary
        value={
          loading ? (
            <ClipLoader
              size={35}
              className={styles["sign-in__spinner"]}
              loading={loading}
            />
          ) : (
            "Sign In"
          )
        }
      />
      <p className={styles["signin-hint"]}>
        Don’t have an account?
        <NavLink to="/form/signUp" className={styles["signin-link"]}>
          Sign Up
        </NavLink>
      </p>
    </FormTemplate>
  );
};
