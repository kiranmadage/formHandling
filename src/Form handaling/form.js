import React from "react";
import { useState } from "react";

export function Form() {

    let [name, setName] = useState()
    let [gender, setGenger] = useState()

    let [city, setcity] = useState()
    let [corse, setCorse] = useState([])

    const Select =
        (e) => {
            if (e.target.Checked)
                setCorse([...corse, e.target.value])
            else {
                const updateArr = corse.filter(
                    (cc) => {
                        if (cc != e.target.value)
                            return cc
                    }
                )
                setCorse(updateArr)
            }
        }





    return (
        <>
            <form>

                <input type="text" placeholder="Enter name" onChange={(e) => {
                    setName(e.target.value)
                    console.log(e.target.value)
                }} /><br></br>
                <br></br>



                Gender:
                <input type="radio" name="Male" value=' Male' onChange={(e) => {
                    setGenger(e.target.value)
                    console.log(e.target.value)
                }} /> Male


                <input type="radio" name="Male" value=' Female' onChange={(e) => {
                    setGenger(e.target.value)
                    console.log(e.target.value)
                }} /> Female
                <br></br>
                <br></br>

                <select onClick={
                    (e) => {
                        setcity(e.target.value)
                        console.log(e.target.value)
                    }} >

                    <option>select your city</option>
                    <option>Pune</option>
                    <option>Shirur</option>
                    <option>Shrigonda</option>


                </select><br></br> <br></br>

                <input onClick={Select} type="checkbox" value="BCA" />BCA
                <input onClick={Select}  type="checkbox" value="BCS" />BCS
                <input onClick={Select}  type="checkbox" value="BCom" />BCom
                <input onClick={Select}  type="checkbox" value="BA" />BA
                <br></br>
                <br></br>



                <button type="button" onClick={() => console.log({ name }, { gender }, { city }, { corse })}>Submite</button>
            </form>
            <h3> Name: {name} </h3>
            <h3> Gender: {gender}</h3>
            <h3> City: {city}</h3>
            <h3> Corse: {corse}</h3>
        </>
    )
}