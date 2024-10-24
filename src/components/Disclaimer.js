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

            <p className='text-[#03124D] text-3xl lg:text-5xl brin text-center lg:w-11/12 w-auto'>$HOT ( History of Trump ) The Messiah Meme is here . The crypto world has always been at war with forces  against its very existence, it has always faced trials since its inception. But all that's about to change , the crypto world has found a new ally in  Donald Trump. Just like the crypto world, Trump has faced a lot of trials, survived assassination attempts and has conquered  it all. With Trump and cryptonians combining forces, a new world is  achievable .
                $HOT appeals to every crypto enthusiasts  looking forward to a world where crypto is widely accepted to join the train as we lend our support for Trump. This is not just a meme. It's more than just another hype. It is the future of the crypto world. And that future can only come to life with Trump at the wheels.</p>

        </div>
    )
}

export default Disclaimer