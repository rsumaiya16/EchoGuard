import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Default Center: Fallback Location (London)
const defaultCenter = [51.505, -0.09];

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
        map.setView([latitude, longitude], 13); // Move the map to user's location
      },
      (error) => {
        console.error("Location Error:", error);
        alert("Unable to retrieve your location.");
      }
    );
  }, [map]);

  return position === null ? null : <Marker position={position} />;
};

const LocationMap = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <MapContainer
        center={defaultCenter}
        zoom={13}
        className="h-[400px] w-3/4 rounded-lg shadow-md"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default LocationMap;
