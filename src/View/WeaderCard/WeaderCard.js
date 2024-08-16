import React from "react";
import {WeatherCard} from './../../Camponant/Weather/Weather'
import ranny from './rany.jpeg'
import sunny from './suny.jpeg'
import cloudy from './cloudy.jpeg'




export function About(){
   const weatherdata= [
        {
            img:cloudy,
            temp:"20C",
            weather:"cloudy",
            city:"Pune",
        },
        
        {
            img:ranny,
            temp:"15C",
            weather:"ranny",
            city:"Shrigonda",
        },

        
        {
            img:sunny,
            temp:"40C",
            weather:"sunny",
            city:"Shirur"
        }
    ];


return(
<>
    {  
      weatherdata.map(
        (data)=> {
            return(
                
               < WeatherCard img = {data.img} temp = {data.temp} weather = {data.weather} city={data.city} />
              
            )
        }
       )

    }
 </>

)

}






    
