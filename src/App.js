import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Cabecera = () => {
  return (
    <>
      <h1>Rutas en React</h1>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/perros">Perros</Link>
        </li>
        <li>
          <Link to="/gatos">Gatos</Link>
        </li>
      </ul>
    </>
  );
};

const Gatos = (props) => {
  const mostrarGatos = props.gatos.map((gato) => {
    return <img src={gato} alt="" />;
  });
  return mostrarGatos;
};
const Perros = (props) => {
  const mostrarPerros = props.perros.map((perro) => {
    return <img src={perro} alt="" />;
  });
  return mostrarPerros;
};

function App() {
  const [gatos, setGatos] = useState([
    "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg",
    "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg",
  ]);
  const [perros, setPerros] = useState([
    "https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg",
    "https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/opening.jpg",
  ]);
  return (
    <BrowserRouter>
      <Cabecera />
      <Route exact path="/"></Route>
      <Route exact path="/perros">
        <Perros perros={perros} />
      </Route>
      <Route exact path="/gatos">
        <Gatos gatos={gatos} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
