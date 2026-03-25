import { MapPin } from 'lucide-react'

const locations = [
  { city: 'Zurich Gallery', country: 'Switzerland', available: 14 },
  { city: 'Monaco Drive', country: 'France', available: 9 },
  { city: 'Dubai Prestige', country: 'UAE', available: 22 },
  { city: 'Tokyo Precision', country: 'Japan', available: 11 },
]

export default function GlobalNetwork() {
  return (
    <section
      id="locations"
      className="relative py-24 px-8 md:px-16 lg:px-20 bg-gray-900 overflow-hidden"
    >
      {/* Background abstract lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="rg" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#rg)" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1={i * 110}
              y1="0"
              x2={i * 110 + 200}
              y2="600"
              stroke="#c9a84c"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-4">
            Worldwide Presence
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Global Network
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8">
            From the Swiss Alps to the streets of Monaco, Kinetic Precision operates in the world's most
            sought-after destinations. Our fleet is always within reach.
          </p>

          <div className="mb-8">
            {locations.slice(0, 2).map((loc) => (
              <div key={loc.city} className="flex items-center gap-3 py-3 border-b border-gray-800">
                <MapPin size={14} className="text-yellow-500 shrink-0" />
                <div className="flex-1">
                  <span className="text-white text-sm font-medium">{loc.city}</span>
                  <span className="text-gray-500 text-xs ml-2">— {loc.country}</span>
                </div>
                <span className="text-xs text-gray-500">{loc.available} vehicles</span>
              </div>
            ))}
          </div>

          <a href="#" className="text-xs font-semibold tracking-widest uppercase text-yellow-500 hover:text-yellow-400 transition-colors">
            See All Locations →
          </a>
        </div>

        {/* Right — location grid */}
        <div className="grid grid-cols-2 gap-4">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="bg-gray-800/60 border border-gray-700 p-6 hover:border-yellow-500/40 transition-colors"
            >
              <MapPin size={18} className="text-yellow-500 mb-3" />
              <h4 className="text-white font-semibold text-sm mb-1">{loc.city}</h4>
              <p className="text-gray-500 text-xs">{loc.country}</p>
              <p className="text-yellow-500 text-xs mt-3 font-medium">{loc.available} vehicles</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
