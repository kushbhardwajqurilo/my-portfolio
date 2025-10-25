import React from 'react'
import Hero from '../components/Hero'

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/3 backdrop-blur border border-white/6">Short intro or featured project.</div>
          <div className="p-6 rounded-2xl bg-white/3 backdrop-blur border border-white/6">Services / Skills</div>
          <div className="p-6 rounded-2xl bg-white/3 backdrop-blur border border-white/6">Call to action</div>
        </div>
      </section>
    </div>
  )
}
