import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Blogger",
      content: "Absolutely love the quality and taste! The delivery is always on time and the food arrives hot. My go-to place for comfort food.",
      rating: 5,
      image: "👤"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Regular Customer",
      content: "Been ordering from here for months. Never disappointed! The portions are generous and prices are reasonable. Highly recommend!",
      rating: 5,
      image: "👤"
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Food Enthusiast",
      content: "The variety is amazing! There's something for everyone. The app is easy to use and customer service is excellent.",
      rating: 5,
      image: "👤"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="star">⭐</span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="customer-avatar">{testimonial.image}</div>
                <div className="customer-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
