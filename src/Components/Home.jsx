/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React from 'react'
import pp from "../assets/Image/laptop.png"
import "../App.css"
import { Tagline, FloatIcon, MenuBar, Download, Bg, Socialmedia } from '../index.jsx'

const Home = () => {
    return (
        <>
            <div className="dot1 z-[1]"></div>
            <div className="dot2 z-[1]"></div>
            <div className="dot3 z-[1]"></div>
            <div className="dot4 z-[1]"></div>
            <MenuBar />
            <Bg />
            <motion.div className='h-screen flex relative overflow-hidden items-center justify-center'>
                <Tagline />
                <motion.span
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 4 }}
                    className='z-[50] absolute top-[85vh] left-[85vh] '>
                    <Download />
                </motion.span>
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
                <div className='absolute left-10 bottom-5   '>
                    <Socialmedia />
                </div >
            </motion.div>
            <FloatIcon />
        </>
    )
}

export default Home