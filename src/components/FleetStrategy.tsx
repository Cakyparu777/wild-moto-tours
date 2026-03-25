import { Check, Download } from 'lucide-react'

const benefits = [
  'GPS-Guided Route Recommendations',
  '24/7 Personal Concierge Access',
  'Fully Insured Social Protection',
]

export default function FleetStrategy() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="overflow-hidden bg-gray-100 h-60">
              <img
                src="https://images.unsplash.com/photo-1617531653332-bd46c16f4d68?w=600&auto=format&fit=crop&q=80"
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden bg-gray-100 h-36">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80"
                alt="Wheels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="pt-8">
            <div className="overflow-hidden bg-gray-100 h-80">
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=80"
                alt="Luxury car exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-4">
            The Fleet Strategy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Beyond<br />Transportation.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
            At Kinetic Precision, we don't just rent cars, we manage a private gallery of rolling art.
            Every vehicle is hand-selected for its heritage, performance, and aesthetic contribution to the
            automotive world.
          </p>

          <ul className="space-y-4 mb-10">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-5 h-5 bg-gray-900 flex items-center justify-center shrink-0">
                  <Check size={11} className="text-white" />
                </div>
                {b}
              </li>
            ))}
          </ul>

          <button className="flex items-center gap-2 bg-gray-900 text-white text-xs font-semibold tracking-widest uppercase px-7 py-4 hover:bg-gray-700 transition-colors">
            <Download size={14} />
            Download Fleet Catalogue
          </button>
        </div>
      </div>
    </section>
  )
}
