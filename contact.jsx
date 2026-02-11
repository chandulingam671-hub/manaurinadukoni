
Action: file_editor create /app/frontend/src/components/Contact.jsx --file-text "import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { contactInfo } from '../data/mockData';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted:', formData);
    toast({
      title: \"Inquiry Sent!\",
      description: \"We'll contact you within 24 hours. Thank you for your interest!\",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      message: ''
    });
  };

  return (
    <section id=\"contact\" className=\"py-24 bg-gradient-to-b from-amber-50 to-white\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        {/* Section Header */}
        <div className=\"text-center max-w-3xl mx-auto mb-16 space-y-4\">
          <span className=\"text-amber-700 font-semibold text-sm uppercase tracking-wider bg-amber-100 px-4 py-2 rounded-full inline-block\">
            Get In Touch
          </span>
          <h2 className=\"text-4xl lg:text-5xl font-bold text-gray-900\">
            Contact{' '}
            <span className=\"text-amber-700\">Mana Oori</span>
          </h2>
          <p className=\"text-lg text-gray-600\">
            Have questions? Want to visit our farms? We'd love to hear from you!
          </p>
        </div>

        <div className=\"grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto\">
          {/* Contact Form */}
          <div className=\"bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-2 border-amber-100\">
            <h3 className=\"text-2xl font-bold text-gray-900 mb-6\">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className=\"space-y-6\">
              <div className=\"space-y-2\">
                <Label htmlFor=\"name\">Full Name *</Label>
                <Input
                  id=\"name\"
                  name=\"name\"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=\"Enter your name\"
                  className=\"border-gray-300 focus:border-amber-500\"
                />
              </div>

              <div className=\"grid sm:grid-cols-2 gap-4\">
                <div className=\"space-y-2\">
                  <Label htmlFor=\"email\">Email *</Label>
                  <Input
                    id=\"email\"
                    name=\"email\"
                    type=\"email\"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=\"your@email.com\"
                    className=\"border-gray-300 focus:border-amber-500\"
                  />
                </div>
                <div className=\"space-y-2\">
                  <Label htmlFor=\"phone\">Phone Number *</Label>
                  <Input
                    id=\"phone\"
                    name=\"phone\"
                    type=\"tel\"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder=\"+91 98765 43210\"
                    className=\"border-gray-300 focus:border-amber-500\"
                  />
                </div>
              </div>

              <div className=\"space-y-2\">
                <Label htmlFor=\"location\">Your Location</Label>
                <Input
                  id=\"location\"
                  name=\"location\"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder=\"City, State\"
                  className=\"border-gray-300 focus:border-amber-500\"
                />
              </div>

              <div className=\"space-y-2\">
                <Label htmlFor=\"message\">Message *</Label>
                <Textarea
                  id=\"message\"
                  name=\"message\"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder=\"Tell us about your requirements...\"
                  rows={5}
                  className=\"border-gray-300 focus:border-amber-500 resize-none\"
                />
              </div>

              <Button
                type=\"submit\"
                className=\"w-full bg-amber-700 hover:bg-amber-800 text-white py-6 text-lg\"
              >
                <Send className=\"w-5 h-5 mr-2\" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className=\"space-y-8\">
            {/* Contact Cards */}
            <div className=\"bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-100\">
              <h3 className=\"text-2xl font-bold text-gray-900 mb-6\">Contact Information</h3>
              <div className=\"space-y-6\">
                <div className=\"flex items-start space-x-4\">
                  <div className=\"w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0\">
                    <Phone className=\"w-6 h-6 text-amber-700\" />
                  </div>
                  <div>
                    <p className=\"font-semibold text-gray-900 mb-1\">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className=\"text-gray-600 hover:text-amber-700 transition-colors\">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className=\"flex items-start space-x-4\">
                  <div className=\"w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0\">
                    <Mail className=\"w-6 h-6 text-amber-700\" />
                  </div>
                  <div>
                    <p className=\"font-semibold text-gray-900 mb-1\">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className=\"text-gray-600 hover:text-amber-700 transition-colors break-all\">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className=\"flex items-start space-x-4\">
                  <div className=\"w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0\">
                    <MapPin className=\"w-6 h-6 text-amber-700\" />
                  </div>
                  <div>
                    <p className=\"font-semibold text-gray-900 mb-1\">Location</p>
                    <p className=\"text-gray-600\">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Locations */}
            <div className=\"bg-amber-50 rounded-2xl p-8 border-2 border-amber-200\">
              <h3 className=\"text-xl font-bold text-gray-900 mb-4\">We Serve</h3>
              <div className=\"grid grid-cols-2 gap-3\">
                {contactInfo.locations.map((location, index) => (
                  <div
                    key={index}
                    className=\"bg-white rounded-lg px-4 py-3 text-center font-medium text-gray-700 shadow-sm\"
                  >
                    {location}
                  </div>
                ))}
              </div>
            </div>

            {/* Logo */}
            <div className=\"flex justify-center\">
              <img
                src=\"https://customer-assets.emergentagent.com/job_mana-oori-authentic/artifacts/aznu02it_Screenshot%202026-02-11%20115959.png\"
                alt=\"Mana Oori Naatu Kodi\"
                className=\"h-32 w-auto\"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
"
Observation: Create successful: /app/frontend/src/components/Contact.jsx
