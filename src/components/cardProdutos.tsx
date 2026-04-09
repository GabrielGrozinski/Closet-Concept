import { Heart, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { contextCart } from "../context/cartContext";
import { contextAuth } from "../context/authContext";
import { supabase } from "../auth/supabase-client";


type ItensCarrinho = {
    id: string;
    nome: string;
    imagem: string;
    precoOriginal: number;
    precoAtual: number;
    quantidade: number;
}

interface Props {
    itens: ItensCarrinho[];
}


export default function CardProduto({itens}: Props) {
    const { session, user } = contextAuth();
    const {adicionarItemCarrinho} = contextCart();
    const [itemEscolhido, setItemEscolhido] = useState('');
    const [favoritos, setFavoritos] = useState(['']);

    useEffect(() => {
        if (!user) return;
        buscarFavoritos()
    }, [user]);

    async function buscarFavoritos() {
        
        const {data, error} = await supabase
            .from('usuarios')
            .select('favoritos')
            .eq('id', user?.id);

        const tags: string[] = data ? data[0].favoritos : [];
        
        if (error) {
            console.error('Houve um erro', error);
        }

        setFavoritos(tags);
    }

    async function adicionarFavoritos(id: string) {
        if (!user) return;
        if (favoritos.includes(id)) return;
        const newFavoritos = [...favoritos, id];

        const {error} = await supabase
            .from('usuarios')
            .upsert({
                favoritos: newFavoritos
            });

        if (error) {
            console.error('Houve um erro', error);
            return;
        }

        setFavoritos(newFavoritos);
    }

    async function removerFavoritos(id: string) {
        if (!user) return;
        if (!favoritos.includes(id)) return;
        const newFavoritos = favoritos.filter((f) => f !== id);

        const {error} = await supabase
            .from('usuarios')
            .upsert({
                favoritos: newFavoritos
            });

        if (error) {
            console.error('Houve um erro', error);
            return;
        }

        setFavoritos(newFavoritos);
    }


    return (
        <>
            {itens.map((item) => 
                <article 
                onMouseEnter={() => setItemEscolhido(item.id.toString())}
                onMouseLeave={() => setItemEscolhido('')} 
                onClick={() => setItemEscolhido(item.id.toString())} 
                className={`grid grid-rows-[280px_auto] min-w-62 max-w-62 overflow-hidden gap-4 shadow-lg border border-[#22222212] cursor-pointer transition-all duration-300 rounded-md relative ${itemEscolhido === item.id.toString() ? 'max-h-117 min-h-117' : 'max-h-104 min-h-104'}`}>
                    <img className="min-h-70 max-h-70 min-w-62 object-cover" src={item.imagem} alt="" />

                    <span onClick={() => {
                        if (!session) return;

                        if (favoritos.includes(item.id)) {
                            removerFavoritos(item.id)
                        } else {
                            adicionarFavoritos(item.id);
                        }
                    }} 
                    className="absolute top-1.5 right-1.5 bg-white p-2 rounded-full">
                        <Heart className="text-red-400 text-shadow-[1px_1px_1px_#0000008a]" fill={favoritos.includes(item.id) ? "currentColor" : "none"} size={24}/>
                    </span>

                    <div className="flex flex-col py-0 font-[Poppins] text-xs px-6">
                        <h1 className="mb-2 font-light text-center text-sm">{item.nome}</h1>

                        <span className="flex justify-center gap-[5%] min-w-full items-center mb-2">
                            {item.precoOriginal &&
                            <h2 className="text-lg font-light line-through translate-y-[1.5px]">
                                {item.precoOriginal?.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            </h2>
                            }

                            <h2 className="font-bold text-2xl">
                                {item.precoAtual.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            </h2>
                        </span>

                        <h3 className="font-medium text-center mb-1">
                            {(item.precoAtual * 0.95).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                            <span className="ml-1">com Pix</span>
                        </h3>

                        <h3 className="font-medium text-center">
                            3x de {(item.precoAtual/3).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                            <span className="ml-1">sem juros</span>
                        </h3>

                        <div 
                            className={`grid grid-cols-2 transition-all duration-300 items-center justify-items-center gap-2 ${itemEscolhido === item.id.toString() ? 'mt-4 min-h-10 max-h-10' : 'mt-2 max-h-0 min-h-0'} overflow-hidden`}> 

                            <button onClick={() => adicionarItemCarrinho(item)} className="min-w-full bg-[#f8ebdc] border border-black/6 p-2 rounded-xl text-zinc-900 text-shadow-lg flex items-center justify-center transition-colors duration-200 hover:opacity-80 cursor-pointer min-h-8 max-h-8"> 
                                <ShoppingCart size={18}/> 
                            </button> 
                            
                            <button className="min-w-full bg-[#222222] p-2 rounded-xl text-white font-[Poppins] font-bold text-shadow-lg transition-colors duration-200 hover:opacity-90 cursor-pointer min-h-8 max-h-8"> 
                                Visualizar 
                            </button> 
                        </div>
                    </div>
                </article>
            )}
        </>
    )
}