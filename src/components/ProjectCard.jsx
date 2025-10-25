import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectCard({project}){
  return (
    <motion.article whileHover={{scale:1.02}} className="p-4 rounded-2xl bg-white/3 backdrop-blur border border-white/6 shadow-neon">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4"/>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 opacity-80">{project.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="space-x-2">
          {project.stack.map(s=> <span key={s} className="text-xs px-2 py-1 bg-white/6 rounded">{s}</span>)}
        </div>
        <div className="space-x-2">
          <a className="text-sm underline" href="#">Live Demo</a>
          <Link to={`/projects/${project.slug}`} className="text-sm underline">Details</Link>
        </div>
      </div>
    </motion.article>
  )
}
