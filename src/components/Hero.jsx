import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-white via-blue-50/50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[80vh] grid md:grid-cols-2 gap-8 items-center py-16">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Hi, I’m a Computer Science undergrad building playful, modern experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-gray-600"
          >
            I love full‑stack development, interactive UIs, and bringing ideas to life with
            performance‑minded code and expressive design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-white font-medium shadow hover:shadow-lg transition-shadow"
            >
              See Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-gray-900 font-medium hover:bg-gray-50"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] md:h-[560px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-black/5 shadow-xl bg-white">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-32 h-64 bg-gradient-to-b from-transparent to-blue-100/40" />
    </section>
  )
}
