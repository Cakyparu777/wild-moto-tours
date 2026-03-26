import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'en' | 'zh'

export const translations = {
  en: {
    nav: {
      fleet: 'Fleet',
      howItWorks: 'How It Works',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Mongolia · 4WD Vehicle Rental',
      headline1: 'EXPLORE THE',
      headline2: 'WILD STEPPE.',
      description: "Mongolia's premier vehicle rental — rugged, well-maintained 4WDs ready for the open steppe. Wild Moto Tours puts you in the right vehicle for any adventure.",
      exploreFleet: 'Explore the Fleet',
      contactUs: 'Contact Us',
      trustLabel: 'Trust Score',
      trustSub: "Off-road adventures across\nMongolia's vast countryside",
    },
    process: {
      label: 'Simple & Fast',
      title: 'How It Works',
      steps: [
        { number: '01', title: 'Browse the Fleet', description: 'Pick the car that fits your style and budget.' },
        { number: '02', title: 'Tell Us Your Dates', description: 'Message us your pickup date and desired location.' },
        { number: '03', title: 'Contact the Owner', description: 'Tap WhatsApp, Telegram, Viber, or WeChat — confirm in minutes.' },
      ],
    },
    gallery: {
      label: 'Available Now',
      title: 'Our Rental Fleet',
      hint: 'Click any vehicle to contact the owner instantly.',
      contactOwner: 'Contact Owner',
      perDay: '/day',
      seats: 'seats',
    },
    contact: {
      label: 'Get in Touch',
      title: 'Contact Us',
      description: 'Reach us instantly on any platform. We respond fast — usually within minutes during working hours.',
      phone: 'Phone',
      pickupAddress: 'Pickup Address',
      mongoliaTime: 'Mongolia Time (UTC+8)',
      available: 'Available now',
      outsideHours: 'Outside hours — message us anyway!',
      schedule: 'Mon – Sat: 9:00 AM – 8:00 PM · Sun: 10:00 AM – 6:00 PM',
      openMaps: 'Open in Google Maps',
    },
  },
  zh: {
    nav: {
      fleet: '车队',
      howItWorks: '预订流程',
      contact: '联系我们',
    },
    hero: {
      tagline: '蒙古 · 四驱车辆租赁',
      headline1: '探索',
      headline2: '野性草原。',
      description: '蒙古专业四驱车辆租赁服务 — 车况良好、性能可靠，专为草原与荒野出行而备。Wild Moto Tours 让您的蒙古之旅无拘无束。',
      exploreFleet: '浏览车队',
      contactUs: '联系我们',
      trustLabel: '信任评分',
      trustSub: '穿越蒙古广袤大地的\n越野探险之旅',
    },
    process: {
      label: '简单快捷',
      title: '预订流程',
      steps: [
        { number: '01', title: '浏览车队', description: '选择适合您风格和预算的车辆。' },
        { number: '02', title: '告知出行日期', description: '发消息告诉我们您的取车日期和地点。' },
        { number: '03', title: '联系车主', description: '通过 WhatsApp、Telegram、Viber 或微信联系 — 几分钟内确认。' },
      ],
    },
    gallery: {
      label: '现在可用',
      title: '租赁车队',
      hint: '点击任意车辆，即可立即联系车主。',
      contactOwner: '联系车主',
      perDay: '/天',
      seats: '座',
    },
    contact: {
      label: '立即联系',
      title: '联系我们',
      description: '通过任意平台即时联系我们。工作时间内通常几分钟内回复。',
      phone: '电话',
      pickupAddress: '取车地址',
      mongoliaTime: '蒙古时间 (UTC+8)',
      available: '现在在线',
      outsideHours: '非工作时间 — 仍可发消息！',
      schedule: '周一至周六: 9:00 – 20:00 · 周日: 10:00 – 18:00',
      openMaps: '在 Google 地图中打开',
    },
  },
}

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'en',
  setLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try { return (localStorage.getItem('lang') as Lang) || 'en' } catch { return 'en' }
  })
  const handleSet = (l: Lang) => {
    setLang(l)
    try { localStorage.setItem('lang', l) } catch {}
  }
  return <LangContext.Provider value={{ lang, setLang: handleSet }}>{children}</LangContext.Provider>
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  return { lang, setLang, t: translations[lang] }
}
