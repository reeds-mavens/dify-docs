import { HiUserGroup, HiLightBulb, HiChartBar, HiCog } from 'react-icons/hi';

const services = [
  {
    icon: HiUserGroup,
    title: 'Interim Risk Management',
    description: 'Tijdelijke CRO/Risk Officer rollen, opzetten van risicofuncties en interim leiderschap om kritieke hiaten te overbruggen.',
  },
  {
    icon: HiLightBulb,
    title: 'Enterprise Risk Advisory',
    description: 'ERM framework ontwikkeling, risicobereidheid definitie en optimalisatie van governance structuren.',
  },
  {
    icon: HiChartBar,
    title: 'Risk Analysis & Assessment',
    description: 'Projectgebaseerde risicoevaluaties, scenarioanalyse en uitgebreide mitigatieplannen.',
  },
  {
    icon: HiCog,
    title: 'Operational Risk Management',
    description: 'Identificatie van procesrisico\'s, implementatie van control frameworks en ontwikkeling van risicocultuur.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-12">
          Wat Ik Doe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-300 border border-secondary-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
