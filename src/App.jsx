
import { Trailmap } from "./Components/Newhome/Trailmap"

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Advance } from "./Components/Newhome/Advance";



function App() {
 
  return (
    <>
      <MantineProvider defaultColorScheme="light" >

      <Advance/>
      </MantineProvider>
    
    </>
  )
}

export default App
