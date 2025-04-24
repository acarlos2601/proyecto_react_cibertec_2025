import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import { CustomLayout, DefaultLayout } from "../templates";
import NotFound from "../pages/NotFound";
import Usuarios from "../pages/Usuarios";
import CrearUsuario from "../pages/CrearUsuario";
import { Provider } from "react-redux";
import appStore from "../store/AppStore/createStore";

const AppRouter = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/crear-usuario" element={<CrearUsuario />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/mi-carrito" element={<Productos />} />

            <Route path="/listar-usuario" element={
                // <Provider store={usuarioStore}>
                    <Usuarios />
                //* </Provider> *
                } />
          </Route>

          <Route element={<CustomLayout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
