
Action: file_editor create /app/frontend/src/components/Footer.jsx --file-text "import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { contactInfo } from '../data/mockData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className=\"bg-gradient-to-b from-gray-900 to-gray-950 text-white\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8 py-16\">
        <div className=\"grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12\">
          {/* Brand */}
          <div className=\"space-y-6\">
            <img
              src=\"https://customer-assets.emergentagent.com/job_mana-oori-authentic/artifacts/aznu02it_Screenshot%202026-02-11%20115959.png\"
              alt=\"Mana Oori Naatu Kodi\"
              className=\"h-20 w-auto\"
            />
            <p className=\"text-gray-400 leading-relaxed\">
              Authentic village chicken from our farms to your table. 
              Naturally raised with tradition and care.
            </p>
            <div className=\"flex space-x-4\">
              <a
                href=\"#\"
                className=\"w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors\"
                aria-label=\"Facebook\"
              >
                <Facebook className=\"w-5 h-5\" />
              </a>
              <a
                href=\"#\"
                className=\"w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors\"
                aria-label=\"Instagram\"
              >
                <Instagram className=\"w-5 h-5\" />
              </a>
              <a
                href=\"#\"
                className=\"w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors\"
                aria-label=\"Twitter\"
              >
                <Twitter className=\"w-5 h-5\" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=\"text-lg font-bold mb-6\">Quick Links</h3>
            <ul className=\"space-y-3\">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className=\"text-gray-400 hover:text-amber-500 transition-colors\"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('breeds')}
                  className=\"text-gray-400 hover:text-amber-500 transition-colors\"
                >
                  Our Breeds
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('hygiene')}
                  className=\"text-gray-400 hover:text-amber-500 transition-colors\"
                >
                  Hygiene Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className=\"text-gray-400 hover:text-amber-500 transition-colors\"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Our Breeds */}
          <div>
            <h3 className=\"text-lg font-bold mb-6\">Our Breeds</h3>
            <ul className=\"space-y-3 text-gray-400\">
              <li>Naatu Kodi (నాటు కోడి)</li>
              <li>Nemali Kodi (నెమలి కోడి)</li>
              <li>Petta (పెట్ట)</li>
              <li>Tella Kodi (తెల్ల కోడి)</li>
              <li>Nalla Kodi (నల్ల కోడి)</li>
              <li>Punju (పుంజు)</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className=\"text-lg font-bold mb-6\">Contact Us</h3>
            <ul className=\"space-y-4\">
              <li className=\"flex items-start space-x-3\">
                <Phone className=\"w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0\" />
                <a href={`tel:${contactInfo.phone}`} className=\"text-gray-400 hover:text-amber-500 transition-colors\">
                  {contactInfo.phone}
                </a>
              </li>
              <li className=\"flex items-start space-x-3\">
                <Mail className=\"w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0\" />
                <a href={`mailto:${contactInfo.email}`} className=\"text-gray-400 hover:text-amber-500 transition-colors break-all\">
                  {contactInfo.email}
                </a>
              </li>
              <li className=\"flex items-start space-x-3\">
                <MapPin className=\"w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0\" />
                <span className=\"text-gray-400\">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=\"pt-8 border-t border-gray-800\">
          <div className=\"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0\">
            <p className=\"text-gray-400 text-sm\">
              © {currentYear} Mana Oori Naatu Kodi. All rights reserved.
            </p>
            <div className=\"flex space-x-6 text-sm\">
              <a href=\"#\" className=\"text-gray-400 hover:text-amber-500 transition-colors\">
                Privacy Policy
              </a>
              <a href=\"#\" className=\"text-gray-400 hover:text-amber-500 transition-colors\">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
"
Observation: Create successful: /app/frontend/src/components/Footer.jsx
