import React from "react";
import Avatar from "../images/avatar.png";
import styled from "styled-components";
import Estrela from "../images/estrela.png";
import Logo from "../images/logo.png";
import Icon from "../images/icon.png";
import { AiFillCaretRight } from "react-icons/ai";
import { GiFilmStrip } from "react-icons/gi";

const MainContainer = styled.main`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    url(${Avatar});
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  background-size: cover;
  background-position: center;
`;
const Header = styled.header`
  width: 100%;
  height: 9vh;
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  img {
    height: 40px;
    width: 100px;
    position: relative;
    top: 10%;
    left: 2%;
  }
`;

const Text = styled.a`
  display: flex;
  color: white;
  position: relative;
  left: 35%;
  gap: 1.5em;
  button {
    color: white;
    width: 8em;
    height: 2.3em;
    border: none;
    border-radius: 20px;
    background-color: #747474;
    letter-spacing: 0.1em;
    font-size: 15px;
    position: relative;
    top: 19%;
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  p {
    font-size: 17px;
    position: relative;
    top: 23%;
    cursor: pointer;
  }
`;

const TextOne = styled.a`
  display: flex;
  color: white;
  font-size: 17px;
  position: relative;
  left: 62%;
  top: 23%;
  gap: 1.4em;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    position: relative;
    top: -0.5px;
  }
`;
const MainContent = styled.div`
  display: flex;
  position: relative;
  top: 37%;
  left: 9%;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  height: 40vh;
  color: #f6f6f6;

  p {
    width: 60%;
    font-size: 1.1rem;
    margin-bottom: 1em;
  }
  h2 {
    font-size: 33px;
    margin-bottom: 0.1em;
  }

  h6 {
    margin-bottom: 0.1em;
  }
`;

const EstrelaDiv = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  margin-bottom: 0.1em;

  button {
    border: none;
    background: none;
    margin-right: 1em;
  }
`;
const ButtonDiv = styled.div``;
const ButtonAssistir = styled.button`
  width: 12vw;
  height: 6.5vh;
  border-radius: 20px;
  border: none;
  background: #d53a00;
  color: #f6f6f6;
  padding-bottom: 0.8em;
  font-size: 15px;
  .iconeStyle {
    position: relative;
    top: 7px;
    left: -9px;
  }
`;
const ButtonTrailer = styled.button`
  width: 12vw;
  height: 6.5vh;
  font-size: 15px;
  border-radius: 20px;
  border: none;
  background: #717171;
  font-size: 16px;
  color: #f6f6f6;
  margin-left: 5px;
  padding-bottom: 0.5em;
  .iconeStyle {
    position: relative;
    top: 6px;
    left: -10px;
  }
`;

export default function Main() {
  return (
    <MainContainer>
      <Header>
        <img src={Logo} alt="Logo" />
        <Text>
          <p>Séries</p>
          <button>Filmes</button>
        </Text>
        <TextOne>
          <img src={Icon} alt="Pesquisa" />
          <p>Filtro</p>
          <p>Login</p>
        </TextOne>
      </Header>
      <MainContent>
        <h2> Avatar: o Caminho da Água </h2>
        <h6>3hr 23 min | Fantasia, Família | 2023 </h6>
        <EstrelaDiv>
          <button>
            <img src={Estrela} alt="estrela" />
          </button>
          <h4> 9.0/10 </h4>
        </EstrelaDiv>
        <p>
          Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
          ficarem juntos. No entanto, eles devem sair de casa e explorar as
          regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
          travar uma guerra difícil contra os humanos.{" "}
        </p>
        <ButtonDiv>
          <ButtonAssistir>
            {" "}
            <AiFillCaretRight size={23} className="iconeStyle" />
            Assitir Agora{" "}
          </ButtonAssistir>
          <ButtonTrailer>
            {" "}
            <GiFilmStrip size={23} className="iconeStyle" /> Trailer{" "}
          </ButtonTrailer>
        </ButtonDiv>
      </MainContent>
    </MainContainer>
  );
}
