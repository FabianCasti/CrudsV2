import { useState } from "react";

const RegisterForm = (props) => {
  const initialFormState = {
    id: "",
    Estado: "",
    Usuario: "",
    Email: "",
    Tipo: "",
  };
  const [Usuario, SetUsuarios] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    SetUsuarios({ ...Usuario, [name]: value });
  };

  const onSubmit = (event) => {
    props.addUser(Usuario);
    SetUsuarios(initialFormState);
    event.preventDefault();
  };

  return (
    <form className="ContainerForm" onSubmit={onSubmit}>
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
        <label className="LabelRegisFormDefault">Email:</label>
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
        <label className="LabelRegisFormDefault">Tipo:</label>
        <span className="Formline"></span>
      </div>

      <div className="Action">
        <button className="ButtonAgg" type="submit">Agregar</button>

        <button onClick={() => props.CancelUser()} className="buttonCancel">
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
