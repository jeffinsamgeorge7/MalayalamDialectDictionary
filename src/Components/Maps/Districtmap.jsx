import React, { useEffect } from 'react';
import { MapContainer, GeoJSON } from "react-leaflet";
import mapdata from '../../assets/district.json';
import style from './Map.module.css';
import locations from '../../assets/datas.json';

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

export const Districtmap = ({ selectedValue }) => {
  useEffect(() => {
    console.log("Selected value in Districtmap:", selectedValue);
  }, [selectedValue]);

  // Retrieve coordinates from data.json based on selected district
  const coordinates = locations[selectedValue];

  const stateFeatures = mapdata.features.filter(
    feature => feature.properties.DISTRICT === selectedValue
  );

  const stateGeoJSON = {
    type: 'FeatureCollection',
    features: stateFeatures,
  };

  return (
    <MapContainer attributionControl={false} key={selectedValue} className={style.map} zoom={9} center={coordinates} style={{backgroundColor:'white'}}>
      <GeoJSON
        data={stateGeoJSON}
        style={countryStyle}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};
