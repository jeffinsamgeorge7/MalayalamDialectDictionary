import React from 'react'
import { MapContainer, TileLayer, GeoJSON ,ZoomControl} from 'react-leaflet';
import Control from 'react-leaflet-custom-control'
import style from './home.module.css'
import { InputAdornment, TextField } from '@mui/material'; 
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';




export const Newhome = () => {
  return (
    <>
    <MapContainer center={[9.9831493, 76.5781613]} zoom={7} style={{ height: '900px' }} zoomControl={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
               <ZoomControl position="bottomright" zoomInText="🧐" zoomOutText="🗺️" />
               <Control prepend position='topleft'>
               <Drawerr/>

               
     
                   {/* <div className={style.content}>
                   
                    
                   <TextField 
                id="internet-speed"
                style={{backgroundColor:'white'}}
                InputProps={{ 
                    
                    endAdornment:  
                    <InputAdornment disableTypography position="end"> 
                        <TravelExploreRoundedIcon style={{color:'black'}}/></InputAdornment>, 
                    endAdornment:<InputAdornment disableTypography position="end"> 
                    <Drawerr/></InputAdornment>, 
                       
                }} 
            /> 
                   </div> */}

                   
                  
                </Control>
             {/* <GeoJSON data={districtData} /> */}
           
          </MapContainer>  
    </>
  )
}
