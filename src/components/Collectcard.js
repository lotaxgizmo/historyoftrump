import React from 'react'
import cards from "../assets/cards.png"
import step1 from "../assets/step1.png"
import step2 from "../assets/step2.png"
import step3 from "../assets/step3.png"
import returnpage from "../assets/returnpage.png"
import nextpage from "../assets/nextpage.png"
import buynowbtn from "../assets/buynowbtn.png"
import americaflag from "../assets/americaflag.png"

function Collectcard() {
    return (
        <div className='border-[5px] border-black cards'>
            <div className="boxed m-5 border-[5px] border-black flex flex-col justify-center items-center py-6 px-2">
                <div className="americaflag relative flex flex-col justify-center items-center">
                    <img src={cards} alt="" className='w-80 lg:w-[700px] ' />
                    <p className='brin text-4xl lg:text-6xl tracking-widest text-center '>BUY TRUMP</p>
                    <img src={americaflag} alt="" className='w-20 h-20 lg:h-40 lg:w-40 lg:absolute -right-40' />
                </div>




                <div className="divide flex flex-col lg:flex-row w-full justify-around">
                    <img src={step1} alt="" className='w-96' />
                    <img src={step2} alt="" className='w-96' />
                    <img src={step3} alt="" className='w-96' />
                </div>

                <div className="navigation flex w-full
                 flex-row justify-between items-center">
                    <img src={returnpage} alt="" className='w-16 lg:w-24' />
                    <div className="btn">
                        <img src={buynowbtn} alt="hero" className='w-72' />
                    </div>
                    <img src={nextpage} alt="" className='w-16 lg:w-24' />
                </div>


            </div>
        </div>
    )
}

export default Collectcard