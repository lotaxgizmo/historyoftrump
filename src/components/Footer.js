import React from 'react'
import vote2 from "../assets/vote2.png"
import vote1 from "../assets/vote1.png"
import xtter from "../assets/xtter.png"
import tgram from "../assets/tgram.png"
import logolike from "../assets/logolike.png"

function Footer() {
    return (
        <div className='flex flex-col justify-center items-center overflow-hidden'>
            <img src={vote1} alt="" className='lg:w-full max-w-none w-[700px] ' />


            <img src={logolike} alt="" className='w-10/12 lg:w-96 mt-7' />

            <div className="icons mb-7 flex flex-row gap-4">
                <img src={xtter} alt="" className='w-12' />
                <img src={tgram} alt="" className='w-12' />
            </div>


            <img src={vote2} alt="" className='lg:w-full max-w-none w-[700px]' />

        </div>
    )
}

export default Footer