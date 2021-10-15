import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/login/Login";
import { LogoutButton } from "./components/login/logout";
import { Profile } from "./Profile";
import "./App.css";
import Rutas from './components/Rutas';
import MenuPrincipal from './components/MenuPrincipal';
import {BrowserRouter} from 'react-router-dom';
import logo from "./logo.svg";


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
          <>
            <BrowserRouter>
            <MenuPrincipal />
            <Rutas />
            <Profile/>
            <LogoutButton />
            </BrowserRouter>
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;







/* import './App.css'; */
/* import Rutas from './components/Rutas'; */
/* import MenuPrincipal from './components/MenuPrincipal'; */
/* import {BrowserRouter} from 'react-router-dom'; */
/*  */
/* function App() { */
/*   return ( */
/*     <BrowserRouter> */
/*     <MenuPrincipal /> */
/*     <Rutas /> */
/*     </BrowserRouter> */
/*   ); */
/* } */
/*  */
/* export default App; */
/*  */