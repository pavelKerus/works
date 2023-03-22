import styles from './index.module.scss';

export const FilterIcon = () => {
  return (
    <div className={styles.filter}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 6L19 6M10 12H19M14 18H19" stroke="#AFB2B6" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
  )
}