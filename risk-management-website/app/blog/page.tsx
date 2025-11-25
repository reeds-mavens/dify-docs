import Link from 'next/link';
import { HiArrowRight, HiCalendar, HiClock } from 'react-icons/hi';

const blogPosts = [
  {
    id: 'waarom-risicomanagement-essentieel-is',
    title: 'Waarom Risicomanagement Essentieel is voor Elk Bedrijf',
    excerpt: 'In een steeds complexere bedrijfsomgeving is effectief risicomanagement niet langer een optie, maar een noodzaak. Ontdek waarom elke organisatie hier aandacht aan moet besteden.',
    date: '15 November 2024',
    readTime: '5 min',
    category: 'Strategie',
  },
  {
    id: 'top-5-risicos-voor-organisaties',
    title: 'Top 5 Risico\'s voor Organisaties in 2024',
    excerpt: 'Van cybersecurity tot supply chain disruptions - we bespreken de vijf belangrijkste risico\'s waar organisaties dit jaar mee te maken krijgen en hoe je deze kunt beheersen.',
    date: '8 November 2024',
    readTime: '7 min',
    category: 'Trends',
  },
  {
    id: 'implementatie-risk-framework',
    title: 'Stapsgewijze Gids: Implementatie van een Risk Management Framework',
    excerpt: 'Een praktische handleiding voor het implementeren van een effectief risk management framework binnen uw organisatie, van assessment tot monitoring.',
    date: '1 November 2024',
    readTime: '8 min',
    category: 'Implementatie',
  },
  {
    id: 'rol-van-data-in-risicomanagement',
    title: 'De Rol van Data Analytics in Modern Risicomanagement',
    excerpt: 'Hoe data analytics en AI de manier waarop we risico\'s identificeren en beheren transformeren, en wat dit betekent voor uw organisatie.',
    date: '25 Oktober 2024',
    readTime: '6 min',
    category: 'Technologie',
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-secondary-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Blog & Inzichten
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Blijf op de hoogte van de laatste ontwikkelingen in risicomanagement
            en leer van onze expertise.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-3 hover:text-primary-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <HiCalendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiClock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Lees Meer
                  <HiArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
