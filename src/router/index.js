import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Flags from "../pages/Flags";
import Youtube from "../pages/Youtube";
import YoutubeAdministrator from "../pages/YoutubeAdministrador";
import MovieUpdate from "../pages/MovieUpdate";
import CountryDetails from "../pages/CountryDetails";
import Login from "../pages/Login";
// Layout
import Main from "../layouts/Main";
import Private from "../layouts/Private";
import Ecommerce from "../layouts/Ecommerce";
import PopularWeek from "../pages/PopularWeek";
import BasketView from "../pages/BasketView";
// nuestro router va a ser un componente el cual se encargue de retornar
// las rutas con su respectiva vista
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROUTE DEL MAIN (PUBLICAS) */}
        <Route path="login" element={<Login />} />
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/flags" element={<Flags />} />
          <Route path="/flags/name/:name" element={<CountryDetails />} />
          <Route path="/youtube" element={<Youtube />} />
        </Route>
        {/* ROUTE para ecommerce */}
        <Route element={<Ecommerce />}>
          <Route path="ecommerce" element={<PopularWeek />} />
          <Route path="ecommerce/basket" element={<BasketView />} />
        </Route>
        {/* ROUTE DEL ADMIN (PRIVADAS) */}
        <Route element={<Private />}>
          <Route
            path="/youtube/administrador"
            element={<YoutubeAdministrator />}
          />
          <Route
            path="/youtube/administrador/editar/:id"
            element={<MovieUpdate />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
// Como esto es un comonente tenemod que una return par poder crear las rutas
