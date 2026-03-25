import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import logo from '../public/logo/logo.png'

interface NavbarProps {
  dark: boolean
  onToggle: () => void
}

export default function Navbar({ dark, onToggle }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <a href="#" className="flex items-center gap-2">
        <img src={logo} alt="Wild Moto Tours" className="h-8 sm:h-10 w-auto object-contain" />
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-900 dark:text-white">Wild Moto Tours</span>
      </a>

      <ul className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
        {[['Fleet', 'fleet'], ['How It Works', 'how-it-works'], ['Contact', 'locations']].map(([label, id]) => (
          <li key={id}>
            <a href={`#${id}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={onToggle}
          className="w-9 h-9 flex items-center justify-center border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
          Book Now
        </button>
      </div>

      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={onToggle}
          className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-400"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-900 dark:text-white">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 md:hidden">
          <ul className="flex flex-col px-8 py-4 gap-4 text-xs font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
            {[['Fleet', 'fleet'], ['How It Works', 'how-it-works'], ['Contact', 'locations']].map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold tracking-widest uppercase px-5 py-2.5 w-full">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
