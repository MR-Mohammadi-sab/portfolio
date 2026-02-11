import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu,X } from "lucide-react";


const navElements=[
  { path: '/', label: 'Home'},
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'about',},
  { path: '/resume', label: 'resume'},
  
]
const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [open, setOpen] = useState(false)
  
  
  useEffect(
    function toggleTheme(){
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        localStorage.setItem('theme',theme)},[theme])
  return (
    <nav className=" bg-gray-100 dark:bg-gray-900/80">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-start  justify-between relative">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div >
                <img src="../../public/my.jpg" alt="my picture" className="w-24 h-24 rounded-4xl md:w-32 md:h-32 object-cover" />
            </div>
            <span className="font-bold lg:text-xl select-none dark:text-gray-100 text-sm text-gray-800">Mohammad Asef <br /> Mohammadi</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 mt-4">
            {navElements.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className="hover:text-blue-500 text-gray-700 dark:text-gray-100 transition-colors uppercase font-bold text-sm"
              >
                {item.label}
              </NavLink>
              
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="text-2xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center justify-center"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden dark:text-gray-100 cursor-pointer absolute right-2 top-2" onClick={()=>setOpen(prev=>!prev)}>
            {open?<X size={32}/>:<Menu  size={32}/>}
          </button>

      {  open&& <div className="flex flex-col justify-center  md:hidden items-center gap-8 mt-4 z-50 mr-28">
            {navElements.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className="hover:text-blue-500 text-gray-700 dark:text-gray-100 transition-colors uppercase font-bold text-sm"
              >
                {item.label}
              </NavLink>
              
            ))}

               {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="text-2xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center justify-center"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            
          </div>}
          
        </div>
      </div>
    </nav>
  )
}