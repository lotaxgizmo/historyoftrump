import React from 'react'
import navbar from "../assets/navbar.png"
import navbarmob from "../assets/navbarmob.png"
import logolike from "../assets/logolike.png"
import xicon from "../assets/xicon.png"
import tgicon from "../assets/tgicon.png"
import america from "../assets/america.png"

function Navbar() {
    return (
        <div className='z-20 Navbar flex flex-col justify-center items-center relative king'>
            <img src={navbar} alt="navbar" className='w-full lg:w-11/12 hidden lg:block' />
            <img src={navbarmob} alt="navbarmob" className='w-11/12 lg:hidden' />

            <div className="stuff flex flex-row justify-between items-center absolute  w-11/12">

                <div className="ml-20 menu  flex-row gap-5 hidden lg:flex ">
                    <p className='text-2xl'>Home</p>
                    <p className='text-2xl'>About</p>
                    <p className='text-2xl'>Tokenomics</p>
                </div>

                <img src={logolike} alt="logolike" className='w-60 hidden lg:block' />

                <div className="third flex lg:flex-row flex-row-reverse justify-between items-center  w-full lg:w-auto">
                    <p className='text-2xl hidden lg:block'>Buy Now</p>
                    <div className="icons flex flex-row gap-5 mx-5 ">
                        <img src={tgicon} alt="tgicon" className='w-12' />
                        <img src={xicon} alt="xicon" className='w-12' />
                    </div>
                    <img src={america} alt="america" className='w-32' />
                </div>
            </div>
        </div>
    )
}

export default Navbar