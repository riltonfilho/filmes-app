import styled from "styled-components";
import { Link } from "react-router-dom";
interface props {
  image?: string;
  backgroundColor?: string;
  gradienteColor?: string;
  color?: string;
}
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  padding: 1rem;
`;

export const Card = styled.div<props>`
  /* background-color: red; */
  color: ${(p) => p.color};
  display: flex;
  flex-direction: column;
  height: 420px;
  width: 300px;
  overflow: hidden;
  margin: 10px;
  border-radius: 8px;
`;

export const CardHeader = styled.div`
  /* background-color: yellow; */
  height: 230px;
  width: inherit;
  overflow: hidden;
`;

export const CardImage = styled.div<props>`
  height: inherit;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to bottom,
      ${(p) => p.gradienteColor + "1f"} 30%,
      ${(p) => p.gradienteColor + "fe"} 90%
    ),
    url("${(p) => p.image}");
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const CardFooter = styled.div<props>`
  background-color: ${(p) => p.backgroundColor};
  height: 190px;
  width: inherit;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  overflow: hidden;
  p {
    font-size: 0.9rem;
    text-align: justify;
    word-break: break-word;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 4; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }
  h3 {
    text-align: left;
    font-size: 0.98rem;
  }
  h4 {
    font-style: oblique;
    text-align: left;
    font-size: 0.8rem;
    padding-bottom: 5px;
    font-weight:300
  }
  code {
    font-size: 0.8rem;
  }
`;
export const Stamp = styled.div<props>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5px;

  span {
    font-size: 1rem;
    margin-right: 5px;
    vertical-align: middle;
  }

  h2 {
    font-size: 1rem;
    vertical-align: middle;
  }
`;
export const StyledLink = styled(Link)`

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;