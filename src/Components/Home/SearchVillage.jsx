


import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import locations from '../../assets/datas.json';

export default function SearchVillage() {
  const [selectedDistrict, setSelectedDistrict] = React.useState(locations.DISTRICT[0]);
  const [selectedTaluk, setSelectedTaluk] = React.useState(null);
  const [selectedVillage, setSelectedVillage] = React.useState(null);


  // Filter taluks based on selected district
  const filteredTaluks = locations.TALUK.filter(taluk => taluk.DISTRICT === selectedDistrict);
  const filteredVillage = locations.VILLAGE.filter(taluk => taluk.DISTRICT === selectedDistrict,village => village.TALUK === selectedTaluk);

  const handleChangeDistrict = (event, newValue) => {
    setSelectedDistrict(newValue);
    setSelectedTaluk(null); // Reset selected taluk when district changes
  };

  const handleChangeTaluk = (event, newValue) => {
    setSelectedTaluk(newValue);
  };

  const handleChangeVillage = (event, newValue) => {
    setSelectedVillage(newValue);
  };

  return (
    <>
      <Autocomplete
        value={selectedDistrict}
        onChange={handleChangeDistrict}
        id="district-autocomplete"
        options={locations.DISTRICT}
        sx={{ width: 280, paddingBottom: '10px' }}
        renderInput={(params) => <TextField {...params} label="District" />}
      />
      <Autocomplete
        value={selectedTaluk}
        onChange={handleChangeTaluk}
        id="taluk-autocomplete"
        options={filteredTaluks}
        getOptionLabel={(option) => option.NAME}
        sx={{ width: 280, paddingBottom: '10px' }}
        renderInput={(params) => <TextField {...params} label="Taluk" />}
      />

<Autocomplete
        value={selectedVillage}
        onChange={handleChangeVillage}
        id="taluk-autocomplete"
        options={filteredVillage}
        getOptionLabel={(option) => option.NAME}
        sx={{ width: 280, paddingBottom: '10px' }}
        renderInput={(params) => <TextField {...params} label="Village" />}
      />
      <TextField sx={{ width: 280, paddingBottom: '10px' }} placeholder="Search" />
    </>
  );
}
