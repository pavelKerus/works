import { useSelector } from "react-redux";
import { CloseButton } from "../assets/icons/CloseButton/CloseButton";
import { ButtonPrimary } from "../Buttons/ButtonPrimary";
import { ButtonSecondary } from "../Buttons/ButtonSecondary";
import { Input } from "../Input";
import React from "react";
import styles from "./index.module.scss";
import { AppState } from "../../reduxTools/store";
import { useDispatch } from "react-redux";
import { closeFilterAction } from "../../reduxTools/filter/actions";
import { useEffect, useState } from "react";
import Select from "react-select";
import {
  SearchParamsState,
  clearParamsAction,
  changeParamsAction,
  asyncLoadSearchMoviesAction,
} from "../../reduxTools/search/actions";
import { useNavigate } from "react-router-dom";

export const FilterBar = () => {
  const searchParams = useSelector((state: AppState) => state.searchParams);
  const isOpenFilter = useSelector((state: AppState) => state.filter.isOpen);
  const dispatch = useDispatch();
  const [sortValue, setSortValue] = useState<"rating.kp" | "year">("rating.kp");
  const navigate = useNavigate();
  const [submitButton, setSubmitButton] = useState<"clear" | "show">("show");

  const changeValue = (e: any) => {
    setSortValue(e.target.value);
  };

  const changeParams = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params: SearchParamsState = {
      sortBy: sortValue,
      yearsFrom: e.currentTarget.yearsFrom.value,
      yearsTo: e.currentTarget.yearsTo.value,
      ratingFrom: e.currentTarget.ratingFrom.value,
      ratingTo: e.currentTarget.ratingTo.value,
    };
    dispatch(changeParamsAction(params));
    dispatch(closeFilterAction());
    navigate("/search");
  };

  const clearParams = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSortValue("rating.kp");
    e.currentTarget.yearsFrom.value = "";
    e.currentTarget.yearsTo.value = "";
    e.currentTarget.ratingFrom.value = "";
    e.currentTarget.ratingTo.value = "";
    dispatch(clearParamsAction());
    navigate("/search");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (submitButton === "clear") {
      clearParams(e);
      console.log("button clear");
    } else {
      changeParams(e);
      console.log("button show");
    }
  };

  return (
    <form
      className={
        isOpenFilter ? `${styles.filters} ${styles.open}` : styles.filters
      }
      onSubmit={handleSubmit}
    >
      <div className={styles["filters__header"]}>
        <p className={styles["filters__title"]}>Filters</p>
        <div
          className={styles["filters__close-button"]}
          onClick={() => dispatch(closeFilterAction())}
        >
          <CloseButton />
        </div>
      </div>

      <p
        className={`${styles["filters__label"]} ${styles["filters__label_sort"]}`}
      >
        Sort by
      </p>
      <div className={styles["filters__sort"]}>
        <label className={styles["filters__radio-ratings"]}>
          <p className={styles["filters__rating-title"]}>Ratings</p>
          <input
            type="radio"
            name="sort"
            value="rating.kp"
            defaultChecked={searchParams.sortBy === "rating.kp"}
            checked={sortValue == "rating.kp" ? true : false}
            onChange={changeValue}
          />
          <div className={styles["filters__radio-switcher"]}></div>
        </label>
        <label className={styles["filters__radio-year"]}>
          <p className={styles["filters__year-title"]}>Year</p>
          <input
            type="radio"
            name="sort"
            value="year"
            defaultChecked={searchParams.sortBy === "year"}
            checked={sortValue == "year" ? true : false}
            onChange={changeValue}
          />
        </label>
      </div>

      <p
        className={`${styles["filters__label"]} ${styles["filters__label_years"]}`}
      >
        Years
      </p>
      <div className={styles["filters__inputs-grid"]}>
        <Input
          type="text"
          placeholder="From"
          name="yearsFrom"
          defaultValue={searchParams.yearsFrom}
        />
        <Input
          type="text"
          placeholder="to"
          name="yearsTo"
          defaultValue={searchParams.yearsTo}
        />
      </div>

      <p
        className={`${styles["filters__label"]} ${styles["filters__label_rating"]}`}
      >
        Rating
      </p>
      <div className={styles["filters__inputs-grid"]}>
        <Input
          type="text"
          placeholder="From"
          defaultValue={searchParams.ratingFrom}
          name="ratingFrom"
        />
        <Input
          type="text"
          placeholder="to"
          defaultValue={searchParams.ratingTo}
          name="ratingTo"
        />
      </div>

      <div className={styles["filters__buttons-group"]}>
        <ButtonSecondary
          value="Clear filter"
          name="clearFilters"
          onClick={() => setSubmitButton("clear")}
        />
        <ButtonPrimary
          value="Show results"
          name="showResults"
          onClick={() => setSubmitButton("show")}
        />
      </div>
    </form>
  );
};
