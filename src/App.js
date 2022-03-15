// El primer paso para definir un componente es el nombre
// El nombre de un componente siempre debe iniciar en Mayuscula
// El componente es una funcion
// podemos crearlo usando function o arow function
const PrimerComponente=()=>{
      // Esta funcion retorna una vista
      // en react usamos return()para indicar que lo que esta dentro de los parentesis
      // sera el objeto visual que vamos a retornar
      // algo importante es que react solo puede retornar un div
      return(
        <div>
          <h1>Hola mundo</h1>
          <div>
            <h4>Hola codigo</h4>
          </div>
        </div>
      );
};

//Luego de crear el componente debemos exportarlo


export default PrimerComponente;