import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Nav/>
         <div className="min-h-screen bg-linear-to-r from-[#000015] via-[#22638f] to-[#000015] text-white px-4 py-10 md:py-14 lg:py-16 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-5">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-gray-200 leading-relaxed mb-4">
          Hi! I'm a <span className="font-semibold text-cyan-300">Frontend Web Developer </span>
          passionate about building fast, responsive, and visually engaging digital experiences.
        </p>

        <p className="text-gray-200 leading-relaxed mb-8">
          I enjoy turning ideas into clean, efficient code — focusing on performance, design precision,
          and creating smooth, intuitive user interfaces.
        </p>

        {/* What I Do */}
        <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
          What I Do
        </h2>

        <div className="space-y-5 mb-8">

          {/* Modern Frontend Development */}
          <div>
            <h3 className="text-lg md:text-xl font-medium text-cyan-200 mb-1">
              Modern Frontend Development
            </h3>
            <p className="text-gray-200 mb-1">I work with modern technologies like:</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Responsive & UI-Focused */}
          <div>
            <h3 className="text-lg md:text-xl font-medium text-cyan-200 mb-1">
              Responsive & UI-Focused
            </h3>
            <p className="text-gray-200 mb-1">I create layouts that work beautifully across all screen sizes:</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>Clean design</li>
              <li>Accessibility</li>
              <li>Pixel-perfect implementation</li>
            </ul>
          </div>

          {/* Performance & Best Practices */}
          <div>
            <h3 className="text-lg md:text-xl font-medium text-cyan-200 mb-1">
              Performance & Best Practices
            </h3>
            <p className="text-gray-200 mb-1">I ensure my projects follow:</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>Optimized performance</li>
              <li>Clean, maintainable code</li>
              <li>Modern workflows (Vite, Webpack, etc.)</li>
            </ul>
          </div>
        </div>

        {/* My Approach */}
        <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
          My Approach
        </h2>
        <p className="text-gray-200 leading-relaxed mb-3">
          I believe great frontend development blends technical skill with thoughtful design.
        </p>
        <ul className="list-disc list-inside text-gray-200 mb-8 space-y-1">
          <li>Fast</li>
          <li>Smooth</li>
          <li>User-friendly</li>
          <li>Future-ready</li>
        </ul>

        {/* Beyond the Code */}
        <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
          Beyond the Code
        </h2>
        <p className="text-gray-200 mb-1">
          When I'm not building UIs, I'm usually:
        </p>
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          <li>Exploring UI/UX trends</li>
          <li>Learning new frontend tools</li>
          <li>Experimenting with design systems</li>
          <li>Improving development workflows</li>
        </ul>

      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default About