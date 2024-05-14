import React, { useEffect, useState } from 'react';
import { MapContainer, GeoJSON,Marker } from "react-leaflet";
import Control from 'react-leaflet-custom-control'
import L from 'leaflet';

import mapdata from '../../assets/district.json';
import mapdata1 from '../../assets/village.json';
import style from './Map.module.css';
import locations from '../../assets/datas.json';
import image from '../../assets/pin.png'

export const Drilldownmap = () => {
    const [clickedDistrict, setClickedDistrict] = useState(null);
    const [clickedVillage, setClickedVillage] = useState(null);

    const customIcon = new L.Icon({
        iconUrl: image, // Path to your custom icon
        iconSize: [25, 25], // Size of the icon
        iconAnchor: [12, 25], // Point of the icon which will correspond to marker's location
        popupAnchor: [1, -34] // Point from which the popup should open relative to the iconAnchor
    });

    const countryStyle = {
        fillColor: "orange",
        fillOpacity: 1,
        color: "black",
        weight: 2,
    };
    const distStyle = {
        fillColor: "white",
        fillOpacity: 1,
        color: "black",
        weight: 2,
    };

    const villageStyle = {
        fillColor: "orange",
        fillOpacity: 1,
        color: "black",
        weight: 2,
    };

    const onEachCountry = (level, layer) => {
        const placeName = level.properties.DISTRICT;
        layer.bindPopup(placeName);
        layer.options.fillOpacity = Math.random();
        layer.on({
            click: () => {
                console.log(placeName)
                setClickedDistrict(placeName);
            },
        });
    };

    const onEachvillage = (level, layer) => {
        const placeName = level.properties.NAME;
        layer.bindPopup("Village: " + placeName);
        layer.options.fillOpacity = Math.random();
        layer.on({
            click: () => {
                console.log(placeName);
                setClickedVillage(placeName);
                
            },
        });
    };
    

    useEffect(() => {
        console.log("Selected value in Districtmap:", clickedDistrict);
      }, [clickedDistrict]);
    
      // Retrieve coordinates from data.json based on selected district
      const coordinates = locations[clickedDistrict];
    
      const stateFeatures = mapdata.features.filter(
        feature => feature.properties.DISTRICT === clickedDistrict
      );
    
      const stateGeoJSON = {
        type: 'FeatureCollection',
        features: stateFeatures,
      };
    


      const villageFeatures = mapdata1.features.filter(
        feature => feature.properties.DISTRICT === clickedDistrict 
      );
    
      const villageGeoJSON = {
        type: 'FeatureCollection',
        features: villageFeatures,
      };

    return (
        <>
               {clickedDistrict ? (
                <MapContainer attributionControl={false}  key={clickedDistrict}  className={style.map} zoom={9} center={coordinates } style={{ backgroundColor: 'white' }}>
          
            <Control prepend position='topright'>
            <div style={{display:'flex',flexDirection:'column',justifyContent: 'end',alignItems: 'right'}}>
            <button onClick={() => {setClickedDistrict(null); setClickedVillage(null);}}>return</button>
            <p> District :{clickedDistrict} <br />
            Village : {clickedVillage} 
            </p>
            <p> 
            </p>

            </div>
        </Control>
                <GeoJSON
                    data={stateGeoJSON}
                    style={distStyle }
                />
                 <GeoJSON
                    data={villageGeoJSON }
                    style={villageStyle }
                    onEachFeature={onEachvillage}
                />
                 <Marker position={[10.537489, 76.221303]} icon={customIcon} /> 
                 <Marker position={[9.2242196,76.8350898]} icon={customIcon} /> 
                 <Marker position={[9.1422232,76.851232]} icon={customIcon} /> 
            
           
        </MapContainer>
            )
            :
           ( 
            <MapContainer attributionControl={false} className={style.map} zoom={7} center={[10.537489, 76.221303]} style={{ backgroundColor: 'white' }}>
                
                    <GeoJSON
                        data={mapdata}
                        style={countryStyle}
                        onEachFeature={onEachCountry}
                    />
                    <Marker position={[10.537489, 76.221303]} icon={customIcon} /> 
                    <Marker position={[9.2242196,76.8350898]} icon={customIcon} /> 
                    <Marker position={[9.1422232,76.851232]} icon={customIcon} /> 
                
            </MapContainer>
               )}
        </>
    )
}

