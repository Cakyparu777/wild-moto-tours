import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import logo from '../public/logo/logo.png'
import { useLang, type Lang } from '../i18n'

interface NavbarProps {
  dark: boolean
  onToggle: () => void
}

export default function Navbar({ dark, onToggle }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  const langOptions: { code: Lang; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中' },
  ]

  const LangSwitcher = () => (
    <div className="flex items-center border border-gray-200 dark:border-gray-700 overflow-hidden">
      {langOptions.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-2.5 py-1.5 text-[11px] font-semibold tracking-wider transition-colors ${
            lang === code
              ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )

  const navLinks: [string, string][] = [
    [t.nav.fleet, 'fleet'],
    [t.nav.howItWorks, 'how-it-works'],
    [t.nav.contact, 'locations'],
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <a href="#" className="flex items-center gap-2">
        <img src={logo} alt="Wild Moto Tours" className="h-8 sm:h-10 w-auto object-contain" />
        <div className="flex flex-col">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-900 dark:text-white leading-tight">Wild Moto Tours</span>
          <span className="text-[9px] tracking-widest uppercase text-gray-400 dark:text-gray-500 leading-tight">Vehicle & Motorcycle Rental</span>
        </div>
      </a>

      <ul className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
        {navLinks.map(([label, id]) => (
          <li key={id}>
            <a href={`#${id}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        <LangSwitcher />
        <button
          onClick={onToggle}
          className="w-9 h-9 flex items-center justify-center border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>

      <div className="md:hidden flex items-center gap-3">
        <LangSwitcher />
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
            {navLinks.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
