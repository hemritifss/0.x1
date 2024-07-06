import React from 'react';
import './About.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const About = () => {
  return (
    <div className="about-container" data-aos="fade-up">
      <h1>About the Drone Management Platform</h1>
      <p>
        The Drone Management Platform is a state-of-the-art system designed to streamline the operations and management of drones. Developed by Telnet Technologies, our platform provides users with the tools necessary to efficiently manage their drone fleets.
      </p>
      <p>
        Our mission is to simplify drone operations, ensuring that users can focus on their primary tasks without worrying about the complexities of drone management. The platform offers real-time monitoring, tracking, and data analysis to keep you informed about your drones' status and performance.
      </p>
      <p>
        Key Features:
      </p>
      <ul>
        <li>Real-time tracking of drone locations</li>
        <li>Comprehensive drone data management</li>
        <li>User-friendly interface</li>
        <li>Secure and reliable connection between drones and the platform</li>
        <li>Easy authorization and flight management</li>
      </ul>
      <p>
        Telnet Technologies is committed to providing cutting-edge solutions and exceptional customer service. Join us on this exciting journey and take your drone management to the next level.
      </p>
    </div>
  );
};

export default About;
