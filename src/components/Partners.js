import React from 'react'
import partnersmob from "../assets/partnersmob.png"
import partners from "../assets/partners.png"

function Partners() {
    return (
        <div className='flex flex-col justify-center items-center erin lg:px-24'>
            <h2 className='text-7xl lg:text-8xl text-[#03124D] lg:self-start'>partners</h2>
            <img src={partners} alt="" className='hidden lg:block' />
            <img src={partnersmob} alt="" className='lg:hidden block' />
        </div>
    )
}

export default Partners