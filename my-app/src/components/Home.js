import React from 'react';
import './Home.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Home = () => {
  return (
    <div className="home-container" data-aos="fade-up">
      <h1>Welcome to the Drone Management Platform</h1>
      <p>
        Our platform offers an innovative solution to manage your drones effectively and efficiently. Whether you are a hobbyist or a professional, our comprehensive tools and user-friendly interface make drone management a breeze. 
      </p>
      <p>
        With our platform, you can add, monitor, and manage your drones in real-time. You can track the location, status, and various metrics of your drones, ensuring smooth operations and enhancing the safety and security of your drone flights.
      </p>
      <p>
        We are dedicated to providing the best service and continuously improving our platform to meet your needs. Explore our features and experience the future of drone management with us!
      </p>
    </div>
  );
};

export default Home;

