import React, { useEffect, useState } from 'react'
import axios from "axios"

import { motion } from "framer-motion";
import Leet from './Leet';

import { stat } from 'fs';
type Props = {}
const ENDPOINT = 'https://leetcode-stats.vercel.app'


function Skills({}: Props) {
  const [svg, setSvg] = useState('')
  const [theme, setTheme] = useState('Light')
  
  useEffect(() => {
    
    const username = 'aky9821'
    axios
      .get(`${ENDPOINT}/api?username=${username}&theme=${theme}`)
      .then((response) => {
        setSvg(response.data as string)
        
      })
      .catch(() => {
       
      })
    
  }, [])


return (
  <div className=' flex flex-row  relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
      Skills
    </h3>
    <div>
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </div>


  </div>
)
}

export default Skills


