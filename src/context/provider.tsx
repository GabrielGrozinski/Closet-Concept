import type { ReactNode } from "react";
import FavoritosContext from "./favoritesContext";
import AuthContext from "./authContext";

interface Props {
    children: ReactNode;
}

export default function Provider({children}: Props) {
    return (
        <FavoritosContext>
            <AuthContext>
            {children}
            </AuthContext>
        </FavoritosContext>
    )
}