/* eslint-disable no-unused-vars */
import React from 'react'
import bg from "../assets/Image/connection.png"
import { motion } from 'framer-motion'
const Bg = () => {
    return (
        <>
            <motion.img src={bg} alt="" srcSet="" className="absolute h-screen p-5 object-cover overflow-hidden " />
        </>
    )
}

export default Bg