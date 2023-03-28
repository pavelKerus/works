import { NavLink, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";
import { FormTemplate } from "../../components/FormTemplate";
import { Input } from "../../components/Input";
import styles from "./index.module.scss";

export const RegistrationConfirmation = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <FormTemplate title="Registration confirmation" onSubmit={handleSubmit}>
      <p className={styles["confirmation"]}>
        {" "}
        Please activate your account with the activation link in the email
        example@gmail.com. Please, check your email
      </p>
      <ButtonPrimary value="Go to home" />
    </FormTemplate>
  );
};
