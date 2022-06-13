import { FC } from "react";
import * as S from "./styled";

import Search from "components/Search";
import Card from "components/Card";


const Index: FC = () => {
  return (
    <S.Container>
      <h1>Movies</h1>
      <Search />
      <Card />
    </S.Container>
  );
};
export default Index;
