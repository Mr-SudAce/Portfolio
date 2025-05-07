/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DjangoImg from "../assets/Image/djangoImg.png";
import PythonImg from "../assets/Image/pythonImg.png";
import ReactImg from "../assets/Image/reactImg.png";
import JSImg from "../assets/Image/jsImg.png";
import img from "../assets/Image/connection.png"
import { Menu, Bg } from "../index"
import { FaArrowRight } from 'react-icons/fa';




const projects = [
    {
        id: 1,
        title: "HandiCraft",
        iconname: "Django",
        icontype: DjangoImg,
        year: "2022",
        side: "left",
        description: "It is an Ecommerce site for those who are in rural area and have skill to create some home decor and can sell them from this platform. ",
        links: "https://www.github.com/Mr-SudAce/",
        foto: `https://picsum.photos/id/236/720`
    },
    {
        id: 2,
        title: "Dictionary",
        iconname: "React",
        icontype: ReactImg,
        year: "2024",
        side: "right",
        description: "Here we can able to search word meaning and learn new words",
        links: "https://www.github.com/Mr-SudAce/",
        foto: `https://picsum.photos/id/237/720`
    },
    {
        id: 3,
        title: "TechSpot",
        iconname: "Django",
        icontype: DjangoImg,
        year: "2024",
        side: "left",
        description: "It's a Ecommerce site where you can buy latest Electronic item and have best policy ",
        links: "https://www.github.com/Mr-SudAce/",
        foto: `https://picsum.photos/id/238/720`
    },
    {
        id: 4,
        title: "Authentication",
        iconname: "Python",
        icontype: PythonImg,
        year: "2025",
        side: "right",
        description: "Authentication using Pure Python",
        links: "https://www.github.com/Mr-SudAce/",
        foto: `https://picsum.photos/id/239/720`
    },
    {
        id: 5,
        title: "Clock",
        iconname: "Js",
        icontype: JSImg,
        year: "2023",
        side: "left",
        description: "Take Time and Enjoy it ",
        links: "https://www.github.com/Mr-SudAce/",
        foto: `https://picsum.photos/id/240/720`
    }
];



const Project = () => {
    return (
        <>

            <div className='fixed top-[50vh] z-[5]'>
                <Menu />
            </div>

            {/* <Bg /> */}
            <div className="relative  ">
                <motion.h1
                    initial={{ opacity: 0, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='text-3D text-8xl uppercase sticky font-extrabold pl-[10vh] py-6 mb-10 animate-gradient z-[2]'>
                    Projects
                </motion.h1>
                {/* Center vertical line */}

                {/* cards */}

                <div className='max-h-[78vh] overflow-auto p-2 no-scrollbar'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="absolute left-1/2 transform -translate-x-1/2 h-100 border-l-4 border-gray-300">
                    </motion.div>
                    {[...projects]
                        .sort((a, b) => a.year - b.year)
                        .map((project, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={index} className={`max-w-7xl mx-auto flex justify-${isLeft ? "end" : "start"} my-6`} >
                                    <div className={`w-full md:w-1/2 px-4 flex justify-${isLeft ? "start" : "end"}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                            className={`group relative bg-white dark:bg-neutral-900 border rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-3xl overflow-hidden flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                                        >
                                            {/* Year Tag */}
                                            <span
                                                className={`absolute top-4 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full z-10 ${isLeft ? "left-4 bgsecondary textprimary" : "right-4 bgprimary textmain"}`}
                                            >
                                                {project.year}
                                            </span>

                                            {/* Image */}
                                            <div className="relative w-full md:w-1/2 h-56 md:h-auto overflow-hidden">
                                                <Link to={`${project.id}`}>
                                                    <img
                                                        src={project.foto}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                        loading="lazy"
                                                    />
                                                </Link>
                                            </div>

                                            {/* Content */}
                                            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center space-y-4">
                                                <div className="flex items-center gap-3">
                                                    {project.iconname && (
                                                        <img
                                                            src={project.icontype}
                                                            alt={project.iconname}
                                                            className="w-8 h-8 object-contain"
                                                            title={project.iconname}
                                                        />
                                                    )}
                                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4">
                                                    {project.description || "No description available. Add one to show off your work!"}
                                                </p>

                                                <Link to={project.links} className='textmain flex justify-end'>
                                                    <FaArrowRight />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                            );
                        })}
                </div>
            </div>


        </>
    )
}

export default Project