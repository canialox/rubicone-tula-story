import * as React from 'react';
import { Icon } from 'leaflet';
import { Marker } from 'react-leaflet';
import {  Popup } from 'react-leaflet';
import './Popup.css';

const CustomIcon = Icon.extend({
  options: {
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  }
});

export const IconMarker = ({
  lat,
  lng,
  name,
  info,
  image,
  age,
  address,
  address_info,
  onClick
}) => (
  <Marker
    position={[lat, lng]}
    onClick={onClick}
    icon={
      new CustomIcon({
        iconUrl: require('./IconMarker.png')
      })
    }
  >
    <Popup>
      <div class="name">{name}</div>
      <div class="info">{info}</div>
      <div class="image"><img crs={image}/></div>
      <div class="age">{age}</div>
      <div class="adress">{address}</div>
      <div class="adress-info">{address_info}</div>
    </Popup>
  </Marker>
);
