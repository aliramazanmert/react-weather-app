import styled from "styled-components";

export const WeatherCardContainer = styled.div`
  padding: 4px;
  margin-left: 2px;
  margin-right: 2px;

  height: 75px;
  width: 150px;

  border-radius: 25px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.09);

  background-color: cornflowerblue;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TextContainer = styled.p`
  margin: 0;
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  color: white;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 80%;
`;

export const WeatherContainer = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-height: 80%;
  width: 100%;
`;
