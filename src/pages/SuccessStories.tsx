import React from 'react';
import { Star } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Priya Sharma',
      university: 'University of Toronto',
      program: 'Computer Science',
      quote: 'WesternEduConnect helped me navigate the complex application process and secure a scholarship. Now I\'m pursuing my dream career in AI research.',
      year: '2023',
    },
    {
      name: 'Arjun Patel',
      university: 'University of British Columbia',
      program: 'Business Administration',
      quote: 'The guidance I received was invaluable. From university selection to visa processing, everything was handled professionally.',
      year: '2023',
    },
    {
      name: 'Anjali Verma',
      university: 'McGill University',
      program: 'Environmental Science',
      quote: 'Thanks to WesternEduConnect, I\'m now studying at my dream university. Their support made the entire process smooth.',
      year: '2022',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
            alt="Graduation ceremony"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Read about the journeys of our successful students who achieved their dreams of studying abroad
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-600 mb-6">
                    "{story.quote}"
                  </blockquote>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-xl">{story.name}</p>
                    <p className="text-blue-600">{story.program}</p>
                    <p className="text-gray-600">{story.university}</p>
                    <p className="text-gray-500">Class of {story.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">1000+</h3>
              <p className="text-gray-600">Students Placed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Partner Universities</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;