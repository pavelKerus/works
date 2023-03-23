import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { AppDispatch, AppState } from '../../reduxTools/store'
import { Container } from '../Container'
import { FilterBar } from '../FilterBar'
import { Header } from '../Header'
import { NavBar } from '../NavBar'
import styles from './index.module.scss'

export const Layout = () => {
  const menuIsOpen = useSelector((state:AppState) => state.burgerMenu.isOpen) 
  const theme = useSelector((state:AppState) => state.theme.themeState)
  const filterIsOpen = useSelector((state:AppState) => state.filter.isOpen)

  return (
    <div className={theme == "dark" ? `${styles.root} dark` : styles.root}>
      <div className={menuIsOpen || filterIsOpen ? `${styles['background']} ${styles['background-open']}` : styles['background']}>
      </div>
      <Header/>
      <NavBar/>
      <FilterBar/>
      <Container className={styles.container}>
        <Outlet/>
      </Container>
    </div>
  )
}