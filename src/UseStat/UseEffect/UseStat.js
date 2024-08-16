import React, { useState } from "react";

export function Home() {

    let [color, setColor] = useState('pink')



    function Change() {
        setColor("Blue")

    }

    const [Increment, setIncrement] = useState(1)
    function Increase() {
         setIncrement(Increment + 1)

    }
    return (
        <>
            <h1>{color}</h1>
            <button onClick={Change}> Change</button>


            <h1>{Increment}</h1>
            <button onClick={Increase}>Increment</button>
        </>
    )
}