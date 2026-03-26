import { useState } from 'react'
import { Users, Settings2, Navigation, ChevronLeft, ChevronRight } from 'lucide-react'
import thumbnail from '../public/background_image/thumbnail.jpeg'
import img1024 from '../public/car_images/IMG_1024.jpg'
import img1025 from '../public/car_images/IMG_1025.jpg'
import img1018 from '../public/car_images/IMG_1018.JPG'
import img1027 from '../public/car_images/IMG_1027.jpg'
import img1028 from '../public/car_images/IMG_1028.jpg'
import img1017 from '../public/car_images/IMG_1017.JPG'
import img1029 from '../public/car_images/IMG_1029.jpg'
import img1020 from '../public/car_images/IMG_1020.jpg'
import bike1 from '../public/bike_images/9DD70740-0670-415E-A86C-B21992186A86.PNG'
import bike2 from '../public/bike_images/BCCB4145-52CE-44DE-A491-EE7BBDC55B01.PNG'
import bike3 from '../public/bike_images/IMG_1035.jpg'
import { useLang } from '../i18n'

const cars = [
  {
    name: 'UAZ 452',
    price: 80,
    images: [img1024],
    seats: 9,
    transmission: 'Manual',
    drive: '4WD',
    tag: 'Van',
    description: "Mongolia's iconic group rental vehicle — perfect for Gobi Desert expeditions and countryside camping with a full crew.",
    descriptionZh: '蒙古经典团队租赁车，完美适合戈壁沙漠探险与草原露营。',
  },
  {
    name: 'Toyota Land Cruiser 100',
    price: 120,
    images: [img1025],
    seats: 7,
    transmission: 'Automatic',
    drive: '4WD',
    tag: 'SUV',
    description: 'The most trusted 4WD rental in Mongolia. Built for Terelj National Park, long steppe crossings, and everything in between.',
    descriptionZh: '蒙古最受信赖的四驱租赁车型，适合特热勒吉国家公园及长途草原穿越。',
  },
  {
    name: 'Toyota Land Cruiser 79 2026',
    price: 150,
    images: [img1018, img1027, img1028],
    seats: 5,
    transmission: 'Manual',
    drive: '4WD',
    tag: 'Pickup',
    description: 'Brand-new pickup rental built for serious off-road in Mongolia. Ideal for Khövsgöl Lake and remote wilderness expeditions.',
    descriptionZh: '全新皮卡租赁车，专为蒙古越野而生，适合库苏古尔湖及偏远荒野探险。',
  },
  {
    name: 'Toyota Land Cruiser LC250',
    price: 200,
    images: [img1017, img1029],
    seats: 5,
    transmission: 'Automatic',
    drive: '4WD',
    tag: 'SUV · LHD',
    description: 'Modern flagship 4WD rental with full off-road capability. Comfortable on long-distance routes across the Mongolian steppe.',
    descriptionZh: '现代旗舰四驱租赁车，越野性能卓越，蒙古草原长途行驶舒适无忧。',
  },
  {
    name: 'VOGE DS 800 Rally "Black Knight" 2026',
    price: 45,
    images: [bike1, bike2],
    seats: 1,
    transmission: 'Manual',
    drive: '2WD',
    tag: 'Motorcycle',
    description: '800cc adventure rally bike built for Mongolia\'s rugged terrain. The Black Knight handles mountain passes, steppe tracks, and everything in between. 5 units available.',
    descriptionZh: '800cc越野拉力摩托车，专为蒙古复杂地形而生。"黑骑士"征服山口、草原小道，无所不能。现有5辆可租。',
  },
  {
    name: 'VOGE 300 Rally 2025',
    price: 30,
    images: [bike3],
    seats: 1,
    transmission: 'Manual',
    drive: '2WD',
    tag: 'Motorcycle',
    description: '300cc lightweight rally bike — perfect for beginners and experienced riders alike. Great for day trips around Ulaanbaatar and Terelj.',
    descriptionZh: '300cc轻量级拉力摩托车，适合初学者与老手。非常适合乌兰巴托及特热勒吉周边的一日骑行。',
  },
  {
    name: 'Suzuki Jimny 2019',
    price: 70,
    images: [img1020],
    seats: 4,
    transmission: 'Manual',
    drive: '4WD',
    tag: 'Off-Road · LHD',
    description: 'Compact, nimble, and great value. The most fun off-road rental for solo travellers exploring Terelj and nearby trails.',
    descriptionZh: '小巧灵活、性价比高，独自探索特热勒吉及周边越野路线的最佳租赁选择。',
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

export default function Gallery() {
  const { lang, t } = useLang()
  const g = t.gallery

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.name} className="group border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900 transition-all duration-300">
              <CarSlider images={car.images} name={car.name} />

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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
