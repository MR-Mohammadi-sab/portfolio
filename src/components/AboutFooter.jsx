import { Mail, Linkedin, Github } from "lucide-react"
export default function AboutFooter() {
  return (
        <footer className="w-full flex flex-col bg-gray-900/80 mt-10 px-10 py-4 " >
          <h1 className="text-2xl text-blue-300  rounded-lg hover:text-blue-400 transition-all font-bold">Contact</h1>
          <div className="space-x-6 flex flex-col md:flex-row">
            <div>
              <h2 className="text-xl font-semibold text-gray-300">Email</h2>
              <p className="text-gray-400">asf423796@gmail.com</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-300">Phone</h2>
              <p className="text-gray-400">+93 791 781 672</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-300">Socials</h2>
              <div className="flex gap-4 mt-2">
                <a href="https://linkedin.com/in/mohammad-asef-mohammadi-1b80a632b" target="_blank" className="flex  gap-2 text-blue-400 hover:underline">LinkedIn <span><Linkedin /></span></a>
                <a href="https://github.com/mr-mohammadi-sab" target="_blank" className="flex gap-2 text-gray-100 dark:text-gray-100 hover:underline">GitHub <Github /></a>
                <a href="mailto:asf423796@gmail.com"  className="flex gap-2 text-red-500 hover:underline">Email <span><Mail /></span></a>
              </div>
            </div>
          </div>
        </footer>
  )
}
