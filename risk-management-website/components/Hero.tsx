'use client';

import { HiMail } from 'react-icons/hi';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Photo Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center shadow-xl">
              <div className="text-white text-6xl md:text-7xl font-bold">
                {/* Placeholder - Replace with actual photo */}
                PH
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            [Jouw Naam]
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-primary-600 font-semibold mb-3">
            Senior Risk Management Professional
          </p>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-secondary-600 mb-8">
            Interim • Advisory • Risk Analysis
          </p>

          {/* CTA */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <HiMail className="mr-2 h-5 w-5" />
            Neem Contact Op
          </button>
        </div>
      </div>
    </section>
  );
}
