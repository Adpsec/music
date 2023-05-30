import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import AddMus from "../componentes/add/add-mus.component";
import MusList from "../componentes/list/mus-list.component";
import { Alumno } from "./Inicio";
import Header from "./Header";
import {Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../componentes/login/Login";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container mt-3">

          <Switch>
            <Route exact path={["/", "/Inicio"]} component={Alumno } />
            <Route exact path={["/", "/musicos"]} component={MusList} />
            <Route exact path="/add" component={AddMus} />
            <Route exact path="/login" component={Login} />
          </Switch>
      </div>
    </div>
  );
};

export default App;
