import React from 'react'

export default function About(){
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-4">About</h2>
      <p className="opacity-80">I am Kush — a full-stack developer focused on building polished and interactive web experiences. I work with React, TailwindCSS, Node.js and Next.js to ship performant, accessible apps.</p>
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-white/3">React</div>
          <div className="p-4 rounded-lg bg-white/3">TailwindCSS</div>
          <div className="p-4 rounded-lg bg-white/3">Node.js</div>
          <div className="p-4 rounded-lg bg-white/3">Next.js</div>
        </div>
      </div>
    </section>
  )
}
