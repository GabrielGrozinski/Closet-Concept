import { ShoppingCart } from "lucide-react";
import { useState } from "react";

type ItensCarrinho = {
    id: number;
    nome: string;
    imagem: string;
    precoOriginal?: number;
    precoAtual: number;
    quantidade: number;
}

interface Props {
    itens: ItensCarrinho[];
}


export default function CardProduto({itens}: Props) {

    const [itenEscolhido, setItemEscolhido] = useState('');


    return (
        <>
            {itens.map((item) => 
                <article 
                onMouseEnter={() => setItemEscolhido(item.id.toString())}
                onMouseLeave={() => setItemEscolhido('')} 
                onClick={() => setItemEscolhido(item.id.toString())} 
                className={`grid grid-rows-[280px_auto] min-w-62 max-w-62 overflow-hidden gap-4 shadow-lg border border-[#22222212] cursor-pointer transition-all duration-300 rounded-md ${itenEscolhido === item.id.toString() ? 'max-h-117 min-h-117' : 'max-h-104 min-h-104'}`}>
                    <img className="min-h-70 max-h-70 min-w-62" src={item.imagem} alt="" />

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
                            className={`grid grid-cols-2 transition-all duration-300 items-center justify-items-center gap-2 ${itenEscolhido === item.id.toString() ? 'mt-4 min-h-10 max-h-10' : 'mt-2 max-h-0 min-h-0'} overflow-hidden`}> 

                            <button className="min-w-full bg-[#f8ebdc] border border-black/6 p-2 rounded-xl text-zinc-900 text-shadow-lg flex items-center justify-center transition-colors duration-200 hover:opacity-80 cursor-pointer min-h-8 max-h-8"> 
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