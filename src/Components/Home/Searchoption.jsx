// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Autocomplete from '@mui/material/Autocomplete';

// export default function Searchoption() {
  
//   const handleChange = (event, value) => {
//     console.log(value); // Print the selected value to the console
//   };

//   return (
//     <Stack spacing={2} sx={{ width: 300 }}>
//       <Autocomplete
//         freeSolo
//         id="free-solo-2-demo"
//         disableClearable
//         options={locations.map((option) => option.title)}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="Level"
//             InputProps={{
//               ...params.InputProps,
//               type: 'search',
//             }}
//           />
//         )}
//         onChange={handleChange} // Add onChange event handler
//       />
//     </Stack>
//   );
// }




import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const options = [ 'ALL','DISTRICT','TALUK','VILLAGE', 'PANCHAYATH'];

export default function Searchoption() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  
console.log(value,'kj')
 
  return (
    <div>
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
    </div>
  );
}