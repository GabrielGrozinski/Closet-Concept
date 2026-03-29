import { contextFavoritos } from "../context/favoritesContext";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";


type produtoExtra = {subtitulo: string, linkSubtitulo: string;}

interface Produtos {
    nome: string
    maisProdutos: boolean;
    quantProdutosExtra?: number;
    produtosExtra?: produtoExtra[];
    link?: string;
}


export default function MenuAberto() {
    const {menuAberto, setMenuAberto} = contextFavoritos();
    const [mostrarProdutos, setMostrarProdutos] = useState<string[]>(['']);

    const produtos: Produtos[] = [
        {
            nome: "Joias",
            maisProdutos: true,
            quantProdutosExtra: 3,
            produtosExtra: [
                {
                    subtitulo: 'Colar',
                    linkSubtitulo: ''
                },
                {
                    subtitulo: 'Brinco',
                    linkSubtitulo: ''
                },
                {
                    subtitulo: 'Pulseira',
                    linkSubtitulo: ''
                }
            ]
        },
        {
            nome: "Vestidos",
            maisProdutos: true,
            quantProdutosExtra: 2,
            produtosExtra: [
                {
                    subtitulo: 'Vestido Curto',
                    linkSubtitulo: ''
                },
                {
                    subtitulo: 'Vestido Longo',
                    linkSubtitulo: ''
                },
            ]
        },
        {
            nome: "Bolsas",
            maisProdutos: false,
            link: ''
        },
        {
            nome: "Sapatos",
            maisProdutos: false,
            link: ''
        },
        {
            nome: "Acessórios",
            maisProdutos: true,
            quantProdutosExtra: 2,
            produtosExtra: [
                {
                    subtitulo: 'Relógio',
                    linkSubtitulo: ''
                },
                {
                    subtitulo: 'Cinto',
                    linkSubtitulo: ''
                },
            ]
        },
        {
            nome: "Lingerie",
            maisProdutos: false,
            link: ''
        },
    ]

    return (
        <div className={`z-999 fixed min-h-screen left-0 top-0 transition-all duration-400 ${menuAberto ? 'min-w-4/5 max-w-4/5 sm:min-w-75 sm:max-w-75' : 'max-w-0 min-w-0'} bg-[#F5F3F0] flex flex-col overflow-hidden overflow-y-auto max-h-screen`}>

            <section className={`transition-all duration-200 ${menuAberto ? 'duration-0' : 'opacity-0'}`}>
                <X onClick={() => setMenuAberto(false)} className="m-2 mb-4 h-8 w-8"/>

                <section className="pb-10">
                    <article className="py-3 border-y border-y-gray-800/15 font-[Montserrat] text-lg pl-2 text-slate-800">
                        Todos os Produtos
                    </article>

                    {produtos.map((produto, index) =>
                        <div key={index}>
                            <article 
                                onClick={() => 
                                mostrarProdutos?.includes(produto.nome) ?
                                    setMostrarProdutos(prev => {
                                        const allProdutos = prev?.filter((p) => p !== produto.nome);
                                        return allProdutos;
                                    })
                                :
                                    setMostrarProdutos(prev => ([...prev, produto.nome]))
                                } 
                                className="py-3 relative border-y border-y-gray-800/15 font-[Montserrat] text-lg pl-2 text-slate-800">
                                {produto.nome}

                                {produto.maisProdutos &&
                                    <ChevronDown  className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${mostrarProdutos.includes(produto.nome) && 'rotate-90'}`}/>
                                }
                            </article>
                            
                            <div className={`transition-all duration-200 ${mostrarProdutos.includes(produto.nome) ? 'min-h-0 max-h-40' : 'max-h-0 min-h-0'} overflow-hidden`}>

                                {produto.produtosExtra?.map((produtoExtra, indexExtra) =>

                                    <article key={indexExtra} className={`bg-[#dbcab3] py-3 relative border-y border-y-gray-800/15 font-[Montserrat] text-lg pl-2 text-slate-800`}>
                                        {produtoExtra.subtitulo}
                                    </article>

                                )}

                            </div>

                        </div>
                        )}

                </section>
            </section>
        </div>
    )
}