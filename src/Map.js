import React from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { IconMarker } from './IconMarker.js'
import { records } from './data.js'
import './App.css';

class Map extends React.Component {

  constructor() {
    super();

    this.state = {
      searchValue: '',
      records: records,
    };

    this.onFilterChange = (e) => {
      this.setState({ searchValue: e.target.value.toLowerCase() });
    }
  }

  render() {
    const filteredRecords = this.state.records.filter((record) => {
      if (record.name.toLowerCase().indexOf(this.state.searchValue) != -1) {
        return true;
      }
      return false;
    });

    return (
      <>
        <div class="map-window-form">
              <input name="search" placeholder="Поиск по сайту" onChange={this.onFilterChange} />
              <img src="https://i.ya-webdesign.com/images/search-svg-5.png"/>
        </div>     
          

         <LeafletMap
          center={[54.193122, 37.617348]}
          zoom={14}
          minZoom={13}
          maxZoom={19}
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
          {filteredRecords.map(function callback(currentValue) {
            return <IconMarker lat={currentValue.location.lat}lng={currentValue.location.lng}name={currentValue.name}info={currentValue.info}image={currentValue.image}age={currentValue.age}address={currentValue.address}address_info={currentValue.address_info}/>;
          })}
        </LeafletMap>
      </>
    )};
}

export default Map