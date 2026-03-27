import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Checklist from './components/Checklist'
import Destinations from './components/Destinations'
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

  const [scrollPct, setScrollPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      setScrollPct(window.scrollY / (doc.scrollHeight - doc.clientHeight) * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <LangProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        {/* Scroll progress indicator */}
        <div
          className="fixed top-0 left-0 z-[60] h-[3px] pointer-events-none"
          style={{ width: `${scrollPct}%`, background: 'linear-gradient(90deg, #c9a84c, #f0d080)' }}
        />
        <Navbar dark={dark} onToggle={() => setDark(!dark)} />
        <Hero />
        <Checklist />
        <Gallery />
        <Process />
        <Destinations />
        <PickupLocation />
        {/* <Footer /> */}
      </div>
    </LangProvider>
  )
}
