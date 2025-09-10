import React from 'react'
import Button from '../../components/Button'

export default function ProjectsSection() {
  return (
    <>
      <div className="flex  gap-10">
        <div className="relative">
          <div>
            <img
              src="/public/img/projects_01.png"
              alt=""
              className="w-[570px] h-[255px] opacity-80  brightness-20 "
            />
            <h1 className="absolute font-bold text-6xl text-white  left-10 top-10">
              Sample <br />
              Project
            </h1>
            <div className="absolute left-8 top-40">
              <Button
                text="View more"
                bgColor="bg-transparent"
                textColor="text-white"
                to="/projects"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src="/public/img/projects_02.png"
            alt=""
            className="w-[570px] h-[255px] "
          />
        </div>
      </div>
      <div className="flex gap-9">
        <img
          src="/public/img/projects_03.png"
          alt=""
          className="w-[270px] h-[255px]"
        />
        <img
          src="/public/img/projects_04.png"
          alt=""
          className="w-[470px] h-[255px]"
        />
        <img
          src="/public/img/projects_05.png"
          alt=""
          className="w-[370px] h-[255px] "
        />
      </div>
      <div className="flex justify-end">
        <Button
          to="/projects"
          text="All Projects"
          bgColor="bg-[#333333]"
          textColor="text-white"
          width="w-70"
          height="h-20"
        />
      </div>
    </>
  )
}
