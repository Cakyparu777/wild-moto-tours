import { ArrowRight } from 'lucide-react'

const links = {
  'The Fleet': ['Sports Cars', 'Luxury Sedans', 'Grand Tourers', 'Electric Class'],
  Corporate: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Investor Relations'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-8 md:px-16 lg:px-20 py-16 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-900 dark:text-white mb-4">
            Wild Moto Tours
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
            Setting the global standard for elite automotive rentals. Our mission is to connect passionate
            drivers with extraordinary machines.
          </p>
          <div className="flex gap-4">
            {['TW', 'IG', 'LI'].map((s) => (
              <button key={s} className="w-8 h-8 border border-gray-300 dark:border-gray-700 text-gray-500 text-[10px] font-bold hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-colors">
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(links).map(([heading, items]) => (
          <div key={heading}>
            <h5 className="text-gray-900 dark:text-white text-xs font-bold tracking-widest uppercase mb-5">{heading}</h5>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-sm hover:text-gray-900 dark:hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-wrap items-center justify-between gap-6">
        <div>
          <h5 className="text-gray-900 dark:text-white text-xs font-bold tracking-widest uppercase mb-1">Newsletter</h5>
          <p className="text-gray-500 text-xs">Exclusive access to new arrivals and private events.</p>
        </div>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm px-4 py-3 outline-none placeholder-gray-400 dark:placeholder-gray-600 flex-1 md:w-64 transition-colors duration-300"
          />
          <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-3 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-gray-400 dark:text-gray-600 text-xs">© 2024 Wild Moto Tours. All rights reserved.</p>
        <div className="flex gap-4">
          {['Instagram', 'Twitter', 'LinkedIn'].map((s) => (
            <a key={s} href="#" className="text-gray-400 dark:text-gray-600 text-xs hover:text-gray-600 dark:hover:text-gray-400 transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
