import React from "react";
import styled from "styled-components";
import Icon from "../images/icon.png";

const Letreiro = styled.div`
  background-color: #000000;
  width: 100%;
`;

const Text = styled.a`
  color: white;
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
  width: 80%;
  margin-left: 10%;
  gap: 2em;

  p {
    transition: 1s ease-in-out;
    &:hover {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  img {
    width: 50px;
    height: 50px;
    position: relative;
    top: -0.6em;
  }
`;

export default function Main() {
  return (
    <Letreiro>
      <Text>
        <p>Popular</p>
        <p>Drama</p>
        <p>Ação</p>
        <p>Aventura</p>
        <p>Comédia</p>
        <p>Crime</p>
        <p>Fantasia</p>
        <p>Família</p>
        <img src={Icon} alt="Pesquisa" />
      </Text>
    </Letreiro>
  );
}
