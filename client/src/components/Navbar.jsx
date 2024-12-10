import React from 'react'
import logo from '../assets/Logo.png';
import toggleIcon from '../assets/hamburger-icon.svg';

export default function Navbar() {
    return (
        <div className="relative lg:flex lg:items-center py-4 lg:px-20 lg:justify-between">
            <div className='flex items-center space-x-2'>
                <img src={logo} alt="Logo" className="block mx-auto lg:mx-0 w-12 lg:w-20 z-10" />
                <h1 className='hidden lg:block text-3xl uppercase'><span className='text-[#0796EF]'>deep</span> <span className='text-white'>net</span><br /> <span className='text-[#BBBBBB]'>soft</span></h1>
            </div>
            <img 
                src={toggleIcon} 
                alt="button" 
                className="absolute right-2 top-2 lg:hidden"
            />
            <div className='hidden lg:flex lg:text-base lg:justify-between items-center space-x-5'>
                <button className='uppercase'>home</button>
                <button className='uppercase'>menu</button>
                <button className='uppercase'>make a reservation</button>
                <button className='uppercase'>contact us</button>
            </div>
        </div>
    )
}
