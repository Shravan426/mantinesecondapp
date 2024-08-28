import './App.css';
import { MantineProvider } from '@mantine/core';
import Header from "./components/sample/Header";
import Homepage from './components/sample/Homepage';
import Firstpage from './components/sample/Firstpage'
 

function App() {
 return (
   <div>
<MantineProvider>
<Header/>
<Homepage/>
<Firstpage/>
 </MantineProvider>
   

    
   </div>
 );
}

export default App;