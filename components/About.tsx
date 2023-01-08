import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function About({ }: Props) {
    return (
        <motion.div
            initial={{
                x: -200,
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
                once: false

            }}

            className=' flex flex-col  relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            {
                <motion.img
                    initial={{
                        x: -200,
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
                        once: false

                    }}
                    src="/aky.jpg"
                    className='mt-32 mb-20 md:mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover
              md:rounded-lg md:w-64 md:h-96 xl:w-64 xl:h-96 '
                >
                </motion.img>}
            <div className='space-y-10 px-0 md:px-10'>
                <p className='text-sm'>
                    My name is Akshay Nagar, I am a Computer Science Engineering Student at Lovely Professional University.
                    I <span className='underline decoration-[#c22b4e]'>love</span> solving problems. Whether if it's a complex programming problem or a real life problem,
                    I try to come up with a unique and optimal solution for the problem at hand taking in regard the resources provided.
                    I have keen interest in Web Development, Android Development and Machine Learning and have built multiple projects for the same.


                </p>
            </div>

        </motion.div>
    )
}

export default About