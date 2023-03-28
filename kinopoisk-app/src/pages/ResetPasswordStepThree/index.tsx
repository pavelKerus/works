import { NavLink } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";
import { FormTemplate } from "../../components/FormTemplate";
import { Input } from "../../components/Input";
import styles from "./index.module.scss";

export const ResetPasswordStepThree = () => {
  return (
    <FormTemplate title="New password" className={styles.resetThree}>
      <Input type="password" label="Password" placeholder="Your password" />
      <Input
        type="password"
        label="Confirm password"
        placeholder="Confirm your password"
      />
      <ButtonPrimary value="Set password" />
    </FormTemplate>
  );
};
