import * as React from 'react';
import { Icon } from 'leaflet';
import { Marker } from 'react-leaflet';

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
}) => (
  <Marker
    position={[lat, lng]}
    onClick={onClick}
    icon={
      new CustomIcon({
        iconUrl: require('./IconMarker.png')
      })
    }
    {...restProps}
  />
);
