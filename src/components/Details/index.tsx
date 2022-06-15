import { FC, useState, useEffect } from "react";
import * as Service from "services";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import { Link } from "react-router-dom";

interface IFilme {
  title: string;
  image: string;
  sinopse: string;
}
const filme: IFilme = {
  title: "",
  sinopse: "",
  image: "",
};

const Index: FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IFilme>(filme);
  const IMAGE_BASE = `https://image.tmdb.org/t/p/original/`;

  useEffect(() => {
    id &&
      Service.movieDetailFetch(id).then((data) => {
        const { title, backdrop_path, overview } = data;
        const movie = {
          title,
          image: `${IMAGE_BASE}${backdrop_path}`,
          sinopse: overview,
        };
        setMovie(movie);
      });
  }, []);

  return (
    <S.Container>
      <S.CardImage image={movie.image}>
        <h3>{movie.title}</h3>
        <p>{movie.sinopse}</p>
       
          <S.StyledLink to={"/"}> Voltar </S.StyledLink>
       
      </S.CardImage>
    </S.Container>
  );
};
export default Index;
