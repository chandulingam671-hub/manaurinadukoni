
Action: file_editor create /app/frontend/src/components/Breeds.jsx --file-text "import React from 'react';
import { breeds } from '../data/mockData';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

export const Breeds = () => {
  const handleInquiry = (breedName) => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id=\"breeds\" className=\"py-24 bg-white\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        {/* Section Header */}
        <div className=\"text-center max-w-3xl mx-auto mb-16 space-y-4\">
          <span className=\"text-amber-700 font-semibold text-sm uppercase tracking-wider bg-amber-100 px-4 py-2 rounded-full inline-block\">
            Our Premium Breeds
          </span>
          <h2 className=\"text-4xl lg:text-5xl font-bold text-gray-900\">
            Traditional Village{' '}
            <span className=\"text-amber-700\">Chicken Breeds</span>
          </h2>
          <p className=\"text-lg text-gray-600\">
            Discover our authentic collection of naturally-raised village chickens, 
            each with unique characteristics and superior nutritional value.
          </p>
        </div>

        {/* Breeds Grid */}
        <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8\">
          {breeds.map((breed) => (
            <Card
              key={breed.id}
              className=\"group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-amber-200\"
            >
              {/* Image */}
              <div className=\"relative h-64 overflow-hidden\">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className=\"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500\"
                />
                <div className=\"absolute top-4 right-4\">
                  <Badge
                    variant={breed.availability === \"In Stock\" ? \"default\" : \"secondary\"}
                    className={breed.availability === \"In Stock\" ? \"bg-green-600\" : \"bg-orange-500\"}
                  >
                    {breed.availability}
                  </Badge>
                </div>
              </div>

              <CardHeader className=\"space-y-2 pb-3\">
                <div className=\"flex items-center justify-between\">
                  <h3 className=\"text-2xl font-bold text-gray-900\">{breed.name}</h3>
                  <span className=\"text-xl font-bold text-amber-700\">{breed.price}</span>
                </div>
                <p className=\"text-sm text-gray-500 font-medium\">{breed.teluguName}</p>
              </CardHeader>

              <CardContent className=\"space-y-4\">
                <p className=\"text-gray-700 leading-relaxed\">{breed.description}</p>

                {/* Benefits */}
                <div className=\"space-y-2\">
                  <p className=\"text-sm font-semibold text-gray-900\">Key Benefits:</p>
                  <div className=\"grid grid-cols-2 gap-2\">
                    {breed.benefits.map((benefit, index) => (
                      <div key={index} className=\"flex items-start space-x-2\">
                        <Check className=\"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0\" />
                        <span className=\"text-sm text-gray-600\">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  onClick={() => handleInquiry(breed.name)}
                  className=\"w-full bg-amber-700 hover:bg-amber-800 text-white\"
                >
                  Inquire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
"
Observation: Create successful: /app/frontend/src/components/Breeds.jsx
