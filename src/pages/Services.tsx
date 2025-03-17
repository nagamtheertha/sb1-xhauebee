import React from 'react';
import { GraduationCap, BookOpen, FileText, Plane, Building, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      title: 'Education Counseling',
      description: 'Personalized guidance to help you choose the right course and university.',
      features: [
        'Career assessment',
        'Course selection',
        'University shortlisting',
        'Admission strategy',
      ],
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: 'Application Support',
      description: 'Complete assistance with university applications and documentation.',
      features: [
        'Application review',
        'SOP writing assistance',
        'LOR guidance',
        'Document preparation',
      ],
    },
    {
      icon: <Plane className="h-12 w-12 text-blue-600" />,
      title: 'Visa Assistance',
      description: 'Expert support for student visa application and processing.',
      features: [
        'Visa requirement check',
        'Documentation support',
        'Interview preparation',
        'Application tracking',
      ],
    },
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: 'Accommodation Support',
      description: 'Help finding suitable accommodation in your study destination.',
      features: [
        'Housing options',
        'Location guidance',
        'Cost comparison',
        'Booking assistance',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Education Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive support services to guide you through every step of your international education journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Award className="h-5 w-5 text-blue-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our education experts and take the first step towards your international education
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-150">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;