import "./Style/Table.css";
import "./Style/Register.css";
import "./Style/Edit.css";
import "./Style/App.css"
import Table from "./Table";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import EditUser from "./EditUser";

function App() {
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
    setEditing(false);

    SetUsuarios(
      Usuarios.map((Usuario) => (Usuario.id === id ? updatedUser : Usuario))
    );
  };

  function addUser(Usuario) {
    Usuario.id = Usuarios.length + 1;
    SetUsuarios([...Usuarios, Usuario]);
  }

  return (
    <div className="Container">
      
      <div className="UserForm">
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
      <Table Usuarios={Usuarios} editRow={editRow} DeleteUser={DeleteUser} />

    </div>
  );
}

export default App;
