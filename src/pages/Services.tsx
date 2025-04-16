import React from 'react';
import { Instagram, Youtube, TrendingUp, Camera } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Instagram className="w-8 h-8 text-pink-500" />,
      title: "Social Media Management",
      description: "Full-service social media management including content creation, scheduling, and community engagement."
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-500" />,
      title: "Content Creation",
      description: "High-quality photo and video content creation optimized for various social media platforms."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Strategy Development",
      description: "Custom social media strategies aligned with your business goals and target audience."
    },
    {
      icon: <Youtube className="w-8 h-8 text-red-500" />,
      title: "Influencer Marketing",
      description: "Strategic influencer partnerships and campaign management to expand your reach."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}