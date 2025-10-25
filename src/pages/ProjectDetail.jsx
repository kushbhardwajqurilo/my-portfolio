import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProjectDetail(){
  const { slug } = useParams()
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-4">Project: {slug}</h2>
      <p className="opacity-80">Project details go here. Replace with your real content and images.</p>
    </section>
  )
}
