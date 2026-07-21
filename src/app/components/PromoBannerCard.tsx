import Link from 'next/link';
import { FaRocket, FaArrowRight, FaLaptopCode } from 'react-icons/fa';

export default function PromoBannerCard() {
  return (
    <div className="w-full max-w-5xl mx-auto my-[10px] p-[10px] rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-[10px] p-[10px]">
        
        {/* Left Content */}
        <div className="space-y-[10px] text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 rounded-full text-xs font-bold text-blue-600">
            <FaRocket className="animate-pulse" />
            <span>Reseller Empowerment Promo</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">3 Professional Websites</span> for Just ₦50,000! 🚀
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
            Build your brand or start your own web agency today. Keep <strong className="text-gray-900 font-bold">100% of the profits</strong> when you resell your slots to clients. Includes hosting, e-commerce, and admin dashboards!
          </p>
        </div>

        {/* Right Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-[10px] w-full md:w-auto shrink-0">
          <Link href="/promo" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2">
              <FaLaptopCode />
              <span>Explore Promo</span>
              <FaArrowRight className="text-xs" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}