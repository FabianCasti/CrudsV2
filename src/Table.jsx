import { Trash, Pencil, PersonPlus } from "react-bootstrap-icons";
import userpng from "./Img/user.png";

function Table(Props) {
  return (
    <div className="ContainerTable">
      <div className="ContainerTitle">
        <h4>Gestion de Usuario</h4>
        <button
          onClick={() => {
            Props.newUser();
          }}
          className="ButtonTitle"
        >
          <PersonPlus className="IconAgg" />
          Agregar
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th className="Colum-Default">Id</th>
            <th className="Colum-Default">Estado</th>
            <th className="Colum-Usuario">Usuario</th>
            <th className="Colum-Email">E-mail</th>
            <th className="Colum-Default">Tipo</th>
            <th className="Colum-Default">Opciones</th>
          </tr>
        </thead>
        <tbody className="Informatiotable">
          {Props.Usuarios.map((Usuario) => {
            return (
              <tr key={Usuario.id}>
                
                <td className="Colum-Default">{Usuario.id}</td>
                <td className="Colum-Default">{Usuario.Estado}</td>
                <td className="Colum-Usuario"> 
                <img className="LogoUser" src={userpng} /> {Usuario.Usuario}</td>
                <td className="Colum-Email">{Usuario.Email}</td>
                <td className="Colum-Default">{Usuario.Tipo}</td>
                <td className="Colum-Default">
                  <button
                    onClick={() => {
                      Props.editRow(Usuario);
                    }}
                    className="buttonEdit"
                  >
                    <Pencil className="IconEdit" />
                  </button>
                  <button
                    onClick={() => {
                      Props.DeleteUser(Usuario.id);
                    }}
                    className="buttonDelete"
                  >
                    <Trash className="IconDelete" />
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
