import React, { useState } from "react";

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  //   cada vez que haya un cambio vas a actualizar nuestro
  const onChange = (e) => {
    const value = e.target.value;

    if (value !== "") {
      // nos aseguramos de que haya un cambio y actualizamos el estado
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //mandamos a llamar a la prop, con el valor de la ciudad que llamemos
    onChangeCity(city);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onChange} />
    </form>
  );
};

export default WeatherForm;
