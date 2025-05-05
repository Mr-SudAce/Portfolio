import React from 'react'
import p_img from "../assets/Image/hi.png"
import { Menu } from "../index"



const AboutMe = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-6 p-8 min-h-screen relative bg-gray-100">
      <Menu />
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
        <div className="relative w-[75vh] h-[70vh] rounded-2xl overflow-hidden shadow-2xl z-10">
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
        <div className="w-[70vh] max-h-[70vh] bg-white rounded-2xl p-6 shadow-2xl z-10 backdrop-blur-2xl bg-opacity-80">
          <div className='flex justify-between mb-4'>
            <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2  '></div>
            <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2 right-2 '></div>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">I'm Sudesh</h2>
          <p className="text-lg text-gray-700 mb-3">
            A passionate <strong>Full Stack Developer</strong> who loves building
            sleek, functional, and user-first applications from the ground up.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            With a blend of creative thinking and logical problem-solving, I craft
            dynamic experiences for the web. Whether it's backend APIs or polished
            frontends, I bring the full package to the table.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-4 py-10">

        {/* About Me */}
        <section className='max-h-40 bg-white rounded-2xl p-6 shadow-2xl z-10 backdrop-blur-2xl bg-opacity-80 '>
          <div className='flex justify-between mb-3'>
            <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2  '></div>
            <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2 right-2  '></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Me</h2>
          <p className="text-md text-gray-600 ml-6 text-justify">
            Hi, my name is <strong>Sudesh Sutihar</strong>. I'm originally from <strong>Barmajhiya, Saptari, Nepal</strong> and currently living in <strong>Dhumbarahi, Kathmandu</strong>. I&apos;m <strong>23 years old</strong>.
          </p>
        </section>

        {/* Why Developer */}
        <section className='max-h-40 bg-white rounded-2xl p-6 shadow-2xl z-10 backdrop-blur-2xl bg-opacity-80'>
          <div className='flex justify-between mb-3'>
            <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2  '></div>
            <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2 right-2  '></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Why I Became a Developer</h2>
          <p className="text-md text-gray-600 ml-6">
            I&apos;m obsessed with designing and developing functional, beautiful user interfaces that *actually* solve problems and make life easier.
          </p>
        </section>

        <div className='grid grid-cols-4 justify-between gap-3 '>
          {/* Skills */}
          <section className='max-h-72 bg-white rounded-2xl p-6 shadow-2xl z-10 backdrop-blur-2xl bg-opacity-80'>
            <div className='flex justify-between mb-3'>
              <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2  '></div>
              <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2 right-2  '></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Skills</h2>
            <ul className="list-disc ml-10 text-gray-700 text-sm space-y-1">
              <li>HTML / CSS / Tailwind</li>
              <li>JavaScript / React.js</li>
              <li>Python / Django</li>
              <li>Git / GitHub</li>
            </ul>
          </section>

          {/* Hobbies */}
          <section className='max-h-72 bg-white rounded-2xl p-6 shadow-2xl z-10 backdrop-blur-2xl bg-opacity-80'>
            <div className='flex justify-between mb-3'>
              <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2  '></div>
              <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2 right-2  '></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Hobbies</h2>
            <ul className="list-disc ml-10 text-gray-700 text-sm space-y-1">
              <li>Designing UI/UX</li>
              <li>Coding cool features</li>
              <li>Listening to lo-fi & EDM</li>
              <li>Gaming (mostly FPS and RPGs)</li>
            </ul>
          </section>

          {/* Qualities */}
          <section className='max-h-72 bg-white rounded-2xl p-6 shadow-2xl z-10 backdrop-blur-2xl bg-opacity-80'>
            <div className='flex justify-between mb-3'>
              <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2  '></div>
              <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2 right-2  '></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualities</h2>
            <ul className="list-disc ml-10 text-gray-700 text-sm space-y-1">
              <li>Quick learner</li>
              <li>Detail-oriented</li>
              <li>Great communicator</li>
              <li>Team player</li>
            </ul>
          </section>

          {/* Qualification */}
          <section className='max-h-72 bg-white rounded-2xl p-6 shadow-2xl z-10 backdrop-blur-2xl bg-opacity-80'>
            <div className='flex justify-between mb-3'>
              <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2  '></div>
              <div className='w-4 h-4 bg-gradient-to-tr shadow-lg shadow-black from-white to-gray-400 rounded-full absolute top-2 right-2  '></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualifications</h2>
            <ul className="list-disc ml-10 text-gray-700 text-sm space-y-1">
              <li>Bachelor&apos;s in Computer Science</li>
              <li>Working as Full Stack Developer <small>(since 2year)</small></li>
              <li>Internship Experience in Django and React Projects</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default AboutMe