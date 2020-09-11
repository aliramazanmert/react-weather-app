import React, { useState, useEffect } from 'react'


import WeatherDetailsCard from '../../components/WeatherDetailsCard';

import { HourlyCardsContainer, DetailsContainer, Spinner } from './styles';

const WeatherDetails = (props) => {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCardData([]);
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const handleHourlyWeatherData = (data) => {
      const hourlyData = data.filter((element) => {
        let date = new Date(element.dt * 1000);
        return daysInWeek[date.getDay()] === props.day;
      })
      hourlyData.forEach(element => {
        let date = new Date(element.dt * 1000);
        setCardData(prevState => [
          ...prevState,
          {
            id: prevState.length + 1,
            time: `${date.getHours()}:${date.getMinutes()}0`,
            temp: Number((element.main.temp).toFixed(0)),
            icon: element.weather[0].icon,
          }
        ]);
      });
    }
    setIsLoading(true);
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Ankara&units=metric&appid=bbff5fdfaa703dc86d0c5ec00333fa24')
      .then(response => response.json())
      .then(data => {
        handleHourlyWeatherData(data.list);
        setIsLoading(false);
      });
  }, [props.day]);

  return (
    (isLoading ?
      <DetailsContainer>
        <Spinner />
      </DetailsContainer> :
      <DetailsContainer>
        <h1>{props.day}</h1>
        <HourlyCardsContainer>
          {
            cardData.map(card =>
              <WeatherDetailsCard
                key={card.id}
                time={card.time}
                icon={card.icon}
                temp={card.temp}
              />
            )
          }
        </HourlyCardsContainer>
      </DetailsContainer>
    )
  );
}

export default WeatherDetails;
