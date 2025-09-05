import React from 'react'
import NavigationLink from '../components/NavigationLink'

export default function Products() {
  return (
    <>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-wrap items-center w-full gap-4">
          <div className="flex gap-2 shrink-0">
            <img src="/img/Group 28.png" alt="" />
            <h1 className="text-3xl font-bold text-gray-600">What we have</h1>
          </div>
          <hr className="flex-1 border-t-2 border-gray-300" />
          <h2 className="opacity-10 font-bold text-5xl md:text-7xl uppercase">
            Products
          </h2>
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          {/* Card 1 */}
          <div className="relative">
            <img
              src="/img/Tisch.png"
              alt="Tisch"
              className="max-w-[250px] w-full"
            />
            <h1 className="absolute bottom-80 left-5 font-bold cursor-default">
              Jenson
            </h1>
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#DAA520] text-white rounded-sm px-4 py-2">
              <NavigationLink to="/products/jenson" text="Shop now" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="relative">
            <img
              src="/img/Stuhl.png"
              alt="Stuhl"
              className="max-w-[250px] w-full"
            />
            <h1 className="absolute bottom-80 left-5 font-bold cursor-default">
              Deon
            </h1>
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#DAA520] text-white rounded-sm px-4 py-2">
              <NavigationLink to="/products/deon" text="Shop now" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="relative">
            <img
              src="/img/Schuesseln.png"
              alt="Schuesseln"
              className="max-w-[250px] w-full"
            />
            <h1 className="absolute bottom-80 left-5 font-bold cursor-default">
              Krisha
            </h1>
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#DAA520] text-white rounded-sm px-4 py-2">
              <NavigationLink to="/products/krisha" text="Shop now" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
