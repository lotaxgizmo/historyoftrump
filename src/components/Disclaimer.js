import React from 'react'
import disclaim from "../assets/disclaim.png"
import feather from "../assets/feather.png"

function Disclaimer() {
    return (
        <div className='flex flex-col justify-center items-center p-3'>

            <div className="feat relative mt-20 lg:mt-40 flex   justify-center items-center">
                <img src={disclaim} alt="" className='w-11/12 lg:w-8/12 z-10' />
                <img src={feather} alt="" className='w-32 lg:w-96  absolute -top-20 right-0 lg:-top-60 lg:right-40' />
            </div>

            <p className='text-[#03124D] text-3xl brin text-center lg:w-10/12 w-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iusto debitis, aperiam, minima quisquam consequuntur nulla, non pariatur magni cupiditate possimus reprehenderit quam repellat harum.</p>

        </div>
    )
}

export default Disclaimer