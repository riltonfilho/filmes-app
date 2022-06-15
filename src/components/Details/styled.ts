import styled from "styled-components";
import { Link } from "react-router-dom";
interface props {
  image?: string;
  backgroundColor?: string;
  gradienteColor?: string;
  color?: string;
}
export const Container = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
`;
export const CardImage = styled.div<props>`
  display: flex;

  flex-direction: column;
  text-align: right;
  align-items: flex-start;
  justify-content: start;
  background-image: linear-gradient(to top, #000000 10%, transparent 90%),
    linear-gradient(to right, #000000 30%, transparent 70%),
    url("${(p) => p.image}");
  background-position: center;
  background-size: cover;
  height: inherit;
  width: 100%;
  h3 {
    font-size: 3rem;
    margin: 2rem;
  }
  p {
    margin: 2rem;
    text-align: left;
    max-width: 40%;
    font-size: 1.2rem;
    font-weight: bold;
  }
  div {
    font-size: 20px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #fcfcfc;
    color: #000000;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  margin: 2rem;
  margin-right: 10px;
  background-color: #fcfcfc;
  color: #000000;
  text-decoration: none;
  opacity: 1;
  transition: all ease 0.2s;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    &:hover {
      opacity: 0.7;
    }
  }
`;
