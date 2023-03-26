import { useSelector } from "react-redux";
import { AppState } from "../../../reduxTools/store";
import styles from "./index.module.scss";
import {UserIcon} from "../../assets/icons/UserIcon";
import { UserArrow } from "../../assets/icons/UserArrow";
import {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutAction } from "../../../reduxTools/auth/actions";

export const User = () => {
  const [isOpenList, setIsOpenList] = useState<Boolean>(false)
  const user = useSelector((state:AppState) => state.auth.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    setIsOpenList(!isOpenList)
  }

  const logOut = async() => {
    await setIsOpenList(!isOpenList)
    dispatch(signOutAction())
  }

  return(
    <div className={styles["user"]}>
      <div className={styles["user__container"]} onClick={user ? handleClick : () => navigate("/form/")}>
        <div className={styles["user__info"]}>
          <div className={styles["user__icon"]}>{user ? user.username[0] : <UserIcon/>}</div>
          <div className={styles["user__name"]}>{user ? user.username : "Sign In"}</div>
        </div>
        <div className={user ? (isOpenList ? `${styles["user__arrow"]} ${styles["user__arrow_open"]}` : `${styles["user__arrow"]} ${styles["user__arrow_close"]}`)  : styles["user__arrow"]}><UserArrow/></div>
      </div>
      <nav className={isOpenList ? `${styles["user__list"]} ${styles["user__list_open"]}` : styles["user__list"]}>
        <NavLink to="/settings" onClick={handleClick} className={`${styles["user__list-item"]} ${styles["user__list-item_top"]}`}>Edit profile</NavLink>
        <div className={styles["user__list-line"]}></div>
        <li onClick={logOut} className={`${styles["user__list-item"]} ${styles["user__list-item_bottom"]}`}>Log Out</li>
      </nav>
    </div>
  )
}