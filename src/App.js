import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {
  return (
    /*Creando la tabla para poner los datos*/

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Correo</th>
          <th scope="col">Celular</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alejandro</td>
          <td>Calvo</td>
          <td>luiscalvo@inemjose.edu.co</td>
          <td>3145198712</td>
        </tr>
        <tr>
          <td>Jacobo</td>
          <td>Uribe</td>
          <td>jacobouribe@inemjose.edu.co</td>
          <td>3054332172</td>
        </tr>
        <tr>
          <td>Juan</td>
          <td>Velasquez</td>
          <td>juanvelasquez@inemjose.edu.co</td>
          <td>3057784648</td>
        </tr>
        <tr>
          <td>Samuel</td>
          <td>Garcia</td>
          <td>samuelgarcia@inemjose.edu.co</td>
          <td>3136066855</td>
        </tr>
      </tbody>
    </table>

    /*Cerrando la tabla para poner los datos*/
  );
}
