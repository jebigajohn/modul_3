import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-md gap-5">
        <h1 className="text-3xl">
          Are you looking for{' '}
          <span className="font-bold">
            woodden <br /> furniture
          </span>{' '}
          for your place?
        </h1>
        <h2 className="text-6xl leading-snug">
          This is the <br /> Right Place
        </h2>
        <button className="border-2 bg-[#DAA520] text-white p-2 rounded-sm hover:cursor-pointer w-45 ">
          <Link to={`/products`}></Link>
          Explore Categories
        </button>
      </div>
      <div className="flex flex-col w-md">
        <img src="../../public/img/Home.png" alt="" />
      </div>
    </>
  )
}
