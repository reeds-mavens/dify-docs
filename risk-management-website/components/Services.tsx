import { HiShieldCheck, HiChartBar, HiLightBulb, HiClipboardCheck, HiAcademicCap, HiCog } from 'react-icons/hi';

const services = [
  {
    icon: HiShieldCheck,
    title: 'Risk Assessment',
    description: 'Identificeer en evalueer potentiële risico\'s binnen uw organisatie met onze grondige risk assessment methodologie.',
  },
  {
    icon: HiChartBar,
    title: 'Risk Analyse',
    description: 'Diepgaande analyse van risico\'s met kwantitatieve en kwalitatieve methoden voor betere besluitvorming.',
  },
  {
    icon: HiLightBulb,
    title: 'Strategisch Advies',
    description: 'Ontwikkel effectieve risicomanagementstrategieën afgestemd op uw bedrijfsdoelstellingen.',
  },
  {
    icon: HiClipboardCheck,
    title: 'Compliance Management',
    description: 'Zorg voor naleving van wet- en regelgeving met onze compliance monitoring en rapportage.',
  },
  {
    icon: HiAcademicCap,
    title: 'Training & Workshops',
    description: 'Verbeter het risicobewustzijn binnen uw organisatie met op maat gemaakte trainingen.',
  },
  {
    icon: HiCog,
    title: 'Implementatie',
    description: 'Praktische implementatie van risicomanagement systemen en processen binnen uw organisatie.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Onze Services
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Wij bieden een breed scala aan risicomanagement diensten om uw organisatie
            te helpen bij het bereiken van strategische doelstellingen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-secondary-50 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-secondary-100"
              >
                <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
