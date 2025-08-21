import React, { useState } from 'react';
import { helpData } from '../assets/data.js';
import './Help.css';

const Help = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="help-container">
      <div className="help-header">
        <h1>{helpData.title}</h1>
        <p className="help-description">{helpData.description}</p>
      </div>

      <div className="help-content">
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {helpData.faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button 
                  className={`faq-question ${expandedFAQ === faq.id ? 'active' : ''}`}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {expandedFAQ === faq.id ? '−' : '+'}
                  </span>
                </button>
                <div className={`faq-answer ${expandedFAQ === faq.id ? 'expanded' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <h2>Still Need Help?</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>📧 Email Us</h3>
              <p>{helpData.contactInfo.email}</p>
            </div>
            <div className="contact-item">
              <h3>📞 Call Us</h3>
              <p>{helpData.contactInfo.phone}</p>
            </div>
            <div className="contact-item">
              <h3>🕒 Support Hours</h3>
              <p>{helpData.contactInfo.hours}</p>
            </div>
            <div className="contact-item">
              <h3>📍 Visit Us</h3>
              <p>{helpData.contactInfo.address}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help;
