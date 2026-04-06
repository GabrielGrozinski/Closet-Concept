import { contextFavoritos } from "../context/favoritesContext";
import { ChevronDown, Heart, MoveRight, User, X } from "lucide-react";
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
    
    const topicos = [
    { nome: "Todos os Produtos", navigate: "/" },

    { 
        nome: "Vestidos", 
        navigate: "/joias", 
        produtosExtra: [
            { subtitulo: 'Vestido Curto', linkSubtitulo: '' },
            { subtitulo: 'Vestido Longo', linkSubtitulo: '' },
            { subtitulo: 'Vestido Midi', linkSubtitulo: '' },
            { subtitulo: 'Vestido de Festa', linkSubtitulo: '' },
        ],
        imagem: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?q=80&w=687&auto=format&fit=crop'
    },

    { 
        nome: "Acessórios", 
        navigate: "/acessorios",
        produtosExtra: [
            { subtitulo: 'Relógio', linkSubtitulo: '' },
            { subtitulo: 'Cinto', linkSubtitulo: '' },
            { subtitulo: 'Óculos', linkSubtitulo: '' },
            { subtitulo: 'Bolsas', linkSubtitulo: '' },
        ],
        imagem: 'https://images.unsplash.com/photo-1625516152414-8f33eef3d660?q=80&w=764&auto=format&fit=crop'
    },

    { 
        nome: "Blusas", 
        navigate: "/sobre",
        produtosExtra: [
            { subtitulo: 'Blusa Básica', linkSubtitulo: '' },
            { subtitulo: 'Cropped', linkSubtitulo: '' },
            { subtitulo: 'Camisa Social', linkSubtitulo: '' },
            { subtitulo: 'Moletom', linkSubtitulo: '' },
        ],
        imagem: 'https://images.unsplash.com/photo-1598554793905-075f7b355cd9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    { 
        nome: "Calças", 
        navigate: "/roupas",
        produtosExtra: [
            { subtitulo: 'Calça Jeans', linkSubtitulo: '' },
            { subtitulo: 'Calça Social', linkSubtitulo: '' },
            { subtitulo: 'Legging', linkSubtitulo: '' },
            { subtitulo: 'Jogger', linkSubtitulo: '' },
        ],
        imagem: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=687&auto=format&fit=crop'
    },

    { 
        nome: "Sapatos", 
        navigate: "/sobre",
        produtosExtra: [
            { subtitulo: 'Tênis', linkSubtitulo: '' },
            { subtitulo: 'Salto Alto', linkSubtitulo: '' },
            { subtitulo: 'Sandália', linkSubtitulo: '' },
            { subtitulo: 'Bota', linkSubtitulo: '' },
        ],
        imagem: 'https://images.unsplash.com/photo-1632761298168-1b8615e4c3ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    ];
    const [topicoAtual, setTopicoAtual] = useState(topicos[1])

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
        <div className={`z-1000 fixed left-0 top-0 transition-all duration-400 max-h-screen min-h-screen ${menuAberto ? 'min-w-full max-w-full pointer-events-auto' : 'min-w-0 max-w-0 pointer-events-none'} flex flex-col overflow-hidden bg-white`}>

                <header className={`fixed left-0 top-7 z-20 right-0 bg-[rgba(250,249,247)] max-h-30 py-3 transition-all duration-300 ${menuAberto ? 'min-w-full max-w-full' : 'min-w-0 max-w-0'} overflow-hidden min-h-13`}>
                    <div className="max-w-360 mx-auto flex justify-between items-center px-4 gap-4">

                        <X onClick={() => {
                            setMenuAberto(false);
                            setMostrarProdutos(['']);
                            }} className="min-h-7 min-w-7 max-h-7 max-w-7"/>

                        <span className="flex gap-2 text-sm items-center font-[Poppins]">
                            <User size={20} />
                            <a className="underline" onClick={() => {
                                setMenuAberto(false);
                                navigate('/login');
                            }}
                                >Login</a>
                        </span>

                        <span className="flex gap-2 text-sm items-center font-[Poppins]">
                            <Heart size={20} />
                            <a className="underline" href="">Favoritos</a>
                        </span>
                    </div>
                </header>

                <section className={`fixed top-20 left-0 right-0 transition-all duration-300 ${menuAberto ? 'duration-0' : 'opacity-0'}`}>
                    
                    <main className="max-h-[75vh] overflow-y-auto">

                        {produtos.map((produto, index) =>
                            <div key={index} className="py-2">
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
                                    className="active:bg-blue-100 uppercase font-[Poppins] tracking-[1px] transition-colors duration-100 py-3 relative text-[#222222] pl-6">{produto.nome}

                                    {produto.maisProdutos &&
                                        <ChevronDown  className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-150 ${mostrarProdutos.includes(produto.nome) && 'rotate-180'}`}/>
                                    }
                                </article>
                                
                                <div className={`transition-all duration-200 ${mostrarProdutos.includes(produto.nome) ? 'min-h-0 max-h-40' : 'max-h-0 min-h-0'} overflow-hidden`}>

                                    {produto.produtosExtra?.map((produtoExtra, indexExtra) =>

                                        <article key={indexExtra} className={`active:bg-blue-100 transition-colors duration-100 py-3 relative font-[Poppins] text-sm font-light px-10 text-slate-800`}>
                                            {produtoExtra.subtitulo}
                                        </article>

                                    )}

                                </div>

                            </div>
                        )}

                    </main>

                </section>

                <section className={`fixed top-1/2 -translate-y-1/2 rounded-xl transition-all duration-300 grid grid-cols-2 bg-[rgba(250,249,247)] left-1/2 -translate-x-1/2 ${topicoAtual ? 'min-h-80 max-h-80 min-w-full max-w-full pointer-events-auto' : 'min-h-0 max-h-0 pointer-events-none'} shadow-xl border border-black/4 overflow-hidden scale-90`}>
                    {topicoAtual &&
                    <>
                        <article className={`flex flex-col justify-between m-4 my-5 transition-all duration-300 ${topicoAtual ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex flex-col text-lg font-medium font-[Poppins]">
                                <span className="py-2 border-b text-[#292115] border-b-slate-400/10 mb-4 uppercase min-w-full cursor-pointer tracking-[1px]">
                                    {topicoAtual?.nome}
                                </span>
                                {topicoAtual?.produtosExtra?.map((topico, index) =>
                                    <p key={index} className="transition-all duration-200 text-[#292621] tracking-[0.2px] hover:font-medium font-[Poppins] text-xs font-light my-0.75 cursor-pointer">
                                        {topico.subtitulo}
                                    </p>
                                )}
                            </div>

                            <div className={`min-w-full pt-2 border-t border-t-slate-400/10 transition-all duration-600 ${topicoAtual ? 'opacity-100' : 'opacity-0'}`}>
                                <button className="flex cursor-pointer transition-colors duration-200 hover:bg-[#f5e9d9] justify-center items-center p-2 bg-[#efdcc1] text-[#534b3f] font-medium rounded-lg text-xs">
                                    Explorar Coleção
                                    <MoveRight size={20} className="ml-2"/>
                                </button>
                            </div>
                        </article>

                        <img className={`max-w-[96%] min-w-[96%] mr-4 mb-4 my-5 rounded-lg transition-all duration-600 ${topicoAtual ? 'max-h-70 min-h-70 opacity-100' : 'max-h-0 min-h-0 opacity-0'}`} src={topicoAtual?.imagem} alt="" />
                    </>
                    }
                </section>

        </div>
    )
}