import styles from "./index.module.scss";
import { NavButton } from "./NavButton";
import { HomeIcon } from "../assets/icons/HomeIcon/HomeIcon";
import {TrendsIcon} from '../assets/icons/TrendsIcon/TrendsIcon';
import {FavoritesIcon} from '../assets/icons/FavoritesIcon/FavoritesIcon';
import {SettingsIcon} from '../assets/icons/SettingsIcon/SettingsIcon';
import { useSelector } from "react-redux";
import { AppState } from "../../reduxTools/store";
import { BurgerMenu } from "../BurgerMenu";

export const NavBar = () => {
  const isMenuOpen = useSelector((state:AppState) => state.burgerMenu.isOpen)

  return(
    <>
      <BurgerMenu/>
      <div className={isMenuOpen ? `${styles["navbar"]} ${styles["open"]}` : styles["navbar"]}>
        <nav className={styles["navbar__nav-list"]}>
          <NavButton to = "/" icon ={<HomeIcon/>} text={"Home"}/>
          <NavButton to = "/movieItem" icon ={<TrendsIcon/>} text={"Trends"}/>
          <NavButton to = "/favorites" icon ={<FavoritesIcon/>} text={"Favorites"}/>
          <NavButton to = "/settings" icon ={<SettingsIcon/>} text={"Settings"}/>
        </nav>
        <p className={styles['navbar__rights']}>© All Rights Reserved</p>
      </div>
    </>
    
  )
}