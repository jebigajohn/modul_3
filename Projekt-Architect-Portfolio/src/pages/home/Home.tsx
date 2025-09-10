import React from 'react'
import Button from '../../components/Button'
import Projects from '../projects/Projects'
import About from '../about/About'
import Contact from '../contact/Contact'

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="text-5xl uppercase opacity-20 font-extralight">
            Project
          </h1>
          <h2 className="text-5xl font-bold">Lorum</h2>
        </div>
        <div className=" relative ">
          <img
            src="/public/img/f5cf717ce39f7b063d3b3eee1f46b1be3255e988.jpg"
            alt=""
            className="w-[53vw] h-screen"
          />
          <div className="absolute bottom-0 left-0">
            <Button
              text="View Project"
              bgColor="bg-white"
              textColor="text-black"
              to="/Projects"
              width=""
              height=""
            />
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  )
}
