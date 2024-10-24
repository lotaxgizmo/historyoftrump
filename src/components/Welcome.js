import React from 'react'
import flag from "../assets/flag.png"
import camelotscroll from "../assets/camelotscroll.png"
import gladiatorscroll from "../assets/gladiatorscroll.png"
import icescroll from "../assets/icescroll.png"
import readscrollbtn from "../assets/readscrollbtn.png"

function Welcome() {
    return (
        <div className='welcome flex flex-col justify-center items-center'>
            <div className="toppart flex flex-row w-full justify-center items-center lg:justify-between px-4 lg:px-16 mb-0 lg:mb-20">
                <img src={flag} alt="" className='w-20 h-20 lg:h-40 lg:w-40' />

                <div className="text flex flex-col justify-center items-center">
                    <p className='erin text-6xl lg:text-9xl -mb-5   '>WELCOME</p>
                    <p className='brin text-4xl tracking-widest text-center hidden lg:block'>To the history books of donald trump</p>
                </div>

                <img src={flag} alt="" className='w-20 h-20 lg:h-40 lg:w-40' />
            </div>
            <p className='brin text-2xl tracking-widest text-center lg:hidden block mb-10'>To the history books of donald trump</p>




            <div className="middlepart flex flex-col lg:flex-row w-full justify-around">

                <div className="one flex flex-col justify-center items-center mb-4">
                    <img src={icescroll} alt="" className='w-96' />
                    <p className='erin text-6xl w-72 leading-10 text-center -mt-1 mb-2'>ICE AGE TRUMP</p>
                    <img src={readscrollbtn} alt="" className='w-52' />
                </div>

                <div className="one flex flex-col justify-center items-center mb-4">
                    <img src={camelotscroll} alt="" className='w-96' />
                    <p className='erin text-6xl w-72 leading-10 text-center -mt-1 mb-2'>king trump
                        of chamelot</p>
                    <img src={readscrollbtn} alt="" className='w-52' />
                </div>

                <div className="one flex flex-col justify-center items-center mb-4">
                    <img src={gladiatorscroll} alt="" className='w-96' />
                    <p className='erin text-6xl w-72 leading-10 text-center -mt-1 mb-2'>trump
                        the gladiator</p>
                    <img src={readscrollbtn} alt="" className='w-52' />
                </div>




            </div>

        </div>
    )
}

export default Welcome