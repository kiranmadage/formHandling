import React from "react";

export function Evennum(){
    function Table(){
        var a= parseInt(document.getElementById ("no").innerText)
        let ans=a+2;
        document.getElementById("no").innerText=`${ans}`
    }

    return(
        <>
        <h1 id="no">2</h1>

        <button onClick={Table}>Even no</button>
        </>
    )
}