import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-[#000015] to-blue-950 border-b border-gray-900 p-4 text-white">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <h4 className="brand text-lg md:text-4xl font-semibold bg-linear-to-r from-[#2b2b9b] to-[#2525f4] text-transparent bg-clip-text">MAGNAS</h4>

        {/* Hamburger button (visible on small screens) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 text-sm md:text-base">
          <h4 className=" hover:text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-fadeInUp"><Link to='/'>Home</Link></h4>
          <h4 className=" hover:text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-fadeInUp"><Link to='/skills'>Skills</Link></h4>
          <h4 className=" hover:text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-fadeInUp"><Link to='/projects'>Projects</Link></h4>
          <h4 className=" hover:text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-fadeInUp"><Link to='/about'>About</Link></h4>
          <h4 className=" hover:text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-fadeInUp"><Link to='/contact'>Contact</Link></h4>
        </div>
      </div>

      {/* Mobile sidebar menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#000015]/95 border-l border-blue-900 text-white transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl font-bold focus:outline-none"
        >
          ×
        </button>

        {/* Menu items */}
        <div className="mt-16 flex flex-col gap-6 px-6 text-base">
          <h4><Link to='/'>Home</Link></h4>
          <h4><Link to='/skills'>Skills</Link></h4>
          <h4><Link to='/projects'>Projects</Link></h4>
          <h4><Link to='/about'>About</Link></h4>
          <h4><Link to='/contact'>Contact</Link></h4>
        </div>
      </div>

      {/* Optional background overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}
