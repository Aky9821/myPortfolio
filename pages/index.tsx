import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0' >
      <Head>
        <title>My Portfolio</title>
      </Head>
      
      {/* Header */}
      <Header></Header>

      {/*Hero*/}
      <section id='hero' className='snap-start'>
        <Hero></Hero>
      </section>

      {/*About*/}
      <section id='about' className='snap-center'>
        <About></About>
      </section>
      <section id='skills' className='snap-center'>
        <Skills></Skills>
      </section>

    </div>
  )
}

export default Home
