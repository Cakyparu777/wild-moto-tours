import { useEffect, useState } from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'
import { useLang } from '../i18n'

const OWNER = {
  whatsapp: '97699976835',
  telegram: 'kineticprecision',
  viber: '%2B97699976835',
  wechat: 'kinetic_wechat',
}

const TZ = 'Asia/Ulaanbaatar'

function useMongoliaTime() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const timeStr = now.toLocaleTimeString('en-US', { timeZone: TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
  const dateStr = now.toLocaleDateString('en-US', { timeZone: TZ, weekday: 'long', month: 'short', day: 'numeric' })

  const mnNow = new Date(now.toLocaleString('en-US', { timeZone: TZ }))
  const day = mnNow.getDay()
  const totalMin = mnNow.getHours() * 60 + mnNow.getMinutes()
  const openMin = day === 0 ? 10 * 60 : 9 * 60
  const closeMin = day === 0 ? 18 * 60 : 20 * 60
  const isOpen = totalMin >= openMin && totalMin < closeMin

  return { timeStr, dateStr, isOpen }
}

function buildMsg(lang: string, car = '') {
  if (lang === 'zh') {
    return encodeURIComponent(car ? `你好！我想租用 ${car}。` : '你好！我想了解更多租车信息。')
  }
  return encodeURIComponent(`Сайн уу! ${car ? car + ' машин түрээслэхийг хүсч байна.' : 'Мэдээлэл авмаар байна.'} / Hi! ${car ? `I'd like to rent the ${car}.` : "I'd like more information."}`)
}

const contacts = [
  {
    label: 'WhatsApp',
    color: '#25D366',
    hoverColor: '#1fb559',
    getHref: (lang: string) => `https://wa.me/${OWNER.whatsapp}?text=${buildMsg(lang)}`,
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.812A12.94 12.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10S21.523 25 16 25a10.94 10.94 0 01-5.5-1.48l-.386-.23-4.6 1.077 1.1-4.476-.253-.4A10.95 10.95 0 016 15c0-5.523 4.477-10 10-10zm-3.5 5.5c-.278 0-.57.005-.82.016-.26.01-.63.098-.96.46-.33.363-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.5 3.9 6.13 5.32.86.33 1.53.53 2.05.68.86.24 1.64.21 2.26.13.69-.09 2.12-.87 2.42-1.7.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42-.36-.18-2.12-1.05-2.45-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.79-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    color: '#0088cc',
    hoverColor: '#0077b5',
    getHref: (_lang: string) => `https://t.me/${OWNER.telegram}`,
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
        <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm5.894 8.221l-2.02 9.52c-.148.658-.537.818-1.088.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.887.701z" />
      </svg>
    ),
  },
  {
    label: 'Viber',
    color: '#7360f2',
    hoverColor: '#5f4ecc',
    getHref: (_lang: string) => `viber://chat?number=${OWNER.viber}`,
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
        <path d="M25.408 6.592C23.84 5.152 20.864 4 16.064 4.032 16.064 4.032 9.6 3.968 6.624 6.752 5.024 8.352 4.48 10.72 4.416 13.664c-.064 2.944-.128 8.448 5.184 9.92v2.272s-.032.896.544 1.088c.704.224 1.12-.448 3.776-3.168 3.872.32 6.848-.416 7.2-.544.784-.256 5.216-.832 5.952-6.752.768-6.112-.352-9.952-1.664-11.888zM21.6 21.28s-.256.32-.608.448c-.32.096-1.44.448-4.896.128 0 0-1.952 2.336-2.56 2.976-.096.096-.224.128-.288.096-.096-.032-.128-.16-.128-.32V21.76c-4.608-1.248-4.352-5.984-4.32-8.128.032-2.144.48-3.904 1.76-5.216 2.528-2.336 8.256-1.856 8.256-1.856 4.032-.032 6.368.896 7.552 2.144 1.472 1.888 1.408 5.472.832 8.576z" />
      </svg>
    ),
  },
  {
    label: 'WeChat',
    color: '#07C160',
    hoverColor: '#06a050',
    getHref: (_lang: string) => `weixin://`,
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
        <path d="M11.175 4C6.112 4 2 7.54 2 11.893c0 2.438 1.29 4.61 3.317 6.064l-.878 2.71 3.04-1.538a10.37 10.37 0 002.696.353c.292 0 .58-.014.863-.04-.18-.588-.278-1.208-.278-1.848 0-4.072 3.814-7.375 8.517-7.375.313 0 .62.018.924.05C19.185 7.08 15.48 4 11.175 4zM8.5 9.5a1 1 0 110-2 1 1 0 010 2zm5.5 0a1 1 0 110-2 1 1 0 010 2zm4.277 1.25C14.19 10.75 10 13.652 10 17.194c0 3.543 4.19 6.306 8.277 6.306.81 0 1.591-.104 2.328-.298l2.614 1.32-.754-2.33C24.35 21.03 26 19.22 26 17.194c0-3.543-3.946-6.444-7.723-6.444zm-2.777 4.25a.75.75 0 110-1.5.75.75 0 010 1.5zm5.5 0a.75.75 0 110-1.5.75.75 0 010 1.5z" />
      </svg>
    ),
  },
]

export default function ContactInfo() {
  const { lang, t } = useLang()
  const { timeStr, dateStr, isOpen } = useMongoliaTime()
  const c = t.contact

  return (
    <section id="locations" className="py-12 md:py-24 px-6 sm:px-8 md:px-16 lg:px-20 bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* Left — contact info */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-4">
            {c.label}
          </p>
          <h2 className="text-4xl font-bold text-white mb-3">{c.title}</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-10">{c.description}</p>

          {/* Big contact buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-8 md:mb-10">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.getHref(lang)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: contact.color } as React.CSSProperties}
                className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-5 py-4 rounded transition-all duration-200 text-white font-semibold text-xs sm:text-sm"
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = contact.hoverColor)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = contact.color)}
              >
                {contact.icon}
                {contact.label}
              </a>
            ))}
          </div>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-yellow-500" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">{c.phone}</p>
                <a href="tel:+97699976835" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +976 9997-6835
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-yellow-500" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">{c.pickupAddress}</p>
                <a
                  href="https://maps.app.goo.gl/hGvq7rzuMDpJcqiA8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Dilav Khutagt Jamsranjav's Street<br />
                  BGD - 33rd Khoroo, Ulaanbaatar 16064
                </a>
              </div>
            </div>

            {/* Mongolia time */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-yellow-500" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold mb-2">{c.mongoliaTime}</p>
                <div className="bg-gray-800 px-4 py-3 inline-flex flex-col gap-0.5 mb-3">
                  <span className="text-yellow-400 text-xl font-bold tracking-wider font-mono">{timeStr}</span>
                  <span className="text-gray-500 text-xs">{dateStr}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-400'}`} />
                  <span className={`text-xs font-semibold ${isOpen ? 'text-green-400' : 'text-red-400'}`}>
                    {isOpen ? c.available : c.outsideHours}
                  </span>
                </div>
                <p className="text-gray-500 text-xs">{c.schedule}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — map */}
        <div className="w-full h-64 sm:h-80 lg:h-full lg:min-h-[420px] overflow-hidden rounded relative">
          <iframe
            title="Pickup Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1337.1172856211885!2d106.91739!3d47.91840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96926d678a6529%3A0x9adf27fdf8c14a63!2sUlaanbaatar!5e0!3m2!1sen!2smn!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale brightness-75 dark:[filter:invert(90%)_hue-rotate(180deg)]"
          />
          <a
            href="https://maps.app.goo.gl/hGvq7rzuMDpJcqiA8"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 flex items-center gap-2 bg-white text-gray-900 text-xs font-semibold px-4 py-2.5 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <MapPin size={13} />
            {c.openMaps}
          </a>
        </div>

      </div>
    </section>
  )
}
