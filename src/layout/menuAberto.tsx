import { contextFavoritos } from "../context/favoritesContext";
import { ChevronDown } from "lucide-react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";



type produtoExtra = {subtitulo: string, linkSubtitulo: string;}

interface Produtos {
    nome: string
    maisProdutos: boolean;
    quantProdutosExtra?: number;
    produtosExtra?: produtoExtra[];
    link?: string;
}

export default function MenuAberto() {
    const navigate = useNavigate();
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
    ];

    return (
        <div className={`z-20 transition-all duration-400 min-w-full ${menuAberto ? 'max-h-screen min-h-screen' : 'max-h-0 min-h-0'} bg-[rgba(250,249,247)] flex flex-col overflow-hidden`}>

            <section className={`transition-all duration-200 relative ${menuAberto ? 'duration-0' : 'opacity-0'}`}>
                
                <main className="max-h-[75vh] overflow-y-auto">
                    <article className="py-3 border-b border-b-gray-800/15 font-bold text-lg text-center pl-2 text-slate-800">
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
                                className="active:bg-blue-100 transition-colors duration-100 py-3 relative border-y border-y-gray-800/15 font-[Montserrat] text-lg pl-2 text-slate-800/80">
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

                </main>

                <footer className="fixed bottom-4 py-2 min-w-full flex justify-center gap-4">
                    <button 
                    onClick={() => {
                        setMenuAberto(false);
                        navigate('/login');
                    }}
                    className="active:scale-98 transition-all duration-100 text-center p-2 min-w-30 rounded-2xl cursor-pointer border font-medium bg-zinc-800 text-white border-slate-800/30">Login</button>

                    <button 
                    onClick={() => {
                        setMenuAberto(false);
                        navigate('/login/cadastro');
                    }} 
                    className="active:scale-98 transition-all duration-100 p-2 min-w-30 text-center rounded-2xl text-white bg-[#6B4E37] font-medium cursor-pointer">Cadastro</button>
                </footer>


            </section>
        </div>
    )
}