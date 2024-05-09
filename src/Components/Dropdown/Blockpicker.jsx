

import React, { useState } from 'react';
import { UnstyledButton, Menu, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Picker.module.css';
import locations from '../../assets/datas.json';

export const Blockpicker = ({ mainSelect, takSelect }) => {
  const [opened, setOpened] = useState(false);
  const [selecteddist, setSelecteddist] = useState(locations.DISTRICT[0]);
  const [selectedblock, setSelectedblock] = useState(() => {
    // Initialize selectedtaluk based on selecteddist (if locations.TALUK exists)
    const initialblock = locations.BLOCK?.filter(
      (taluk) => taluk.DISTRICT === selecteddist
    );
    return initialblock?.length > 0 ? initialblock[0].NAME : "select";
  });

  const districtSelect = (item) => {
    setSelecteddist(item);
    mainSelect(item);
    // Update selectedtaluk based on the new district
    const filteredblock = locations.BLOCK.filter(
      (taluk) => taluk.DISTRICT === item
    );
    setSelectedblock(filteredblock.length > 0 ? filteredblock[0].NAME : "select");
  };

  const talukSelect = (item) => {
    setSelectedblock(item.NAME);
    takSelect(item);
  };

  const filtereddist = locations.DISTRICT;

  const itemsdist = filtereddist.map((item) => (
    <Menu.Item onClick={() => districtSelect(item)} key={item}>
      {item}
    </Menu.Item>
  ));

  // Filter taluks based on the selected district
  const filteredblock = locations.BLOCK?.filter(
    (taluk) => taluk.DISTRICT === selecteddist
  );

  const itemsblock = filteredblock?.length > 0 ? (
    filteredblock.map((item) => (
      <Menu.Item onClick={() => talukSelect(item)} key={item.NAME}>
        {item.NAME}
      </Menu.Item>
    ))
  ) : (
    <Menu.Item disabled>Loading Talukas...</Menu.Item>
  );

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
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
                <span className={classes.label}>{selectedblock}</span>
              </Group>
              <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>{itemsblock}</Menu.Dropdown>
        </Menu>
      </div>
    </>
  );
};
