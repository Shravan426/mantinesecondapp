import './App.css';
import { MantineProvider } from '@mantine/core';
import Header from "./components/sample/Header";
import Homepage from './components/sample/Homepage';
import Firstpage from './components/sample/Firstpage';
import Firstindex from './components/sample/Firstindex'
import FirstSlide from './components/sample/FirstSlide';
import FirstTwopage from './components/sample/FirstTwopage';
import FirstThreepage from './components/sample/FirstThreepage';
import FirstFooter from './components/sample/FirstFooter';

function App() {
 return (
   <div>
<MantineProvider>
<Header/>
<Homepage/>
<Firstpage/>
<Firstindex/>
<FirstSlide/>
<FirstTwopage/>
<FirstThreepage/>
<FirstFooter/>
 </MantineProvider>
   

    
   </div>
 );
}

export default App;