import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-6xl 
        mx-auto z-20 xl:items-center p-5'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration: 1.5,
                }}

                className='flex flex-row items-center text-gray-300 '>
                {/* Social Icons*/}
                <SocialIcon url="https://www.linkedin.com/in/aky9821/"
                    fgColor='gray'
                    bgColor='transparent'
                    target="_blank"
                />
                <SocialIcon url="https://github.com/Aky9821"
                    fgColor='gray'
                    bgColor='transparent'
                    target="_blank"
                />
                
                <SocialIcon url="https://leetcode.com/Aky9821/"
                    fgColor='gray'
                    bgColor='transparent'
                    target="_blank"
                    label="Leet Code"
                >
                </SocialIcon>

                <SocialIcon url="https://auth.geeksforgeeks.org/user/akshaynagar01011/"
                    fgColor='gray'
                    bgColor='transparent'
                    target="_blank"
                    label="Geeks for Geeks"
                />
               
            </motion.div>

            {/*Contact Me*/}
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration: 1.5,
                }}
                
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    fgColor='gray'
                    bgColor='transparent'
                    target="_blank"
                    network='email'
                />
                <p className=' hidden md:inline-flex text-sm text-gray-400'>
                    Get in Touch
                </p>
            </motion.div>
        </header>
    )
}

export default Header