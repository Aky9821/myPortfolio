import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundComponents({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,

            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 2.5,
            }}
            className='relative flex justify-center items-center'>
            <div className=' absolute border border-[#333333] h-[200px]  rounded-sm w-[200px]  animate-ping mt-52' />
            <div className=' absolute border border-[#333333] h-[250px]  rounded-sm w-[250px]  animate-ping mt-52' />
            <div className=' absolute border border-[#333333] h-[300px]  rounded-sm w-[300px]  animate-ping mt-52' />
            <div className=' absolute border border-[#c22b4e] xl:h-[550px] l:h-[550px] md:h-[530px] h-[430px] rounded-sm w-[650px]  animate-pulse opacity-20 mt-52' />


        </motion.div>
    )
}

export default BackgroundComponents