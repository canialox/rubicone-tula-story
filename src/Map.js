import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';


class Map extends React.Component {
  render() {
    return (
      <LeafletMap
        center={[54.193122, 37.617348]}
        zoom={17}
        maxZoom={19}
        minZoom={14}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[54.193122, 37.617348]}>
          <Popup>
          <div class="Popup-border">
            <div class="Popup-content">
                  <div>
                      
                      <p class="name">Лев Николаевич Толстой</p>
                      <p class="age">09.09.1828 – 20.11.1910 г.</p>
                  </div>
            </div>
          </div>
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map