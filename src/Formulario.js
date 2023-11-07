import React, { useState } from 'react';

function Formulario({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagen(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, apellido, correo, imagen });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Apellido:</label>
          <input
            type="text"
            className="form-control"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Correo:</label>
          <input
            type="email"
            className="form-control"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Imagen de Perfil:</label>
          <input
            type="file"
            className="form-control-file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Generar Tarjeta de Presentación
        </button>
      </form>
    </div>
  );
}

export default Formulario;
