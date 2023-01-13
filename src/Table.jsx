function Table(Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Estado</th>
          <th>Usuario</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {Props.Usuarios.map((Usuario) => {
          return (
            <tr key={Usuario.id}>
              <td>{Usuario.id}</td>
              <td>{Usuario.Estado}</td>
              <td>{Usuario.Usuario}</td>
              <td>{Usuario.Email}</td>
              <td>{Usuario.Tipo}</td>
              <td>
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
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
