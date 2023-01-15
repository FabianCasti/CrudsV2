import { useState } from 'react';
import { Trash, Pencil } from 'react-bootstrap-icons';


function Table(Props) {
  const [check,setCheck] = useState(true);

  const handleChange=(data)=>{

    console.loge(data);

  }
  
  
  return (

    <div className="ContainerTable">
      <div className="Title">
        <h2>Gestion de Usuario</h2> 
      </div>
      <table>
        <thead>
          <tr>
            <th> <input className='' type="checkbox" value={check} onChange={()=>handleChange("check")} /> </th>
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
                <td><input className='' type="checkbox" value={check} onChange={()=>handleChange("check")} /></td>
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
