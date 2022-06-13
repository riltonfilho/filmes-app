import styled from "styled-components";

export const Container = styled.div`
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  margin: 1rem;
`;
export const ContainerSearchLeft = styled.div`
  background-color: #4a4a4a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  height: inherit;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`;
export const ContainerSearch = styled.div`
  background-color: #4a4a4a;
  display: flex;
  min-width: 190px;
  width: 620px;
  height: inherit;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  background-color: transparent; 
  width: inherit;
  height: inherit;
  text-align: left;
  font-size: 1.2rem;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  color: #fcfcfc;
  &::placeholder {
    color: #c2c2c2;
  }
`;

export const ContainerSearchRight = styled.div`
  background-color: #0078d4;
  display: flex;
  justify-content: center;
  min-width: 70px;
  width: auto;
  height: inherit;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  overflow: hidden;
`;

export const Button = styled.button`
  background-color: transparent;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #006cbe;
  }
`;
