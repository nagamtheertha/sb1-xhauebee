import React from 'react';
import { GraduationCap, BookOpen, DollarSign, Clock } from 'lucide-react';

const StudyDestinations = () => {
  const destinations = [
    {
      country: 'USA',
      image: '/usa.jpg',
      description: 'Home to world-renowned universities like Harvard, MIT, and Stanford.',
      universities: '4,000+',
      avgTuition: '$20,000 - $50,000',
      duration: '4 years',
    },
    {
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80',
      description: 'Traditional excellence with universities like Oxford and Cambridge.',
      universities: '150+',
      avgTuition: '£12,000 - £30,000',
      duration: '3 years',
    },
    {
      country: 'Canada',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80',
      description: 'Quality education with excellent post-study work opportunities.',
      universities: '100+',
      avgTuition: 'CAD 20,000 - 35,000',
      duration: '4 years',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
            alt="Global Education"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Study Destinations</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore top education destinations worldwide and find the perfect place to pursue your academic dreams
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {destinations.map((destination, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={destination.image}
                    alt={destination.country}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Study in {destination.country}</h2>
                  <p className="text-gray-600 mb-8">{destination.description}</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Universities</h3>
                        <p className="text-gray-600">{destination.universities}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Avg. Tuition/Year</h3>
                        <p className="text-gray-600">{destination.avgTuition}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Duration</h3>
                        <p className="text-gray-600">{destination.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Programs</h3>
                        <p className="text-gray-600">Diverse Options</p>
                      </div>
                    </div>
                  </div>
                  <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-150">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyDestinations;