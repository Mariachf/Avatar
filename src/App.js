import Main from "./main/index";
import { createGlobalStyle } from "styled-components";
import Letreiro from "./letreiro/letreiro";
import Carousel from "./carousel/carousel";
import Filme from "./filmes/filmes";
import Footer from "./footer/footer";

//reset
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
      <Letreiro />
      <Carousel />
      <Filme />
      <Footer />
    </>
  );
}
//https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1
