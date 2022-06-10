import { FC, useState } from "react";
import lupa from "assets/search_icon.svg";
import camera from "assets/search_icon_movie.svg";
import * as S from "./styled";
import { useMovie } from "providers";

const Index: FC = () => {
  const { setMovie }: any = useMovie();
  const [input, setInput] = useState({ title: "" });

  const handleSearch = () => {
    setMovie(input);
  };

  return (
    <S.Container>
      <S.ContainerSearchLeft>
        <img src={camera} alt="Camera" />
      </S.ContainerSearchLeft>
      <S.ContainerSearch>
        <S.Input
          type="text"
          placeholder="Digite o nome"
          onChange={(e) => setInput({ title: e.target.value })}
          required
        />
      </S.ContainerSearch>
      <S.ContainerSearchRight>
        <S.Button type="button" onClick={handleSearch}>
          <img src={lupa} alt="Search" />
        </S.Button>
      </S.ContainerSearchRight>
    </S.Container>
  );
};
export default Index;
