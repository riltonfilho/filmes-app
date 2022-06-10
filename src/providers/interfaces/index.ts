import React from "react";

export interface PropsContext {
  children: React.ReactNode;
}

export interface Movie {
  title: string;
}

export interface PropsMovieContext {
  movie: Movie;
  setMovie: React.Dispatch<React.SetStateAction<Movie>>;
}
