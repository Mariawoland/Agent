"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react'

const Header = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(prev => !prev);
    };


    return (
        <>
            <header className={`flex justify-between items-center transition-all duration-500 md:px-10 px-4 h-[80px] bg-dark-1`}>

                <Link href='/'>
                    <img src='/logo.png' className='w-[120px]' />
                </Link>

                <img src='/menu.png' onClick={handleClick} className='md:hidden flex w-[40px]' />

                <div className={`text-base font-semibold md:flex hidden gap-7 items-center transition-all duration-500 md:flex-row flex-col lg:items-center lg:gap-9 lg:p-0 p-4 tracking-wide ms-auto text-four-1`}>

                    <div className='flex gap-12 items-center'>
                        <Link href='/'>
                            <img src='/logo.png' className='md:hidden flex w-[190px]' />
                        </Link>

                        <img src='/close.png' className='md:hidden flex w-[25px] h-[25px]' onClick={handleClick} />
                    </div>

                    <Link href='/' className='hover:text-one-1 transition-all duration-500'>Home</Link>

                    <Link href='/aboutus' className='hover:text-one-1 transition-all duration-500'>About</Link>

                    <Link href='/jobs' className='hover:text-one-1 transition-all duration-500'>Jobs</Link>

                    <Link href='/contacts' className='hover:text-one-1 transition-all duration-500'>Contacts</Link>

                    <Link href='/#subscribe' className='bg-three-1 hover:bg-one-1 rounded-full text-one-1 hover:text-three-1 px-5 py-2 transition-all duration-500'>Subscribe</Link>

                </div>

            </header>

            <div className={`z-[100] bg-three-1 fixed top-0 right-0 font-semibold flex flex-col gap-6 p-5 transition-all duration-500 h-screen text-base ${clicked === true ? 'translate-x-0' : 'translate-x-[100%]'}`}>

                <div className='flex gap-14 items-center'>

                    <Link href='/'>
                        <img src='/logo.png' className='md:hidden flex w-[100px]' />
                    </Link>

                    <img src='/close.png' className='md:hidden flex w-[20px] h-[20px]' onClick={handleClick} />

                </div>

                <Link href='/'>Home</Link>

                <Link href='/aboutus'>About</Link>

                <Link href='/jobs'>Jobs</Link>

                <Link href='/contacts'>Contacts</Link>

                <Link href='/#subscribe' className='bg-one-1 rounded-full text-three-1 px-5 py-2 text-center'>Subscribe</Link>

            </div>
        </>
    )
}

export default Header;