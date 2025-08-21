import React from 'react';
import './FeaturedSection.css';

const FeaturedSection = () => {
  const features = [
    {
      id: 1,
      title: "Fresh Ingredients Daily",
      description: "We source the freshest ingredients from local farms every morning",
      icon: "🥬"
    },
    {
      id: 2,
      title: "Expert Chefs",
      description: "Our team of experienced chefs brings authentic flavors to every dish",
      icon: "👨‍🍳"
    },
    {
      id: 3,
      title: "Fast Delivery",
      description: "Get your favorite meals delivered hot and fresh within 30 minutes",
      icon: "🚚"
    }
  ];

  return (
    <section id="featured" className="featured-section">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
