




export function Increment(){


    function Incres(){
        var a = parseInt(document.getElementById("num").innerText);
        let result =a+1;
        document.getElementById("num").innerText = `${result}`
    }


return(
    <>
    <h1 id="num">1</h1>
    <button onClick={Incres}>Increment</button>
    </>
)

}
