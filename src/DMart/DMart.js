import React from 'react'
import './DMart.css'
import img1 from './1st.jpg'

import img3 from './3rd.jpg'
import img4 from './4th.jpg'
import img5 from './5th.jpg'


export function Dmart() {

    return (
        <>
            <div className='D-main'>
                <div >
                    <img className='D-img' src={img1}></img>
                </div>

            </div>





            <div className='D-main'>
                <img className='D-img' src={img3}></img>
            </div>


            <div className='D-main'>
                <h1 className='D-text'> Fruits & Vedetable </h1>
                <div>
                    <div>
                        <img></img>
                        <h3></h3>
                    </div>

                    <div>
                        <img></img>
                        <h3></h3>
                    </div>
                </div>
            </div>


            <div className='D-main'>
                <img className='D-img' src={img4}></img>
            </div>


            <div className='D-main'>
                <img className='D-img' src={img5}></img>
            </div>
        </>
    )
}