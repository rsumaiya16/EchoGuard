import React from 'react';
import bgVideo from '../assets/footerbg.mp4'; // Make sure you place the video in src/assets/

const Footer = () => {
  return (
    <footer className="relative w-full text-white py-10">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center px-6">
        <h1 className="text-xl font-bold">
          Welcome to EchoGuard. EchoGuard is a safety app that uses voice recognition and real-time location tracking to send emergency alerts to contacts and authorities, ensuring help is on the way in critical moments.
        </h1>
        <p className="mt-2">&copy; 2025 EchoGuard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
