import { motion as Motion } from 'framer-motion';

const projects = [
  {
    title: 'HandiCraft',
    description: 'An e-commerce platform for handicraft products. Features include product listing, cart management, and user authentication.',
    tags: ['Django', 'Python', 'HTML/CSS'],
    link: 'https://github.com/Mr-SudAce/',
    image: 'https://picsum.photos/id/236/720/400'
  },
  {
    title: 'TechSpot',
    description: 'A technology blog and news aggregator. Allows users to read latest tech news and articles.',
    tags: ['Django', 'Python', 'Bootstrap'],
    link: 'https://github.com/Mr-SudAce/',
    image: 'https://picsum.photos/id/238/720/400'
  },
  {
    title: 'Dictionary App',
    description: 'A modern dictionary application providing definitions, synonyms, and antonyms using a public API.',
    tags: ['React', 'API Integration', 'CSS'],
    link: 'https://github.com/Mr-SudAce/',
    image: 'https://picsum.photos/id/237/720/400'
  },
  {
    title: 'Authentication System',
    description: 'A robust user authentication system supporting login, registration, and password recovery.',
    tags: ['Python', 'Security', 'Backend'],
    link: 'https://github.com/Mr-SudAce/',
    image: 'https://picsum.photos/id/239/720/400'
  },
  {
    title: 'Raktabandhan - Blood Donation System',
    description: 'Developed donor registration and blood-group search system using Flask. Designed efficient filtering logic to improve emergency access. Created clean and responsive user interface.',
    tags: ['Flask', 'Python', 'Full Stack'],
    link: 'https://github.com/Mr-SudAce/',
    image: 'https://picsum.photos/id/249/720/400'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Key Projects
          </p>
        </Motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                  <p className="mt-3 text-base text-gray-500">{project.description}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-text">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:text-primary-hover transition-colors font-medium">
                    View Code &rarr;
                  </a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;