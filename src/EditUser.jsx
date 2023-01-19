import React, { useState } from "react";

const EditUser = (props) => {
  const [Usuario, SetUsuario] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    SetUsuario({ ...Usuario, [name]: value });
  };

  return (
    <form
      className="ContainerForm"
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(Usuario.id, Usuario);
      }}
    >
      <div className="Form-group">
        <input
          className="ForInput"
          type="text"
          name="Estado"
          value={Usuario.Estado}
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
          value={Usuario.Usuario}
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
          value={Usuario.Email}
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
          value={Usuario.Tipo}
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
