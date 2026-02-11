
Action: file_editor create /app/frontend/src/components/Testimonials.jsx --file-text "import React from 'react';
import { testimonials } from '../data/mockData';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id=\"testimonials\" className=\"py-24 bg-white\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        {/* Section Header */}
        <div className=\"text-center max-w-3xl mx-auto mb-16 space-y-4\">
          <span className=\"text-amber-700 font-semibold text-sm uppercase tracking-wider bg-amber-100 px-4 py-2 rounded-full inline-block\">
            Customer Stories
          </span>
          <h2 className=\"text-4xl lg:text-5xl font-bold text-gray-900\">
            What Our{' '}
            <span className=\"text-amber-700\">Customers Say</span>
          </h2>
          <p className=\"text-lg text-gray-600\">
            Join thousands of satisfied families enjoying authentic village chicken
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className=\"grid md:grid-cols-3 gap-8\">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className=\"hover:shadow-xl transition-shadow duration-300 border-2 hover:border-amber-200\"
            >
              <CardContent className=\"p-8 space-y-6\">
                {/* Quote Icon */}
                <div className=\"flex justify-between items-start\">
                  <Quote className=\"w-10 h-10 text-amber-700 opacity-20\" />
                  {/* Rating */}
                  <div className=\"flex space-x-1\">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className=\"w-4 h-4 fill-amber-500 text-amber-500\" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <div className=\"space-y-3\">
                  <p className=\"text-gray-700 leading-relaxed italic\">
                    \"{testimonial.comment}\"
                  </p>
                  {testimonial.translation && (
                    <p className=\"text-sm text-gray-500 italic\">
                      {testimonial.translation}
                    </p>
                  )}
                </div>

                {/* Customer Info */}
                <div className=\"pt-4 border-t border-gray-100\">
                  <p className=\"font-semibold text-gray-900\">{testimonial.name}</p>
                  <p className=\"text-sm text-gray-500\">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className=\"mt-16 text-center\">
          <div className=\"inline-flex items-center space-x-3 bg-amber-50 border-2 border-amber-200 rounded-full px-8 py-4\">
            <div className=\"flex -space-x-2\">
              <div className=\"w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold border-2 border-white\">
                5
              </div>
              <div className=\"w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold border-2 border-white\">
                4.9
              </div>
            </div>
            <div className=\"text-left\">
              <p className=\"font-bold text-gray-900\">Rated 4.9/5</p>
              <p className=\"text-sm text-gray-600\">Based on 500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
"
Observation: Create successful: /app/frontend/src/components/Testimonials.jsx
