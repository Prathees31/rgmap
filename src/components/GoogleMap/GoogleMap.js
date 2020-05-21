import React from 'react';
import { Map, TileLayer, LayersControl,Marker, Popup } from 'react-leaflet'
import { GoogleLayer } from 'react-leaflet-google-v2';
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import Control from 'react-leaflet-control';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {carIcon,truckIcon} from '../../CustomIcon'
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
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
      <Map center={position} zoom={4}>
        <ReactLeafletGoogleLayer googleMapsLoaderConf={{ KEY:key }} type={'roadmap'} />
        <Marker position={[9.925200,78.119800]} icon={truckIcon}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
        <Marker position={[13.0827, 80.2707]} icon={carIcon}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
        <Control position="bottomleft" >
        <button 
          onClick={ () => this.setState({bounds: [51.3, 0.7]}) }
        >
          Reset View
        </button>
      </Control>
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