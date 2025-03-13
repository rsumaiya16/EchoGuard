import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import Footer from "../components/Footer";

// Component to get user's live location and update the map
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
  const userName = location.state?.name || "User"; // Get user's name from login

  const [showMap, setShowMap] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognitionInstance = new window.webkitSpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = false;
    recognitionInstance.lang = "en-US";

    recognitionInstance.onstart = () => setIsListening(true);
    recognitionInstance.onend = () => setIsListening(false);

    recognitionInstance.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      console.log("Heard:", transcript);

      if (transcript.includes("help me")) {
        alert("🚨 Emergency alert triggered via voice!");
        setShowMap(true);
      }
    };

    setRecognition(recognitionInstance);
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
     
     

      {/* Voice Control */}
      <div className="text-center text-sm text-white-600 mt-2 pb-20">
        🎤 {isListening ? "Listening for 'help me'..." : "Microphone off"}
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={startListening}
          className="py-2 px-4 bg-pink-500/50 text-white rounded-xl"
        >
          🎙 Start Listening
        </button>
        <button
          onClick={stopListening}
          className="py-2 px-4 bg-gray-500 text-white rounded-xl"
        >
          ⏹ Stop Listening
        </button>
      </div>

      
      <main className="flex-grow flex flex-col justify-center items-center bg-black">
        {!showMap ? (
          <button
            onClick={() => {
              alert("Emergency alert triggered!");
              setShowMap(true);
            }}
            className="py-3 px-6 bg-red-600 text-white text-xl rounded-full mt-4"
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
      {/* <footer className="bg-blue-600 text-white p-4 text-center">
        <p>EchoGuard - Always listening, always protecting.</p>
      </footer> */}
      <Footer />
    
    </div>
  );
};

export default HomeScreen;