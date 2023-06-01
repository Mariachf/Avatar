import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import styled from "styled-components";

const SliderBox = styled.section`
  height: 100vh;
  background: black;
  border: 2px white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;
  padding: 3em;
  margin-top: -2em;

  img {
    width: 10em;
    height: 17em;
    margin-left: 5%;
  }

  p {
    margin-top: 1em;
    margin-left: 0.9em;
    font-size: 15px;
  }
`;

const SliderOne = styled.h3`
  color: white;
  background: black;

  h3 {
    position: relative;
    top: 3em;
    left: 6.5em;
    width: 80%;
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  return (
    <SliderOne>
      <h3>Últimos lançamentos</h3>
      <SliderBox>
        <Slider {...settings} style={{ width: "90%" }}>
          {filmes.map((item) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
                style={{ width: "90%" }}
              />
              <p>{item.title} </p>
            </div>
          ))}
        </Slider>
      </SliderBox>
    </SliderOne>
  );
}
