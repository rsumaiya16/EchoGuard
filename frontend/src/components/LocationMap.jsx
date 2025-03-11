import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

const center = [51.505, -0.09]; // default location (London, UK)

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
        map.setView([latitude, longitude], 13); // move map to user's location
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
    <MapContainer center={center} zoom={13} className="leaflet-container">
      {/* OpenStreetMap Tiles */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* User Location Marker */}
      <LocationMarker />
    </MapContainer>
  );
};

export default LocationMap;
