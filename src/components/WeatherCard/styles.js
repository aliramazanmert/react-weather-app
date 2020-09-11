import styled from "styled-components";

export const WeatherCardContainer = styled.div`
  padding: 4px;
  margin: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: skyblue;

  border-style: solid;
  border-radius: 25px;
  border-color: lightblue;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.09);

  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &.active {
    -moz-box-shadow: inset 0 0 2px #000000;
    -webkit-box-shadow: inset 0 0 2px #000000;
    box-shadow: inset 0 0 2px #000000;
    transform: scale(1.1);
    border-color: black;
  }
`;

export const TextContainer = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  ${(props) =>
    props.isTemp &&
    `
  font-weight: normal;
  `}
`;

export const ImageContainer = styled.div`
  margin: 0px;
  padding: 0px;
  > img {
    width: 80px;
    height: 80px;
  }
`;
