import type { ReactNode } from "react";
import HeaderFixo from "./headerFixo";
import FooterFixo from "./footerFixo";


interface Props {
    children: ReactNode;
}

export default function PaginaPadrao({children}: Props) {
    return (
        <>
        
            <HeaderFixo />

            {children}

            <FooterFixo />

        </>
    );
}
