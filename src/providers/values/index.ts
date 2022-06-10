import * as Interfaces from "providers/interfaces";

export const BASE_URL_MOVIE = `https://api.`;
export const BASE_URL_DETAILS = `https://api.`;

export const OPTIONS = {
  method: "GET",
  headers: { "Content-Type": "application/json;charset=utf-8" },
};

export const DEFAULT_VALUE_MOVIE = {
  movie: {
    title: "",
  },
  setMovie: () => {}, 
};

export const INITIAL_VALUE_MOVIE: Interfaces.Movie = {
  title: "",
};

