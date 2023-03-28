import { MotionConfig } from 'framer-motion'
import React from 'react'

import { motion } from "framer-motion";
type Props = {
    directionL?: boolean;
};

function Skill({directionL }: Props) {
    return (
        <div
        className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionL ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{
                    opacity: 1,
                    x:0
                }}
                src="https://isocpp.org/assets/images/cpp_logo.png"
                className='rounded-full border border-gray-500 object-cover w-16 h-16
                filter group-hover:grayscale transition duration-300 ease-in-out'
            >

            </motion.img>
        </div>
    )
}

export default Skill