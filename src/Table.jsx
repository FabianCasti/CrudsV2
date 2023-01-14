function Table(Props) {
  return (

    <div className="ContainerTable">
      <div className="Title">
        <h2>Gestion de Usuario</h2> 
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
                <td className="Colum-Usuario">{Usuario.Usuario}</td>
                <td className="Colum-Email">{Usuario.Email}</td>
                <td className="Colum-Default">{Usuario.Tipo}</td>
                <td className="Colum-Default">
                  <button
                    onClick={() => {
                      Props.editRow(Usuario);
                    }}
                    className="buttonEdit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      Props.DeleteUser(Usuario.id);
                    }}
                    className="buttonDelete"
                  >
                    Borrar
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
