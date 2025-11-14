import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Skills = () => {
  return (
    <div>
        <Nav/>
         <section className="bg-linear-to-r from-[#000015] via-[#22638f] to-[#000015] 
                     py-20 px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-700 ease-in-out">
    <h2 className="text-center text-cyan-400 text-3xl sm:text-4xl md:text-5xl font-bold mb-14 tracking-wide drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-fadeInUp">
      Skills
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
  <Footer/>

    </div>
  )
}

export default Skills