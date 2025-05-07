// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import React from 'react'
const Tagline = () => {
    return (
        <>
            <div className='z-[1] space-y-5 border-black absolute top-[40vh] left-12'>
                <motion.div
                    initial={{ opacity: 0, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="relative z-[1] rounded-2xl p-8 w-[85vh] mx-auto textmain overflow-hidden backdrop-blur-sm shadow-inner-lg"
                >
                    {/* Aesthetic animated dots */}
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                    <div className="dot3"></div>
                    <div className="dot4"></div>

                    {/* Main Name */}
                    <motion.h1
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.6, delay: 4.2 }}
                        className="text-5xl md:text-7xl lg:text-7xl font-extrabold tracking-tight uppercase txtdesign"
                        style={{
                            textShadow: "0px 0rem 2rem var(--primary_color)"
                        }}

                    >
                        <p className='text'>
                            Sudesh Sharma
                        </p>

                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2
                        initial={{ opacity: 0, x: -1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.8, delay: 2.6 }}
                        className="text-xl md:text-2xl font-semibold mb-4 drop-shadow-xl"
                        style={{
                            textShadow: "0px 0rem 2rem var(--primary_color)"
                        }}
                    >
                        I'm a Full Stack Developer
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, x: -1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.8, delay: 3.0 }}
                        className="text-md md:text-lg mb-2 drop-shadow-xl"
                        style={{
                            textShadow: "0px 0rem 2rem var(--primary_color)"
                        }}
                    >
                        I create web applications that are both functional and beautiful.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.8, delay: 3.4 }}
                        className="text-md md:text-lg drop-shadow-xl"
                        style={{
                            textShadow: "0px 0rem 2rem var(--primary_color)"
                        }}
                    >
                        Let's build something amazing together!
                    </motion.p>
                </motion.div>
            </div>
        </>
    )
}

export default Tagline