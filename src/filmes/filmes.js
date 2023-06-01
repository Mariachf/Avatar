import React, { useState, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";

const FilmeBox = styled.section`
  width: 100%;
  background-color: black;
  color: white;

  h3 {
    margin-left: 7em;
  }
`;
const Filme = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1em;
  margin-left: 7.9em;
  margin-top: 1em;

  img {
    width: 12em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin-top: 2em;
  }
  p {
    width: 84%;
    height: 5em;

    font-size: 12px;
  }
`;

export default function Carousel() {
  const [filmes, setFilmes] = useState([]);

  const getApi = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1"
      )
      .then((response) => {
        setFilmes(response.data.results);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <FilmeBox>
      <h3>Em alta</h3>
      <Filme>
        {filmes.map((item) => (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              alt={item.title}
            />
            <p>{item.title} </p>
          </div>
        ))}
      </Filme>
    </FilmeBox>
  );
}
