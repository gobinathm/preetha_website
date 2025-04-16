import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BarChart2, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Social Media Specialist & Content Creator
          </h1>
          <h2 className="text-xl md:text-2xl mb-8">
            Transforming brands through engaging social media storytelling
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/portfolio"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center"
            >
              View Portfolio <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-600">Accounts Managed</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BarChart2 className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-gray-600">Total Reach</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-4xl font-bold mb-2">5.2%</div>
              <div className="text-gray-600">Avg. Engagement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-gray-600 italic mb-6">
              "Preetha has transformed our social media presence completely. Our engagement rates have tripled, and our follower growth is consistently strong. Her strategic approach and creative content ideas have made a real difference to our brand."
            </div>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-gray-500 text-sm">Marketing Director, TechStart</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;