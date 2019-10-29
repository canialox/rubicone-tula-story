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
        </div>

        <Map/>
        <div class="g-forms-link"><a href="https://docs.google.com/forms/d/e/1FAIpQLScEkG3IgOpHREUyZwS4kLKvqhbfnkv-jgt2-ljP4sGOehvhsw/viewform">Добавить информацию</a></div>
      </div>
    </div>
  );
}

export default App;
