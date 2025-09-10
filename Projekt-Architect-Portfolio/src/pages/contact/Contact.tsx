import React from 'react'
import HeroHeader from '../../components/HeroHeader'
import ContactSection from './ContactSection'
import Button from '../../components/Button'

export default function Contact() {
  return (
    <div className="mt-30">
      <HeroHeader text="Contact Us" />
      <ContactSection />
      <Button
        to=""
        text="Send Email"
        textColor="text-white"
        bgColor="bg-[#333333]"
        width="w-70"
        height="h-20"
      />
    </div>
  )
}
