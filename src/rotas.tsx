import { HashRouter, Route, Routes, Outlet } from "react-router-dom";

import Home from "./pages/home";
import PaginaPadrao from "./layout/paginaPadrao";


export default function Rotas() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<PaginaPadrao><Outlet/></PaginaPadrao>}>
                    <Route path="" element={<Home />} />
                </Route>

            </Routes>
        </HashRouter>
    );
}
