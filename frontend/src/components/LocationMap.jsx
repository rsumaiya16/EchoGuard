import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // ✅ Import Leaflet CSS

const center = [51.505, -0.09]; // Default center location (London, UK)

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

const LocationMap = () => {
  return (
    <MapContainer 
      center={center} 
      zoom={13} 
      className="w-full h-[400px] rounded-lg shadow-md" // ✅ Set a fixed height for Tailwind
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
  );
};

export default LocationMap;
