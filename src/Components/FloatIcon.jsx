/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react';
import DjangoImg from "../assets/Image/djangoImg.png";
import PythonImg from "../assets/Image/pythonImg.png";
import ReactImg from "../assets/Image/reactImg.png";
import BootstrapImg from "../assets/Image/bootstrapImg.png";
import TailwindImg from "../assets/Image/tailwindImg.png";
import HTMLImg from "../assets/Image/htmlImg.png";
import CSSImg from "../assets/Image/cssImg.png";
import FlaskImg from "../assets/Image/flaskImg.png";


const icons = [
    { src: PythonImg, delay: 4.5, y: 490, x: -100 },
    { src: DjangoImg, delay: 4.1, y: 500, x: -500 },
    { src: ReactImg, delay: 4.9, y: 400, x: -450 },
    { src: BootstrapImg, delay: 5.0, y: 355, x: -70 },
    { src: TailwindImg, delay: 5.2, y: 520, x: -250 },
    { src: CSSImg, delay: 5.3, y: 400, x: -220 },
    { src: HTMLImg, delay: 5.4, y: 470, x: -340 },
    { src: FlaskImg, delay: 5.6, y: 570, x: -390 },
]

const FloatIcon = () => {
    return (
        <>
            {icons.map((icon, index) => (
                <motion.img
                    key={index}
                    initial={{ opacity: 0, y: 650, x: -280 }}
                    animate={{ opacity: 1, y: icon.y, x: icon.x }}
                    transition={{ delay: icon.delay }}

                    src={icon.src}
                    alt="icon"
                    className="absolute top-0 right-0 z-50 w-[10vh] h-[10vh]"
                />
            ))}
        </>
    );
}


export default FloatIcon