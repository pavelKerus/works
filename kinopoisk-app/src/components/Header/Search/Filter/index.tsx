import { useSelector } from "react-redux";
import { defaultStateSearchParams } from "../../../../reduxTools/search/searchParamsReducer";
import { AppState } from "../../../../reduxTools/store";
import styles from "./index.module.scss";

export const FilterIcon = () => {
  const searchParams = useSelector((state: AppState) => state.searchParams);

  const checkEmptyParams = () => {
    if (
      searchParams.ratingFrom == "" &&
      searchParams.ratingTo == "" &&
      searchParams.sortBy == "rating.kp" &&
      searchParams.yearsFrom == "" &&
      searchParams.yearsTo == ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={styles.filter}>
      {checkEmptyParams() ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 6L19 6M10 12H19M14 18H19"
            stroke="#AFB2B6"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 6L19 6M10 12H19M14 18H19"
            stroke="#AFB2B6"
            stroke-width="2"
            stroke-linecap="round"
          />
          <circle cx="3" cy="19" r="3" fill="#7B61FF" />
        </svg>
      )}
    </div>
  );
};
