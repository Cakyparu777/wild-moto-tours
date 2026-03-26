import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Process from './components/Process'
import PickupLocation from './components/PickupLocation'
import { LangProvider } from './i18n'

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      return saved ? saved === 'dark' : true
    } catch {
      return true
    }
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      // ignore
    }
  }, [dark])

  return (
    <LangProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navbar dark={dark} onToggle={() => setDark(!dark)} />
        <Hero />
        <Process />
        <Gallery />
        <PickupLocation />
        {/* <Footer /> */}
      </div>
    </LangProvider>
  )
}
