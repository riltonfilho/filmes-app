import { FC } from "react";
import Link from "react-router-dom";
import * as S from "./styled";

import Search from "components/Search";

const Index: FC = () => {
  return (
    <S.Container>
      <h1>Movies</h1>
      <Search />
    </S.Container>
  );
};
export default Index;
