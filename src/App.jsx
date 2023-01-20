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
      ...Usuario,
    });
  };

  const DeleteUser = (id) => {
    const UsersResult = usuarios.filter((Usuario) => Usuario.id !== id);
    setUsuarios(UsersResult);
    generatePag(UsersResult, pag);
  };
  
  const formatedTimestamp = () => {
    const d = new Date();
    const date = d.toISOString().split("T")[0];
    const time = d.toTimeString().split(" ")[0];
    return `${date} ${time}`;
  };

  const payCustomer = (id, pay) => {
    const [customerPay] = usuarios.filter((Usuario) => Usuario.id === id);

    if (customerPay) {
      customerPay.balance = customerPay.balance - pay;
      customerPay.payments.push({
        id: "",
        value: pay,
        date: formatedTimestamp(),
      });

      const UsersResult = usuarios.map((Usuario) =>
        Usuario.id === id ? customerPay : Usuario
      );

      console.log(UsersResult);

      setEditing(false);

      setUsuarios(UsersResult);

      generatePag(UsersResult, pag);

      setshowTable(true);
    }
  };

  function addCustomer(Usuario) {
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
    <div className="container-app">
      <div className="table">
        {showTable ? (
          <div className="user-table">
            <Table
              customers={usuariosPag}
              editRow={editRow}
              DeleteUser={DeleteUser}
              newUser={newUser}
            />
            <div className="container-table-2">
              <div>
                <div className="cont-bu-de-users">
                  <button
                    className="button-delete-users"
                    onClick={() => {
                      DeleteUser(usuarios.id);
                    }}
                  >
                    Eliminar{" "}
                  </button>
                </div>
              </div>

              <div className="cont-next-pag">
                <button className="button-next-pag" onClick={Nextpag}>
                  <b>Siguiente</b>{" "}
                </button>
              </div>
              <div className="cont-label-cont-pag">
                <label className="label-count-pag">{pag}</label>
              </div>

              <div className="cont-prev-pag">
                <button className="button-prev-pag" onClick={PrevPag}>
                  Anterior{" "}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="user-form">
            <div className="cuadro-user-form">
              {editing ? (
                <div>
                  <h2>Pago del cliente</h2>
                  <EditUser
                    CancelUser={CancelUser}
                    currentUser={currentUser}
                    payCustomer={payCustomer}
                  />
                </div>
              ) : (
                <div>
                  <h2>Agregar Cliente</h2>
                  <RegisterForm
                    addCustomer={addCustomer}
                    CancelUser={CancelUser}
                  />
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
