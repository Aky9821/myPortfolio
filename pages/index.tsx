import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      <Head>
        <title>My Portfolio</title>
      </Head>
      
      {/* Header */}
      <Header></Header>

      {/*Hero*/}
      <section id='hero'>
        <Hero></Hero>
      </section>
    </div>
  )
}

export default Home
