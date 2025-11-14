import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Resume from '../assets/resume.pdf'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <Nav/>
        <div className="min-h-screen bg-linear-to-r from-[#000015] via-[#22638f] to-[#000015] text-white px-4 py-10 md:py-14 lg:py-16 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4">
          Contact Me
        </h1>

        {/* Intro */}
        <p className="text-gray-200 leading-relaxed mb-8 max-w-2xl">
          Feel free to reach out for collaborations, project opportunities, or just to say hello!
          I'm always open to connecting and discussing new ideas.
        </p>

        {/* Contact Cards */}
        <div className="grid gap-5 md:grid-cols-2 mb-10">

          {/* Email */}
          <div className="bg-white/10 p-5 rounded-lg border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-cyan-300 mb-1">Email</h3>
            <p className="text-gray-200">sangamoraon07@gmail.com</p>
          </div>

          {/* GitHub */}
          <div className="bg-white/10 p-5 rounded-lg border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-cyan-300 mb-1">GitHub</h3>
            <a
              href="https://github.com/SANGAM-ORAON/"
              target="_blank"
              className="text-gray-200 underline hover:text-cyan-300 transition"
            >
              github.com/SANGAM-ORAON
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-white/10 p-5 rounded-lg border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-cyan-300 mb-1">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/sangam-oraon-a0a684309/"
              target="_blank"
              className="text-gray-200 underline hover:text-cyan-300 transition"
            >
              linkedin.com/SANGAM-ORAON
            </a>
          </div>

          {/* Location */}
          <div className="bg-white/10 p-5 rounded-lg border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-cyan-300 mb-1">Location</h3>
            <p className="text-gray-200">Jharkhand, India</p>
          </div>
        </div>

        {/* Resume Button */}
        <div className="mb-10">
          <a
            href={Resume}
            download
            className="inline-block bg-cyan-300 text-black px-6 py-2 rounded-md font-semibold hover:scale-105 hover:bg-blue-950 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

        {/* Contact Form */}
        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
          Send a Message
        </h2>
        <ContactForm/>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Contact



