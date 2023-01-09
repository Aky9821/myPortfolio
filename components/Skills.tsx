import React, { useEffect, useState } from 'react'

import { motion } from "framer-motion";
import Leet from './Leet';
import { LeetStats } from './utils/LeetStats';
import { LeetService } from './utils/LeetService';
import { stat } from 'fs';
type Props = {}

function Skills({ }: Props) {
  interface Todo {
    loading: boolean,
    Stats: LeetStats[],
    errorMsg: string
  }
  const [todos, setTodos] = useState<Todo>({
    loading: false,
    Stats: [] as LeetStats[],
    errorMsg: ''
  })
  useEffect(() => {
    setTodos({ ...todos, loading: true })
    LeetService.getStats()
      .then(res => setTodos({
        ...todos,loading:false, Stats:res.data
      }))
      .catch(err => setTodos({
        ...todos,loading:false,errorMsg:err.message
      }));
  }, [])


  const {loading,Stats,errorMsg}=todos
  return (
    <div className=' flex flex-row  relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <div>{

        
       })
      }
      </div>


    </div>
  )
}

export default Skills