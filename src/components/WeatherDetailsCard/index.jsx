import React from 'react'
import {
    WeatherCardContainer,
    TextContainer,
    Image,
    WeatherContainer,
} from "./styles";

const WeatherDetailsCard = (props) => {
    return (
        <WeatherCardContainer>
            <TextContainer isTemp={true}>
                {props.time}
            </TextContainer>
            <WeatherContainer>
                <Image
                    src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather"
                />
                <TextContainer>
                    {`${props.temp}°C`}
                </TextContainer>
            </WeatherContainer>
        </WeatherCardContainer>

    )
}

export default WeatherDetailsCard;
