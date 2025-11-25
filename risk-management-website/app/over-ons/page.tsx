import Link from 'next/link';
import { HiCheckCircle, HiLightBulb, HiUserGroup, HiTrendingUp } from 'react-icons/hi';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Over <span className="text-primary-600">Dromos</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Uw partner in professioneel risicomanagement. Wij helpen organisaties
            bij het identificeren, analyseren en beheersen van risico's om
            duurzame groei te realiseren.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-lg shadow-lg">
            <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <HiLightBulb className="h-7 w-7 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Onze Missie</h2>
            <p className="text-secondary-700 leading-relaxed">
              Wij streven ernaar om organisaties te empoweren met de kennis,
              tools en strategieën die nodig zijn om risico's effectief te
              managen. Ons doel is om een veilige en veerkrachtige bedrijfsomgeving
              te creëren waarin onze klanten met vertrouwen hun ambities kunnen
              waarmaken.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-white p-8 rounded-lg shadow-lg">
            <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <HiTrendingUp className="h-7 w-7 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Onze Visie</h2>
            <p className="text-secondary-700 leading-relaxed">
              We geloven in een toekomst waarin risicomanagement niet wordt gezien
              als een noodzakelijk kwaad, maar als een strategische enabler van
              groei en innovatie. Door proactief om te gaan met risico's,
              kunnen organisaties kansen beter benutten en hun concurrentiepositie
              versterken.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-6 text-center">
            Ons Verhaal
          </h2>
          <div className="bg-secondary-50 p-8 rounded-lg">
            <p className="text-secondary-700 leading-relaxed mb-4">
              Dromos is opgericht vanuit de overtuiging dat effectief risicomanagement
              de basis is voor duurzaam ondernemerschap. Met jarenlange ervaring
              in diverse sectoren hebben we een diep begrip ontwikkeld van de
              uitdagingen waarmee organisaties worden geconfronteerd.
            </p>
            <p className="text-secondary-700 leading-relaxed mb-4">
              Onze aanpak combineert bewezen frameworks met praktische, op maat
              gemaakte oplossingen. We geloven niet in one-size-fits-all, maar
              in het begrijpen van de unieke context van elke organisatie en het
              leveren van advies dat daadwerkelijk waarde toevoegt.
            </p>
            <p className="text-secondary-700 leading-relaxed">
              Door de jaren heen hebben we een breed netwerk opgebouwd van
              specialisten en partners, waardoor we onze klanten altijd de beste
              expertise kunnen bieden, ongeacht de aard of complexiteit van hun
              risicomanagement uitdagingen.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Onze Waarden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Integriteit',
                description: 'We handelen altijd integer en transparant in al onze interacties.',
              },
              {
                title: 'Excellence',
                description: 'We streven naar de hoogste kwaliteit in alles wat we doen.',
              },
              {
                title: 'Samenwerking',
                description: 'We geloven in de kracht van partnership en co-creatie.',
              },
              {
                title: 'Innovatie',
                description: 'We blijven vooroplopen door continue te innoveren en te leren.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-secondary-100 hover:shadow-xl transition-all duration-300"
              >
                <HiCheckCircle className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Waarom Kiezen voor Dromos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiUserGroup className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Ervaren Team
              </h3>
              <p className="text-secondary-600">
                Ons team bestaat uit ervaren professionals met bewezen track records
                in diverse sectoren en risicomanagement disciplines.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiCheckCircle className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Bewezen Methodologie
              </h3>
              <p className="text-secondary-600">
                We gebruiken internationaal erkende frameworks en best practices,
                aangepast aan uw specifieke situatie en behoeften.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiTrendingUp className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Resultaatgericht
              </h3>
              <p className="text-secondary-600">
                We focussen op tastbare resultaten en meetbare verbeteringen in
                uw risicomanagement capabilities en organisatie resilience.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Klaar om uw risicomanagement te verbeteren?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Neem contact met ons op voor een vrijblijvend gesprek over uw uitdagingen en ambities.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-secondary-50 transition-all duration-200 shadow-lg"
          >
            Neem Contact Op
          </Link>
        </div>
      </div>
    </div>
  );
}
