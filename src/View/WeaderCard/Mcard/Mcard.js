import React from "react";
import { Cards } from "../../../Camponant/Card/card";
import shirt from './shirt2.jpeg'
import boot from './boot.jpeg'
import watch from './whatch.jpeg'





export function Mcard() {
    const carddata = [
        {
            img: shirt,
            name: "Shirt",
            size: "Xl",
            price:"RS 500",
            city: "Pune",


        },
        {
            img: boot,
            name: "Boot",
            size: 30,
            price: "Rs 600",
            city: "Shirur",


        },
        {
            img: watch,
            name: "Watch",
            size: "S",
            price: "Rs 900",
            city: "Shrigonda",


        }


    ]

    return (
        <>
            {
                carddata.map(
                    (data) => {

                        return (
                            <Cards img={data.img} name={data.name} size={data.size} price={data.price} city={data.city} />
                        )
                    }

                )

            }
        </>
    )
}