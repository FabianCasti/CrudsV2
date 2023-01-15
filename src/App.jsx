import "./Style/Table.css";
import "./Style/Register.css";
import "./Style/Edit.css";
import Table from "./Table";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import EditUser from "./EditUser";

function App() {
  const [Pag, setPag] = useState(1);
  const [UsuariosPag, setUsuariosPag] = useState([]);
  const [Usuarios, SetUsuarios] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: "",
    Estado: "",
    Usuario: "",
    Email: "",
    Tipo: "",
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);
  const editRow = (Usuario) => {
    setEditing(true);

    setCurrentUser({
      id: Usuario.id,
      Estado: Usuario.Estado,
      Usuario: Usuario.Usuario,
      Email: Usuario.Email,
      Tipo: Usuario.Tipo,
    });
  };

  const DeleteUser = (id) => {
    SetUsuarios(Usuarios.filter((Usuario) => Usuario.id !== id));
    console.log(id);
  };

  const updateUser = (id, updatedUser) => {
    const Suser = Usuarios.map((Usuario) =>
      Usuario.id === id ? updatedUser : Usuario
    );

    setEditing(false);

    SetUsuarios(Suser);

    GeneratePag(Suser, Pag);
  };

  function addUser(Usuario) {
    Usuario.id = Usuarios.length + 1;
    const Usuariotemporal = [...Usuarios, Usuario];
    SetUsuarios(Usuariotemporal);
    GeneratePag(Usuariotemporal, Pag);
  }

  function GeneratePag(Usuarios, Pag) {
    const PosicionInicial = (Pag - 1) * 5;
    const PosicionFinal = Pag * 5;
    const Paginas = Usuarios.slice(PosicionInicial, PosicionFinal);
    setUsuariosPag(Paginas);
    console.log(Usuarios.length);
  }

  function Nextpag() {
    const Newpag = Pag + 1;
    setPag(Newpag);
    GeneratePag(Usuarios, Newpag);
  }

  function PrevPag() {
    const Prepag = Pag - 1;
    setPag(Prepag);
    GeneratePag(Usuarios, Prepag);
  }

  return (
    <div className="Container">
      <div className="UserForm">
        <div className="CuadroUserform">
          {editing ? (
            <div>
              <h2>Editar usuario</h2>
              <EditUser
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Agregar usuario</h2>
              <RegisterForm addUser={addUser} />
            </div>
          )}
        </div>
      </div>
      <Table Usuarios={UsuariosPag} editRow={editRow} DeleteUser={DeleteUser} />

      <div className="ButtonsTable">
        <button onClick={PrevPag}>Previous</button>
        <label>{Pag}</label>
        <button onClick={Nextpag}>Next</button>
      </div>
    </div>
  );
}

export default App;
