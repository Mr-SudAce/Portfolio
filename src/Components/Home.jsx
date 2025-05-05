/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React from 'react'
import pp from "../assets/Image/laptop.png"
import "../App.css"
import { Tagline, FloatIcon, MenuBar, Download } from '../index.jsx'

const Home = () => {
    return (
        <>
            <MenuBar />
            <motion.div className='h-screen flex relative overflow-hidden items-center justify-center'>
                <Tagline />
                <span className='z-[50] absolute top-[85vh] left-[50vh]'>
                    <Download />
                </span>
                <motion.div initial={{ opacity: 0, y: -10000, }}
                    animate={{ opacity: 1, y: -900 }}
                    transition={{ duration: 1.2, delay: 0 }}
                    className='fixed bg-red-700'>
                    <div className='absolute transition-all
                    h-[340vh] w-[250vh] rotate-45
                    lg:h-[350vh] lg:w-[350vh] lg:rotate-45 lg:top-0
                    md:h-[450vh] md:w-[550vh] md:rotate-45 md:top-[200vh]
                    '
                        style={{
                            backgroundColor: "var(--primary_color)"
                        }}
                    ></div>
                </motion.div>
                <motion.img
                    initial={{ opacity: 0, x: 500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.4, delay: 0.8 }}
                    src={pp} alt="img" srcSet="" className='z-50 absolute
                    w-[40vh] right-5 top-52
                    lg:w-[55vh] lg:right-20 lg:top-20
                    md:w-[55vh] md:right-10 md:top-5
                    transition-all
                '/>
            </motion.div>
            <FloatIcon />
        </>
    )
}

export default Home