import styled from "styled-components";
import { Icono } from "../../index";

export function Btnsave({
  funcion,
  titulo,
  bgcolor,
  textcolor,
  icono,
  url,
}) {
  return (
    <Container type="submit" $bgcolor={bgcolor} $textcolor={textcolor}>
      <Icono>{icono}</Icono>
      <span className="btn" onClick={funcion}>
        <a href={url} target="_blank">
          {titulo}
        </a>
      </span>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  gap: 10px;
  background-color: initial;
  z-index: 2;

  .btn {
    background: ${(props) => props.$bgcolor};
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em #000;
    transition: 0.2s;
    white-space: 1px;
    color: ${(props) => props.$textcolor};

    a {
      text-decoration: none;
      color: ${(props) => props.$textcolor};
    }

    cursor: pointer;

    &:hover {
      transform: translate(-0.05em, -0.05em);
      box-shadow: 0.15em 0.15em #000;
    }

    &:active {
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.05em 0.05em #000;
    }
  }
`;
