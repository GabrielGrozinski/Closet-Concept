import type { ReactNode } from "react";
import FavoritosContext from "./favoritesContext";

interface Props {
    children: ReactNode;
}

export default function Provider({children}: Props) {
    return (
        <FavoritosContext>
            {children}
        </FavoritosContext>
    )
}