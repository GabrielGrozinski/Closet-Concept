import { HashRouter, Route, Routes, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/home";
import PaginaPadrao from "./layout/paginaPadrao";
import Wishlist from "./pages/wishlist";
import Conta from "./pages/conta";
import DadosPessoais from "./layout/dadosPessoais";


export function ScrollTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}


export default function Rotas() {
    return (
        <HashRouter>
            <ScrollTop/>
            <Routes>
                <Route element={<PaginaPadrao><Outlet/></PaginaPadrao>}>
                    <Route index element={<Home />} />
                    <Route path="lista-de-desejos" element={<Wishlist/>} />
                    <Route path="/conta" element={<Conta><Outlet/></Conta>}>
                        <Route index element={<DadosPessoais/>}/>
                    </Route>
                </Route>

            </Routes>
        </HashRouter>
    );
}
