import { useState } from "react";
// Esto sera un componente el cual nos renderizara un formulario de registro
const FormRegister = () => {

    const [nombre,setNombre]= useState("");
    const [apellido,setApellido]= useState("");

    const handleInputName=(event)=>{
        setNombre(event.target.value)
    }
    const handleInputApellido=(event)=>{
        setApellido(event.target.value)
    }
    return (
      <div>
        <form action="">
          <h4>Formualario de registro</h4>
          <h4>Nombre {nombre} {apellido}</h4>
          <p>
            <input type="text" onChange={handleInputName} placeholder="Ingrese su nombre" />
          </p>
          <p>
            <input type="text" onChange={handleInputApellido} placeholder="Ingrese su apellido" />
          </p>
          <p>
            <input type="email" placeholder="Ingrese su email" />
          </p>
          <p>
            <input type="password" placeholder="Ingrese su password" />
          </p>
          <p>
            <button type="submit">Registar</button>
          </p>
        </form>
      </div>
    );
  };
  
  export default FormRegister;