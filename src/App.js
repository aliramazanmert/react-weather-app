import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import "./App.css";

import WeatherCard from "./components/WeatherCard";
import Container from "./components/Container";
import { MainTable, Background } from "./components/Container/styles";

import WeatherDetails from "./pages/WeatherDetails";

function App() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const daysInWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const handleWeatherData = (data) => {
      data.slice(0, 6).forEach((element) => {
        let date = new Date(element.dt * 1000);
        setCardData((prevState) => [
          ...prevState,
          {
            id: prevState.length + 1,
            day: daysInWeek[date.getDay()],
            dayTemp: Number(element.temp.day.toFixed(0)),
            nightTemp: Number(element.temp.night.toFixed(0)),
            icon: element.weather[0].icon,
            path: `/${daysInWeek[date.getDay()]}`,
          },
        ]);
      });
    };
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=39.92&lon=32.83&exclude=minutely,hourly,current&units=metric&appid=9373ead9d30fbc2e4f4840187b132942"
    )
      .then((response) => response.json())
      .then((data) => handleWeatherData(data.daily));
  }, []);

  return (
    <Router>
      <Container>
        {cardData.map((card) => (
          <WeatherCard
            key={card.id}
            id={card.id}
            day={card.day}
            icon={card.icon}
            dayTemp={card.dayTemp}
            nightTemp={card.nightTemp}
          />
        ))}
      </Container>
      <Background>
        <MainTable>
          <Switch>
            <Route path="/monday">
              <WeatherDetails day={"Monday"} />
            </Route>
            <Route path="/tuesday">
              <WeatherDetails day={"Tuesday"} />
            </Route>
            <Route path="/wednesday">
              <WeatherDetails day={"Wednesday"} />
            </Route>
            <Route path="/thursday">
              <WeatherDetails day={"Thursday"} />
            </Route>
            <Route path="/friday">
              <WeatherDetails day={"Friday"} />
            </Route>
            <Route path="/saturday">
              <WeatherDetails day={"Saturday"} />
            </Route>
            <Route path="/sunday">
              <WeatherDetails day={"Sunday"} />
            </Route>
            <Route path="/">
              <div></div>
            </Route>
            <Redirect to="/" />
          </Switch>
        </MainTable>
      </Background>
    </Router>
  );
}

export default App;
