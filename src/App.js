import React, { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tarjeta from './Tarjeta';

function App() {
  const [datosPersonales, setDatosPersonales] = useState(null);

  const handleFormSubmit = (datos) => {
    setDatosPersonales(datos);
  };

  return (
    <div className="App">
      <h1>Formulario de Ingreso de datos</h1>
      {datosPersonales ? (
        <Tarjeta {...datosPersonales} />
      ) : (
        <Formulario onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;
