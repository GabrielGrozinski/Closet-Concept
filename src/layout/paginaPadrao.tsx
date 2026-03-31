import type { ReactNode } from "react";
import HeaderFixo from "./headerFixo";
import FooterFixo from "./footerFixo";
import { contextFavoritos } from "../context/favoritesContext";
import { useEffect } from "react";


interface Props {
    children: ReactNode;
}

export default function PaginaPadrao({children}: Props) {
    const {menuAberto} = contextFavoritos();
    const root = window.document.documentElement;
    root.style.marginTop = '70px';

    useEffect(() => {
        root.style.overflowY = menuAberto ? 'hidden' : 'auto';
    }, [menuAberto]);

    return (
        <>

            <HeaderFixo />

            {children}

            <FooterFixo />

        </>
    );
}
