import React, { useState } from 'react'
import axios from 'axios'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try{
      const url = import.meta.env.VITE_CONTACT_API_URL
      if(!url) throw new Error('CONTACT_API_URL not set')
      await axios.post(url, form)
      setStatus('success')
      setForm({name:'',email:'',message:''})
    }catch(err){
      console.error(err)
      setStatus('error')
    }finally{
      setTimeout(()=>setStatus(null), 3000)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full p-3 rounded bg-white/5 border border-white/6" required/>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 rounded bg-white/5 border border-white/6" required/>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="6" className="w-full p-3 rounded bg-white/5 border border-white/6" required/>
        <div>
          <button type="submit" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-neonBlue to-neonPurple">Send Message</button>
        </div>
      </form>
      {status === 'loading' && <div className="mt-4">Sending...</div>}
      {status === 'success' && <div className="mt-4 text-green-300">Message sent. Thank you!</div>}
      {status === 'error' && <div className="mt-4 text-red-300">Failed to send message.</div>}
    </section>
  )
}
