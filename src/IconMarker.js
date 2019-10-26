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
  lat,
  lng,
  onClick,
  imageURL,
  className,
  ...restProps
}) => {
        return (<Marker position={[lat, lng]} onClick={onClick} icon={new CustomIcon({
            iconUrl: require('./IconMarker.png')
        })} {...restProps} />);
    };

 reccords.map(function callback(currentValue) {
    return <IconMarker 
        lat = {currentValue.locations[0].lat}
        lng = {currentValue.locations[0].lng}
    />;
 });