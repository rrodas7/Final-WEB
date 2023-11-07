import React from 'react';

function Imagen({ onChange }) {
  return (
    <div className="form-group">
      <label>Imagen de Perfil:</label>
      <input
        type="file"
        className="form-control-file"
        accept="image/*"
        onChange={onChange}
      />
    </div>
  );
}

export default Imagen;
