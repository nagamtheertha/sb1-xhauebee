import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Globe } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: 'Expert Counseling',
      description: 'Get personalized guidance from our experienced education consultants',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'University Selection',
      description: 'Find the perfect university matching your academic goals and preferences',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Visa Assistance',
      description: 'Complete support for student visa application and documentation',
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Global Network',
      description: 'Access to top universities and institutions worldwide',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
            alt="Students studying"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Your Journey to Global Education Starts Here
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto animate-fade-in-delay-1">
              Expert guidance for international education, helping you choose the right university and course abroad
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-150 animate-fade-in-delay-2"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose WesternEduConnect?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support throughout your journey to studying abroad
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free consultation with our education experts and take the first step towards your international education
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-150"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;