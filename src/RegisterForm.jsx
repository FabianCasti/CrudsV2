import { useState } from "react";

const RegisterForm = (props) => {
  const initialFormState = {
    id: "",
    Estado: "",
    Usuario: "",
    Email: "",
    Tipo: "",
  };
  const [Usuarios, SetUsuarios] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    SetUsuarios({ ...Usuarios, [name]: value });
  };

  const onSubmit = (event) => {
    props.addUser(Usuarios);
    SetUsuarios(initialFormState);
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label className="LabelRegisFormDefault">Estado</label>
      <input
        type="text"
        name="Estado"
        value={Usuarios.Estado}
        onChange={handleInputChange}
      />

      <label className="LabelRegisFormDefault">Usuario</label>
      <input
        type="text"
        name="Usuario"
        value={Usuarios.Usuario}
        onChange={handleInputChange}
      />

      <label className="LabelRegisFormDefault">Email</label>
      <input
        type="text"
        name="Email"
        value={Usuarios.Email}
        onChange={handleInputChange}
      />

      <label className="LabelRegisFormDefault">Tipo</label>
      <input
        type="text"
        name="Tipo"
        value={Usuarios.Tipo}
        onChange={handleInputChange}
      />
      <div className="Action">
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
};

export default RegisterForm;
