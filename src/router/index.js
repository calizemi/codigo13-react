import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Flags from "../pages/Flags";
import Youtube from "../pages/Youtube";
import YoutubeAdministrator from "../pages/YoutubeAdministrador";
import MovieUpdate from "../pages/MovieUpdate";
import CountryDetails from "../pages/CountryDetails";
// nuestro router va a ser un componente el cual se encargue de retornar
// las rutas con su respectiva vista
const Router=()=>{
    return(
        <BrowserRouter>
          <Routes>
              <Route path="/pokemon" element={<Home/>}/>
              <Route path="/flags" element={<Flags/>}/>
              <Route path="/youtube" element={<Youtube/>}/>
              <Route path="/youtube/administrador" element={<YoutubeAdministrator/>}/>
              <Route
                path="/youtube/administrador/editar/:id"
                element={<MovieUpdate />}
              />
              <Route
              path="/flags/name/:name"
              element={<CountryDetails />}
              />
          </Routes>
        </BrowserRouter>
    )
}

export default Router
// Como esto es un comonente tenemod que una return par poder crear las rutas