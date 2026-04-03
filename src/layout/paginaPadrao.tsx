import type { ReactNode } from "react";
import HeaderFixo from "./headerFixo";
import FooterFixo from "./footerFixo";
import { contextFavoritos } from "../context/favoritesContext";
import { useEffect, useState } from "react";


interface Props {
    children: ReactNode;
}

export default function PaginaPadrao({children}: Props) {
    const [largura, setLargura] = useState(window.innerWidth);
    const {menuAberto} = contextFavoritos();
    const root = window.document.documentElement;
    root.style.marginTop = largura < 1024 ? '150px' : '108px';

    useEffect(() => {
        root.style.overflowY = menuAberto ? 'hidden' : 'auto';
    }, [menuAberto]);


    useEffect(() => {
        setLargura(window.innerWidth);
    }, [window.innerWidth]);

    return (
        <>

            <HeaderFixo />

            {children}

            <FooterFixo />

        </>
    );
}
