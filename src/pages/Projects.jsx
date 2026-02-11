// components/ProjectCard.jsx
export default function ProjectCard ({ project }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex gap-3">
          <a 
            href={project.liveUrl}
            className="flex-1 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors"
          >
            Live Demo
          </a>
          <a 
            href={project.githubUrl}
            className="flex-1 py-2 border border-gray-300 dark:border-gray-600 text-center rounded-lg hover:border-blue-500 transition-colors"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}