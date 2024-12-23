import React from 'react';
import './AboutUs.css'; // External CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>At Auto Service, we are dedicated to providing top-notch car maintenance and repair services to ensure your vehicle runs smoothly and safely. Our team of highly skilled mechanics and technicians are passionate about cars and committed to delivering excellent customer service.</p>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>We aim to provide reliable and efficient auto repair services using the latest technology and equipment. Customer satisfaction is our top priority, and we strive to make your auto service experience hassle-free and affordable.</p>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We are honest and transparent in all our dealings with customers.</li>
          <li><strong>Quality:</strong> We use only the best parts and equipment to ensure your vehicle gets the care it deserves.</li>
          <li><strong>Customer Focus:</strong> Your satisfaction is our top priority, and we work hard to exceed your expectations.</li>
          <li><strong>Innovation:</strong> We stay updated with the latest trends and technology in the automotive industry to serve you better.</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p>Our team of certified technicians has years of experience working with all makes and models of vehicles. They are here to ensure that your car is safe, reliable, and performing at its best.</p>
        <div className="team-profiles">
          <div className="profile-card">
            <img src="/images/technician1.jpg" alt="Technician 1" />
            <h3>John Doe</h3>
            <p>Lead Technician</p>
          </div>
          <div className="profile-card">
            <img src="/images/technician2.jpg" alt="Technician 2" />
            <h3>Jane Smith</h3>
            <p>Service Manager</p>
          </div>
          {/* Add more profiles as needed */}
        </div>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <p>Founded in 2010, Auto Service has grown from a small local repair shop to a trusted name in the automotive service industry. Over the years, we have built a reputation for delivering exceptional service and building long-lasting relationships with our clients.</p>
      </section>
    </div>
  );
};

export default AboutUs;
