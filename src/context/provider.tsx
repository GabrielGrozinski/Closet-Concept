import type { ReactNode } from "react";
import FavoritosContext from "./favoritesContext";
import AuthContext from "./authContext";
import CartContext from "./cartContext";

interface Props {
    children: ReactNode;
}

export default function Provider({children}: Props) {
    return (
        <FavoritosContext>
            <CartContext>
                <AuthContext>
                {children}
                </AuthContext>
            </CartContext>
        </FavoritosContext>
    )
}