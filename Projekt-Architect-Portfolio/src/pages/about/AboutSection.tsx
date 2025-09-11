import React from 'react'
import HeroHeader from '../../components/HeroHeader'
import Button from '../../components/Button'

export default function AboutSection() {
  return (
    <div className="flex justify-center gap-10 items-center ">
      <div className="flex flex-col gap-10">
        <img
          src="/public/img/44d3e9bea5b877e20a158303104219fd3a53f9c2.jpg"
          alt=""
          className="w-[270px] h-[265px]"
        />
        <img
          src="/public/img/3cd9c99af3198d2940494a44b342281d246c9108.jpg"
          alt=""
          className="w-[270px] h-[140px]"
        />
      </div>
      <div>
        <img
          src="/public/img/10069f785bc9dfbe2bcfa1948bee8f5324f62b98.jpg"
          alt=""
          className="w-[270px] h-[345px]"
        />
      </div>
      <div className="flex flex-col gap-10 ">
        <HeroHeader text="About" />
        <p className="w-96">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button
          to="/"
          textColor="text-black"
          bgColor="bg-white"
          text="Read more"
          width=""
          height=""
        />
      </div>
    </div>
  )
}
