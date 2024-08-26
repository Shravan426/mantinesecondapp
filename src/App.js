import './App.css';
import { MantineProvider } from '@mantine/core';
import Header from "./components/sample/Header";
import Homepage from './components/sample/Homepage';


function App() {
 return (
   <div>
<MantineProvider>
<Header/>
<Homepage/>
</MantineProvider>
   

    
   </div>
 );
}

export default App;