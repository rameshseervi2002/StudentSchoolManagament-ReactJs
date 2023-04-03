import { Outlet, Router } from 'react-router-dom';
import './App.css';
import Headers from './Headers';
import Routers from './Routers';
function App() {
  return (
    <div className="App">
      

      <Routers></Routers>
      <Outlet></Outlet>
    </div>

  );
}

export default App;
