import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {title:'Project One', slug:'project-one', image:'/images/project-1.jpg', desc:'A sleek project demo', stack:['React','Tailwind']},
  {title:'Project Two', slug:'project-two', image:'/images/project-1.jpg', desc:'Another project', stack:['Node','Vite']},
]

export default function Projects(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p=> <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  )
}
