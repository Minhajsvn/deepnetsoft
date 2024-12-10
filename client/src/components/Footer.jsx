import React from 'react'
import logo from '../assets/Logo.png';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import instagram from '../assets/instagram.svg';
import telephone from '../assets/telephone.svg';
import email from '../assets/email.svg';
import map from '../assets/map.svg';

export default function Footer() {
    return (
        <div className='py-10 lg:flex lg:justify-center lg:items-center'>
            <div className='relative flex justify-center items-center flex-col border rounded-2xl m-5 lg:m-2 h-32 lg:w-80 space-y-2'>
                <img src={logo} alt="logo image" className='absolute -top-9 w-20' />
                <h1 className='text-3xl uppercase'><span className='text-[#0796EF]'>deep</span> <span className='text-white'>net</span> <span className='text-[#BBBBBB]'>soft</span></h1>
                <div className='flex justify-between items-center w-20'>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={youtube} alt="youtube" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>
            <div className='relative text-sm flex justify-center items-center flex-col border rounded-2xl m-5 lg:m-2 h-32 lg:w-80 space-y-2'>
                <h3 className='text-[#0796EF] uppercase'>Connect with Us</h3>
                <div className='flex justify-between items-center space-x-2 text-[#857878]'>
                    <img src={telephone} alt="telephone" />
                    <p>+91 9567843340</p>
                </div>
                <div className='flex justify-between items-center space-x-2 text-[#857878]'>
                    <img src={email} alt="facebook" />
                    <p>info@deepnetsoft.com</p>
                </div>
            </div>
            <div className='relative text-sm flex justify-center items-center flex-col border rounded-2xl m-5 lg:m-2 h-32 lg:w-80 space-y-2'>
            <h3 className='text-[#0796EF] uppercase'>Find Us</h3>
                <div className='flex justify-between items-center space-x-2'>
                    <img src={map} alt="map" className='' />
                    <p className='text-[#857878]'>First floor, Geo infopark, 
                    Infopark EXPY, Kakkanad</p>
                </div>
            </div>
        </div>
    )
}
