import React,{ useState } from 'react'
import { UnstyledButton, Menu, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

import classes from './Picker.module.css';
import locations from '../../assets/datas.json';

export const Districtpicker = ({ mainSelect}) => {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState();
    const [selecteddist, setSelecteddist] = useState(locations.DISTRICT[0]);

    const districtSelect = (item) => {
    setSelecteddist(item);
    mainSelect(item); 
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
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs">
            <span className={classes.label}>{selecteddist}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{itemsdist}</Menu.Dropdown>
    </Menu>
    
    </>
  )
}
