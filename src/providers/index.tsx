import React, { useState, useContext } from "react";
import * as Interfaces from "providers/interfaces";
import * as Values from "providers/values";

const AuthContext = React.createContext<Interfaces.PropsMovieContext>(
  Values.DEFAULT_VALUE_MOVIE
);

export const MovieProviders = ({ children }: Interfaces.PropsContext) => {
  const [movie, setMovie] = useState(Values.INITIAL_VALUE_MOVIE);
  const CONTEXT_VALUE = {
    movie,
    setMovie,
  };
  return (
    <AuthContext.Provider value={CONTEXT_VALUE}>
      {children}
    </AuthContext.Provider>
  );
};
export const useMovie = () => useContext(AuthContext);
