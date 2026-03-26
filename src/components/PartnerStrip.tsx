import loneRiderLogo from '../public/logo/Lone_rider_logo.png'

export default function PartnerStrip() {
  return (
    <div className="bg-white border-y border-gray-200 py-6 px-6 sm:px-8 md:px-16 lg:px-20">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <p className="text-gray-500 text-xs font-semibold tracking-[0.2em] uppercase text-center sm:text-left">
          All motorcycles come fully equipped with
        </p>
        <img
          src={loneRiderLogo}
          alt="Lone Rider"
          className="h-10 w-auto object-contain"
        />
        <p className="text-gray-500 text-xs font-semibold tracking-[0.2em] uppercase text-center sm:text-left">
          luggage system
        </p>
      </div>
    </div>
  )
}
