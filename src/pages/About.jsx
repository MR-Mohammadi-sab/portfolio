import {ChevronDown } from "lucide-react"
import AboutFooter from "../components/AboutFooter";
const tech=['HTML','CSS','JAVASCRIPT','TAILWIND CSS','REACT','MYSQL'];
const familiarTech=['NEXTJS','ORCALE','BOOTSTRAP'];

export default function About(){
  return (
    <section className="pt-20 bg-gray-100  dark:bg-gray-900/80">
      <div className="max-w-6xl mx-auto px-6">

        <a href="#end">
        <div className="animate-bounce dark:text-gray-100 text-gray-900 flex gap-2"><ChevronDown /> <span className="text-2xl text-blue-500  rounded-lg hover:text-blue-600 transition-all font-bold">Contact</span></div></a>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/*  Image */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-2xl z bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center">
                <span className="text-9xl">👨‍💻</span>
              </div>
            </div>
            
            {/* Status Badge */}
            <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg">
              🎓 6th Semester
            </div>
          </div>

          {/* Intro Text */}
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300 mb-6 text-sm font-medium">
              👋 Hello! Let me introduce myself
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 dark:text-gray-100">
              I am <span className="text-blue-500">[Mohammad Asef]</span>
            </h1>
            
            {/* Short Description */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Computer Science student (6th Semester) | Web Developer passionate about creating beautiful and user-friendly digital experiences.
            </p>
            
            {/* Full Intro */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Since the first day of university, I knew programming was my path. 
              Now, I focus on building real-world projects using React and Next.js, 
              and I am actively looking for opportunities to work in a professional team 
              where I can contribute, learn, and grow.
            </p>

            {/* Skills  */}
            <div className="flex flex-wrap gap-3 mt-4">
                {tech.map((skil)=><span key={skil} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium dark:text-gray-100">{skil}</span>)}
            </div>
            {/* Skills  familiar*/}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-2xl text-blue-500  rounded-lg hover:text-blue-600 transition-all font-bold">Familiar to</span>
                {familiarTech.map((skil)=><span key={skil}  className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium dark:text-gray-100">{skil}</span>)}
            </div>


          </div>
        </div>
      </div>

        <AboutFooter />
        <div id="end"></div>
    </section>
  )
}


