
Action: file_editor create /app/frontend/src/components/About.jsx --file-text "import React from 'react';
import { Heart, Sprout, Shield, Home } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Home,
      title: \"Village Roots\",
      description: \"Deeply rooted in traditional Telugu village farming practices\"
    },
    {
      icon: Sprout,
      title: \"Natural Rearing\",
      description: \"Free-range chickens with organic feed and no chemicals\"
    },
    {
      icon: Shield,
      title: \"Breed Purity\",
      description: \"Authentic village breeds maintained through generations\"
    },
    {
      icon: Heart,
      title: \"Ethical Care\",
      description: \"Humane treatment with clean, spacious environments\"
    }
  ];

  return (
    <section id=\"about\" className=\"py-24 bg-gradient-to-b from-amber-50 to-white\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"grid lg:grid-cols-2 gap-16 items-center\">
          {/* Left Content */}
          <div className=\"space-y-8\">
            <div className=\"space-y-4\">
              <div className=\"inline-block\">
                <span className=\"text-amber-700 font-semibold text-sm uppercase tracking-wider bg-amber-100 px-4 py-2 rounded-full\">
                  Our Story
                </span>
              </div>
              <h2 className=\"text-4xl lg:text-5xl font-bold text-gray-900 leading-tight\">
                Bringing Village Authenticity to Your{' '}
                <span className=\"text-amber-700\">Kitchen</span>
              </h2>
              <p className=\"text-lg text-gray-700 leading-relaxed\">
                <span className=\"font-semibold\">మన ఊరి (Mana Oori)</span> means \"Our Village\" — 
                a promise of authenticity, purity, and tradition. We are a community-driven brand 
                dedicated to preserving the heritage of{' '}
                <span className=\"font-semibold\">నాటు కోడి (Naatu Kodi)</span> — authentic country 
                chickens raised naturally in village environments.
              </p>
              <p className=\"text-lg text-gray-700 leading-relaxed\">
                Our chickens roam freely in open spaces, feeding on natural grains and traditional 
                village feed. No hormones, no antibiotics — just pure village strength passed down 
                through generations. We combine traditional rearing practices with modern hygiene 
                standards to deliver the freshest, healthiest chicken from our farm to your home.
              </p>
            </div>

            {/* Values Grid */}
            <div className=\"grid sm:grid-cols-2 gap-6 pt-4\">
              {values.map((value, index) => (
                <div
                  key={index}
                  className=\"flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300\"
                >
                  <div className=\"flex-shrink-0\">
                    <div className=\"w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center\">
                      <value.icon className=\"w-6 h-6 text-amber-700\" />
                    </div>
                  </div>
                  <div>
                    <h3 className=\"font-semibold text-gray-900 mb-1\">{value.title}</h3>
                    <p className=\"text-sm text-gray-600\">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className=\"relative\">
            <div className=\"grid grid-cols-2 gap-4\">
              <div className=\"space-y-4\">
                <img
                  src=\"https://images.unsplash.com/photo-1689356156827-98685f1422bb\"
                  alt=\"Village Chickens\"
                  className=\"rounded-2xl shadow-xl w-full h-64 object-cover\"
                />
                <img
                  src=\"https://customer-assets.emergentagent.com/job_mana-oori-authentic/artifacts/5axo4xyn_Screenshot%202026-02-11%20115911.png\"
                  alt=\"Fresh Eggs\"
                  className=\"rounded-2xl shadow-xl w-full h-48 object-cover\"
                />
              </div>
              <div className=\"space-y-4 pt-8\">
                <img
                  src=\"https://images.unsplash.com/photo-1764094229035-4dac53a0df40\"
                  alt=\"Village Farm\"
                  className=\"rounded-2xl shadow-xl w-full h-48 object-cover\"
                />
                <img
                  src=\"https://customer-assets.emergentagent.com/job_mana-oori-authentic/artifacts/yjnq9efs_Screenshot%202026-02-11%20115921.png\"
                  alt=\"Packaged Eggs\"
                  className=\"rounded-2xl shadow-xl w-full h-64 object-cover\"
                />
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className=\"absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-40 -z-10\"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
"
Observation: Create successful: /app/frontend/src/components/About.jsx
