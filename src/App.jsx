import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} CS Undergrad. All rights reserved.</p>
          <a href="#home" className="hover:text-gray-700">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
