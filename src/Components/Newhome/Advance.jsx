import React,{useState} from 'react'
import style from  './Advance.module.css';
import { HeaderSearch } from './HeaderSearch';
import { TextInput, ActionIcon, useMantineTheme, rem,Switch, Group,Button,Modal,UnstyledButton, Menu, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconArrowRight,IconVolume2,IconFilter, IconChevronDown } from '@tabler/icons-react';
import { MapContainer, GeoJSON,Marker,Popup } from "react-leaflet";
import mapdata from '../../assets/district.json';
import image1 from '../../assets/location.png';
import { Picker } from '../Dropdown/Picker';
import SearchTaluk from '../Home/SearchTaluk';
import { Filter1 } from '@mui/icons-material';
import { Districtmap } from '../Maps/Districtmap';
import classes from './Picker.module.css';
import locations from '../../assets/datas.json';
import { Districtpicker } from '../Dropdown/Districtpicker';
import { Talukpicker } from '../Dropdown/Talukpicker';
import { Keralamap } from '../Maps/Keralamap';
import { Talukmap } from '../Maps/Talukmap';
import { Blockpicker } from '../Dropdown/Blockpicker';

// const data = [
//   'Kerala',
//   'District',
//   'Corporation',
//   'Muncipality',
//   'Block',
//   'Panchayath',
//   'Taluk',
//   'Village',
// ];

const data = [
  'Kerala',
  'District',
  'Taluk',
  'Block',
];


export const Advance = () => {
  const theme = useMantineTheme();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const [openes, setOpened] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [selecteddist, setSelecteddist] = useState(null); 
  const [selectedTaluk, setSelectedTaluk] = useState(null);


  const opSelect = (value) => {
    setSelecteddist(value); 
    console.log("Xcc",value)
  };
  const handleTalukSelect = (item) => {
    setSelectedTaluk(item.NAME);
    console.log("talukk",item.NAME)
  };
  

  const handleSelect = (item) => {
    setSelected(item);
  };
 const items = data.map((item) => (
    <Menu.Item onClick={() => handleSelect(item)} key={item}>
      {item}
    </Menu.Item>
  ));


  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn); // Step 2
  };

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
    // console.log(countryName);
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
                <div   className={style.Search}>
                <TextInput style={{width:'390px',marginLeft:'20px' ,marginBottom:'10px',marginRight: '10px',  boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}
                   
                   size="md"
                   placeholder="Search questions"
                   rightSectionWidth={42}
                  leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                 

                  rightSection={
                    <ActionIcon size={32}  color={theme.primaryColor}   variant="filled ">
                    <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                         } 
                 />
                  <Modal opened={opened} onClose={close} title="Filter" style={{zIndex:'10',marginTop:'20px'}}>
        {/* Modal content */}
        <div  style={{height:'30vh',display: 'flex',flexDirection:'column',zIndex:'10',marginTop:'20px'}}>
        {/* <Picker onSelect={handleSelect} />

{selected === "Taluk" &&  <SearchTaluk/>} */}

<Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={openes || undefined}>
          <Group gap="xs">
            <span className={classes.label}>{selected}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.8} />
       
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
    {selected === "District" &&  <Districtpicker mainSelect={opSelect}/>} 
    {selected === "Taluk" &&  <Talukpicker mainSelect={opSelect}  takSelect={handleTalukSelect}/>} 
    {selected === "Block" &&  <Blockpicker mainSelect={opSelect}  takSelect={handleTalukSelect}/>} 

          
        </div>
       
                  

      </Modal>
          <   IconFilter onClick={open}  style={{ width: rem(30), height: rem(30), marginTop:'5px'}} />
     

    
                </div>
             
                 {/* map */}
                 <div className={style.content1}>
                  <div>
                  {/* <MapContainer   className={style.map}zoom={7} center={[10.537489, 76.221303]} >
                <GeoJSON
                      data={mapdata}
                      style={countryStyle}
                      onEachFeature={onEachCountry}
                   />
                   <Marker position={position1} icon={customIcon1}>
                                    <Popup>മീൻ</Popup>
                                </Marker>
                </MapContainer> */}
                {selected === "Kerala" &&  <Keralamap />} 
                {selected === "District" &&  <Districtmap selectedValue={selecteddist}/>} 
                {selected === "Taluk" &&  <Talukmap selectedValue={selecteddist} talukvalue={selectedTaluk}/>} 
                  
                    
                  </div>
                 <div className={style.dictionary}>
                 <h1>മീൻ <IconVolume2/></h1>
                 <h4>Formal: മീൻ </h4>
                 
                 <h4>IPA miːn̪u </h4>
                 <p>ശുദ്ധജലത്തിലും സമുദ്രജലത്തിലും ജീവിക്കുന്ന നട്ടെല്ലുള്ള ശീതരക്തജീവികളാണ്‌ മത്സ്യങ്ങൾ അഥവാ മീനുകൾ </p>
<hr/>
                 <h3>വാചകം</h3>
                <ol>
                  <li>മീൻ ഒരു ഭക്ഷ്യവിഭവമായി ഉപയോഗിക്കുന്നു</li>
                  
                </ol>

                
                    <h3>ഭാഷാഭേദങ്ങൾ</h3>
                    <p>മീൻ</p>
                    <p>മത്സ്യം</p>
                 </div>

                 
             
                </div>
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

                  <div className={style.table3}>
                  <table>
                        <tr><td>വിശേഷണം</td></tr>
                        <hr/>
                        <tr>മീൻ പിടിക്കുക</tr>
                      </table>
                  </div>

                
               </div>

               <div className={style.table}>
               

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
