// src/screens/HomeScreen.jsx

import React from 'react';

const HomeScreen = () => {
  const handleAlert = () => {
    // Trigger emergency alert (e.g., display a message, send a notification, etc.)
    alert("Emergency alert triggered!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-xl">EchoGuard</div>
        <div className="text-lg">Hello, User</div> {/* You can dynamically change "User" */}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center bg-white">
        <button
          onClick={handleAlert}
          className="py-3 px-6 bg-red-600 text-white text-xl rounded-full"
        >
          Trigger Emergency Alert
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>EchoGuard - Your safety is our priority</p>
      </footer>
    </div>
  );
};

export default HomeScreen;
