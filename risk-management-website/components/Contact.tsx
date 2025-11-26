import { HiMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
          Laten We Samenwerken
        </h2>

        <p className="text-xl text-secondary-600 mb-12 max-w-2xl mx-auto">
          Beschikbaar voor interim opdrachten en adviesprojecten.
          Neem contact op om te bespreken hoe ik uw organisatie kan helpen.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Email */}
          <a
            href="mailto:info@dromos.nl"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <HiMail className="mr-2 h-6 w-6" />
            info@dromos.nl
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/[jouw-profiel]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-secondary-50 transition-all duration-200 shadow-md border-2 border-primary-200"
          >
            <FaLinkedin className="mr-2 h-6 w-6" />
            LinkedIn Profiel
          </a>
        </div>
      </div>
    </section>
  );
}
