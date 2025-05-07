import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { LuMail, LuMailOpen } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Socialmedia = () => {
    return (
        <>
            <div className='flex gap-2'>
                {/* Linkedin */}
                <button
                    class="group hover:w-44 h-10 w-10 hover:bg-sky-600 relative rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
                >
                    <FaLinkedin className="w-5 h-5 shrink-0" />
                    <Link target='_blank' to="https://www.linkedin.com/in/sudesh-sharma/">
                        <span
                            class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all text-xs">
                            sudesh-sharma
                        </span>
                    </Link>
                </button>
                {/* Github */}
                <button
                    class="group hover:w-44 h-10 w-10 hover:bg-gray-600 relative bg-transparent rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
                >
                    <FaGithub className="w-5 h-5 shrink-0" />
                    <Link target='_blank' to="https://github.com/Mr-SudAce/">
                        <span
                            class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all text-xs">
                            Mr-SudAce
                        </span>
                    </Link>
                </button>
                {/* E-Mail */}
                <button
                    class="group hover:w-44 h-10 w-10 hover:bg-gray-400 relative bg-transparent rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
                >
                    <LuMailOpen className="w-5 h-5 shrink-0" />
                    <a target="_blank" href="mailto:sudacesrma2058@gmail.com">
                        <span class="border-l-2 pl-2 ml-2 text-xs opacity-0 scale-x-0 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100">
                            Sudesh Sharma
                        </span>
                    </a>
                </button>
                {/* facebook */}
                <button
                    class="group hover:w-44 h-10 w-10 hover:bg-blue-600 relative bg-transparent rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
                >
                    <FaFacebook className="w-5 h-5 shrink-0" />
                    <Link target='_blank' to="https://www.facebook.com/sudace.srma">
                        <span
                            class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all text-xs">sudace.srma
                        </span>
                    </Link>
                </button>
                {/* Instagram */}
                <button
                    class="group hover:w-44 h-10 w-10 hover:bg-orange-600 relative bg-transparent rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
                >
                    <FaInstagram className="w-5 h-5 shrink-0" />
                    <Link target='_blank' to="https://www.instagram.com/sudacesrma/">
                        <span
                            class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all text-xs">sudacesrma
                        </span>
                    </Link>
                </button>

            </div>

        </>
    )
}

export default Socialmedia