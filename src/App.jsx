

import { Advance } from "./Components/Home/Advance";
import { Home } from "./Components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
function App() {
 
  return (
    <>

<MantineProvider defaultColorScheme="light" >
<BrowserRouter>
      <Routes>
          <Route exact path='/' element={< Home />}></Route>  
          <Route exact path='/pre' element={< Advance />}></Route>  
      </Routes>
    </BrowserRouter>
      </MantineProvider>
  
    
     
    
    </>
  )
}

export default App
