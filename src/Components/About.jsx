
const About = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "React.js, Tailwind CSS, Bootstrap, HTML5, CSS3, JavaScript.",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Backend Integration",
      description: "Python, Django, PHP, REST APIs, Database Management.",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      description: "Responsive Design, Accessibility Standards, User-First Applications.",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Freelance / Projects",
      period: "Present",
      description: "Building sleek, functional, and user-first applications from the ground up using React, Django, and other modern technologies."
    },
    {
      role: "Bachelor's in Computer Application (BCA)",
      company: "Academic",
      period: "Graduated",
      description: "Focused on computer applications, software development, and programming fundamentals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Passionate about creating web experiences
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I am a Full Stack Developer originally from Barmajhiya, Saptari, Nepal. I love solving complex problems and learning new skills.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {skills.map((skill, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      {skill.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{skill.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="lg:text-center mb-10">
            <h3 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Experience & Education
            </h3>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-indigo-600 pl-4 ml-2">
                <h4 className="text-xl font-bold text-gray-900">{job.role}</h4>
                <p className="text-indigo-600 font-medium">{job.company}</p>
                <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;