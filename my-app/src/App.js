import React, {useState} from 'react';
import './App.css';
import NavBar from './components/navBar'
import InfoPanel from './components/InfoPanel'
import SelectionTab from './components/selectiontab'



function App() {
	const screenConfig = useState(0);

  return (
	<div>

		<NavBar />
		<SelectionTab screenConfig={screenConfig}/>

		<InfoPanel currentScreen={screenConfig}/>


		
	</div>
  );
}

export default App;