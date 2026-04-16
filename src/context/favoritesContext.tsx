import { createContext, useContext, useState, type ReactNode} from "react";
import { supabase } from "../auth/supabase-client";
import type { User } from "@supabase/supabase-js";

type Cores = {
    nome: string;
    quant: number;
    cor: string;
}

type Tamanho = {
    nome: string;
    quant: number;
}

interface FavoritosType {
    ordem: string;
    setOrdem: (v: string) => void;
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
    cores: Cores[];
    setCores: (v: Cores[]) => void;
    tamanho: Tamanho[];
    setTamanho: (v: Tamanho[]) => void;
    buscarFavoritos: (u: User) => Promise<string[]>;
}

interface Props {
    children: ReactNode;
}

export const favorites_context = createContext<FavoritosType>({} as FavoritosType);

export default function FavoritosContext({children}: Props) {
    const [ordem, setOrdem] = useState('');
    const [menuAberto, setMenuAberto] = useState(false);
    const [mostrarLogin, setMostrarLogin] = useState(false);
    const [search, setSearch] = useState('');
    const [mostrarSearch, setMostrarSearch] = useState(false);
    const [mostrarFiltro, setMostrarFiltro] = useState(true);
    const [mostrarFiltroModal, setMostrarFiltroModal] = useState(false);
    const [cores, setCores] = useState<Cores[]>([
        {
            nome: 'Preto',
            quant: 0,
            cor: '#000000'
        },
        {
            nome: 'Verde',
            quant: 0,
            cor: '#008000'
        },
        {
            nome: 'Vermelho',
            quant: 0,
            cor: '#FF0000'
        },
        {
            nome: 'Azul',
            quant: 0,
            cor: '#0000FF'
        },
        {
            nome: 'Branco',
            quant: 0,
            cor: '#FFFFFF'
        },
        {
            nome: 'Melancia',
            quant: 0,
            cor: '#FC6C85'
        },
        {
            nome: 'Roxo',
            quant: 0,
            cor: '#800080'
        },
        {
            nome: 'Dourado',
            quant: 0,
            cor: '#FFD700'
        },
        {
            nome: 'Rosa',
            quant: 0,
            cor: '#FFC0CB'
        },
        {
            nome: 'Vinho',
            quant: 0,
            cor: '#722F37'
        },
    ]);
    const [tamanho, setTamanho] = useState<Tamanho[]>([
        {
            nome: 'XL',
            quant: 0,
        },
        {
            nome: 'M',
            quant: 0,
        },
        {
            nome: 'G',
            quant: 0,
        },
        {
            nome: 'GG',
            quant: 0,
        },
        {
            nome: 'MM',
            quant: 0,
        },
        {
            nome: 'P',
            quant: 0,
        },
    ]);

    async function buscarFavoritos(user: User) {
        
        const {data, error} = await supabase
            .from('usuarios')
            .select('favoritos')
            .eq('id', user?.id);

        const tags: string[] = data ? data[0].favoritos : [];
        
        if (error) {
            console.error('Houve um erro', error);
        }

        return tags ?? [];
    }


    return (
        <favorites_context.Provider 
            value={{
                ordem,
                setOrdem,
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
                setSearch,
                cores,
                setCores,
                tamanho,
                setTamanho,
                buscarFavoritos
            }}
        >
            {children}
        </favorites_context.Provider>
    );
}

export const contextFavoritos = () => {
    return useContext(favorites_context);
}
