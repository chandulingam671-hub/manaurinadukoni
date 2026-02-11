
Action: file_editor create /app/frontend/src/components/Hygiene.jsx --file-text "import React from 'react';
import { hygieneStandards } from '../data/mockData';
import { Truck, Package, ShieldCheck, Leaf, Eye, Clock } from 'lucide-react';

const iconMap = {
  Truck: Truck,
  Package: Package,
  ShieldCheck: ShieldCheck,
  Leaf: Leaf,
  Eye: Eye,
  Clock: Clock
};

export const Hygiene = () => {
  return (
    <section id=\"hygiene\" className=\"py-24 bg-gradient-to-b from-amber-50 to-white\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        {/* Section Header */}
        <div className=\"text-center max-w-3xl mx-auto mb-16 space-y-4\">
          <span className=\"text-amber-700 font-semibold text-sm uppercase tracking-wider bg-amber-100 px-4 py-2 rounded-full inline-block\">
            Quality Assurance
          </span>
          <h2 className=\"text-4xl lg:text-5xl font-bold text-gray-900\">
            Our{' '}
            <span className=\"text-amber-700\">Hygiene Standards</span>
          </h2>
          <p className=\"text-lg text-gray-600\">
            We combine traditional village authenticity with modern hygiene practices 
            to ensure the highest quality and safety standards.
          </p>
        </div>

        {/* Standards Grid */}
        <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16\">
          {hygieneStandards.map((standard) => {
            const IconComponent = iconMap[standard.icon];
            return (
              <div
                key={standard.id}
                className=\"group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-200\"
              >
                <div className=\"flex flex-col items-center text-center space-y-4\">
                  <div className=\"w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-700 transition-colors duration-300\">
                    <IconComponent className=\"w-8 h-8 text-amber-700 group-hover:text-white transition-colors duration-300\" />
                  </div>
                  <h3 className=\"text-xl font-bold text-gray-900\">{standard.title}</h3>
                  <p className=\"text-gray-600 leading-relaxed\">{standard.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Section */}
        <div className=\"grid md:grid-cols-3 gap-6 mt-16\">
          <div className=\"relative h-64 rounded-2xl overflow-hidden shadow-xl\">
            <img
              src=\"https://images.unsplash.com/photo-1760745271267-c8ec89f0b6d1\"
              alt=\"Fresh Eggs Packaging\"
              className=\"w-full h-full object-cover\"
            />
            <div className=\"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6\">
              <p className=\"text-white font-semibold\">Hygienic Packaging</p>
            </div>
          </div>
          <div className=\"relative h-64 rounded-2xl overflow-hidden shadow-xl\">
            <img
              src=\"https://images.unsplash.com/photo-1703597803465-20f393f84e0a\"
              alt=\"Clean Transport\"
              className=\"w-full h-full object-cover\"
            />
            <div className=\"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6\">
              <p className=\"text-white font-semibold\">Sanitized Transport</p>
            </div>
          </div>
          <div className=\"relative h-64 rounded-2xl overflow-hidden shadow-xl\">
            <img
              src=\"https://images.unsplash.com/photo-1762885590956-06eecab2096b\"
              alt=\"Farm Operations\"
              className=\"w-full h-full object-cover\"
            />
            <div className=\"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6\">
              <p className=\"text-white font-semibold\">Village Authenticity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
"
Observation: Create successful: /app/frontend/src/components/Hygiene.jsx
