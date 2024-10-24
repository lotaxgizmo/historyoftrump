import React from 'react'
import parchment from "../assets/parchment.png"
import parchmentmob from "../assets/parchmentmob.png"

function Tokenomics() {
    return (
        <div className='overflow-hidden flex flex-col justify-center items-center erin relative'>

            <img src={parchment} alt="" className='relative hidden lg:block' />
            <img src={parchmentmob} alt="" className='w-[500px] max-w-none relative lg:hidden block' />

            <div className="absolute mt-20 lg:mt-auto top-0 lg:top-auto toke  w-full lg:w-10/12 flex flex-col items-center p-3">
                <h2 className='text-7xl lg:text-8xl red lg:self-start'>tokenomics</h2>


                <div className="first flex flex-col lg:flex-row w-full justify-between items-center lg:items-center">
                    <p className='text-5xl mb-2 lg:text-5xl'>Liquidity</p>
                    <p className='red text-5xl mb-2 lg:text-8xl'>100%</p>
                </div>

                <div className="first flex flex-col lg:flex-row w-full justify-between items-center lg:items-center">
                    <p className='text-5xl mb-2 lg:text-5xl'>total supply</p>
                    <p className='red text-5xl mb-2 lg:text-8xl'>47,000,000</p>
                </div>

                <div className="first flex flex-col lg:flex-row w-full justify-between items-center lg:items-center">
                    <p className='text-5xl mb-2 lg:text-5xl'>contract</p>
                    <p className='red text-5xl mb-2 lg:text-8xl'>renounced</p>
                </div>

                <div className="first flex flex-col lg:flex-row w-full justify-between items-center lg:items-center">
                    <p className='text-5xl mb-2 lg:text-5xl'>contract address</p>
                    <p className='red text-5xl mb-2 lg:text-8xl'>????????????????????</p>
                </div>
            </div>

        </div>
    )
}

export default Tokenomics