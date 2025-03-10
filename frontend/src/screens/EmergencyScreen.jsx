// src/screens/EmergencyScreen.jsx

import React from 'react';

const EmergencyScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-red-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Emergency Alert Triggered!</h1>
        <p className="text-xl mb-4">Your location is being shared with your contacts.</p>
        <button className="bg-white text-red-600 py-2 px-6 rounded-full">
          Acknowledge
        </button>
      </div>
    </div>
  );
};

export default EmergencyScreen;
