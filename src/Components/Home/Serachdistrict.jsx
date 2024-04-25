import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import locations from '../../assets/datas.json'

export default function Searchdistrict() {
  //const [value, setValue] = React.useState(options.DISTRICT[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [selectedDistrict, setSelectedDistrict] = React.useState(locations.DISTRICT[0]);
  
  console.log(selectedDistrict);
  const handleChangeDistrict = (event, newValue) => {
    setSelectedDistrict(newValue);

  };


  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    handleChildInput(newInputValue); 
  };
  return (
    // <div>
    //   {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
    //   <div>{`inputValue: '${inputValue}'`}</div>
    //   <br /> */}
    //   <Autocomplete
    //     value={value}
    //     onChange={(event, newValue) => {
    //       setValue(newValue);
    //     }}
    //     inputValue={inputValue}
    //     onInputChange={(event, newInputValue) => {
    //       setInputValue(newInputValue);
    //     }} 
    //     // onInputChange={handleInputChange}
    //     id="controllable-states-demo"
    //     options={options.DISTRICT}
    //     sx={{ width: 300 }}
    //     renderInput={(params) => <TextField {...params} label="DIstrict" />}
    //   />
    // </div>
    <>
     <Autocomplete
        value={selectedDistrict}
        onChange={handleChangeDistrict}
        id="district-autocomplete"
        options={locations.DISTRICT}
        sx={{ width: 280, paddingBottom: '10px' }}
        renderInput={(params) => <TextField {...params} label="District" />}
      />
       <TextField sx={{ width: 280, paddingBottom: '10px' }} placeholder="Search" />
    
    </>
  );
}