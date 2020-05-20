import React from 'react';
import { Map, TileLayer, LayersControl,Marker, Popup } from 'react-leaflet'
import { GoogleLayer } from 'react-leaflet-google-v2';
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
const { BaseLayer} = LayersControl;
const key = 'AIzaSyBZwjtfxXrP_lYHayzysutAU8ucbrwky-E';
const terrain = 'TERRAIN';
const road = 'ROADMAP';
const satellite = 'SATELLITE';
const hydrid = 'HYBRID';
//// Google's map type. Valid values are 'roadmap', 'satellite' or 'terrain'. 'hybrid' is not really supported.
class GoogleMap extends React.Component {

  constructor() {
    super();
  }

  render() {
    const position = [13.0827, 80.2707];
    return (
      <Map center={position} zoom={13} zoomControl={true}>
        <Marker position={[9.9252,78.1198]}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
        <ReactLeafletGoogleLayer
            googleMapsLoaderConf={{ KEY:key }}
            type={'roadmap'}
          />
        {/* <GoogleLayer googlekey={key}  maptype={road} /> */}
        {/* <LayersControl position='topright'>
          <BaseLayer  name='OpenStreetMap.Mapnik'>
            <TileLayer  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
          </BaseLayer>
         <BaseLayer checked name='Google Maps Roads'>
            <GoogleLayer googlekey={key}  maptype={road} />
          </BaseLayer>
         <BaseLayer  name='Google Maps Terrain'>
            <GoogleLayer googlekey={key}  maptype={terrain} />
          </BaseLayer>
           <BaseLayer  name='Google Maps Satellite'>
            <GoogleLayer googlekey={key}  maptype={satellite} />
          </BaseLayer>
            <BaseLayer  name='Google Maps Hydrid'>
            <GoogleLayer googlekey={key}  maptype={hydrid}  libraries={['geometry', 'places']} />
          </BaseLayer>  
          <BaseLayer  name='Google Maps with Libraries'>
            <GoogleLayer googlekey={key}  maptype={hydrid}  libraries={['geometry', 'places']} />
          </BaseLayer>        
        </LayersControl> */}
      </Map>
    )
  }
}
export default GoogleMap;