import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.css";

// Fix default Leaflet marker icon (so it loads properly in React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Map = () => {
  const position = [-36.550006, -56.692956]; // Your coordinates

  return (
    <div className="map-section">
      <h3 className="vd">Venta Directa en el mapa</h3>
      <MapContainer
        center={[-36.549591, -56.691116]}
        zoom={16}
        scrollWheelZoom={false}
        id="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <b>Venta Directa</b>
            <br />
            ¡Estamos aquí!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
