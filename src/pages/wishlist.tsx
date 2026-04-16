import { useEffect, useState } from "react";
import CardProduto from "../components/produtos";
import { contextFavoritos } from "../context/favoritesContext";
import { contextAuth } from "../context/authContext";
import { supabase } from "../auth/supabase-client";

type ItensBase = {
    id: string;
    nome: string;
    imagem: string;
    precoOriginal: number;
    precoAtual: number;
    tamanho: string;
    cor: string;
}

export default function Wishlist() {
    const {user, session} = contextAuth();
    const {buscarFavoritos, setMostrarLogin} = contextFavoritos();
    const [itens, setItens] = useState<ItensBase[]>([]);
    const [hasFavoritos, setHasFavoritos] = useState(false);

    useEffect(() => {
        if (!session) {
            setMostrarLogin(true);
        }
    }, [session]);

    useEffect(() => {
        if (!user) return;
        const handleFavoritos = async () => {
            const favoritos = await buscarFavoritos(user);
            if (!favoritos || favoritos.length === 0) return setHasFavoritos(false);

            const {data, error} = await supabase
                .from('produtos')
                .select('*')
                .in('id', favoritos);
            
            if (error) {
                console.error('Houve um erro', error);
                return setHasFavoritos(false);
            }

            console.log('data', data);

            setItens(data);
            setHasFavoritos(true);
        };

        handleFavoritos();
    }, []);

    return (
        <div className="min-h-screen bg-[rgba(250,249,247)] pt-4">
            <h1 className="font-[Poppins] font-medium sm:text-2xl text-xl sm:ml-34 text-center sm:text-left mb-4">Lista de Desejos</h1>
            {hasFavoritos ?
            <CardProduto itens={itens}/>
            :
            <h1 onClick={() => setMostrarLogin(true)} className="text-center font-bold font-[Poppins] text-xl mt-[35vh]">
                Adicione algum produto à sua lista de favoritos
            </h1>
            }
            
        </div>
    )
}