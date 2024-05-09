import React, { useEffect } from 'react';
import { MapContainer, GeoJSON } from "react-leaflet";
import Control from 'react-leaflet-custom-control'
import mapdata from '../../assets/district.json';
import mapdata1 from '../../assets/taluk.json'
import style from './Map.module.css';
import locations from '../../assets/datas.json';

const countryStyle = {
  fillColor: "blue",
  fillOpacity: 1,
  color: "black",
  weight: 2,
};



// const onEachCountry = (level, layer) => {
//   const placeName = level.properties.DISTRICT;
//   layer.bindPopup(placeName);
//   layer.options.fillOpacity = Math.random();
// };
const miniStyle = {
    fillColor: "white",
    fillOpacity: 1,
    color: "black",
    weight: 2,
  };


  const singleStyle = {
    fillColor: "orange",
    fillOpacity: 1,
    color: "black",
    weight: 2,
  };
const onEachtaluk = (level, layer) => {
    const placeName = level.properties.TALUK;
    layer.bindPopup(placeName);
    layer.options.fillOpacity = Math.random();
  };
  export const Talukmap = ({ selectedValue, talukvalue }) => {
    useEffect(() => {
      console.log("Selected value in Districtmap:", selectedValue);
      console.log("Selected taluk:", talukvalue);
    }, [selectedValue, talukvalue]);
  
    // Retrieve coordinates from data.json based on selected district
    const coordinates = locations[selectedValue];
  
    const stateFeatures = mapdata.features.filter(
      feature => feature.properties.DISTRICT === selectedValue
    );
  
    const stateGeoJSON = {
      type: 'FeatureCollection',
      features: stateFeatures,
    };
  
    // Filter taluks based on the selected district
    const talukFeatures = mapdata1.features.filter(
      feature => feature.properties.DISTRICT === selectedValue
    );
  
    const talukGeoJSON = {
      type: 'FeatureCollection',
      features: talukFeatures,
    };
  
    // Filter and render only the selected taluk
    const selectedTalukFeatures = talukFeatures.filter(
      feature => feature.properties.TALUK === talukvalue
    );
  
    const selectedTalukGeoJSON = {
      type: 'FeatureCollection',
      features: selectedTalukFeatures,
    };
  
    return (
      <MapContainer attributionControl={false} key={`${selectedValue}-${talukvalue}`} className={style.map} zoom={9} center={coordinates} style={{backgroundColor:'white'}}>
        <Control prepend position='topright'>
            <div style={{display:'flex',flexDirection:'row',justifyContent: 'center',alignItems: 'center'}}>
            <div style={{width:'10px',height:'10px',backgroundColor:"orange", marginRight:'10px'}}>
            </div>
           <p>{talukvalue}</p>
            </div>
        </Control>
        <GeoJSON
          data={stateGeoJSON}
          style={countryStyle}
        />
        
        <GeoJSON
          data={talukGeoJSON}
          style={miniStyle}
          onEachFeature={onEachtaluk}
        />

<GeoJSON
          data={selectedTalukGeoJSON}
          style={singleStyle} // Apply style for the selected taluk
          
        />
      </MapContainer>
    );
  };
  