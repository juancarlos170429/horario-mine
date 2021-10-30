import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Login from './views/Login/Login';
import Prueba from  './components/Barra/Barra'
import Horario from './views/Horario/Horario'
import Configuracion from './views/Configuracion/Configuracion';

import './main.css'
function App() {
  return (
    <BrowserRouter >
      <div className="backGround">
      
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/Horario" component={Horario}/>
      <Route exact path="/prueba" component={Prueba}/>
      <Route exact path="/configuracion" component={Configuracion}/>
      </Switch>
     <Switch>
     </Switch>
      </div>
    </BrowserRouter> 
  
  );
}

export default App;
