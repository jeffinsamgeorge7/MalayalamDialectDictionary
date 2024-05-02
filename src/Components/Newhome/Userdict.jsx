import * as React from 'react'
import style from './Userdict.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { MapContainer, TileLayer, GeoJSON , Marker, Popup,ZoomControl} from 'react-leaflet';
import L from 'leaflet';
import Control from 'react-leaflet-custom-control'
import mapdata from '../../assets/district.json'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import CampaignIcon from '@mui/icons-material/Campaign';
import mapdata2 from '../../assets/trail.json'
import image1 from '../../assets/location.png';
import image2 from '../../assets/placeholder.png';

const customIcon1 = new L.Icon({
    iconUrl: image1,
    iconSize: [25, 25],
    iconAnchor: [12, 41],
  });
  
  const customIcon2 = new L.Icon({
    iconUrl: image2,
    iconSize: [25, 25],
    iconAnchor: [12, 41],
  });

const headss=['ചാരം ','ഭസ്മം','വെണ്ണീർ ',];





export const Userdict = () => {
    const [mapState, setMapState] = React.useState({
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
      });
    
      const position1 = [8.528696, 76.941995];
      const position2 = [8.992882, 76.772272]; // Adjust as needed
      const position3 = [9.259228, 76.786988]; // Adjust as needed
      const position4 = [11.872331, 75.372175]; // Adjust as needed
    
  return (
    <>
    <div className={style.container}>
        <div className={style.container1}>
            <div className={style.inputs}>
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 420 }}>
                  
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Google Maps" inputProps={{ 'aria-label': 'search google maps' }}/>
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search"><SearchIcon /></IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                   
                </Paper>
               
            </div>
            <div className={style.content}>
                <div className={style.dictionary}>
                    <h1>മീൻ  <VolumeUpIcon /></h1>
                    <h3><CampaignIcon/>  [ /miːn/]</h3>
                </div>
                <div className={style.wordmeaning}>
                <p>ശുദ്ധജലത്തിലും സമുദ്രജലത്തിലും ജീവിക്കുന്ന നട്ടെല്ലുള്ള ശീതരക്തജീവികളാണ്‌ മത്സ്യങ്ങൾ അഥവാ മീനുകൾ </p>
                </div>
                <div className={style.noun}>
                    <h3>noun</h3>
                        <ul>
                            <li>മീൻ </li>
                            <li>മത്സ്യം</li>
                           
                        </ul>
                </div>
                <div className={style.verb}>
                    <h3>verb</h3>
                        <ul>
                            <li>മീൻ പിടിക്കുക </li>
                        </ul>
                </div>
                <div className={style.dialects}>
                    <h1>Dialects</h1>
                    <h3>മീൻ </h3>
                        <ul>
                            <li>തിരുവനന്തപുരം</li>
                            <li>കൊല്ലം</li>
                            <li>പത്തനംതിട്ട</li>
                        </ul>
                    <h3>മത്സ്യം</h3>
                        <ul>
                            <li>കണ്ണൂർ</li>
                        </ul>
                </div>
                

                   
            </div>
            
            

        </div>
        <div className={style.container2}>

            {/* <MapContainer center={[10.537489, 76.221303]} zoom={8} style={{ height: '900px' ,width:'100%'}} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
  
              
                <GeoJSON data={mapdata}/>
        
          </MapContainer>  */}
           <MapContainer center={[10.537489, 76.221303]} zoom={8} style={{ height: '900px' ,width:'100%'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
       <GeoJSON data={mapdata}/>
      <Marker position={position1} icon={customIcon1}>
        <Popup>
        മീൻ
        </Popup>
      </Marker>
      <Marker position={position2} icon={customIcon1}>
        <Popup>
        മീൻ
        </Popup>
      </Marker>
      <Marker position={position3} icon={customIcon1}>
        <Popup>
        മീൻ
        </Popup>
      </Marker>
      <Marker position={position4} icon={customIcon2}>
        <Popup>
        മത്സ്യം
        </Popup>
      </Marker>
    </MapContainer>
        </div>


    </div>
    
    </>
  )
}
