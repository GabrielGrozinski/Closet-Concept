import { createContext, useContext, useState, type ReactNode} from "react";

interface FavoritosType {
    id: string;
    setId: (value: string) => void;
    menuAberto: boolean;
    setMenuAberto: (value: boolean) => void;
    mostrarLogin: boolean;
    setMostrarLogin: (v: boolean) => void;
    mostrarFiltro: boolean;
    setMostrarFiltro: (v: boolean) => void;
    mostrarFiltroModal: boolean;
    setMostrarFiltroModal: (v: boolean) => void;
    mostrarSearch: boolean;
    setMostrarSearch: (v: boolean) => void;
    search: string;
    setSearch: (v: string) => void;
    
}

interface Props {
    children: ReactNode;
}

export const favorites_context = createContext<FavoritosType>({} as FavoritosType);

export default function FavoritosContext({children}: Props) {
    const [id, setId] = useState('');
    const [menuAberto, setMenuAberto] = useState(false);
    const [mostrarLogin, setMostrarLogin] = useState(false);
    const [search, setSearch] = useState('');
    const [mostrarSearch, setMostrarSearch] = useState(false);
    const [mostrarFiltro, setMostrarFiltro] = useState(true);
    const [mostrarFiltroModal, setMostrarFiltroModal] = useState(false);



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
                setMostrarFiltro,
                mostrarFiltroModal,
                setMostrarFiltroModal,
                mostrarSearch,
                setMostrarSearch,
                search,
                setSearch
            }}
        >
            {children}
        </favorites_context.Provider>
    );
}

export const contextFavoritos = () => {
    return useContext(favorites_context);
}
