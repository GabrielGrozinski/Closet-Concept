import { HashRouter, Route, Routes, Outlet } from "react-router-dom";

import Home from "./pages/home";
import PaginaPadrao from "./layout/paginaPadrao";
import LoginLayout from "./layout/loginLayout";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";


export default function Rotas() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<PaginaPadrao><Outlet/></PaginaPadrao>}>
                    <Route index element={<Home />} />

                    <Route element={<LoginLayout/>} path="/login">
                        <Route index element={<Login />} />
                        <Route path="cadastro" element={<Cadastro />} />
                    </Route>
                </Route>

            </Routes>
        </HashRouter>
    );
}
