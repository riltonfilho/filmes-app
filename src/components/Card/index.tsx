import { FC, useState, useEffect } from "react";
import { useMovie } from "providers";
import movieFetch from "services/apiMovie";
import * as S from "./styled";
import Color from "color-thief-react";
import * as Service from "services";

import { SiThemoviedatabase } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

interface IFilme {
  backdrop_path: string;
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: string;
  vote_count: string;
}

const Index: FC = () => {
  const IMAGE_BASE = `https://image.tmdb.org/t/p/w200`;
  const NO_IMAGE_BASE = Service.noPicture();
  const [resp, setResp] = useState<IFilme[]>([]);
  const { movie } = useMovie();
  const { title } = movie;
  
  useEffect(() => {
    title && movieFetch(title).then((data) => setResp(data));
  }, [title]);

  return (
    <S.Container>
      {resp.map((res) => {
        const { id, poster_path, overview, original_title, release_date } = res;
        return (
          <Color
            key={id}
            src={poster_path ? `${IMAGE_BASE}${poster_path}` : NO_IMAGE_BASE}
            crossOrigin="anonymous"
            format="hex"
          >
            {({ data }) => {
              return (
                <S.StyledLink to={`/detail/${id}`}>
                  <S.Card color={Service.colorSaturation(`${data}`)}>
                    <S.CardHeader>
                      <S.CardImage
                        gradienteColor={`${data}`}
                        image={
                          poster_path
                            ? `${IMAGE_BASE}${poster_path}`
                            : NO_IMAGE_BASE
                        }
                      ></S.CardImage>
                    </S.CardHeader>

                    <S.CardFooter backgroundColor={`${data}`}>
                      <S.Stamp>
                        <div>
                          <h2>
                            <span>
                              <AiFillStar />
                            </span>
                            {res.vote_average}
                          </h2>
                        </div>

                        <div>
                          <h2>
                            <span>
                              <SiThemoviedatabase />
                            </span>
                            {res.id}
                          </h2>
                        </div>
                      </S.Stamp>

                      <h3>{original_title}</h3>

                      <h4>
                        <code>({Service.dataBR(release_date)}) </code>
                        {res.title}
                      </h4>

                      <p>{overview ? overview : `(...)`}</p>
                    </S.CardFooter>
                  </S.Card>
                </S.StyledLink>
              );
            }}
          </Color>
        );
      })}
    </S.Container>
  );
};
export default Index;
