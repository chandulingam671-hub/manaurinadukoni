
Action: file_editor create /app/frontend/src/components/Hero.jsx --file-text "import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id=\"hero\"
      className=\"relative min-h-screen flex items-center justify-center overflow-hidden\"
    >
      {/* Background Image with Overlay */}
      <div className=\"absolute inset-0 z-0\">
        <img
          src=\"https://images.unsplash.com/photo-1715034076526-79a3241d046d\"
          alt=\"Village Farm\"
          className=\"w-full h-full object-cover\"
        />
        <div className=\"absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70\"></div>
      </div>

      {/* Content */}
      <div className=\"relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center\">
        <div className=\"max-w-4xl mx-auto space-y-8 animate-fade-up\">
          {/* Badge */}
          <div className=\"inline-flex items-center space-x-2 bg-amber-700/20 backdrop-blur-sm border border-amber-600/30 rounded-full px-6 py-2\">
            <MapPin className=\"w-4 h-4 text-amber-400\" />
            <span className=\"text-amber-100 text-sm font-medium\">Naturally Raised in Village Farms</span>
          </div>

          {/* Main Headline */}
          <h1 className=\"text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight\">
            Pure Village Strength.
            <br />
            <span className=\"text-amber-400\">Naturally Raised.</span>
          </h1>

          {/* Subheadline */}
          <p className=\"text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed\">
            Authentic country chicken from our village farms to your table. 
            Breed purity, natural feed, and hygienic transport guaranteed.
          </p>

          {/* CTAs */}
          <div className=\"flex flex-col sm:flex-row items-center justify-center gap-4 pt-4\">
            <Button
              onClick={() => scrollToSection('breeds')}
              size=\"lg\"
              className=\"bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105\"
            >
              Explore Our Breeds
              <ArrowRight className=\"w-5 h-5 ml-2\" />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size=\"lg\"
              variant=\"outline\"
              className=\"border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-6 text-lg rounded-lg transition-all duration-300\"
            >
              Visit Our Farm
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className=\"grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto\">
            <div className=\"text-center\">
              <div className=\"text-4xl font-bold text-amber-400 mb-2\">100%</div>
              <div className=\"text-gray-300 text-sm\">Natural Feeding</div>
            </div>
            <div className=\"text-center\">
              <div className=\"text-4xl font-bold text-amber-400 mb-2\">6+</div>
              <div className=\"text-gray-300 text-sm\">Village Breeds</div>
            </div>
            <div className=\"text-center\">
              <div className=\"text-4xl font-bold text-amber-400 mb-2\">ISO</div>
              <div className=\"text-gray-300 text-sm\">Certified Hygiene</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className=\"absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce\">
        <div className=\"w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2\">
          <div className=\"w-1 h-3 bg-white/70 rounded-full\"></div>
        </div>
      </div>
    </section>
  );
};
"
Observation: Create successful: /app/frontend/src/components/Hero.jsx
