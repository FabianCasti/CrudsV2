import { Trash, PersonPlus, CashCoin } from "react-bootstrap-icons";
import userpng from "./Img/user.png";

function Table(props) {
  return (
    <div className="container-table">
      <div className="container-title">
        <h4>Gestion de Cliente</h4>
        <button
          onClick={() => {
            props.newUser();
          }}
          className="button-title"
        >
          <PersonPlus className="icon-add" />
          Agregar
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th className="colum-id">Id</th>
            <th className="colum-name">Nombre del cliente</th>
            <th className="colum-default">Telefono</th>
            <th className="colum-email">E-mail</th>
            <th className="colum-debt">Deuda</th>
            <th className="colum-debt">Saldo</th>
            <th className="colum-debt">Pagos Realizados</th>
            <th className="colum-default">Opciones</th>
          </tr>
        </thead>
        <tbody className="informatio-table">
          {props.customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <td className="colum-id">{customer.id}</td>
                <td className="colum-name">
                  
                  <img className="LogoUser" src={userpng} />
                  {customer.name}
                </td>
                <td className="colum-default">{customer.phone}</td>
                <td className="colum-email">{customer.email}</td>
                <td className="colum-debt">{customer.debt}</td>
                <td className="colum-balance">{customer.balance}</td>
                <td className="colum-balance">{customer.payments?.length}</td>
                <td className="colum-default">
                  <button
                    onClick={() => {
                      props.editRow(customer);
                    }}
                    className="button-pay"
                  >
                    <CashCoin className="icon-pay" />
                  </button>
                  <button
                    onClick={() => {
                      props.DeleteUser(customer.id);
                    }}
                    className="button-delete"
                  >
                    <Trash className="icon-delete" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
