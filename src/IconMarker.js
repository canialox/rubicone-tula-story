import * as React from 'react';
import { Icon } from 'leaflet';
import { Marker } from 'react-leaflet';
import { reccords } from './data.js'

const CustomIcon = Icon.extend({
  options: {
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  }
});

export const IconMarker = ({
  lng,
  lat,
  onClick,
  imageURL,
  className,
  ...restProps
}) => (
  <Marker
    position={[lng, lat]}
    onClick={onClick}
    icon={
      new CustomIcon({
        iconUrl: require('./IconMarker.png')
      })
    }
    {...restProps}
  />
);


/*reccords.map(function callback(currentValue) { var x = currentValue;
    <IconMarker/>}
    );*/
 reccords.map(function callback(currentValue) {
    return <IconMarker 
        lng = {currentValue.locations[0].lng}
        lat = {currentValue.locations[0].lat}
    />;
 });