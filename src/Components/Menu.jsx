/* eslint-disable no-unused-vars */
import React from 'react'
import { RiHome9Fill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const icons = [
    { icon: <RiHome9Fill />, name: "home", duration: 0.5, delay: 0.5, y: -100 },
    { icon: <FaProjectDiagram />, name: "projects", duration: 0.5, delay: 0.8, y: -100 },
    { icon: <BiSolidUserDetail />, name: "aboutme", duration: 0.5, delay: 1.1, y: -100 },
    { icon: <MdContactPhone />, name: "contact", duration: 0.5, delay: 1.4, y: -100 },
];


const Menu = () => {
    return (
        <div className=' flex flex-col absolute left-5 max-h-full h-full justify-center z-[1]'>

            {icons.map((item, index) => (

                <div key={index}>
                    <Link to={`/${item.name}`}>
                        <motion.span
                            initial={{ opacity: 0, x: item.y }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: item.duration, delay: item.delay }}
                            className='text-4xl p-1  shadow-lg rounded-3' title={`${item.name.charAt(0).toUpperCase()}${item.name.slice(1)}`}
                        >
                            {item.icon}
                        </motion.span>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Menu