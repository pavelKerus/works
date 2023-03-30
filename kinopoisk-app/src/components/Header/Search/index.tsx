import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openFilterAction } from "../../../reduxTools/filter/actions";
import {
  changeSearchValueAction,
  clearSearchResultsAction,
} from "../../../reduxTools/search/actions";
import { AppState } from "../../../reduxTools/store";
import { FilterIcon } from "./Filter";
import styles from "./index.module.scss";

export const Search = () => {
  const searchResults = useSelector((state:AppState) => state.searchResults.docs)
  const searchParams = useSelector((state:AppState) => state.searchParams)
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(openFilterAction());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    navigate("/search");
  };

  const hr = async () => {
    await dispatch(clearSearchResultsAction())
    await dispatch(changeSearchValueAction(searchValue));
    await console.log(searchResults);
    await console.log(searchParams);
  }

  useEffect(() => {
    hr()
  }, [searchValue]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles["search__input"]}
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      />
      <button onClick={handleClick} className={styles["search__button"]}>
        <FilterIcon />
      </button>
    </div>
  );
};
