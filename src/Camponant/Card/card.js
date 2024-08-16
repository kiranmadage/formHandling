import React from "react";
import './card.css'



export function Cards({ img, name, price, size,city }) {

    return (
        <>
            <div className={`maincard bg-${name}`}>
                <img className="img" src={img}></img>
                <h1 className="text">{name}</h1>
                <h2 className="text">{price}</h2>
                <h3 className="text">{size}</h3>
                <h3 className="text">{city}</h3>


            </div>
        </>
    )
}