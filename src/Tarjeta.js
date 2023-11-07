import React from 'react';

function Tarjeta({ nombre, apellido, correo, imagen }) {
  return (
    <div className="container">
      <div className="card">
        {imagen && (
          <img src={imagen} alt="Imagen de Perfil" className="card-img-top" />
        )}
        <div className="card-body">
          <h5 className="card-title">Tarjeta de Presentación</h5>
          <p className="card-text">Nombre: {nombre}</p>
          <p className="card-text">Apellido: {apellido}</p>
          <p className="card-text">Correo: {correo}</p>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;

