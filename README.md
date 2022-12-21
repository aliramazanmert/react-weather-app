# Weather App

Visualizes the current weather in your location and shows the weather forecast up to 3 days. Location retrieval by IP address is supported if your browser doesn't support geolocation services or you disabled them.

## Before you run

Add an .env file to the root of the project with your api keys from
https://www.weatherapi.com/
https://geolocation-db.com/

as the following:

    REACT_APP_WEATHER_API_KEY=<your-secret-weather-api-key>
    REACT_APP_GEOLOCATION_DB_API_KEY=<your-secret-geolocation-db-api-key>

## How to run

In the project directory, you first run:

### `yarn install`

After the npm packages are installed, you then run:

### `yarn start`

Runs the app in the development mode.<br  />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
