import React, { useState } from "react";

const EditUser = (props) => {
  const [Usuarios, SetUsuarios] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    SetUsuarios({ ...Usuarios, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(Usuarios.id, Usuarios);
      }}
    >
      <label>Estado</label>
      <input
        type="text"
        name="Estado"
        value={Usuarios.Estado}
        onChange={handleInputChange}
      />

      <label>Usuario</label>
      <input
        type="text"
        name="Usuario"
        value={Usuarios.Usuario}
        onChange={handleInputChange}
      />

      <label>Email</label>
      <input
        type="text"
        name="Email"
        value={Usuarios.Email}
        onChange={handleInputChange}
      />

      <label>Tipo</label>
      <input
        type="text"
        name="Tipo"
        value={Usuarios.Tipo}
        onChange={handleInputChange}
      />

      <div className="Actions">
      <button>Actualizar</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>

      </div>
      
    </form>
  );
};

export default EditUser;
