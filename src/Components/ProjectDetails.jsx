import React from 'react'
import DjangoImg from "../assets/Image/djangoImg.png";
import PythonImg from "../assets/Image/pythonImg.png";
import ReactImg from "../assets/Image/reactImg.png";
import JSImg from "../assets/Image/jsImg.png";
import { useParams } from 'react-router-dom';


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



const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    return (
        <div>
            <h1>Product Details</h1>
            {project.title}
        </div>
    )
}

export default ProjectDetails