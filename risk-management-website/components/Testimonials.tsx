import { HiStar } from 'react-icons/hi';

const testimonials = [
  {
    name: 'Jan van der Berg',
    role: 'CEO, TechCorp BV',
    content: 'Dromos heeft ons geholpen bij het opzetten van een robuust risicomanagement framework. Hun expertise en professionele aanpak hebben onze organisatie veel vertrouwen gegeven.',
    rating: 5,
  },
  {
    name: 'Maria Jansen',
    role: 'CFO, FinanceGroup',
    content: 'De risk assessments van Dromos zijn zeer grondig en praktisch toepasbaar. We hebben concrete verbeteringen kunnen doorvoeren dankzij hun adviezen.',
    rating: 5,
  },
  {
    name: 'Peter de Vries',
    role: 'Operations Director, LogiSolutions',
    content: 'Excellent samenwerking met Dromos. Ze begrijpen de uitdagingen in onze sector en leveren maatwerk oplossingen die echt werken.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Ontdek waarom organisaties kiezen voor Dromos als hun partner in risicomanagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-secondary-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-secondary-200 pt-4">
                <p className="font-semibold text-secondary-900">{testimonial.name}</p>
                <p className="text-sm text-secondary-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
