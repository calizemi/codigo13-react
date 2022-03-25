/**
 * Este archivo se va a ecargar de gestionar mi servios GET POST PUT DELETE
 */
 const URL = "https://restcountries.com/v3.1/name";
 //const URL = "http://localhost:3000/movies";
 /**
  * Funcion para listar las peliculas
  */

 
 
 // Sera para poder obtener el detalle de una pelicula
 export const getCountryDetail = async (urld=URL,name) => {
   try {
     
     const response = await fetch(`${urld}/${name}`);
     const data = await response.json();
     
     return data;
     
   } catch (error) {
     console.log(error.message);
   }
 };
