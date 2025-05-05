import React from 'react'
import p_img from "../assets/Image/hi.png"
import { Menu, SectionCards } from "../index"


const AboutMe = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-6 p-8 min-h-screen relative bg-gray-100">
        <div className='fixed top-[50vh] left-0'>
          <Menu />
        </div>
        {/* Blurred background image */}
        <img
          src={p_img}
          loading="lazy"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 z-0"
        />

        {/* Section Title */}
        <h1 className="text-8xl text-3D font-extrabold text-gray-800 z-10 absolute top-16 right-16">
          About Me
        </h1>

        {/* Profile image with decorative corners */}
        <div className="relative w-[75vh] h-[70vh] rounded-2xl overflow-hidden shadow-xl z-10">
          <img
            src={p_img}
            loading="lazy"
            alt="Profile"
            className="w-full h-full object-contain rounded-2xl"
          />
          {/* Decorative corner dots */}
          {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, idx) => (
            <div
              key={idx}
              className={`w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute ${pos}`}
            />
          ))}
        </div>

        {/* Description box */}
        <div className="w-[70vh] max-h-[70vh] bg-white rounded-2xl p-6 shadow-xl z-10 backdrop-blur-2xl bg-opacity-80">
          <div className='flex justify-between mb-4'>
            <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2  '></div>
            <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2 right-2 '></div>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">I'm Sudesh</h2>
          <p className="text-lg text-gray-700 mb-3 text-justify">
            A <strong>Full Stack Developer</strong> who loves building
            sleek, functional, and user-first applications from the ground up.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed text-justify">
            With a blend of creative thinking and logical problem-solving, I craft
            dynamic experiences for the web. Whether it's backend APIs or polished
            frontends, I bring the full package to the table.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-4 py-10">

        {/* About Me */}
        <SectionCards title="Me">
          <p className="text-justify">
            Hi, my name is <strong>Sudesh Sutihar</strong>. I'm originally from <strong>Barmajhiya, Saptari, Nepal</strong> and currently living in <strong>Dhumbarahi, Kathmandu</strong>. I&apos;m <strong>23 years old</strong>.
          </p>
        </SectionCards>

        {/* Why Developer */}
        <SectionCards title="Why I Became a Developer">
          <p>
            I&apos;m obsessed with designing and developing functional, beautiful user interfaces that *actually* solve problems and make life easier.
          </p>
        </SectionCards>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Skills */}
          <SectionCards title="Skills">
            <ul className="list-disc ml-6 text-xs text-gray-700 space-y-1">
              <li>HTML / CSS / Tailwind</li>
              <li>JavaScript / React.js</li>
              <li>Python / Django</li>
              <li>Git / GitHub</li>
            </ul>
          </SectionCards>

          {/* Hobbies */}
          <SectionCards title="Hobbies">
            <ul className="list-disc ml-6 text-xs text-gray-700 space-y-1">
              <li>Designing UI/UX</li>
              <li>Coding cool features</li>
              <li>Gaming (mostly FPS and RPGs)</li>
            </ul>
          </SectionCards>

          {/* Academic */}
          <SectionCards title="Academic">
            <ul className="list-disc ml-6 text-xs text-gray-700 space-y-1">
              <li>Bachelor&apos;s in Computer Science</li>
              <li>Working as Full Stack Developer</li>
              <li>Internship in Django & React Projects</li>
            </ul>
          </SectionCards>

          {/* Qualities */}
          <SectionCards title="Qualities">
            <ul className="list-disc ml-6 text-xs text-gray-700 space-y-1">
              <li>Quick learner</li>
              <li>Detail-oriented</li>
              <li>Great communicator</li>
              <li>Team player</li>
            </ul>
          </SectionCards>
        </div>
      </div>
    </>
  )
}

export default AboutMe