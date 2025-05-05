/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { RiHome9Fill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";
import { Link } from 'react-router-dom';
const icons = [
  { icon: <RiHome9Fill />, name: "home", duration: 0.5, delay: 0.5, y: -10 },
  { icon: <FaProjectDiagram />, name: "projects", duration: 0.5, delay: 0.8, y: -10 },
  { icon: <BiSolidUserDetail />, name: "aboutme", duration: 0.5, delay: 1.1, y: -10 },
  { icon: <MdContactPhone />, name: "contact", duration: 0.5, delay: 1.4, y: -10 },
];
const MenuBar = () => {
  return (
    <>
      <div className='absolute flex z-[1]
      lg:top-[5vh] lg:left-[20vh] lg:gap-[25vh]
      md:top-[5vh] md:left-[20vh] md:gap-[25vh]
      top-[2vh] left-[2vh] gap-[9vh]
      '>
        {icons.map((item, index) => (
          <Link
            key={index}
            to={`/${item.name}/`}
            className="text-bold lg:text-4xl md:text-4xl text-3xl"
            style={{ color: "var(--primary_color)" }}
          >
            <motion.span
              initial={{ opacity: 0, x: item.y }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: item.duration, delay: item.delay }}
              title={`${item.name.charAt(0).toUpperCase()}${item.name.slice(1)}`}
            >
              {item.icon}
            </motion.span>
          </Link>
        ))}
      </div>
    </>
  )
}

export default MenuBar