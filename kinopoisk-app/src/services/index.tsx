import { SearchParamsState } from "../reduxTools/search/actions";

const TOKEN = "J4CFV29-VPKM86G-HKP5VWK-76KQMMC";

export const moviesResponse = (numberOfMovies: number, page: number) => {
  const URL = `https://api.kinopoisk.dev/v1/movie?page=${page}&limit=${numberOfMovies}`;
  const request = new Request(URL, {
    method: "GET",
    headers: {
      "X-API-KEY": TOKEN,
    },
  });

  return fetch(request).then((response) => response.json());
};

export const top250Response = (limit: number, page: number) => {
  const URL = `https://api.kinopoisk.dev/v1/movie?page=${page}&limit=${limit}&top250=!null`;
  const request = new Request(URL, {
    method: "GET",
    headers: {
      "X-API-KEY": TOKEN,
    },
  });

  return fetch(request).then((response) => response.json());
};

export const moviesResponseById = (id: string | undefined): Promise<any> => {
  const URL = `https://api.kinopoisk.dev/v1/movie/${id}`;
  const request = new Request(URL, {
    method: "GET",
    headers: {
      "X-API-KEY": TOKEN,
    },
  });

  return fetch(request).then((response) => response.json());
};

export const searchMoviesResponse = (
  params: SearchParamsState,
  page: number = 1,
  limit: number = 10
) => {
  const { sortBy, yearsFrom, yearsTo, ratingFrom, ratingTo, value } = params;
  let URL = `https://api.kinopoisk.dev/v1/movie?sortField=${sortBy}&page=${page}&limit=${limit}`;

  if (value !== null && value !== "") {
    URL += `&name=${value}`;
  }

  while (true) {
    if (yearsFrom && yearsTo) {
      URL += `&year=${yearsFrom}-${yearsTo}`;
      break;
    } else if (yearsFrom) {
      URL += `&year=${yearsFrom}-3000`;
      break;
    } else if (yearsTo) {
      URL += `&year=0-${yearsTo}`;
      break;
    } else {
      break;
    }
  }

  while (true) {
    if (ratingFrom && ratingTo) {
      URL += `&rating.kp=${ratingFrom}-${ratingTo}`;
      break;
    } else if (ratingFrom) {
      URL += `&rating.kp=${ratingFrom}-10`;
      break;
    } else if (ratingTo) {
      URL += `&rating.kp=0-${ratingTo}`;
      break;
    } else {
      break;
    }
  }

  console.log(URL);
  const request = new Request(URL, {
    method: "GET",
    headers: {
      "X-API-KEY": TOKEN,
    },
  });

  return fetch(request).then((response) => response.json());
};

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const URL = "https://studapi.teachmeskills.by/auth/users/";
  const request = new Request(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const response = await fetch(request);
  const result = await response.json();
  return {
    ok: response.ok,
    status: response.status,
    data: result,
  };
  // return fetch(request).then((res) => res.json());
};

export const activateUser = async (uid: string, token: string) => {
  const URL = "https://studapi.teachmeskills.by/auth/users/activation/";
  const request = new Request(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid,
      token,
    }),
  });

  const response = await fetch(request);
  // const result = await response.json();
  const result = await (response.ok ? Promise.resolve(null) : response.json());
  return {
    ok: response.ok,
    status: response.status,
    data: result,
  };
  // return fetch(request).then((res) => res.json());
};

export const getTokensUser = async (email: string, password: string) => {
  const URL = "https://studapi.teachmeskills.by/auth/jwt/create/";
  const request = new Request(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const response = await fetch(request);
  console.log(response);
  const result = await response.json();
  console.log(result);
  return {
    ok: response.ok,
    status: response.status,
    data: result,
  };
};

export const fetchRefreshToken = async (refreshToken: string) => {
  const url = "https://studapi.teachmeskills.by/auth/jwt/refresh/";
  const params = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      refresh: refreshToken,
    }),
  };
  const request = new Request(url, params);

  const response = await fetch(request);
  const result = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    data: result,
  };
};

export const getUser = async (token: string) => {
  const url = "https://studapi.teachmeskills.by/auth/users/me/";
  const params = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const request = new Request(url, params);
  const response = await fetch(request);
  const result = await response.json();
  return {
    ok: response.ok,
    status: response.status,
    data: result,
  };
};
