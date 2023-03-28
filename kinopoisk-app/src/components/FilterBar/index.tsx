import { useSelector } from "react-redux";
import { CloseButton } from "../assets/icons/CloseButton/CloseButton";
import { ButtonPrimary } from "../Buttons/ButtonPrimary";
import { ButtonSecondary } from "../Buttons/ButtonSecondary";
import { Input } from "../Input";
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

const countries = [
  "Абхазия",
  "Австралия",
  "Австрия",
  "Азербайджан",
  "Азорские острова",
  "Аландские острова",
  "Албания",
  "Алжир",
  "Американское Самоа",
  "Ангилья",
  "Ангола",
  "Андорра",
  "Антарктика",
  "Антигуа и Барбуда",
  "Антильские Острова",
  "Аомынь",
  "Аргентина",
  "Армения",
  "Аруба",
  "Афганистан",
  "Багамские Острова",
  "Бангладеш",
  "Барбадос",
  "Бахрейн",
  "Беларусь",
  "Белиз",
  "Бельгия",
  "Бенин",
  "Бермудские Острова",
  "Болгария",
  "Боливия",
  "Босния и Герцеговина",
  "Ботсвана",
  "Бразилия",
  "Британская территория в Индийском океане",
  "Бруней",
  "Буве",
  "Буркина-Фасо",
  "Бурунди",
  "Бутан",
  "Вануату",
  "Ватикан",
  "Великобритания",
  "Венгрия",
  "Венесуэла",
  "Виргинские Острова (Британские)",
  "Виргинские Острова (США)",
  "Внешние малые острова (США)",
  "Восточный Тимор",
  "Вьетнам",
  "Габон",
  "Гаити",
  "Гайана",
  "Гамбия",
  "Гана",
  "Гваделупа",
  "Гватемала",
  "Гвиана",
  "Гвинея",
  "Гвинея-Бисау",
  "Германия",
  "Гернси",
  "Гибралтар",
  "Гондурас",
  "Гонконг",
  "Гренада",
  "Гренландия",
  "Греция",
  "Грузия",
  "Гуам",
  "Дания",
  "Джерси",
  "Джибути",
  "Доминика",
  "Доминиканская Республика",
  "Египет",
  "Замбия",
  "Западная Сахара",
  "Зимбабве",
  "Израиль",
  "Индия",
  "Индонезия",
  "Иордания",
  "Ирак",
  "Иран",
  "Ирландия",
  "Исландия",
  "Испания",
  "Италия",
  "Йемен",
  "Кабо-Верде",
  "Казахстан",
  "Каймановы Острова",
  "Камбоджа",
  "Камерун",
  "Канада",
  "Катар",
  "Кения",
  "Кипр",
  "Кирибати",
  "Китай",
  "Кокосовые Острова",
  "Колумбия",
  "Коморские Острова",
  "Конго",
  "Демократическая Республика",
  "Северная Корея",
  "Южная Корея",
  "Косово",
  "Коста-Рика",
  "Кот-д'Ивуар",
  "Куба",
  "Кувейт",
  "Кука острова",
  "Кыргызстан",
  "Лаос",
  "Латвия",
  "Лесото",
  "Либерия",
  "Ливан",
  "Ливия",
  "Литва",
  "Лихтенштейн",
  "Люксембург",
  "Маврикий",
  "Мавритания",
  "Мадагаскар",
  "Майотта",
  "Македония",
  "Малави",
  "Малайзия",
  "Мали",
  "Мальдивы",
  "Мальта",
  "Мартиника",
  "Маршалловы Острова",
  "Мексика",
  "Микронезия",
  "Мозамбик",
  "Молдова",
  "Монако",
  "Монголия",
  "Монтсеррат",
  "Морокко",
  "Мьянма",
  "Нагорно-Карабахская Республика",
  "Намибия",
  "Науру",
  "Непал",
  "Нигер",
  "Нигерия",
  "Нидерланды",
  "Никарагуа",
  "Ниуэ",
  "Новая Зеландия",
  "Новая Каледония",
  "Норвегия",
  "Норфолк",
  "Объединенные Арабские Эмираты",
  "Оман",
  "Остров Мэн",
  "Остров Рождества",
  "Остров Святой Елены",
  "Острова Уоллис и Футуна",
  "Острова Херд и Макдональд",
  "Пакистан",
  "Палау",
  "Палестина",
  "Панама",
  "Папуа — Новая Гвинея",
  "Парагвай",
  "Перу",
  "Питкэрн",
  "Польша",
  "Португалия",
  "Приднестровье",
  "Пуэрто-Рико",
  "Республика Конго",
  "Реюньон",
  "Россия",
  "Руанда",
  "Румыния",
  "Сальвадор",
  "Самоа",
  "Сан-Марино",
  "Сан-Томе и Принсипи",
  "Саудовская Аравия",
  "Свазиленд",
  "Свальбард",
  "Северные Марианские острова",
  "Сейшельские острова",
  "Сен-Пьер и Микелон",
  "Сенегал",
  "Сент-Винсент и Гренадины",
  "Сент-Киттс и Невис",
  "Сент-Люсия",
  "Сербия",
  "Сингапур",
  "Сирия",
  "Словакия",
  "Словения",
  "Соединенные Штаты Америки",
  "Соломоновы Острова",
  "Сомали",
  "Сомалиленд",
  "Судан",
  "Суринам",
  "Сьерра-Леоне",
  "Таджикистан",
  "Таиланд",
  "Тайвань",
  "Тамил-Илам",
  "Танзания",
  "Тёркс и Кайкос",
  "Того",
  "Токелау",
  "Тонга",
  "Тринидад и Тобаго",
  "Тувалу",
  "Тунис",
  "Турецкая Республика Северного Кипра",
  "Туркменистан",
  "Турция",
  "Уганда",
  "Узбекистан",
  "Украина",
  "Уругвай",
  "Фарерские Острова",
  "Фиджи",
  "Филиппины",
  "Финляндия",
  "Фолклендские (Мальвинские) острова",
  "Франция",
  "Французская Полинезия",
  "Французские Южные и Антарктические Территории",
  "Хорватия",
  "Центральноафриканская Республика",
  "Чад",
  "Черногория",
  "Чехия",
  "Чили",
  "Швейцария",
  "Швеция",
  "Шри-Ланка",
  "Эквадор",
  "Экваториальная Гвинея",
  "Эритрея",
  "Эстония",
  "Эфиопия",
  "Южная Георгия и Южные Сандвичевы острова",
  "Южная Осетия",
  "Южно-Африканская Республика",
  "Ямайка",
  "Япония",
];

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

  useEffect(() => {
    console.log(searchParams);
  }, [searchParams]);

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
