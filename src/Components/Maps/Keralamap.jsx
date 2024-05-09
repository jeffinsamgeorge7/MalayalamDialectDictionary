import React from 'react';
import { MapContainer, GeoJSON,Marker } from "react-leaflet";
import L from 'leaflet';
import mapdata from '../../assets/district.json';
import style from './Map.module.css';

const countryStyle = {
  fillColor: "blue",
  fillOpacity: 1,
  color: "black",
  weight: 2,
};

const onEachCountry = (level, layer) => {
  const placeName = level.properties.DISTRICT;
  layer.bindPopup(placeName);
  layer.options.fillOpacity = Math.random();
};

export const Keralamap = () => {
 
  return (
    <MapContainer attributionControl={false}  className={style.map} zoom={7} center={[10.537489, 76.221303]} style={{backgroundColor:'white'}}>
      <GeoJSON
        data={mapdata}
        style={countryStyle}
        onEachFeature={onEachCountry}
      />
      

    </MapContainer>
  );
}


