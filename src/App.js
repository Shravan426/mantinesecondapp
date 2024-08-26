import './App.css';
import { MantineProvider } from '@mantine/core';
import Header from "./components/sample/Header";


function App() {
 return (
   <div>
<MantineProvider>

<Header/>
</MantineProvider>
   

    
   </div>
 );
}

export default App;