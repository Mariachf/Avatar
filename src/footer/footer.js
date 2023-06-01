import React from "react";
import styled from "styled-components";

export const FooterStyle = styled.footer`
  height: 5em;

  color: white;
  background-color: black;

  h5 {
    width: 2.8em;
    height: 2.8em;
    padding-top: 7px;
    text-align: center;
    border: 1px solid white;
    border-radius: 50%;
    transition: 1s;

    &:hover {
      color: black;
      background-color: white;
    }
  }

  p {
    padding-top: 0.9em;
    letter-spacing: 2px;
  }

  button {
    width: 4em;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 5px;
    margin-left: 2px;
    transition: 1s;
    &:hover {
      color: black;
      background-color: white;
    }
  }
`;

export const Contaner = styled.div`
  justify-content: center;
  display: flex;
  gap: 0.4em;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <Contaner>
        <h5>1</h5>
        <h5>2</h5>
        <h5>3</h5>
        <h5>4</h5>
        <p>...</p>
        <h5>322</h5>
        <button>último</button>
      </Contaner>
    </FooterStyle>
  );
}
