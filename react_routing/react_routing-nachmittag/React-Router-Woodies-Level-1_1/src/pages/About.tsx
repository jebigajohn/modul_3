import React from 'react'

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-wrap items-center w-full gap-4">
          <div className="flex gap-2 shrink-0">
            <img src="/img/Group 28.png" alt="" />
            <h1 className="text-3xl font-bold text-gray-600">Who we are</h1>
          </div>
          <hr className="flex-1 border-t-2 border-gray-300" />
          <h2 className="opacity-10 font-bold text-5xl md:text-7xl uppercase">
            About us
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <img src="../../public/img/About.png" alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl text-gray-600">
              <span className="font-bold">Woodies</span> is the{' '}
              <span className="font-bold">
                home of <br /> modern wooden furniture
              </span>
            </h1>
            <p className="text-2xl">
              the answer to your need for furniture <br /> with shapes, sizes
              and colors.{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
