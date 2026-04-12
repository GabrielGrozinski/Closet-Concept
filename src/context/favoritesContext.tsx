import { createContext, useContext, useState, type ReactNode } from "react";

interface FavoritosType {
    id: string;
    setId: (value: string) => void;
    menuAberto: boolean;
    setMenuAberto: (value: boolean) => void;
    mostrarLogin: boolean;
    setMostrarLogin: (v: boolean) => void;
    mostrarFiltro: boolean;
    setMostrarFiltro: (v: boolean) => void;
}

interface Props {
    children: ReactNode;
}

export const favorites_context = createContext<FavoritosType>({} as FavoritosType);

export default function FavoritosContext({children}: Props) {
    const [id, setId] = useState('');
    const [menuAberto, setMenuAberto] = useState(false);
    const [mostrarLogin, setMostrarLogin] = useState(false);
    const [mostrarFiltro, setMostrarFiltro] = useState(false);

    return (
        <favorites_context.Provider 
            value={{
                id,
                setId,
                menuAberto,
                setMenuAberto,
                setMostrarLogin,
                mostrarLogin,
                mostrarFiltro,
                setMostrarFiltro
            }}
        >
            {children}
        </favorites_context.Provider>
    );
}

export const contextFavoritos = () => {
    return useContext(favorites_context);
}