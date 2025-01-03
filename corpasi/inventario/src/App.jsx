// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardLayoutBasic from './Dashboard';
// import DemoPageAgregar from './Models/inventario/invAgregar/inv_agregar'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <DashboardLayoutBasic />

    // <Router>
    //   <DashboardLayoutBasic />
    //     <Route path="/agregar" component={DemoPageAgregar} /> Ruta para la página de agregar material
    // </Router>
  );
}

export default App;
