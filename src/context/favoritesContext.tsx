import { createContext, useContext, useState, type ReactNode } from "react";

interface FavoritosType {
    id: string;
    setId: (value: string) => void;
}

interface Props {
    children: ReactNode;
}

export const favorites_context = createContext<FavoritosType>({} as FavoritosType);

export default function FavoritosContext({children}: Props) {
    const [id, setId] = useState('');

    return (
        <favorites_context.Provider 
            value={{
                id,
                setId
            }}
        >
            {children}
        </favorites_context.Provider>
    );
}

export const contextFavoritos = () => {
    return useContext(favorites_context);
}