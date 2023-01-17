import React, { useState } from "react";

const EditUser = (props) => {
  const [Usuarios, SetUsuarios] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    SetUsuarios({ ...Usuarios, [name]: value });
  };

  return (
    <form
      className="ContainerForm"
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(Usuarios.id, Usuarios);
      }}
    >
      <div className="Form-group">
        <input
          className="ForInput"
          type="text"
          name="Estado"
          value={Usuarios.Estado}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label className="LabelRegisFormDefault">Estado:</label>
        <span className="Formline"></span>
      </div>

      <div className="Form-group">
        <input
          className="ForInput"
          type="text"
          name="Usuario"
          value={Usuarios.Usuario}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label className="LabelRegisFormDefault">Usuario:</label>
        <span className="Formline"></span>
      </div>

      <div className="Form-group">
        <input
          className="ForInput"
          type="text"
          name="Email"
          value={Usuarios.Email}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label className="LabelRegisFormDefault">Email</label>
        <span className="Formline"></span>
      </div>

      <div className="Form-group">
        <input
          className="ForInput"
          type="text"
          name="Tipo"
          value={Usuarios.Tipo}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label className="LabelRegisFormDefault">Tipo</label>
        <span className="Formline"></span>
      </div>

      <div className="Actions">
        <button className="ButtonActualizar">Actualizar</button>
        <button onClick={() => props.CancelUser()} className="buttonCancel">
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default EditUser;
