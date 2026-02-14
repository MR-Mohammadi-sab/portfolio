// components/Hero.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center bg-gray-100 dark:bg-gray-900/80 pb-4">
      <section className="max-w-6xl mx-auto px-6">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-6 text-sm font-medium">
          👨‍💻 Computer Science Student • Frontend Developer
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl dark:text-gray-100 text-gray-900 lg:text-7xl font-extrabold leading-tight mb-6">
          Building Modern
          <span className="text-blue-500 block">
            Web Experiences
          </span>
          with React
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed">
          Passionate Frontend Developer focused on creating 
          scalable, responsive, and user-centered web applications.
          Currently pursuing a Bachelor's degree in Computer Science 
          and actively seeking internship and full-time opportunities.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/projects"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:scale-105 shadow-md"
          >
            View Projects
          </Link>

          <Link 
            to="/about"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all hover:scale-105 dark:text-gray-100"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
