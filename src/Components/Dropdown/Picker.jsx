import { useState } from 'react';
import { UnstyledButton, Menu, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

import classes from './Picker.module.css';
import locations from '../../assets/datas.json';
//import { Districtmap } from '../Maps/Districtmap';
import { Districtpicker } from './Districtpicker';

const data = [
  'Kerala',
  'District',
  'Corporation',
  'Muncipality',
  'Block',
  'Panchayath',
  'Taluk',
  'Village',
];

export function Picker({ onSelect }) {
  const [openes, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const [myselected, mysetSelected] = useState(data[0]);
  const [selecteddist, setSelecteddist] = useState();
  const [selectedtaluk, setSelectedtaluk] = useState(locations.TALUK[0]);


  const opSelect = (value) => {
    setSelecteddist(value); // Update the selected value
    // Do whatever you want with the selected value here
    console.log("Selected value:", value);
  };

  console.log("sd",selecteddist)
  const handleSelect = (item) => {
    setSelected(item);
  };
 const items = data.map((item) => (
    <Menu.Item onClick={() => handleSelect(item)} key={item}>
      {item}
    </Menu.Item>
  ));

//  District Selection
  // const districtSelect = (item) => {
  //   setSelecteddist(item);
  //   onSelect(item); 
  // };
  // const filtereddist = locations.DISTRICT;

  // const itemsdist = filtereddist.map((item) => (
  //   <Menu.Item onClick={() => districtSelect(item)} key={item}>
  //     {item}
  //   </Menu.Item>
  // ));


  //select taluk
  const talukSelect = (item) => {
    setSelectedtaluk(item);
    onSelect(item); 
  };
  const filtereddist = locations.DISTRICT;

  const itemsdist = filtereddist.map((item) => (
    <Menu.Item onClick={() => districtSelect(item)} key={item}>
      {item}
    </Menu.Item>
  ));
 
 

  return (
   <>
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
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
       
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>

    {selected  === "District" && 
      <>
    {/* <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs">
            <span className={classes.label}>{selecteddist}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{itemsdist}</Menu.Dropdown>
    </Menu> */}
    <Districtpicker mainSelect={opSelect}/>
    </>
    
    }  
   
   </>
  );
}
