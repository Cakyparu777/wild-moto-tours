import { useLang } from '../i18n'

export default function Process() {
  const { t } = useLang()
  const p = t.process

  return (
    <section id="how-it-works" className="py-12 md:py-20 px-6 sm:px-8 md:px-16 lg:px-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500 mb-3">{p.label}</p>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{p.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl mx-auto">
        {p.steps.map((step, i) => (
          <div key={step.number} className="relative flex flex-col items-center text-center px-8 py-6">
            {i < p.steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gray-200 dark:bg-gray-700" />
            )}
            <div className="relative z-10 w-12 h-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold flex items-center justify-center mb-5">
              {step.number}
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
