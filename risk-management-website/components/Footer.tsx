import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Dromos</h3>
            <p className="text-secondary-300 mb-4">
              Professioneel risicomanagement en consultancy voor uw organisatie.
            </p>
            <a
              href="https://www.linkedin.com/company/dromos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
              <span>Volg ons op LinkedIn</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@dromos.nl"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                >
                  info@dromos.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {currentYear} Dromos. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
