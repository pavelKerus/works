import { useDispatch } from "react-redux"
import { openFilterAction } from "../../../reduxTools/filter/actions"
import { FilterIcon } from "./Filter"
import styles from './index.module.scss'

export const Search = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(openFilterAction())
  }

  return(
    <div className={styles.search} >
      <input type="text" className={styles['search__input']} placeholder="Search"/>
      <button  onClick={handleClick} className={styles['search__button']}><FilterIcon/></button>
    </div>
  )
}