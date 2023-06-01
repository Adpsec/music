import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (

    <div className="Encabezado">

      <div className="RecuadroLogo">
        <h1><b className="Logo_Text">Music App</b></h1>
        
      </div>

      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/Inicio" className="no-underline black">
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/musicos" className="no-underline black">
                Mostrar Datos
              </Link>
            </li>

            <li>
              <Link to="/add" className="no-underline black" >
                Agregar Datos
              </Link>
            </li>
            <li>
                <Link to="/login" className="no-underline black" >
                  login
                </Link>
              </li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default Header;