import './style/App.css';
import { NavigateHorizontal } from './components/header/NavigateHorizontal';
import { NavigateVertical } from './components/NavigateVertical';
import { Profil } from './components/profil/Profil';
import {useParams}from 'react-router-dom'  
function App() {

  /* const {id} = useParams();
  
console.log('id user', id);
    */  

  return (
    <div className="App">
      <NavigateHorizontal />
      <div className="navigateVertical-profil">
        <NavigateVertical />
        <Profil />
      </div>
    </div>
  );
}

export default App;
