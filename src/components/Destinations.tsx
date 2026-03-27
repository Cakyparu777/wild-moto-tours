import { MapPin } from 'lucide-react'
import { useLang } from '../i18n'
import { useInView } from '../hooks/useInView'
import terelj from '../public/route_images/c6250b6d-6b3a-4891-a491-95f43b974253-b-Turtle-Rock-formation-in-the-Terelj-National-Park-Mongolia.jpg'
import gobi from '../public/route_images/bc4b224b-8ee4-4200-ae02-f098de82eed5-_BAY1948.jpg'
import khovsgol from '../public/route_images/A-Ar-Davkhar-Eco-Camp-Khovsgol-Mongolia.jpg'
import orkhon from '../public/route_images/Orkhon_waterfall_mongolian_landscape.jpg'

const images = [terelj, gobi, khovsgol, orkhon]

export default function Destinations() {
  const { t } = useLang()
  const d = t.destinations
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-12 md:py-20 px-6 sm:px-8 md:px-16 lg:px-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className={`text-center mb-10 md:mb-14 anim-fade-up ${inView ? 'in-view' : ''}`}>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500 mb-3">{d.label}</p>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">{d.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{d.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {d.items.map((dest, i) => (
          <div
            key={dest.name}
            style={{ animationDelay: `${100 + i * 100}ms` }}
            className={`group overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 anim-fade-up ${inView ? 'in-view' : ''}`}
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={images[i]}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white font-bold text-sm leading-tight">{dest.name}</p>
                <p className="flex items-center gap-1 text-gray-300 text-[10px] mt-0.5">
                  <MapPin size={9} /> {dest.distance}
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
