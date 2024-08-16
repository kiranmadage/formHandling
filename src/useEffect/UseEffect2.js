import React, { useEffect, useState } from "react";




export function User() {
    let [num, setNum] = useState(1)

    function Changes() {
        setNum(num + 1)
    }

    useEffect(
        () => {
            if (num > 10)
                alert("Number is incresing")

            console.log("Using useEffect Function")

        }, [num]

    )



    return (
        <>
            <h1 onClick={Changes}>{num}</h1>
        </>
    )
}