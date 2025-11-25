import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
            Professioneel <span className="text-primary-600">Risicomanagement</span>
            <br />
            voor uw organisatie
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Dromos helpt bedrijven bij het identificeren, analyseren en beheersen van risico's
            om duurzame groei en continuïteit te waarborgen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Neem Contact Op
              <HiArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/over-ons"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-secondary-50 transition-all duration-200 shadow-md border-2 border-primary-200"
            >
              Meer Over Ons
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-secondary-600">Jaren Ervaring</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
            <div className="text-secondary-600">Tevreden Klanten</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-secondary-600">Klanttevredenheid</div>
          </div>
        </div>
      </div>
    </section>
  );
}
