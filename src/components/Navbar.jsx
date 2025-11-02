import { Code, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-blue-600 to-purple-600 text-white">
            <Code size={18} />
          </span>
          <span className="tracking-tight">CS Undergrad Portfolio</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          <div className="h-5 w-px bg-gray-200" />
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </nav>
    </header>
  )
}
