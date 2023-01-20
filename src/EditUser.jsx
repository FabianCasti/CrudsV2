import React, { useState } from "react";
import swal from "sweetalert";

const EditUser = (props) => {
  const [customer] = useState(props.currentUser);
  const [pay, setPay] = useState(0);
  const handlePay = (event) => {
    const payFloat = parseFloat(pay);
    if (payFloat > customer.balance) {
      swal("Valor a pagar es mayor al saldo actual");
    } else {
      props.payCustomer(customer.id, payFloat);
    }
    event.preventDefault();
  };

  const getpayment = (list) => {
    let result = "";
    list.map(
      (item) =>
        (result =
          result + "Pago:" + "\r" + "$" + item.value + "\r" + item.date + "\n")
    );
    return result;
  };
  const mostrarAlerta = (event) => {
    swal("Historial de pagos", getpayment(customer.payments));
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setPay(value);
  };

  return (
    <form className="container-form">
      <div>
        <label> {customer.name}</label>
      </div>

      <div>
        <label> {customer.phone}</label>
      </div>
      <div>
        <label> {customer.email}</label>
      </div>
      <div>
        <label> Saldo: ${customer.balance}</label>
      </div>

      <div className="form-group">
        <input
          className="form-input"
          type="text"
          name="debt"
          value={pay}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label className="label-regis-form-default">Valor a pagar:</label>
        <span className="form-line"></span>
      </div>

      <div className="actions">
        <button className="button-pagar" onClick={handlePay}>
          Pagar
        </button>

        <button onClick={() => props.CancelUser()} className="button-cancel">
          Cancelar
        </button>

        <div>
          <button
            className="button-detailspay"
            onClick={(event) => mostrarAlerta(event)}
          >
            Detalles de pagos
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditUser;
