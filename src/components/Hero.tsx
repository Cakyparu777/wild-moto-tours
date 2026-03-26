import { Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 flex flex-col pt-20 transition-colors duration-300">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left — text */}
        <div className="flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-20 py-12 lg:py-0">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500 mb-4">
            Mongolia · Off-Road Adventures
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-gray-900 dark:text-white mb-5">
            EXPLORE THE<br />
            <span className="text-gradient">WILD STEPPE.</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mb-8">
            Rent a battle-tested 4WD and go where the road ends.
            Wild Moto Tours puts you in rugged, reliable vehicles built for Mongolia's untamed countryside.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#fleet"
              className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold tracking-widest uppercase px-6 py-3.5 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            >
              Explore the Fleet
            </a>
            <a
              href="#locations"
              className="inline-block text-gray-900 dark:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3.5 border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative bg-gray-100 dark:bg-gray-900 overflow-hidden min-h-[280px] sm:min-h-[360px] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&auto=format&fit=crop&q=80"
            alt="Camping with 4WD in grassy steppe"
            className="w-full h-full object-cover object-bottom"
          />
          {/* Stats card */}
          <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 bg-white dark:bg-gray-900 shadow-xl p-4 sm:p-5 min-w-[160px]">
            <div className="flex items-center gap-2 mb-1">
              <Shield size={13} className="text-green-500" />
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Trust Score</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">99.8%</p>
            <p className="text-xs text-gray-400 mt-1">Off-road adventures across<br />Mongolia's vast countryside</p>
          </div>
        </div>
      </div>
    </section>
  )
}
