import React from 'react'
import { FiDownload } from 'react-icons/fi'
import cv from "../assets/CV.pdf"

const Download = () => {
    return (
        <>
            <a href={cv} download>
                <button className="relative group px-6 py-3 rounded-2xl font-semibold text-white bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 shadow-lg 
                 transition-all duration-300 overflow-hidden hover:scale-[1.06] active:scale-95">


                    {/* Icon Slide + Rotate */}
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <FiDownload className="text-white w-6 h-6 rotate-[-40deg] group-hover:rotate-0 transition-transform duration-300" />
                    </span>

                    {/* Button Label Animated */}
                    <span className="relative z-10 group-hover:ml-6 transition-all duration-300">
                        Download CV
                    </span>
                </button>
            </a>


        </>
    )
}

export default Download
