import React from 'react'
import style from  './Trail.module.css';
import { HeaderSearch } from './HeaderSearch';
import { TextInput, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight,IconVolume2 } from '@tabler/icons-react';
import { MapContainer, GeoJSON,Marker,Popup } from "react-leaflet";
import mapdata from '../../assets/district.json';
import image1 from '../../assets/location.png';


export const Trailmap = () => {
  const theme = useMantineTheme();

  const countryStyle = {
    fillColor: "blue",
    fillOpacity: 1,
    color: "black",
    weight: 2,
  };

  const position1 = [8.528696, 76.941995];
  const customIcon1 = new L.Icon({
    iconUrl: image1,
    iconSize: [20, 20],
    iconAnchor: [12, 41],
  });
  // printMesssageToConsole = (event) => {
  //   console.log("Clicked");
  // };

  const changeCountryColor = (event) => {
    event.target.setStyle({
      color: "green",
      fillColor: "yellow",
      fillOpacity: 1,
    });
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.DISTRICT;
    console.log(countryName);
    layer.bindPopup(countryName);

    layer.options.fillOpacity = Math.random();

    // layer.on({
    //   click: changeCountryColor,
    // });
  };

  return (
    <>
       <HeaderSearch/>
            
            <div className={style.container}>
                
           
            <div className={style.content}>
                <h1>
                    MALAYALAM DIALECT MAP
                </h1>
                <TextInput style={{width:'450px',paddingLeft:'20px' ,marginBottom:'10px'}}
                   radius="xl"
                   size="md"
                   placeholder="Search questions"
                   rightSectionWidth={42}
                  leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                  rightSection={
                    <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                    <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                         } 
                 />
                 {/* map */}
                 <div className={style.content1}>
                  <div>
                  <MapContainer style={{ height: "550PX",backgroundColor:'white',border:'1px solid black',width:'420px',borderRadius:'10px' }} zoom={7} center={[10.537489, 76.221303]} >
                <GeoJSON
                      data={mapdata}
                      style={countryStyle}
                      onEachFeature={onEachCountry}
                   />
                   <Marker position={position1} icon={customIcon1}>
                                    <Popup>മീൻ</Popup>
                                </Marker>
                </MapContainer>
                    
                  </div>
                 <div className={style.dictionary}>
                 <h1>മീൻ <IconVolume2/></h1>
                 <h3> IPA miːn̪u </h3>
                 <p>ശുദ്ധജലത്തിലും സമുദ്രജലത്തിലും ജീവിക്കുന്ന നട്ടെല്ലുള്ള ശീതരക്തജീവികളാണ്‌ മത്സ്യങ്ങൾ അഥവാ മീനുകൾ </p>
<hr/>
                 <h3>വാചകം</h3>
                <ol>
                  <li>മീൻ ഒരു ഭക്ഷ്യവിഭവമായി ഉപയോഗിക്കുന്നു</li>
                  
                </ol>

                <div className={style.table}>
                  <div className={style.table1}>
                      <table>
                        <tr><td>നാമം</td></tr>
                        <hr/>
                        <tr>മീൻ</tr>
                        <tr>മത്സ്യം</tr>
                      </table>
                  </div>
                  <div className={style.table2}>
                  <table>
                        <tr><td>ക്രിയ</td></tr>
                        <hr/>
                        <tr>മീൻ പിടിക്കുക</tr>
                      </table>
                  </div>
               </div>
                    <h3>ഭാഷാഭേദങ്ങൾ</h3>
                    <p>മീൻ</p>
                    <p>മത്സ്യം</p>
                 </div>

                 
             
                </div>

                {/* <div className={style.dialects}>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  
                </div> */}
            </div>
            </div>
   
    
    </>
  )
}
