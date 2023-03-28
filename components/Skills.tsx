import React, { useEffect, useState } from 'react'
import axios from "axios"
import { getStats, StatsResponse } from './utils/getStats';


import { motion } from "framer-motion";
import Leet from './Leet';
import { themes } from './utils/themes'
import { stat } from 'fs';
import Skill from './Skill';
type Props = {}
const ENDPOINT = 'https://leetcode-stats.vercel.app'


function Skills({ }: Props) {


  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.5,

      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{ 
        once: false

      }}

      className=' flex flex-col  relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />

      </div>
    </motion.div>



  )
}

export default Skills


