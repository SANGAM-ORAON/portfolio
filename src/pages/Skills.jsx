import React from "react";

const Skills = (props) => {
  return (
    <div >
    <div
      className="group w-[140px] sm:w-160px md:w-[180px] lg:w-[200px] 
                 flex flex-col items-center text-center 
                 backdrop-blur-md bg-white/5 border border-white/10 
                 rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.1)] 
                 transition-all duration-300 ease-in-out 
                 p-6 sm:p-8 md:p-10 
                 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)] hover:border-cyan-400 hover:-translate-y-2
                 active:shadow-[0_0_35px_rgba(34,211,238,0.3)] active:border-cyan-400 active:-translate-y-2">
      
      <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24">
        <img
          src={props.url}
          alt="logo"
          className="rounded-lg w-full h-full object-cover shadow-inner"
        />
      </div>

      <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg font-semibold tracking-wide 
                   group-hover:text-cyan-400 group-active:text-cyan-400">
        {props.lang}
      </p>
    </div>
    </div>
  );
};

export default Skills;
