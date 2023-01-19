import "./Style/Table.css";
import "./Style/Edit.css";
import Table from "./Table";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import EditUser from "./EditUser";

const initialFormState = {
  id: "",
  Estado: "",
  Usuario: "",
  Email: "",
  Tipo: "",
};

function App() {
  const [usuarios, setUsuarios] = useState([]);  
  const [pag, setPag] = useState(1);
  const [usuariosPag, setUsuariosPag] = useState([]);
  const [editing, setEditing] = useState(false);
  const [showTable, setshowTable] = useState(true);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (Usuario) => {
    setEditing(true);
    setshowTable(false);

    setCurrentUser({
      id: Usuario.id,
      Estado: Usuario.Estado,
      Usuario: Usuario.Usuario, 
      Email: Usuario.Email,
      Tipo: Usuario.Tipo,
    });
  };

  const DeleteUser = (id) => {
    const UsersResult = usuarios.filter((Usuario) => Usuario.id !== id);
    setUsuarios(UsersResult);
    generatePag(UsersResult, pag);
  };

  const updateUser = (id, updatedUser) => {
    const UsersResult = usuarios.map((Usuario) =>
      Usuario.id === id ? updatedUser : Usuario
    );

    setEditing(false);

    setUsuarios(UsersResult);

    generatePag(UsersResult, pag);

    setshowTable(true);
  };

  function addUser(Usuario) {
    Usuario.id = usuarios.length + 1;
    const UsersResult = [...usuarios, Usuario];
    setUsuarios(UsersResult);
    generatePag(UsersResult, pag);
    setshowTable(true);
  }

  function generatePag(Usuarios, Pag) {
    const PosicionInicial = (Pag - 1) * 5;
    const PosicionFinal = Pag * 5;
    const usersPag = Usuarios.slice(PosicionInicial, PosicionFinal);
    setUsuariosPag(usersPag);
  }

  function Nextpag() {
    const Newpag = pag + 1;
    setPag(Newpag);
    generatePag(usuarios, Newpag);
  }

  function PrevPag() {
    const Prepag = pag - 1;
    setPag(Prepag);
    generatePag(usuarios, Prepag);
  }

  function newUser() {
    setshowTable(false);
    setEditing(false);
  }

  function CancelUser() {
    setEditing(false);
    setshowTable(true);
  }

  return (
    <div className="Container">
      <div className="Table">
        {showTable ? (
          <div className="UserTable">
            <Table
              Usuarios={usuariosPag}
              editRow={editRow}
              DeleteUser={DeleteUser}
              newUser={newUser}
            />
            <div className="ContainerTable2">
              <div>
                <div className="ContBEusers">
                  <button
                    className="ButtonEliminarUsers"
                    onClick={() => {
                      DeleteUser(usuarios.id);
                    }}
                  >
                    Eliminar{" "}
                  </button>
                </div>
              </div>

              <div className="ContNextpag">
                <button className="ButtonNextPag" onClick={Nextpag}>
                  <b>Siguiente</b>{" "}
                </button>
              </div>
              <div className="ContLabelContPag">
                <label className="LabelCountPag">{pag}</label>
              </div>

              <div className="ContPrevpag">
                <button className="ButtonPrevPag" onClick={PrevPag}>
                  Anterior{" "}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="UserForm">
            <div className="CuadroUserform">
              {editing ? (
                <div>
                  <h2>Editar usuario</h2>
                  <EditUser
                    CancelUser={CancelUser}
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                </div>
              ) : (
                <div>
                  <h2>Agregar usuario</h2>
                  <RegisterForm addUser={addUser} CancelUser={CancelUser} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
