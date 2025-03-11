

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

// component to get user's live location and update the map
const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (location) => {
        const { latitude, longitude } = location.coords;
        setPosition([latitude, longitude]);
        map.setView([latitude, longitude], 13); // Move map to user's location
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  }, [map]);

  return position === null ? null : <Marker position={position} />;
};

// Main Home Screen Component
const HomeScreen = () => {
  const location = useLocation();
  const userName = location.state?.name || "User"; // get user's name from login

  const [showMap, setShowMap] = useState(false);

  const handleAlert = () => {
    alert("Emergency alert triggered!");
    setShowMap(true); // how map after alert
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-xl">EchoGuard</div>
        <div className="text-lg">Hello, {userName}</div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center bg-white">
        {!showMap ? (
          <button
            onClick={handleAlert}
            className="py-3 px-6 bg-red-600 text-white text-xl rounded-full"
          >
            Trigger Emergency Alert
          </button>
        ) : (
          <MapContainer center={[51.505, -0.09]} zoom={13} className="h-96 w-3/4 mt-6">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationMarker />
          </MapContainer>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>EchoGuard - Always listening, always protecting.</p>
      </footer>
    </div>
  );
};

export default HomeScreen;
