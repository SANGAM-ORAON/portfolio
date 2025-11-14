import React from "react";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import {Link} from 'react-router-dom'
import Resume from '../assets/resume.pdf'

const Home = () => {
  return (
<div className="overflow-hidden text-white font-sans scroll-smooth bg-[#000015]">
<Nav/>
  {/* HOME SECTION */}
  <section className="bg-linear-to-r from-[#000015] via-[#22638f] to-[#000015] 
                     flex flex-col-reverse md:flex-row items-center justify-center 
                     min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 
                     py-12 transition-all duration-700 ease-in-out">

    {/* Left Content */}
    <div className="flex-1 text-center md:text-left space-y-6 animate-fadeIn">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold italic leading-tight drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
        SANGAM <span className="text-cyan-400">ORAON</span>
      </h1>
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-cyan-300 font-semibold tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
        FRONTEND DEVELOPER
      </h3>

      <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto md:mx-0 leading-relaxed opacity-90">
        I’m a Web Developer passionate about creating fast, responsive, and visually striking interfaces.
        Expert in React, Tailwind CSS, and UI design principles.
      </p>

      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-6">
        <button className="border border-cyan-400 text-white rounded py-2 px-6
                           hover:bg-cyan-400 hover:text-blue-950 active:scale-95 
                           shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]
                           transition-all duration-500 ease-in-out font-bold">
          <a href={Resume}>Resume</a>
        </button>

        <button className="border border-transparent rounded py-2 px-6 bg-white text-blue-950 
                           hover:border-cyan-400 hover:bg-blue-950 hover:text-white active:scale-95 
                           shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]
                           transition-all duration-500 ease-in-out font-bold">
           <Link to='/contact' onClick={() => window.scrollTo(0, 0)}>Hire Me</Link>
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-center mb-10 md:mb-0 transition-transform duration-700 ease-in-out">
      <img
        src="https://images.unsplash.com/photo-1674049404913-2005c02245fa?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
        alt="Sangam Oraon"
        className="w-3/4 sm:w-2/3 md:w-full max-w-sm md:max-w-md lg:max-w-lg 
                   rounded-xl border border-cyan-600 opacity-90 shadow-[0_0_40px_rgba(34,211,238,0.4)] 
                   hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] active:scale-105 
                   transition-all duration-700 ease-in-out"
      />
    </div>
  </section>

  {/* SKILLS SECTION */}
  <section className="bg-linear-to-r from-[#000015] via-[#22638f] to-[#000015] 
                     py-20 px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-700 ease-in-out">
    <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-14 tracking-wide drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-fadeInUp">
      My <span className="text-cyan-400">Skills</span>
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 justify-items-center">
      {[
        ["HTML", "https://i.pinimg.com/1200x/0e/7d/4a/0e7d4ad55cdc3db527af6c3d72f41ad0.jpg"],
        ["CSS", "https://i.pinimg.com/736x/62/5c/4f/625c4f7ce636407ccdb2d0abe993480d.jpg"],
        ["JavaScript", "https://i.pinimg.com/736x/62/a1/b5/62a1b5828c143b96946b166d17e4488c.jpg"],
        ["React", "https://i.pinimg.com/736x/84/d4/1f/84d41f2e8078d20a79d9e5d69fa28644.jpg"],
        ["Tailwind", "https://i.pinimg.com/736x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg"],
        ["Node JS", "https://i.pinimg.com/1200x/f3/4a/02/f34a0218dd2e38726c52ac763df55fa7.jpg"],
        ["Express JS", "https://i.pinimg.com/736x/da/ba/08/daba08a064f0f6f58da358da09e7d0da.jpg"],
        ["MongoDB", "https://i.pinimg.com/736x/94/78/14/94781454c39ce0724cfa73ea1aa4b618.jpg"],
        ["Git", "https://i.pinimg.com/1200x/a2/e2/9f/a2e29fc13256aecd5f4b700fc53c3e7b.jpg"],
        ["GitHub", "https://i.pinimg.com/1200x/b2/c5/e6/b2c5e65384b1b0ea4cd351b6155e1b29.jpg"],
      ].map(([lang, url]) => (
        <div
          key={lang}
          className="group w-[130px] sm:w-[150px] md:w-[170px] lg:w-[190px] 
                     flex flex-col items-center text-center rounded-2xl 
                     border border-cyan-400/50 backdrop-blur-lg bg-white/5 
                     shadow-[0_0_25px_rgba(34,211,238,0.3)] 
                     hover:shadow-[0_0_45px_rgba(34,211,238,0.8)] 
                     hover:border-cyan-400 active:scale-95 
                     transition-all duration-500 ease-in-out p-6 sm:p-8 md:p-10 hover:-translate-y-2 active:-translate-y-2">
          <img src={url} alt={lang} className="rounded-lg w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-cover shadow-inner" />
          <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg font-semibold tracking-wide group-hover:text-cyan-400 transition-all duration-300">
            {lang}
          </p>
        </div>
      ))}
    </div>
  </section>

  {/* PROJECTS SECTION */}
  <section className="bg-linear-to-r from-[#000015] via-[#22638f] to-[#000015] py-20 px-6 sm:px-10 md:px-16 lg:px-24 flex items-center justify-center transition-all duration-700 ease-in-out">
    <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 
                    bg-white/5 backdrop-blur-md border border-cyan-400/30 rounded-2xl 
                    shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)]
                    transition-all duration-700 ease-in-out p-8 sm:p-10 md:p-12">

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://i.pinimg.com/1200x/8a/40/90/8a4090f34d5e44b12b59cf71b11f68c5.jpg"
          alt="Projects Preview"
          className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] rounded-xl object-cover opacity-90 
                     shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.8)]
                     active:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 animate-fadeInUp">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-white tracking-wide drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
          PROJECTS & WORKS
        </h2>
        <h4 className="text-xl sm:text-2xl text-cyan-400 font-semibold drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">WANT TO VISIT?</h4>
        <button className="mt-4 border border-cyan-400 py-2 px-6 rounded-lg text-white font-semibold 
                           hover:bg-cyan-400 hover:text-blue-950 active:scale-95 
                           shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.8)]
                           transition-all duration-500 ease-in-out">
          <Link to='/projects' onClick={() => window.scrollTo(0, 0)}>Visit</Link>
        </button>
      </div>
    </div>
  </section>
  <Footer/>
</div>

  );
};

export default Home;
