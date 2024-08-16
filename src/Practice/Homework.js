import React from "react";
import img1 from "./butterfly (1).png"
import img from "./butterfly.png"
import './Home.css'

export function Butterfly() {
    function Fly() {
        document.getElementById("img1").src = img1

    }

    function Down() {
        document.getElementById("img1").src = img 

    }
    return (
        <>
        <img id="img1" className="img1" src={img1}></img>
            <button onClick={Fly}>Fly</button>


            <button onClick={Down}>Down</button>

        </>
    )
}