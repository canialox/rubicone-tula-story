import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Map from './Map.js'


function App() {
  return (
    <div class="main">
      <div class="main-inner">
        <div class="map-window">

          <div class="border">
            <div class="logo">
                  <p>TulStory</p>
            </div>
          </div>

          <div class="map-window-form">
            <form class="form">
              <p>
                <input type="search" name="search" placeholder="Поиск по сайту"/>
                <input type="submit" value=""/>
              </p>
            </form>
          </div>     
        </div>

        <Map></Map>
      </div>
    </div>
  );
}

export default App;
