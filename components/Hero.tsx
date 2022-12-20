import React from 'react'
import Link from 'next/link';

import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundComponents from './BackgroundComponents';
import Image from 'next/image'
type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, this is Akshay", "I am a Computer Science Engineering Student", "<Welcome to my portfolio!/>"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center 
        text-center overflow-hidden'>
            <BackgroundComponents></BackgroundComponents>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] '>
                    Software Engineer</h2>
                <h1 className=' text-4xl lg:text-5xl font-semibold scroll-px-10 pt-5'>
                    <span>{text}</span>
                    <Cursor cursorColor='#DC143C'></Cursor>
                </h1>
                <div className='pt-5 '>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link >
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projexts'>
                        <button className='heroButton'>Projects</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Hero