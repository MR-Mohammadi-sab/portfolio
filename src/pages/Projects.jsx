import { datas } from "../../projects";

// components/ProjectCard.jsx
export default function ProjectCard ( ) {
  return (
    <>
    <div className="bg-gray-100 dark:bg-gray-900/80 w-full text-center">
      <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-6 text-sm font-medium capitalize">
         Here are some of my  projects, <br />
          transforming ideas into real experiences

        </div>
      </div>
    <div className="bg-gray-100 dark:bg-gray-900/80 p-10 grid md:grid-cols-3 gap-3">
      
   { datas.map((project)=>   
    <div className="max-w-sm  rounded-lg  bg-gray-200 p-1 dark:bg-gray-800 mx-auto" key={project.id}> 
      {/* Project Image */}
      
      <figure className="h-48 w-full ">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
      </figure>
      
      {/* Content */}
      <figcaption className="p-6   dark:text-gray-100">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.desc}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-700 text-white dark:text-gray-900 dark:bg-gray-100 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex gap-3">
          <a 
            href={project.demoUrl}
            className="flex-1 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors"
            target="_blank"
          >
            Live Demo
          </a>
          <a 
            href={project.githubUrl}
            className="flex-1 py-2 border border-gray-300 dark:border-gray-600 text-center rounded-lg hover:border-blue-500 transition-colors"
            target="_blank"
          >
            View Code
          </a>
        </div>
      </figcaption>

      </div>)
 }
    </div>
    </>
  )
}