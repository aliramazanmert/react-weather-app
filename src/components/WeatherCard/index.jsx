import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { WeatherCardContainer, TextContainer, ImageContainer } from "./styles";

const WeatherCard = (props) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <WeatherCardContainer
      className={`/${props.day}` === location.pathname && "active"}
      onClick={() => {
        history.push(`/${props.day}`);
      }}
    >
      <TextContainer>{props.id === 1 ? "Today" : props.day}</TextContainer>
      <ImageContainer>
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="weather"
        />
      </ImageContainer>
      <TextContainer isTemp={true}>
        {`${props.dayTemp}°C /  ${props.nightTemp}°C`}
      </TextContainer>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
