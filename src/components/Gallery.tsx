import { useState, useRef } from 'react'
import { Users, Settings2, Navigation, ChevronLeft, ChevronRight } from 'lucide-react'
import thumbnail from '../public/background_image/thumbnail.jpeg'
import img1024 from '../public/car_images/IMG_1024.jpg'
import img1025 from '../public/car_images/IMG_1025.jpg'
import img1018 from '../public/car_images/IMG_1018.JPG'
import img1027 from '../public/car_images/IMG_1027.jpg'
import img1028 from '../public/car_images/IMG_1028.jpg'
import img1017 from '../public/car_images/IMG_1017.JPG'
import img1029 from '../public/car_images/IMG_1029.jpg'
import img1020 from '../public/car_images/IMG_1020.JPG'
import bike1 from '../public/bike_images/9DD70740-0670-415E-A86C-B21992186A86.PNG'
import bike2 from '../public/bike_images/BCCB4145-52CE-44DE-A491-EE7BBDC55B01.PNG'
import bike3 from '../public/bike_images/IMG_1035.jpg'
import loneRiderLogo from '../public/logo/Lone_rider_logo.png'
import { useLang } from '../i18n'
import { useInView } from '../hooks/useInView'

const cars = [
  {
    name: 'UAZ 452 "Bukhanka"',
    price: 80,
    images: [img1024],
    seats: 7,
    transmission: 'Manual',
    drive: '4x4',
    tag: 'Van · LHD',
    description: '2600cc Soviet-built 4x4 van. Classic, durable, and unstoppable. Includes tent & full camping equipment.',
    descriptionZh: '2600cc苏联制四驱面包车，经典耐用，所向披靡。含帐篷及全套野营装备。',
  },
  {
    name: 'Toyota Land Cruiser 100',
    price: 180,
    images: [img1025],
    seats: 5,
    transmission: 'Automatic',
    drive: '4x4',
    tag: 'SUV',
    description: '4.7L V8 Auto — comfortable, smooth and powerful. Comes complete with tent & full camping equipment for the long road ahead.',
    descriptionZh: '4.7升V8自动挡，舒适强劲。含帐篷及全套野营装备，为漫漫征途做好准备。',
  },
  {
    name: 'Toyota Land Cruiser 79 2026',
    price: 210,
    images: [img1018, img1027, img1028],
    seats: 5,
    transmission: 'Manual',
    drive: '4x4',
    tag: 'Pickup · LHD',
    description: '4200cc Diesel Manual LHD. Winch, snorkel, roof & rear storage, spotlights — plus full tent & camping setup for up to 5.',
    descriptionZh: '4200cc柴油手动左舵。绞盘、通气管、车顶及后部储物、探照灯，含最多5人全套帐篷野营装备。',
  },
  {
    name: 'Toyota Land Cruiser LC250',
    price: 375,
    images: [img1017, img1029],
    seats: 5,
    transmission: 'Automatic',
    drive: '4x4',
    tag: 'SUV · LHD',
    description: '2.8TD Automatic LHD. Fully specced — winch, off-road wheels, tyres & suspension, roof storage. Full camping kit included.',
    descriptionZh: '2.8TD自动左舵，全套配置——绞盘、越野轮毂轮胎及悬挂、车顶储物，含全套野营装备。',
  },
  {
    name: 'Suzuki Jimny 2019',
    price: 139,
    images: [img1020],
    seats: 4,
    transmission: 'Automatic',
    drive: '4x4',
    tag: 'Off-Road · LHD',
    description: '1500cc Auto LHD. Snorkel, winch, front & rear LED spotlights, CB radio, roof rack & ladder, awning — tent & camping equipment included.',
    descriptionZh: '1500cc自动左舵。通气管、绞盘、前后LED探照灯、CB无线电、车顶架及梯子、遮阳篷，含帐篷及野营装备。',
  },
  {
    name: 'VOGE DS 800 Rally "Black Knight" 2026',
    price: 100,
    images: [bike1, bike2],
    seats: 2,
    transmission: 'Manual',
    drive: '2WD',
    tag: 'Motorcycle',
    description: '800cc · 5 units available. Built-in camera, LED spotlights, heated grips & seat, crash bars, switchable ABS & traction control. Includes tent & camping gear.',
    descriptionZh: '800cc，现有5辆。内置摄像头、LED探照灯、加热手柄及座椅、防摔杠、可切换ABS及牵引力控制。含LONE RIDER行李箱、帐篷及野营装备。',
  },
  {
    name: 'VOGE 300 Rally 2025',
    price: 70,
    images: [bike3],
    seats: 2,
    transmission: 'Manual',
    drive: '2WD',
    tag: 'Motorcycle',
    description: '300cc new model. Crash bars, ABS. Includes tent & camping equipment. Ready for the full Mongolian adventure.',
    descriptionZh: '300cc新款。防摔杠、ABS，含LONE RIDER行李储物、帐篷及野营装备，准备好踏上完整的蒙古之旅。',
  },
]

function CarSlider({ images, name }: { images: string[], name: string }) {
  const [idx, setIdx] = useState(0)
  const multi = images.length > 1

  const prev = (e: React.MouseEvent) => {
    e.preventDefault()
    setIdx(i => (i - 1 + images.length) % images.length)
  }
  const next = (e: React.MouseEvent) => {
    e.preventDefault()
    setIdx(i => (i + 1) % images.length)
  }

  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-800 h-52">
      <img
        src={images[idx]}
        alt={`${name} rental Mongolia`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      {multi && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 transition-colors">
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.preventDefault(); setIdx(i) }}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02,1.02,1.02)`
    el.style.transition = 'transform 0.1s ease-out'
    el.style.zIndex = '10'
    el.style.position = 'relative'
  }
  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
    el.style.transition = 'transform 0.5s ease-out'
    el.style.zIndex = ''
  }
  return (
    <div ref={ref} className={className} style={style} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  )
}

export default function Gallery() {
  const { lang, t } = useLang()
  const g = t.gallery
  const { ref: ref4x4, inView: inView4x4 } = useInView()
  const { ref: refBikes, inView: inViewBikes } = useInView()

  return (
    <section id="fleet" className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={thumbnail} alt="Fleet banner" className="w-full h-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-20">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-300 mb-3">{g.label}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{g.title}</h2>
          <p className="text-gray-300 mt-3 text-sm">{g.hint}</p>
        </div>
      </div>

      <div className="py-10 md:py-16 px-6 sm:px-8 md:px-16 lg:px-20">

        {/* 4x4 Section */}
        <div className="mb-12" ref={ref4x4}>
          <div className={`flex items-center gap-4 mb-6 anim-fade-up ${inView4x4 ? 'in-view' : ''}`}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide uppercase">4x4 Vehicles</h3>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.filter(c => c.tag !== 'Motorcycle').map((car, i) => (
            <TiltCard
              key={car.name}
              style={{ animationDelay: `${80 + i * 80}ms` }}
              className={`group border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900 transition-all duration-300 anim-fade-up ${inView4x4 ? 'in-view' : ''}`}
            >
              <div className="relative">
                <CarSlider images={car.images} name={car.name} />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{car.name}</h3>
                  <div className="text-right shrink-0 ml-2">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">${car.price}</p>
                    <p className="text-xs text-gray-400">{g.perDay}</p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                  {lang === 'zh' ? car.descriptionZh : car.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-800 pt-3">
                  <span className="flex items-center gap-1"><Users size={12} /> {car.seats} {g.seats}</span>
                  <span className="flex items-center gap-1"><Settings2 size={12} /> {car.transmission}</span>
                  <span className="flex items-center gap-1"><Navigation size={12} /> {car.drive}</span>
                </div>

                <a
                  href="#locations"
                  className="mt-4 block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold tracking-widest uppercase py-3 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                >
                  {g.contactOwner}
                </a>
              </div>
            </TiltCard>
            ))}
          </div>
        </div>

        {/* Motorcycle Section */}
        <div ref={refBikes}>
          <div className={`flex items-center gap-4 mb-6 anim-fade-up ${inViewBikes ? 'in-view' : ''}`}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide uppercase">Motorcycles</h3>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.filter(c => c.tag === 'Motorcycle').map((car, i) => (
            <TiltCard
              key={car.name}
              style={{ animationDelay: `${80 + i * 80}ms` }}
              className={`group border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900 transition-all duration-300 anim-fade-up ${inViewBikes ? 'in-view' : ''}`}
            >
              <div className="relative">
                <CarSlider images={car.images} name={car.name} />
                <div className="absolute top-2 right-0 bg-gradient-to-r from-transparent to-white/75 px-1.5 py-1 flex flex-col items-center gap-0.5">
                  <img src={loneRiderLogo} alt="Lone Rider" className="h-6 w-auto object-contain" />
                  <p className="text-[7px] font-semibold tracking-widest uppercase text-gray-900">Equipment Included</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{car.name}</h3>
                  <div className="text-right shrink-0 ml-2">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">${car.price}</p>
                    <p className="text-xs text-gray-400">{g.perDay}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                  {lang === 'zh' ? car.descriptionZh : car.description}
                </p>
                <div className="flex items-center gap-2 mb-3 py-2 border-t border-gray-100 dark:border-gray-800">
                  <img src={loneRiderLogo} alt="Lone Rider" className="h-4 w-auto object-contain shrink-0 bg-gray-200 p-0.5" />
                  <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">Full Lone Rider luggage setup included with every bike rental</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 px-3 py-2.5 mb-3">
                  <p className="text-xs font-bold text-amber-800 dark:text-amber-400 leading-snug">Contact us to plan your motorcycle adventure with full support vehicle backup option</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-800 pt-3">
                  <span className="flex items-center gap-1"><Users size={12} /> {car.seats} {g.seats}</span>
                  <span className="flex items-center gap-1"><Settings2 size={12} /> {car.transmission}</span>
                </div>
                <a
                  href="#locations"
                  className="mt-4 block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold tracking-widest uppercase py-3 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                >
                  {g.contactOwner}
                </a>
              </div>
            </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
