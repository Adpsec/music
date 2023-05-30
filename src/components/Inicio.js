import React from 'react';
import "../styles/Inicio.css"
import "../styles/Alumno.css"


export const Alumno = () => {
  return (
    <div>
      <div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover .Carta">
        <div className='TarjetaFoto'>
          <img src="../../img/foto.jpeg" alt="Foto mía"
            class="d-block w-full"></img>
          <h2>
            Información de alumno: <br></br><br></br>
                      <h3>
            Adriel Eduardo Peregrina Soto <br></br>
            zS20006770 <br></br>
            601 Ingeniería de Software, UV
          </h3>
          </h2>

        </div>
      </div>
    </div>
  )
}