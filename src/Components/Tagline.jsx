// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import React from 'react'
const Tagline = () => {
    return (
        <div className='absolute left-10 z-10 space-y-7 uppercase' >

            <motion.h1
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.6, delay: 2.2 }}
                className="text-3D text-8xl font-extrabold">
                Sudesh Sharma
            </motion.h1>

            <motion.h1
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.8, delay: 2.6 }}
                className='text-3D text-4xl font-bold'>
                I'm a Full Stack Developer</motion.h1>
            <motion.h1
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.8, delay: 2.6 }}
                className='text-3D text-2xl font-bold'>
                (Django and React)</motion.h1>
            <motion.p
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.2, delay: 2.8 }}
                className='text-sm font-bold'>
                I create web applications that are both functional and beautiful.</motion.p>
            <motion.p
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.2, delay: 3 }}
                className='text-sm font-bold'>
                Let's build something amazing together!</motion.p>
        </div>
    )
}

export default Tagline