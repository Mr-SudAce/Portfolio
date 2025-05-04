/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React from 'react'
import { PiArrowFatLinesRightBold } from "react-icons/pi"
import { Link } from 'react-router-dom'
import img from '../assets/Image/boy.png'

const StartPoint = () => {
    return (
        <div className='h-screen lg:bg-gradient-to-r from-[#000] via-[#6e6e6e] to-[#000] w-screen relative overflow-hidden'>
            <motion.img
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='top-32 -left-16  absolute lg:top-[0vh] md:top-[10vh] lg:left-[60vh] md:left-[20vh] lg:w-[60vh] md:w-[50vh] md:h-[85vh] lg:h-[99vh] saturate-50' src={img} alt="img" srcSet="" />
            <Link to="home/" className='font-bold text-[3vh] absolute left-[35vh] top-[50vh] animate-bounce lg:top-[40vh] md:top-[40vh] lg:left-[120vh] md:left-[200vh] '><PiArrowFatLinesRightBold className='lg:text-[8vh] md:text-[20vh] text-red-600' /></Link>
        </div>
    )
}

export default StartPoint