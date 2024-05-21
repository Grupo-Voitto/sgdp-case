import React from "react";
import { Route, Routes as RoutesDom, BrowserRouter } from "react-router-dom";

import Projetos from "./pages/Projetos";
import Projeto from "./pages/Projeto";
import Dashboard from "./pages/Dashboard";
// import Sobre from "./Sobre";
// import Usuario from "./Usuario";

function Routes() {
    return (
        <BrowserRouter>
            <RoutesDom>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/projetos/:id" element={<Projeto />} />
                {/* <Route component = { Sobre }  path="/sobre" /> */}
                {/* <Route component = { Usuario }  path="/usuario" /> */}

            </RoutesDom>
        </BrowserRouter>
    )
}

export default Routes;