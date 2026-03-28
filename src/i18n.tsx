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
      tagline: 'Mongolia · 4x4 & Motorcycle Rental',
      headline1: 'EXPLORE THE',
      headline2: 'WILD STEPPE.',
      description: "Hire the best off road vehicles on offer, explore Mongolia your way at your pace. Drive where the horizon never ends and sleep under a million stars.",
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
        { number: '03', title: 'Contact Us', description: 'Tap WhatsApp, Telegram, Viber, or WeChat — confirm in minutes.' },
      ],
    },
    gallery: {
      label: 'Available Now',
      title: 'Our Rental Fleet',
      hint: 'Click any vehicle to contact us instantly.',
      contactOwner: 'Contact Us',
      perDay: '/day',
      seats: 'seats',
    },
    checklist: {
      title: 'Why Rent With Us?',
      items: [
        'No hidden fees — what you see is what you pay',
        'Fully equipped, well-maintained & regularly serviced vehicles',
        'Full camping setup included free with every rental',
        'Collect from city center location in the capital Ulaanbaatar',
        'Easy booking with instant confirmation',
        'Wide range of modern vehicles & motorcycles to suit every need and budget',
        'Multiple pickup and drop-off locations, including airports',
        'Flexible rental periods — from 1 day to long-term rental',
      ],
    },
    destinations: {
      label: 'Popular Routes',
      title: 'Where Will You Go?',
      subtitle: 'Our rental vehicles are road-ready for every corner of Mongolia.',
      items: [
        {
          name: 'Terelj National Park',
          distance: '80km from Ulaanbaatar',
          description: 'Green valleys, granite peaks, and nomadic gers — the most popular 4x4 rental day trip from Ulaanbaatar.',
          image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
        },
        {
          name: 'Gobi Desert',
          distance: '500km from Ulaanbaatar',
          description: 'Towering sand dunes, dinosaur fossils, and vast silence. A UAZ or Land Cruiser rental is the only way to get here properly.',
          image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop&q=80',
        },
        {
          name: 'Khövsgöl Lake',
          distance: '770km from Ulaanbaatar',
          description: "Mongolia's crystal-clear \"Blue Pearl\" surrounded by taiga forest. Best reached by 4x4 rental on unpaved mountain roads.",
          image: 'https://images.unsplash.com/bwsHBiQtUTU?w=800&auto=format&fit=crop&q=80',
        },
        {
          name: 'Orkhon Valley',
          distance: '360km from Ulaanbaatar',
          description: 'UNESCO World Heritage site with ancient ruins, waterfalls, and nomadic scenery. An unforgettable off-road rental route.',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80',
        },
      ],
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
      tagline: '蒙古 · 四驱车辆与摩托车租赁',
      headline1: '探索',
      headline2: '野性草原。',
      description: '蒙古专业四驱车辆与摩托车租赁服务 — 车况良好、定期保养，专为草原与荒野出行而备。Wild Moto Tours 为您的蒙古之旅提供最合适的座驾。',
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
        { number: '03', title: '联系我们', description: '通过 WhatsApp、Telegram、Viber 或微信联系 — 几分钟内确认。' },
      ],
    },
    gallery: {
      label: '现在可用',
      title: '租赁车队',
      hint: '点击任意车辆，即可立即联系我们。',
      contactOwner: '联系我们',
      perDay: '/天',
      seats: '座',
    },
    checklist: {
      title: '为什么选择我们？',
      items: [
        '无隐藏费用 — 所见即所付',
        '车辆配备齐全、维护良好、定期保养',
        '每次租赁均免费含全套野营装备',
        '可在首都乌兰巴托市中心取车',
        '在线预订便捷，即时确认',
        '车型丰富，含越野车与摩托车，满足不同需求与预算',
        '多个取还车地点，含机场',
        '租期灵活，从一天到长期均可',
      ],
    },
    destinations: {
      label: '热门路线',
      title: '您想去哪里？',
      subtitle: '我们的租赁车辆随时准备好，带您前往蒙古每一个角落。',
      items: [
        {
          name: '特热勒吉国家公园',
          distance: '距乌兰巴托 80 公里',
          description: '绿色山谷、花岗岩峰与游牧蒙古包 — 从乌兰巴托出发最受欢迎的四驱租赁一日游路线。',
          image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
        },
        {
          name: '戈壁沙漠',
          distance: '距乌兰巴托 500 公里',
          description: '巍峨沙丘、恐龙化石与无边寂静。租用 UAZ 或陆地巡洋舰是抵达这里最正确的方式。',
          image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop&q=80',
        },
        {
          name: '库苏古尔湖',
          distance: '距乌兰巴托 770 公里',
          description: '蒙古"蓝色明珠"，清澈湖水被泰加林环抱。沿未铺装山路驾驶四驱租赁车前往，别有一番风味。',
          image: 'https://images.unsplash.com/bwsHBiQtUTU?w=800&auto=format&fit=crop&q=80',
        },
        {
          name: '鄂尔浑河谷',
          distance: '距乌兰巴托 360 公里',
          description: '联合国教科文组织世界遗产地，古迹遗址、瀑布与游牧风光交织。一条令人难忘的越野租赁路线。',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80',
        },
      ],
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
  setLang: () => { },
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try { return (localStorage.getItem('lang') as Lang) || 'en' } catch { return 'en' }
  })
  const handleSet = (l: Lang) => {
    setLang(l)
    try { localStorage.setItem('lang', l) } catch { }
  }
  return <LangContext.Provider value={{ lang, setLang: handleSet }}>{children}</LangContext.Provider>
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  return { lang, setLang, t: translations[lang] }
}
