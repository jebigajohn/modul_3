import React from 'react'
import HeroHeader from '../../components/HeroHeader'
import Button from '../../components/Button'
import ProjectsSection from './ProjectsSection'

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 mt-30">
      <HeroHeader text="Our Projects" />
      <ProjectsSection />
    </div>
  )
}
