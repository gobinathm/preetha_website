import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000" 
            alt="Professional headshot" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <p className="text-lg mb-6">
            Hi, I'm Preetha Gobinath, a passionate Social Media Specialist and Content Creator with over 5 years of experience in digital marketing and social media management.
          </p>
          <p className="text-lg mb-6">
            I specialize in creating engaging content that connects brands with their audience, developing comprehensive social media strategies, and driving meaningful engagement across various platforms.
          </p>
          <p className="text-lg">
            My approach combines creativity with data-driven insights to deliver results that exceed expectations. I'm constantly learning and adapting to the ever-changing social media landscape to bring fresh perspectives to every project.
          </p>
        </div>
      </div>
    </div>
  );
}