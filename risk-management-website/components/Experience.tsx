import { HiBriefcase, HiChip, HiAcademicCap } from 'react-icons/hi';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-12">
          Experience & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Industries */}
          <div className="bg-secondary-50 p-6 rounded-lg">
            <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <HiBriefcase className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Industries</h3>
            <ul className="space-y-2 text-secondary-700">
              <li>• Financial Services</li>
              <li>• Healthcare</li>
              <li>• Technology</li>
              <li>• [Industry 4]</li>
              <li>• [Industry 5]</li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="bg-secondary-50 p-6 rounded-lg">
            <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <HiChip className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Specializations</h3>
            <ul className="space-y-2 text-secondary-700">
              <li>• Operational Risk</li>
              <li>• Compliance</li>
              <li>• Enterprise Risk Management</li>
              <li>• Crisis Management</li>
              <li>• [Specialization 5]</li>
            </ul>
          </div>

          {/* Methodologies */}
          <div className="bg-secondary-50 p-6 rounded-lg">
            <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <HiAcademicCap className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Frameworks</h3>
            <ul className="space-y-2 text-secondary-700">
              <li>• ISO 31000</li>
              <li>• COSO ERM</li>
              <li>• Basel III</li>
              <li>• [Framework 4]</li>
              <li>• [Framework 5]</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
