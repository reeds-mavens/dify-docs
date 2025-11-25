'use client';

import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Er is iets misgegaan. Probeer het later opnieuw.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Er is een fout opgetreden bij het verzenden. Probeer het later opnieuw.');
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-secondary-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Neem Contact Op
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Heeft u vragen of wilt u meer informatie? We helpen u graag verder.
            Neem contact met ons op via onderstaand formulier of via de contactgegevens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Contactgegevens
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <HiMail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-secondary-900">Email</h3>
                    <a
                      href="mailto:info@dromos.nl"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      info@dromos.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FaLinkedin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-secondary-900">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/company/dromos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      Volg ons op LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-bold mb-3">Waarom Dromos?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <HiCheckCircle className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                  <span>15+ jaar ervaring</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                  <span>Maatwerk oplossingen</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                  <span>Bewezen resultaten</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                  <span>Persoonlijke aanpak</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Stuur ons een bericht
              </h2>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                  <HiCheckCircle className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-900">Bericht verzonden!</h3>
                    <p className="text-green-700">
                      Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Uw naam"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="uw.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="06 12345678"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                      Onderwerp *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecteer een onderwerp</option>
                      <option value="algemene-vraag">Algemene vraag</option>
                      <option value="offerte-aanvraag">Offerte aanvraag</option>
                      <option value="risk-assessment">Risk Assessment</option>
                      <option value="training">Training & Workshops</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Vertel ons over uw situatie en hoe we u kunnen helpen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                >
                  {status === 'loading' ? 'Bezig met verzenden...' : 'Verstuur Bericht'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
