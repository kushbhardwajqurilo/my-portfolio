import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {slug:'hello-world', title:'Hello World', date:'2025-01-01', summary:'First post.'}
]

export default function Blog(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-6">Blog</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p=> (
          <article key={p.slug} className="p-4 rounded-2xl bg-white/3 backdrop-blur border border-white/6">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 opacity-80">{p.summary}</p>
            <div className="mt-4"><Link to={`/blog/${p.slug}`} className="underline">Read More</Link></div>
          </article>
        ))}
      </div>
    </section>
  )
}
