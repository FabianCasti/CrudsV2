import "./Style/Table.css";
import "./Style/debtRepayment.css";
import Table from "./Table";
import { useState } from "react";
import  DebtRegistrationForm from "./DebtRegistrationForm";
import DebtRepayment from "./debtRepayment";

const initialFormState = {
  id: "",
  Estado: "",
  Usuario: "",
  Email: "",
  Tipo: "",
};

function App() {
  const [debts, setDebts] = useState([]);
  const [pag, setPag] = useState(1);
  const [usuariosPag, setUsuariosPag] = useState([]);
  const [customerPayment, setCustomerPayment] = useState(false);
  const [showTable, setshowTable] = useState(true);
  const [currentDebt, setCurrentDebt] = useState(initialFormState);

  const editRow = (debt) => {
    setCustomerPayment(true);
    setshowTable(false);

    setCurrentDebt({
      ...debt,
    });
  };

  const deleteDebt = (id) => {
    const debtsResult = debts.filter((debt) => debt.id !== id);
    setDebts(debtsResult);
    generatePag(debtsResult, pag);
  };
  
  const formatedTimestamp = () => {
    const d = new Date();
    const date = d.toISOString().split("T")[0];
    const time = d.toTimeString().split(" ")[0];
    return `${date} ${time}`;
  };

  const payCustomer = (id, pay) => {
    const [customerPay] = debts.filter((debt) => debt.id === id);

    if (customerPay) {
      customerPay.balance = customerPay.balance - pay;
      customerPay.payments.push({
        id: "",
        value: pay,
        date: formatedTimestamp(),
      });

      const debtsResult = debts.map((debt) =>
        debt.id === id ? customerPay : debt
      );

      console.log(debtsResult);

      setCustomerPayment(false);

      setDebts(debtsResult);

      generatePag(debtsResult, pag);

      setshowTable(true);
    }
  };

  function addCustomer(debt) {
    debt.id = debts.length + 1;
    const debtsResult = [...debts, debt];
    setDebts(debtsResult);
    generatePag(debtsResult, pag);
    setshowTable(true);
  }

  function generatePag(debt, Pag) {
    const PosicionInicial = (Pag - 1) * 5;
    const PosicionFinal = Pag * 5;
    const usersPag = debt.slice(PosicionInicial, PosicionFinal);
    setUsuariosPag(usersPag);
  }

  function Nextpag() {
    const Newpag = pag + 1;
    setPag(Newpag);
    generatePag(debts, Newpag);
  }

  function PrevPag() {
    const Prepag = pag - 1;
    setPag(Prepag);
    generatePag(debts, Prepag);
  }

  function newDebt() {
    setshowTable(false);
    setCustomerPayment(false);
  }

  function CancelDebt() {
    setCustomerPayment(false);
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
              deleteDebt={deleteDebt}
              newDebt={newDebt}
            />
            <div className="container-table-2">
              <div>
                <div className="cont-bu-de-users">
                  <button
                    className="button-delete-users"
                    onClick={() => {
                      deleteDebt(debts.id);
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
              {customerPayment ? (
                <div>
                  <h2>Pago de la deuda</h2>
                  <DebtRepayment
                    CancelDebt={CancelDebt}
                    currentDebt={currentDebt}
                    payCustomer={payCustomer}
                  />
                </div>
              ) : (
                <div>
                  <h2>Agregar deuda</h2>
                  < DebtRegistrationForm
                    addCustomer={addCustomer}
                    CancelDebt={CancelDebt}
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
