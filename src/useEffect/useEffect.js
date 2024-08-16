import React, { useEffect, useState } from "react";
export function Basic() {

    const [number, setNumber] = useState(10)
    const [color, setColor] = useState("Red")


    function Change() {
        setNumber(number * 2)
    }

    function Pink() {
        setColor("Pink")
    }

    useEffect(
        () => {
            console.log(" Changes is success")
        }, [number]
    )
    useEffect(
        () => {
            console.log("color is change")
        }, [color]
    )


    return (
        <>
            <h1 onClick={Change}>{number}</h1>
            <h2 onClick={Pink}>{color}</h2>
        </>
    )
}