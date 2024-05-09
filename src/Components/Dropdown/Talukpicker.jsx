import React, { useState } from 'react';
import { UnstyledButton, Menu, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Picker.module.css';
import locations from '../../assets/datas.json';

export const Talukpicker = ({ mainSelect, takSelect }) => {
  const [opened, setOpened] = useState(false);
  const [selecteddist, setSelecteddist] = useState(locations.DISTRICT[0]);
  const [selectedtaluk, setSelectedtaluk] = useState(() => {
    // Initialize selectedtaluk based on selecteddist (if locations.TALUK exists)
    const initialTaluks = locations.TALUK?.filter(
      (taluk) => taluk.DISTRICT === selecteddist
    );
    return initialTaluks?.length > 0 ? initialTaluks[0].NAME : "select";
  });

  const districtSelect = (item) => {
    setSelecteddist(item);
    mainSelect(item);
    // Update selectedtaluk based on the new district
    const filteredTaluks = locations.TALUK.filter(
      (taluk) => taluk.DISTRICT === item
    );
    setSelectedtaluk(filteredTaluks.length > 0 ? filteredTaluks[0].NAME : "select");
  };

  const talukSelect = (item) => {
    setSelectedtaluk(item.NAME);
    takSelect(item);
  };

  const filtereddist = locations.DISTRICT;

  const itemsdist = filtereddist.map((item) => (
    <Menu.Item onClick={() => districtSelect(item)} key={item}>
      {item}
    </Menu.Item>
  ));

  // Filter taluks based on the selected district
  const filteredTaluks = locations.TALUK?.filter(
    (taluk) => taluk.DISTRICT === selecteddist
  );

  const itemstaluk = filteredTaluks?.length > 0 ? (
    filteredTaluks.map((item) => (
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
                <span className={classes.label}>{selectedtaluk}</span>
              </Group>
              <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>{itemstaluk}</Menu.Dropdown>
        </Menu>
      </div>
    </>
  );
};
