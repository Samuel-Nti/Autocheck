import React from 'react';
import './Features.css'; // External CSS file for styling

const featuresData = [
  {
    id: 1,
    icon: '🔧', // Use an icon or image for better visuals
    title: 'Expert Repairs',
    description: 'Our certified technicians provide top-notch repairs to keep your vehicle running smoothly.'
  },
  {
    id: 2,
    icon: '⚙️', // Use an icon or image for better visuals
    title: 'Quality Parts',
    description: 'We use only high-quality parts and fluids to ensure the best performance and longevity for your vehicle.'
  },
  {
    id: 3,
    icon: '📅', // Use an icon or image for better visuals
    title: 'Scheduled Maintenance',
    description: 'Stay on top of your vehicle’s maintenance with our easy scheduling and reminders.'
  },
  {
    id: 4,
    icon: '🛠️', // Use an icon or image for better visuals
    title: 'Fast Service',
    description: 'Our streamlined processes and skilled team ensure quick and efficient service.'
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Services</h2>
      <p className="features-description">Discover the benefits of choosing our auto service center for all your vehicle needs.</p>
      <div className="features-cards">
        {featuresData.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
