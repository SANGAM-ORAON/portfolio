import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Project from "../components/Project";

const Projects = () => {
  return (
    <div>
      <Nav />
      <div>
        <h2 className="bg-linear-to-r from-[#000015] via-[#22638f] to-[#000015] flex justify-center items-center  text-3xl sm:text-4xl md:text-5xl  py-20 text-cyan-300 font-bold">PROJECTS</h2>
        <Project
          url="https://images.unsplash.com/photo-1679110451343-f3e151ba42f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNOQUtFJTIwR0FNRXxlbnwwfHwwfHx8MA%3D%3D"
          title="SNAKE GAME"
          link="https://snake-game-two-lac.vercel.app/"
        />
        <Project
          url="https://images.unsplash.com/photo-1663882658055-40f1d4249867?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHx3ZWJzaXRlfGVufDB8fDB8fHww"
          title="Vision Craft"
          link="https://project-1-beige-seven.vercel.app/"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
