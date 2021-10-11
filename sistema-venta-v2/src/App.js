import './App.css';
import Rutas from './components/Rutas';
import MenuPrincipal from './components/MenuPrincipal';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <MenuPrincipal />
    <Rutas />
    </BrowserRouter>
  );
}

export default App;
