import { useDispatch } from "react-redux";
import { Input } from "../../components/Input";
import styles from "./index.module.scss";
import { themeDarkAction,themeLightAction } from "../../reduxTools/theme/actions";
import {useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../reduxTools/store";
import { ButtonSecondary } from "../../components/Buttons/ButtonSecondary";
import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";

export const Settings = () => {
  const theme = useSelector((state:AppState) => state.theme.themeState)
  const dispatch = useDispatch()

  const handleChecked = () => {
    theme == "dark" ? dispatch(themeLightAction()) : dispatch(themeDarkAction())
  }
  useEffect(() => {
    localStorage.setItem("theme", theme)
  },[theme])

  return(
    <div className={styles.settings}>
      <div className={styles["settings__item"]}>
        <p className={styles["settings__title"]}>Profile</p>
        <div className={styles["settings__container"]}>
          <Input type="text" label="Name"/>
          <Input type="email" label="Email"/>
        </div>
      </div>

      <div className={styles["settings__item"]}>
        <p className={styles["settings__title"]}>Password</p>
        <div className={styles["settings__container"]}>
          <Input type="password" label="Password" placeholder="Your password"/>
          <div className={styles["settings__new-password"]}>
            <Input type="password" label="New password" placeholder="New password"/>
            <Input type="password" label="Confirm password" placeholder="Confirm password"/>
          </div>
        </div>
      </div>

      <div className={styles["settings__item"]}>
        <p className={styles["settings__title"]}>Color mode</p>
        <div className={`${styles["settings__container_switch-theme"]} ${styles["settings__container"]}`}>
          <div className={styles["settings__text-container"]}>
            <p className={styles["settings__subtitle"]}>Dark</p>
            <p className={styles["settings__theme-text"]}>Use dark thema</p>
          </div>

          <label htmlFor="themeState" className={styles["settings__switcher"]}>
            <input id="themeState" type="checkbox" checked={theme == "dark" ? true : false} onChange={handleChecked}/>
            <div className={styles["settings__switcher-container"]}>
              <div className={styles["settings__switcher-round"]}></div>
            </div>
          </label>
        </div>
      </div>

      <div className={styles["settings__button-container"]}>
        <ButtonPrimary value="Save" className={styles["settings__button"]}/>
      </div>
      
    </div>
  )
}