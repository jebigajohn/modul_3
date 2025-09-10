import React from 'react'
import HeroHeader from '../../components/HeroHeader'
import Button from '../../components/Button'
import AboutSection from './AboutSection'
import AboutStatement from './AboutStatement'

export default function About() {
  return (
    <div className="mt-30">
      <AboutSection />
      <AboutStatement />
    </div>
  )
}
