import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost(){
  const { slug } = useParams()
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-4">{slug}</h2>
      <p className="opacity-80">Full article content placeholder. Replace with MDX or CMS integration for production.</p>
    </section>
  )
}
