import { useState } from "react";

const RegisterForm = (props) => {
  const initialFormState = { id: "", Estado: "", Usuario: "", Email: "",
  Tipo: "" };
  const [Usuarios, SetUsuarios] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    SetUsuarios({ ...Usuarios, [name]: value });
  };

  const onSubmit = (event) => {
    props.addUser (Usuarios);
    SetUsuarios(initialFormState)
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
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

      <button type="submit">Agregar</button>
    </form>
  );
};

export default RegisterForm;
