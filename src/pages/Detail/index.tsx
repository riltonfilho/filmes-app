import { FC } from "react";
import * as S from "./styled";
import { useParams } from "react-router-dom";

const Index: FC = () => {
  const params =useParams()
  console.log(params.id)
  return (
    <S.Container>
      <h1>Detail</h1>
    </S.Container>
  );
};
export default Index;
