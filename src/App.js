 
import "./style/App.css";
import { NavigateHorizontal } from './components/header/NavigateHorizontal';
import { NavigateVertical } from './components/NavigateVertical';
import { Profil } from './components/profil/Profil';
function App() {
  return (
    <div className="App">
        
      <NavigateHorizontal/>
      <div className="navigateVertical-profil">
        <NavigateVertical />
      <Profil/>
      </div>
      
    </div>
  );
}

export default App;
