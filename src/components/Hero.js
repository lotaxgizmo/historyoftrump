import React from 'react'
import Navbar from "./Navbar"
import buynowbtn from "../assets/buynowbtn.png"
import readmorebtn from "../assets/readmorebtn.png"
import those from "../assets/those.png"


function Hero() {
    return (
        <div className='Hero h-screen flex flex-col   relative    items-center'>
            <Navbar />



            <p className='brin text-2xl text-center text-[#E6DFC5] absolute bottom-72 lg:bottom-44 lg:w-8/12 block lg:hidden'>
                Those who don’t know history are destined to repeat it...
            </p>
            <img src={those} alt="those" className='lg:flex absolute bottom-72 lg:bottom-44 lg:w-8/12 hidden ' />

            <div className="buttonsdiv flex flex-col lg:flex-row absolute justify-center lg:gap-10 gap-0 items-center /mt-auto mb-20 bottom-0">
                <img src={readmorebtn} alt="hero" className='w-72' />
                <img src={buynowbtn} alt="hero" className='w-72' />

            </div>
        </div>
    )
}

export default Hero