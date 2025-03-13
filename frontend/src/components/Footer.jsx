import React from 'react';
import bgVideo from '../assets/footerbg.mp4'; // Make sure your video is correctly placed in src/assets/

const Footer = () => {
  return (
    <footer className="relative w-full text-white py-12">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover blur-md"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Stronger Gradient Overlay for Smoother Blending */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      {/* Content Section */}
      <div className="relative container mx-auto text-center px-8">
        <h1 className="text-xl md:text-2xl font-bold font-serif text-gray-200 drop-shadow-md">
          Welcome to EchoGuard. EchoGuard is a safety app that uses voice recognition and real-time location tracking 
          to send emergency alerts to contacts and authorities, ensuring help is on the way in critical moments.
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-300 drop-shadow-md">&copy; 2025 EchoGuard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
