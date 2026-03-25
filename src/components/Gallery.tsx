import { Users, Settings2, Navigation } from 'lucide-react'
import thumbnail from '../public/background_image/thumbnail.jpeg'

const cars = [
  {
    name: 'UAZ 452',
    price: 80,
    image: 'https://images.unsplash.com/photo-1633249314328-6df7b4226857?w=800&auto=format&fit=crop&q=80',
    seats: 9,
    transmission: 'Manual',
    drive: '4WD',
    tag: 'Van',
  },
  {
    name: 'Toyota Land Cruiser 100',
    price: 120,
    image: 'https://images.unsplash.com/photo-1650530579355-7ad9d4766043?w=800&auto=format&fit=crop&q=80',
    seats: 7,
    transmission: 'Automatic',
    drive: '4WD',
    tag: 'SUV',
  },
  {
    name: 'Toyota Land Cruiser 79 2026',
    price: 150,
    image: 'https://images.unsplash.com/photo-1638835373951-3a67da7aaf8d?w=800&auto=format&fit=crop&q=80',
    seats: 5,
    transmission: 'Manual',
    drive: '4WD',
    tag: 'Pickup',
  },
  {
    name: 'Toyota Land Cruiser LC250',
    price: 200,
    image: 'https://images.unsplash.com/photo-1690917448793-cf9a81b31940?w=800&auto=format&fit=crop&q=80',
    seats: 5,
    transmission: 'Automatic',
    drive: '4WD',
    tag: 'SUV · LHD',
  },
  {
    name: 'Suzuki Jimny 2019',
    price: 70,
    image: 'https://images.unsplash.com/photo-1622071356556-47f1b87743de?w=800&auto=format&fit=crop&q=80',
    seats: 4,
    transmission: 'Manual',
    drive: '4WD',
    tag: 'Off-Road · LHD',
  },
]


// ── Component ─────────────────────────────────────────────────────────────────
export default function Gallery() {
  return (
    <section id="fleet" className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={thumbnail}
          alt="Fleet banner"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-20">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-300 mb-3">
            Available Now
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Fleet</h2>
          <p className="text-gray-300 mt-3 text-sm">Click any car to contact the owner instantly.</p>
        </div>
      </div>

      <div className="py-10 md:py-16 px-6 sm:px-8 md:px-16 lg:px-20">
      <div className="mb-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.name} className="group border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900 transition-all duration-300">
            <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-800 h-52">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-semibold tracking-widest uppercase px-3 py-1">
                {car.tag}
              </span>
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{car.name}</h3>
                <div className="text-right shrink-0 ml-2">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">${car.price}</p>
                  <p className="text-xs text-gray-400">/day</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-800 pt-3">
                <span className="flex items-center gap-1">
                  <Users size={12} /> {car.seats} seats
                </span>
                <span className="flex items-center gap-1">
                  <Settings2 size={12} /> {car.transmission}
                </span>
                <span className="flex items-center gap-1">
                  <Navigation size={12} /> {car.drive}
                </span>
              </div>

              <a
                href="#locations"
                className="mt-4 block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold tracking-widest uppercase py-3 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              >
                Contact Owner
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
