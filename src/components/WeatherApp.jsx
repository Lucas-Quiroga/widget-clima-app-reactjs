import React, { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import styles from "./weatherApp.module.css";
import Loading from "./Loading";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // cuando nuestra aplicación se inicie haga una llamada a una ciudad por defecto
    loadInfo();
  }, []);

  useEffect(() => {
    //cambiamos el titulo de la pestaña al nombre de la ciudad en la que hacemos la llamada, siempre y cuando no sea "null"
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  //hacemos una solicitud http para obtener la información de nuestra api
  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&Q=${city}`
      );

      const json = await request.json();

      setTimeout(() => {
        setWeather(json);
      }, 2000);
    } catch (error) {}
  }

  const handleChangeCity = (city) => {
    //pasamos el estado a nada y llamamos a la funcion load info con el parametro de la ciudad que queremos
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
};

export default WeatherApp;
