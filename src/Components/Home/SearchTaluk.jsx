


// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import locations from '../../assets/datas.json'

// export default function SearchTaluk() {
//   const [value, setValue] = React.useState(locations.DISTRICT[0]);
//   const [inputValue, setInputValue] = React.useState('');
  

 


//   const options = locations.TALUK.map((option) => {
//     const firstLetter = option.DISTRICT;
//     let displayTitle = `${option.NAME}`;
//     if (option.DISTRICT === value) {
//       displayTitle = `${option.NAME}`;
//     }
//     return {
//       firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
//       ...option,
//       displayTitle,
//     };
//   });

//   const handleChange = (event, value) => {
//     console.log('Selected place:', value.DISTRICT);
//     console.log('Place type:', value.NAME);
//   };
//   return (

//     <>

// <Autocomplete
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         inputValue={inputValue}
//         onInputChange={(event, newInputValue) => {
//           setInputValue(newInputValue);
//         }} 
//         // onInputChange={handleInputChange}
//         id="controllable-states-demo"
//         options={locations.DISTRICT}
//         sx={{ width: 280,paddingBottom:'10px' }}
//         renderInput={(params) => <TextField {...params} label="DIstrict" />}
//       />
//        <Autocomplete
//       id="free-solo-demo"
//       freeSolo
//       options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
//       groupBy={(option) => option.firstLetter}
//       getOptionLabel={(option) => option.displayTitle}

// onChange={handleChange}      sx={{ width: 280,paddingBottom:'10px'}}
//       renderInput={(params) => <TextField {...params} label="Taluk" />}
//     />
//     <TextField sx={{ width: 280,paddingBottom:'10px'}} placeholder='Search'/>
//     </>
   
//   );
// }


import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import locations from '../../assets/datas.json';

export default function SearchTaluk() {
  const [selectedDistrict, setSelectedDistrict] = React.useState(locations.DISTRICT[0]);
  const [selectedTaluk, setSelectedTaluk] = React.useState(null);

  // Filter taluks based on selected district
  const filteredTaluks = locations.TALUK.filter(taluk => taluk.DISTRICT === selectedDistrict);

  const handleChangeDistrict = (event, newValue) => {
    setSelectedDistrict(newValue);
    setSelectedTaluk(null); // Reset selected taluk when district changes
  };

  const handleChangeTaluk = (event, newValue) => {
    setSelectedTaluk(newValue);
  };

  return (
    <>
      <Autocomplete
        value={selectedDistrict}
        onChange={handleChangeDistrict}
        id="district-autocomplete"
        options={locations.DISTRICT}
        sx={{ width: 180, paddingBottom: '10px' }}
        renderInput={(params) => <TextField {...params} label="District" />}
      />
      <Autocomplete
        value={selectedTaluk}
        onChange={handleChangeTaluk}
        id="taluk-autocomplete"
        options={filteredTaluks}
        getOptionLabel={(option) => option.NAME}
        sx={{ width: 180, paddingBottom: '10px' }}
        renderInput={(params) => <TextField {...params} label="Taluk" />}
      />
      {/* <TextField sx={{ width: 280, paddingBottom: '10px' }} placeholder="Search" /> */}
    </>
  );
}
