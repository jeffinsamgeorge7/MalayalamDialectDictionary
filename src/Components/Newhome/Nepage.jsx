import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { MapContainer, TileLayer, GeoJSON ,ZoomControl,Polyline} from 'react-leaflet';
import Control from 'react-leaflet-custom-control'
import SearchTaluk from '../Home/SearchTaluk';
import mapdata from '../../assets/panchayath.json';
import mapdata1 from '../../assets/district.json'
import neww from '../../assets/response.json'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Searchdistrict from '../Home/Serachdistrict';
import SearchVillage from '../Home/SearchVillage';
import style from './home.module.css'
import InteractiveList from '../Home/InteractiveList';

const drawerWidth = 300;
const options = [ 'ALL','DISTRICT','TALUK','VILLAGE', 'PANCHAYATH'];


let dist='Pathanamthitta'
const stateFeatures = mapdata1.features.filter(
  feature => feature.properties.DISTRICT === dist 
  
);


const stateGeoJSON = {
  type: 'FeatureCollection',
  features: stateFeatures,
};


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <div className={style.container}>
      <Box sx={{ display: 'flex',gap:'10px' }} className={style.container1}>
        <CssBaseline /> 
        <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                  paddingLeft:'10px',
                  margiBottom:'10px'

                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
          >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
                {/* <Searchoption style={{padding:'2px'}}/>
          <p></p> */}
          {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
                <div>{`inputValue: '${inputValue}'`}</div>
                <br /> */}
        <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }} 
                // onInputChange={handleInputChange}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 280 }}
                renderInput={(params) => <TextField {...params} label="Controllable" />}
          />
      <p></p>

       {value === "TALUK" &&  <SearchTaluk/>}
       {value === "DISTRICT" &&  <Searchdistrict/>}
       {value === "VILLAGE" &&  <SearchVillage/>}

       
        </Drawer>
        <Main open={open}>
      <MapContainer center={[10.537489, 76.221303]} zoom={8} style={{ height: '900px' ,width:'800px'}} zoomControl={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
               <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-" />
               <Control prepend position='topleft'>
               <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,mr: 2, ...(open && { display: 'none' })  }}>
                     <IconButton sx={{  p: '10px', mr: 2, ...(open && { display: 'none' }) }} aria-label="menu"  onClick={handleDrawerOpen} >
                     <MenuIcon />
                     </IconButton>
                     <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Dialect Maps" inputProps={{ 'aria-label': 'search dialect maps' }}/>
                     <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                     <SearchIcon />
                     </IconButton>
                     <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                     <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                     <DirectionsIcon />
                      </IconButton>
               </Paper>
                </Control>
                <GeoJSON data={mapdata}/>
                {/* <GeoJSON data={neww}/> */}
                <GeoJSON data={stateGeoJSON} style={() => {
                                                    return {
                                                            color: 'brown', // change to the color you want for the border
                                                            fillColor: 'transparent',
                                                            weight: 2,
                                                            opacity: 1,
                                                            fillOpacity: 1
                                                          };
                                                        }}/>
          </MapContainer> 
        </Main>
        </Box>
        <div className={style.container2}>

        <div className={style.content}>
        <div className={style.content11}>
                    
                   </div>
                   <div className={style.content12}>
                    sfsf
                   </div>

        </div>
        <div className={style.content1}>
          dfvd

        </div>
                
                  

        </div>
    </div>
  );
}