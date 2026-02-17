import { motion as Motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "React.js, JavaScript (ES6+), HTML, CSS, Tailwind, Bootstrap.",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Backend Development",
      description: "Python, Django, Django REST Framework, SQLite3.",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "Tools & Optimization",
      description: "Git/GitHub, API integration, Responsive Web Design, Debugging & Optimization.",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const education = [
    {
      degree: "Bachelor in Computer Application (BCA)",
      institution: "Lumbini Academic College, Kathmandu",
      period: "2020 AD – 2025 AD"
    },
    {
      degree: "+2 High School",
      institution: "National Ideal Boarding High School, Kathmandu",
      period: "2018 AD – 2020 AD"
    },
    {
      degree: "S.E.E.",
      institution: "National Ideal Boarding High School, Kathmandu",
      period: "2017 AD"
    }
  ];

  const experience = [
    {
      role: "Leveling Up: Full Stack Skills",
      company: "Advanced Learning & Projects",
      period: "2024",
      description: "Integrated React.js with Django backend. Built REST APIs using DRF. Implemented JWT auth, cart systems, and product filtering. Focused on responsive design with Tailwind CSS and Bootstrap."
    },
    {
      role: "First Steps in Web Development",
      company: "Foundational Learning",
      period: "2023",
      description: "Started learning Python and Django. Built small CRUD apps and blog systems. Learned HTML, CSS, JavaScript fundamentals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Journey & Goals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I am a Full Stack Developer originally from Barmajhiya, Saptari, Nepal. I love solving complex problems and learning new skills.
          </p>

        </Motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {skills.map((skill, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                      {skill.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{skill.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{skill.description}</p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="lg:text-center mb-10">
            <h3 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Timeline
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experience.map((job, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-primary pl-4">
                <h4 className="text-xl font-bold text-gray-900">{job.role}</h4>
                <p className="text-primary font-medium">{job.company}</p>
                <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                <p className="text-gray-600">{job.description}</p>
              </Motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="lg:text-center mb-10">
            <h3 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Education
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 pt-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-6 border-l-4 border-primary hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Current Focus</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Master advanced backend concepts: caching, async tasks, deployment, and scalable API design.</li>
              <li>Build full-featured full stack projects with clean architecture.</li>
              <li>Optimize portfolio with real-world production-ready projects for job applications.</li>
            </ul>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Career Goal</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Become a strong Backend Developer, capable of designing scalable systems.</li>
              <li>Transition to Full Stack Developer, managing both backend logic and frontend experience.</li>
              <li>Create apps that are user-friendly, performant, and production-ready.</li>
            </ul>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📜 Certifications</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Certified Python-Django Course (Mindrisers Institute of Technology)
              </li>
            </ul>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;