import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Chat App',
    desc: 'WebSockets powered chat with typing indicators, unread counts, and dark mode UI.',
    tags: ['React', 'FastAPI', 'WebSockets'],
    link: '#'
  },
  {
    title: 'Vision Notes',
    desc: 'OCR + embeddings to make your handwritten notes instantly searchable.',
    tags: ['Python', 'OpenCV', 'Vector DB'],
    link: '#'
  },
  {
    title: '3D Portfolio',
    desc: 'Interactive 3D hero using Spline with buttery‑smooth page transitions.',
    tags: ['Spline', 'Framer Motion', 'Vite'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
          <p className="mt-3 text-gray-600">A taste of what I’ve been building lately.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 blur-3xl opacity-50 group-hover:opacity-80 transition pointer-events-none" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <ExternalLink className="text-gray-400 group-hover:text-gray-600 transition" size={18} />
              </div>
              <p className="mt-2 text-gray-600 leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
