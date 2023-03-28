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
           
        </motion.div>
    )
}

export default Projects