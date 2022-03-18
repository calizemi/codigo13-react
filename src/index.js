import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrimerComponente from './App';
import reportWebVitals from './reportWebVitals';
// Por default el archivo que se exporta es index asi que no hace falta llamarlo
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    {/* para importar un archivo debemos colocarlo como una etiqueta */}
    {/* <PrimerComponente /> */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
