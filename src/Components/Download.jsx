import React from 'react'
import { FiDownload } from 'react-icons/fi'
import cv from "../assets/CV.pdf"

const Download = () => {
    return (
        <>
            <a href={cv} download>
                <button className="duration-300 -rotate-[45deg] bgsecondary border textprimary bg-gray-50 font-semibold px-3 py-2 flex flex-row items-center gap-3">
                    <FiDownload className="w-6 h-6" />
                </button>
            </a>
        </>
    )
}

export default Download
