import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s connect</h2>
          <p className="mt-3 text-gray-600">Have an opportunity, idea, or just want to say hi? I’d love to chat.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:you@example.com"
            className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white"><Mail size={18} /></span>
            <div>
              <div className="font-semibold text-gray-900">Email</div>
              <div className="text-gray-600 text-sm">you@example.com</div>
            </div>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white"><Github size={18} /></span>
            <div>
              <div className="font-semibold text-gray-900">GitHub</div>
              <div className="text-gray-600 text-sm">github.com/yourhandle</div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white"><Linkedin size={18} /></span>
            <div>
              <div className="font-semibold text-gray-900">LinkedIn</div>
              <div className="text-gray-600 text-sm">linkedin.com/in/yourname</div>
            </div>
          </a>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">Built with React, Tailwind, Framer Motion, and Spline.</p>
      </div>
    </section>
  )
}
