import React, { useEffect, useState } from "react";
import "./css/style.css";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setsearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fffd9a0dd2181e6a5ff534c80752177d`;
      const response = await fetch(url);
      const resjson = await response.json();
      // console.log(resjson);
      setCity(resjson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>no data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempin_max">Min:{city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            <h2>Humidity:{city.temp_humidity}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default TempApp;
