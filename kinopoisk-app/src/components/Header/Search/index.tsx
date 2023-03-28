import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openFilterAction } from "../../../reduxTools/filter/actions";
import { changeSearchValueAction } from "../../../reduxTools/search/actions";
import { FilterIcon } from "./Filter";
import styles from "./index.module.scss";

export const Search = () => {
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

  useEffect(() => {
    dispatch(changeSearchValueAction(searchValue));
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
