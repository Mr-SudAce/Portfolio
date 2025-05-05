/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DjangoImg from "../assets/Image/djangoImg.png";
import PythonImg from "../assets/Image/pythonImg.png";
import ReactImg from "../assets/Image/reactImg.png";
import JSImg from "../assets/Image/jsImg.png";

import { Menu } from "../index"




const projects = [
    {
        id: 1,
        title: "HandiCraft",
        iconname: "Django",
        icontype: DjangoImg,
        year: "2022",
        side: "left",
        description: "shhdchsdbkhsdvbkshdvbksbcanasc kdjsbvks,cakjscksadbsdb ks kcjsdbcshhdchsdbkhsdvbkshdvbksbcanasc kdjsbvks,cakjscksadbsdb ks kcjsdbcshhdchsdbkhsdvbkshdvbksbcanasc kdjsbvks,cakjscksadbsdb ks kcjsdbcshhdchsdbkhsdvbkshdvbksbcanasc kdjsbvks,cakjscksadbsdb ks kcjsdbc",
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
        description: "shhdchsdbkhsdvbkshdvbksbcanasc kdjsbvks,cakjscksadbsdb ks kcjsdbc",
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
        description: "shhdchsdbkhsdvbkshdvbksbcanasc kdjsbvks,cakjscksadbsdb ks kcjsdbc",
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
        description: "shhdchsdbkhsdvbkshdvbksbcanasc kdjsbvks,cakjscksadbsdb ks kcjsdbc",
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
        description: "shhdchsdbkhsdvbkshdvbksbcanasc kdjsbvks,cakjscksadbsdb ks kcjsdbc",
        links: "https://www.github.com/Mr-SudAce/",
        foto: `https://picsum.photos/id/240/720`
    },
    {
        id: 6,
        title: "Clock",
        iconname: "Js",
        icontype: JSImg,
        year: "2021",
        side: "left",
        description: "shhdchsdbkhsdvbkshdvbksbcanasc kdjsbvks,cakjscksadbsdb ks kcjsdbc",
        links: "https://www.github.com/Mr-SudAce/",
        foto: `https://picsum.photos/id/241/720`
    },
];



const Project = () => {
    return (
        <>

            <motion.div initial={{ opacity: 0, y: -10000, }}
                animate={{ opacity: 1, y: -900 }}
                transition={{ duration: 1.2, delay: 0 }}
                className='fixed bg-red-700'>
                <div className='absolute transition-all
                            h-[200vh] w-[250vh] rotate-45
                            lg:h-[190vh] lg:w-[350vh] lg:rotate-45 lg:top-0
                            md:h-[200vh] md:w-[550vh] md:rotate-45 md:top-[200vh]
                            '
                    style={{
                        backgroundColor: "var(--secondary_color)"
                    }}
                ></div>
            </motion.div>


            <motion.h1
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-3D text-8xl uppercase absolute font-extrabold lg:left-6 md:left-6 py-6 mb-10 top-0 animate-gradient'>
                Projects
            </motion.h1>

            <div className='fixed top-[50vh] z-[1]'>
                <Menu />
            </div>

            <div className="relative w-full lg:mt-[17vh] md:mt-[40vh] mt-[20vh] pb-12">

                {/* Center vertical line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute left-1/2 transform -translate-x-1/2 h-[98%] border-l-4 border-gray-300"></motion.div>

                {/* cards */}
                {[...projects]
                    .sort((a, b) => a.year - b.year)
                    .map((project, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={index} className={`w-full flex justify-${isLeft ? "end" : "start"} my-2 relative`}
                            >
                                <div className={`w-1/2 px-4 flex justify-${isLeft ? "start" : "end"}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: index + 1.5 }}
                                        viewport={{ once: true }}
                                        className={`group flex mx-16 ${isLeft ? "items-start" : "items-end justify-end"}  ${isLeft ? "bgsecondary" : "bgprimary"} border border-gray-200 rounded-2xl shadow-md hover:shadow-xl`}
                                    >
                                        <div className={`flex flex-col md:flex-row items-center relative gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                            <p className={`text-md font-extrabold uppercase mb-4 tracking-wide absolute p-2 m-0 rounded-xl top-0 border 
                                                    ${isLeft ? "textprimary bgsecondary lg:-left" : " textsecondary bgprimary lg:-right"}-[12.6vh] 
                                                    ${isLeft ? "md:-left" : "md:-right"}-[31.6vh] 
                                                    ${isLeft ? "-left" : "-right"}-[13vh]`}>
                                                {project.year}
                                            </p>
                                            <div className={`flex flex-col max-w-[25vh] min-w-[10vh] ${isLeft ? "items-start ml-2" : "items-end mr-2"}`}>
                                                <h3 className="text-md font-bold textmain group-hover:textmain transition-colors duration-300  truncate overflow-hidden whitespace-nowrap">
                                                    {project.title}
                                                </h3>
                                                <p className={`text-sm font-semibold mb-1 ${isLeft ? "textprimary" : "textsecondary"}`}>
                                                    {project.iconname ? (
                                                        <img className={`w-7 object-contain ${isLeft ? "bgprimary rounded-lg" : ""}`}
                                                            src={project.icontype}
                                                            alt={project.iconname}
                                                            title={project.iconname}
                                                        />
                                                    ) : (
                                                        project.iconname
                                                    )}
                                                </p>

                                            </div>
                                            <div className=''>
                                                <Link to={`${project.id}`}>
                                                    <img className={` object-cover border
                                                    ${isLeft ? "lg:rounded-r-2xl" : "md:rounded-l-2xl"}
                                                    ${isLeft ? "md:rounded-r-2xl" : "md:rounded-l-2xl"}
                                                    ${isLeft ? "rounded-r-2xl" : "rounded-l-2xl"}
                                                    `} loading='lazy' width={200}
                                                        src={project.foto} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}


            </div>
        </>
    )
}

export default Project