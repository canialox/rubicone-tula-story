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
  lng,
  lat,
  onClick,
  imageURL,
  className,
  ...restProps
}) => (
  <Marker
    position={[54.193122, 37.617348]}
    onClick={onClick}
    icon={
      new CustomIcon({
        iconUrl: require('./IconMarker.png')
      })
    }
    {...restProps}
  />
);
