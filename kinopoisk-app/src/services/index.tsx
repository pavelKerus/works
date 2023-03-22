export const moviesResponse = (numberOfMovies: number, page: number) => {
  const URL = `https://api.kinopoisk.dev/v1/movie?page=${page}&limit=${numberOfMovies}`;
  const request = new Request(URL, {
    method: "GET",
    headers: {
      "X-API-KEY": "9DZ30QM-EDH406P-PWM0GFW-Q34DNX1",
    },
  });
  
  return fetch(request)
    .then((response) => response.json())
};

export const moviesResponseById = (id:string | undefined):Promise<any> => {
  const URL = `https://api.kinopoisk.dev/v1/movie/${id}`;
  const request = new Request(URL, {
    method: "GET",
    headers: {
      "X-API-KEY": "9DZ30QM-EDH406P-PWM0GFW-Q34DNX1",
    },
  });
  
  return fetch(request)
    .then((response) => response.json())
};
