import React from 'react'
import hero from '../assets/hero.png'

export default function Hero() {
    return (
        <div className='relative flex flex-col justify-center items-center lg:h-40'>
            <img src={hero} alt="hero image" className="absolute -top-10 lg:-top-7 w-full h-[300px] object-cover -z-10 lg:h-[200px]" />
            <h2 className="text-white relative z-10 mt-0 text-center text-4xl font-semibold">MENU</h2>
            <p className='text-base lg:text-lg lg:w-2/3 text-[#BBBBBB] font-kelly text-center py-2'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
        </div>
    )
}
