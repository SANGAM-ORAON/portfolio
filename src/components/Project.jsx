import React from "react";
import {Link} from 'react-router-dom'

const Project = (props) => {
  return (
  <div className="bg-linear-to-r from-[#000015] via-[#22638f] to-[#000015] flex items-center justify-center py-10 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">

  {/* Inner Card */}
  <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 
                  bg-white/5 backdrop-blur-md border border-cyan-200 rounded-2xl hover:border-cyan-400
                  shadow-[0_0_25px_rgba(34,211,238,0.15)] p-8 sm:p-10 md:p-12  hover:scale-101
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-500 ease-in-out">

    {/* Left Section (Image) */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={props.url}
        alt="Projects Preview"
        className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-100 rounded-xl object-cover opacity-80
                   shadow-lg transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Right Section (Text + Button) */}
    <div className="flex flex-col items-center md:items-center text-center md:text-left gap-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide">
        {props.title}
      </h2>

      <h4 className="text-xl sm:text-2xl text-cyan-400 font-semibold">
        WANT TO VISIT?
      </h4>

      <button className="mt-4 border border-cyan-400 py-2 px-6 rounded-lg text-white font-semibold 
                         hover:bg-cyan-400 hover:text-blue-950 transition-all duration-300 
                         shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
        <Link to={props.link}>Visit</Link>
      </button>
    </div>
  </div>
</div>

  );
};

export default Project;
