import React from 'react'
import { NavLink } from 'react-router'

export default function Footer() {
  const linkClass = () => `text-white font-light hover:underline  `
  const linkClassNoHover = () => `text-white font-light   `
  const linkClassSocials = () => `cursor-pointer  `

  return (
    <div className="flex flex-col gap-4">
      <div className=" flex justify-between pt-10 pb-10">
        <div className="flex flex-col items-center gap-2 ">
          <img
            src="public/icons/2455c9cd594f75d6204604d9fc9c6963df5c7aff.png"
            alt=""
            className="w-30 h-auto "
          />
        </div>
        <div className="flex gap-70">
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-lg">Information</h1>
            <NavLink className={linkClass} to={'/Main'}>
              Main
            </NavLink>
            <NavLink className={linkClass} to={'/Gallery'}>
              Gallery
            </NavLink>
            <NavLink className={linkClass} to={'/Projects'}>
              Projects
            </NavLink>
            <NavLink className={linkClass} to={'/Certifications'}>
              Certifications
            </NavLink>
            <NavLink className={linkClass} to={'/Contacts'}>
              Contacts
            </NavLink>
          </div>
          <div className="flex flex-col gap-10.5">
            <h1 className="text-white text-lg">Contacts</h1>
            <div className="flex gap-4">
              <img src="./icons/icon_pin.svg" alt="" />
              <div className="flex flex-col">
                <p className={linkClassNoHover()}>1234 Sample Street</p>{' '}
                <p className={linkClassNoHover()}>Austin Texas 78704</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src="/icons/icon_phone.svg" alt="Phone" />
              <a href="tel:5123332222" className={linkClass()}>
                512.333.2222
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <img src="./icons/icon_mail.svg" alt="Mail Icon" />
              <a href="mailto:sampleemail@gmail.com" className={linkClass()}>
                sampleemail@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <h1 className="text-white text-lg">Social Media</h1>
          <div className="flex gap-10">
            <img
              src="/public/icons/icon_facebook.svg"
              alt=""
              className={linkClassSocials()}
            />
            <img
              src="/public/icons/icon_twitter.svg"
              alt=""
              className={linkClassSocials()}
            />
            <img
              src="/public/icons/icon_linkedin.svg"
              alt=""
              className={linkClassSocials()}
            />
            <img
              src="/public/icons/icon_pininterest.svg"
              alt=""
              className={linkClassSocials()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
