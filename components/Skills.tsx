import React, { useEffect, useState } from 'react'

import { motion } from "framer-motion";
import Leet from './Leet';
import { LeetStats } from './utils/LeetStats';
import { LeetService } from './utils/LeetService';
type Props = {}

function Skills({ }: Props) {
  interface Todo{
    loading: boolean,
    Stats: LeetStats[],
    errorMsg:string
  }
  const [todos, setTodos] = useState<Todo>({
    loading: false,
    Stats: [] as LeetStats[],
    errorMsg:''
  })
  useEffect(() => {
    LeetService.getStats().then(res=>console.log(res.data))
  },[])

  

  return (
    <div className=' flex flex-row  relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <div>
        
      </div>


    </div>
  )
}

export default Skills