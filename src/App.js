import logo from './logo.svg';
import './App.css';
import Dashhboard from './Components/Dashhboard';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
     <Dashhboard />
    </div>
  );
}

export default App;
