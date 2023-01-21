import { useState } from "react";

const  DebtRegistrationForm = (props) => {
  const initialFormState = {
    id: "",
    name: "",
    phone: "",
    email: "", 
    debt: "",
    
  };
  const [customer, setCustomer] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCustomer({ ...customer, [name]: value });
  };

  const onSubmit = (event) => {
    const endCustomer = {
      ...customer,
      debt: parseFloat(customer.debt),
      balance: parseFloat(customer.debt),
      date: new Date (),
      payments:[]
    };

    props.addCustomer(endCustomer);
    setCustomer(initialFormState);
    event.preventDefault();
  };

  return (
    <form className="container-form" onSubmit={onSubmit}>
      <div className="form-group">
        <input
          className="form-input"
          type="text"
          name="name"
          value={customer.name}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label className="label-regis-form-default">Nombre del cliente:</label>
        <span className="form-line"></span>
      </div>

      <div className="form-group">
        <input
          className="form-input"
          type="text"
          name="phone"
          value={customer.phone}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label className="label-regis-form-default">Telefono:</label>
        <span className="form-line"></span>
      </div>

      <div className="form-group">
        <input
          className="form-input"
          type="text"
          name="email"
          value={customer.email}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label className="label-regis-form-default">Email:</label>
        <span className="form-line"></span>
      </div>

      <div className="form-group">
        <input
          className="form-input"
          type="text"
          name="debt"
          value={customer.debt}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label className="label-regis-form-default">Valor de deuda:</label>
        <span className="form-line"></span>
      </div>

      <div className="Action">
        <button className="button-add" type="submit">
          Agregar
        </button>

        <button onClick={() => props.CancelDebt()} className="button-cancel">
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default  DebtRegistrationForm;
