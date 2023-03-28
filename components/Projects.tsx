import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{

                opacity: 0,
            }}
            transition={{
                duration: 1.2,

            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={{
              

            }}

            className=' flex flex-col  relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='w-full absolute top-[30%] bg-[#c22b4e]/10  h-[300px] -skew-y-12'></div>
            <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20'>
                {
                    projects.map((project,i) => (
                        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'  >
                            <motion.img src='/netflix.png'
                                className='h-[300px]'
                                initial={{
                                    y:-300,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 1.2,

                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                viewport={{
                                    once:true

                                }}
                            ></motion.img>
                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-3xl font-semibold text-center'>Insta App</h4>
                                <p className='text-lg text-center text-left'>
                                    Instagram Clone build on Next.js and Tailwind CSS, uses Next.Auth and firebase for google user 
                                    authentication and functionality of sign-in, posting, liking and commenting.
                                </p>
                            
                            </div>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Projects