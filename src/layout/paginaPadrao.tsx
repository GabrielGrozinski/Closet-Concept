import type { ReactNode } from "react";
import HeaderFixo from "./headerFixo";
import FooterFixo from "./footerFixo";
import { contextFavoritos } from "../context/favoritesContext";
import MenuAberto from "./menuAberto";
import { useEffect } from "react";


interface Props {
    children: ReactNode;
}

export default function PaginaPadrao({children}: Props) {
    const {menuAberto, setMenuAberto} = contextFavoritos();

    useEffect(() => {
        const root = window.document.documentElement;

        root.style.overflowY = menuAberto ? 'hidden' : 'auto'
    }, [menuAberto]);

    return (
        <>
            {menuAberto &&
                <div onClick={() => setMenuAberto(false)} className="inset-0 fixed bg-black/10 min-h-screen backdrop-blur-[2px] z-998">

                </div>
            }
        
            <HeaderFixo />

            {children}

            <MenuAberto/>

            <FooterFixo />

        </>
    );
}
