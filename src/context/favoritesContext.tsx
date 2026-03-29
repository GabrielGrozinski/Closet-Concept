import { createContext, useContext, useState, type ReactNode } from "react";

interface FavoritosType {
    id: string;
    setId: (value: string) => void;
    menuAberto: boolean;
    setMenuAberto: (value: boolean) => void;
}

interface Props {
    children: ReactNode;
}

export const favorites_context = createContext<FavoritosType>({} as FavoritosType);

export default function FavoritosContext({children}: Props) {
    const [id, setId] = useState('');
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <favorites_context.Provider 
            value={{
                id,
                setId,
                menuAberto,
                setMenuAberto
            }}
        >
            {children}
        </favorites_context.Provider>
    );
}

export const contextFavoritos = () => {
    return useContext(favorites_context);
}