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
                className={`grid sm:grid-rows-[280px_auto] grid-rows-[180px_auto] sm:min-w-62 sm:max-w-62 min-w-full max-w-full overflow-hidden gap-3 shadow-lg border border-[#22222212] cursor-pointer transition-all duration-300 rounded-md relative ${itemEscolhido === item.id.toString() ? 'sm:max-h-117 sm:min-h-117 min-h-92 max-h-96' : 'sm:max-h-104 sm:min-h-104 min-h-92 max-h-96'}`}>
                    <img className="sm:min-h-70 sm:max-h-70 min-h-45 max-h-45 sm:min-w-62 min-w-[45vw] max-w-[45vw] object-cover" src={item.imagem} alt="" />

                    <span onClick={() => {
                        if (!session) return;

                        if (favoritos.includes(item.id)) {
                            removerFavoritos(item.id)
                        } else {
                            adicionarFavoritos(item.id);
                        }
                    }}
                    className="absolute sm:top-1.5 sm:right-1.5 top-1 right-1 bg-white sm:p-2 p-1 rounded-full cursor-default hover:bg-[#fff6ea]">
                        <Heart className="text-red-400 text-shadow-[1px_1px_1px_#0000008a] max-h-4 max-w-4 sm:max-w-6 sm:max-h-6" fill={favoritos.includes(item.id) ? "currentColor" : "none"}/>
                    </span>

                    <div className="flex flex-col py-0 font-[Poppins] sm:text-xs text-[10px] sm:px-6 px-3">
                        <h1 className="mb-2 font-light text-center sm:text-sm text-[10px]">{item.nome}</h1>

                        <span className="flex sm:flex-row flex-col justify-center gap-[5%] min-w-full items-center mb-2">
                            {item.precoOriginal &&
                            <h2 className="sm:text-lg text-sm font-light line-through sm:translate-y-[1.5px]">
                                {item.precoOriginal?.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            </h2>
                            }

                            <h2 className="font-bold sm:text-2xl text-lg">
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
                            className={`grid sm:grid-cols-2 grid-cols-[25%_1fr] transition-all duration-300 items-center justify-items-center gap-2 ${itemEscolhido === item.id.toString() ? 'sm:mt-4 sm:min-h-10 sm:max-h-10 mt-4' : 'sm:mt-2 sm:max-h-0 sm:min-h-0 mt-4'} overflow-hidden`}> 

                            <button onClick={() => adicionarItemCarrinho(item)} className="min-w-full max-w-full bg-[#f8ebdc] border border-black/6 p-2 sm:rounded-xl rounded-full text-zinc-900 text-shadow-lg flex items-center justify-center transition-colors duration-200 hover:opacity-80 cursor-pointer sm:min-h-8 sm:max-h-8"> 
                                <ShoppingCart className="sm:max-h-4.5 sm:max-w-4.5 max-w-4 max-h-4"/> 
                            </button> 
                            
                            <button className="sm:min-w-full sm:max-w-full min-w-[90%] max-w-[90%] bg-[#222222] sm:p-2 p-1 rounded-xl text-white font-[Poppins] font-bold text-shadow-lg transition-colors duration-200 hover:opacity-90 cursor-pointer min-h-8 max-h-8"> 
                                Visualizar 
                            </button> 
                        </div>
                    </div>
                </article>
            )}
        </>
    )
}