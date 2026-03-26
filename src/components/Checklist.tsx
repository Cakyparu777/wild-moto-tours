import { CheckCircle2 } from 'lucide-react'
import { useLang } from '../i18n'

export default function Checklist() {
  const { t } = useLang()
  const { title, items } = t.checklist

  return (
    <section className="py-12 md:py-16 px-6 sm:px-8 md:px-16 lg:px-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
