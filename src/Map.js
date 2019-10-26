import React from 'react'
import { Map as LeafletMap, TileLayer, } from 'react-leaflet';
import './Map.css';
import { IconMarker } from './IconMarker.js'


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

        <IconMarker/>

      </LeafletMap>
    );
  }
}

export default Map