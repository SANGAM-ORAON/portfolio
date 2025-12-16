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
          url="https://images.unsplash.com/photo-1605270012917-bf157c5a9541?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ja3RhaWxzfGVufDB8fDB8fHww"
          title="COCKTAILS"
          link="https://cocktails-dusky.vercel.app/"
        />
          <Project
            url="https://plus.unsplash.com/premium_photo-1661964030420-15481be20d5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRpZ2l0YWwlMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D"
            title="AGENCY"
            link="https://project-1-beige-seven.vercel.app/"
          />
          <Project
            url="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww"
            title="PORTFOLIO"
            link="https://portfolio-cyan-psi-92.vercel.app/"
          />
        <Project
          url="https://images.unsplash.com/photo-1679110451343-f3e151ba42f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNOQUtFJTIwR0FNRXxlbnwwfHwwfHx8MA%3D%3D"
          title="SNAKE GAME"
          link="https://snake-game-two-lac.vercel.app/"
        />
        <Project
          url="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UkVTVU1FfGVufDB8fDB8fHww"
          title="RESUME BUILDER"
          link="https://resume-builder-seven-sable.vercel.app/"
        />
        <Project
          url="https://images.unsplash.com/photo-1676287569521-20f0fe96eebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VE8lMjBET3xlbnwwfHwwfHx8MA%3D%3D"
          title="TO-DO"
          link="https://to-do-app-beta-sooty.vercel.app/"
        />
        <Project
          url="https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D"
          title="WEATHER"
          link="https://weather-app-ecru-two-58.vercel.app/"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
