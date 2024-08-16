import React from "react";
import './Weather.css'




export function WeatherCard({ img, temp, weather, city }) {


    return (
        <>
            <div className={`card bg-${weather}`}>
                <img className="cardimg" src={img}></img>
                <h1 className="temp">{temp} </h1>
                <h2 className="temp">{weather} </h2>
                <h3 className="temp">{city} </h3>


            </div>
        </>
    )
}