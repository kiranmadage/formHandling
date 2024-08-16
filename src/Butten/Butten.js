import React from "react";



 export function Button(){
 function sum (){
 document.getElementById ("chenge").innerText ='Red'
 }
    return(
        <>
        
            <h1 id="chenge">Blue</h1>


            <button onClick={sum}>Red</button>
        
        </>
    )


 

}
