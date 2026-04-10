import { X, Menu, Search, ChevronRight, MoveRight } from "lucide-react";
import { contextFavoritos } from "../context/favoritesContext";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { contextCart } from "../context/cartContext";
import { contextAuth } from "../context/authContext";


const produtos = [
{
    id: 1,
    badge: "Novo",
    favorite: true,
    img: "https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?auto=format&fit=crop&w=600&q=80",
    rating: "★★★★☆",
    ratingValue: 4.9,
    title: "Colar Ouro Venezia",
    category: "Joias",
    price: "R$ 2.890,00",
},
{
    id: 2,
    badge: "Destaque",
    favorite: true,
    img: "https://images.unsplash.com/photo-1767921804162-9c55a278768d?auto=format&fit=crop&w=600&q=80",
    rating: "★★★★★",
    ratingValue: 5,
    title: "Anel Diamante Étoile",
    category: "Joias",
    price: "R$ 4.590,00",
},
{
    id: 3,
    badge: null,
    favorite: true,
    img: "https://images.unsplash.com/photo-1758995116121-60090f17ae20?auto=format&fit=crop&w=600&q=80",
    rating: "★★★★☆",
    ratingValue: 4.8,
    title: "Pulseira Aurora",
    category: "Joias",
    price: "R$ 1.690,00",
},
{
    id: 1,
    badge: "Novo",
    favorite: true,
    img: "https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?auto=format&fit=crop&w=600&q=80",
    rating: "★★★★☆",
    ratingValue: 4.9,
    title: "Colar Ouro Venezia",
    category: "Joias",
    price: "R$ 2.890,00",
},
{
    id: 2,
    badge: "Destaque",
    favorite: true,
    img: "https://images.unsplash.com/photo-1767921804162-9c55a278768d?auto=format&fit=crop&w=600&q=80",
    rating: "★★★★★",
    ratingValue: 5,
    title: "Anel Diamante Étoile",
    category: "Joias",
    price: "R$ 4.590,00",
},
{
    id: 3,
    badge: null,
    favorite: true,
    img: "https://images.unsplash.com/photo-1758995116121-60090f17ae20?auto=format&fit=crop&w=600&q=80",
    rating: "★★★★☆",
    ratingValue: 4.8,
    title: "Pulseira Aurora",
    category: "Joias",
    price: "R$ 1.690,00",
},
{
    id: 1,
    badge: "Novo",
    favorite: true,
    img: "https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?auto=format&fit=crop&w=600&q=80",
    rating: "★★★★☆",
    ratingValue: 4.9,
    title: "Colar Ouro Venezia",
    category: "Joias",
    price: "R$ 2.890,00",
},
{
    id: 2,
    badge: "Destaque",
    favorite: true,
    img: "https://images.unsplash.com/photo-1767921804162-9c55a278768d?auto=format&fit=crop&w=600&q=80",
    rating: "★★★★★",
    ratingValue: 5,
    title: "Anel Diamante Étoile",
    category: "Joias",
    price: "R$ 4.590,00",
},
{
    id: 3,
    badge: null,
    favorite: true,
    img: "https://images.unsplash.com/photo-1758995116121-60090f17ae20?auto=format&fit=crop&w=600&q=80",
    rating: "★★★★☆",
    ratingValue: 4.8,
    title: "Pulseira Aurora",
    category: "Joias",
    price: "R$ 1.690,00",
},
];


interface Props {
    mostrarSearch: boolean;
    setMostrarSearch: (v: boolean) => void;
    topicoAtual: Topico | null;
    setTopicoAtual: (v: Topico | null) => void;
    mostrarCarrinho: boolean;
    setMostrarCarrinho: (v: boolean) => void;
    setMostrarLogin: (v: boolean) => void;
}

type produtoExtra = {subtitulo: string, linkSubtitulo: string;}
type Topico = {
nome: string;
navigate: string;
produtosExtra?: produtoExtra[];
imagem?: string;
};


export default function HeaderFixo({mostrarSearch, setMostrarSearch, topicoAtual, setTopicoAtual, setMostrarCarrinho, setMostrarLogin}: Props) {
    const {carrinhoQuantidade} = contextCart();
    const {user} = contextAuth();
    const {setMenuAberto, menuAberto} = contextFavoritos();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [cliqueForaSearch, setCliqueForaSearch] = useState(false);
    
    
    const produtosFiltrados = useMemo(() => {

        const produtosComSearch = produtos.filter((produto) => formatarString(produto.title).includes(formatarString(search)));

        if (produtosComSearch.length === 0 || !search || !cliqueForaSearch) return false;

        return produtosComSearch;

    }, [search, cliqueForaSearch]);

    const topicos: Topico[] = [
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

    function formatarString(texto: string) {
        return texto
            .toLocaleLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "");
    }


    return (
        <>

            <header onMouseLeave={() => setTopicoAtual(null)} className={`fixed left-0 top-7 right-0 z-999 bg-[rgba(250,249,247)] transition-all duration-300 lg:pb-1 lg:pt-0 lg:min-h-19 lg:max-h-20 max-h-30 min-h-15 ${mostrarSearch ? 'pb-4' : 'pb-0'} xl:border-b xl:border-b-[rgba(147,135,117,0.1)]`}>

                <div className="max-w-360 mx-auto lg:px-6 lg:min-h-20 lg:flex items-center lg:justify-between grid grid-cols-[12%_1fr_20%] min-[500px]:grid-cols-[20%_1fr_20%] lg:grid-rows-1 grid-rows-[1fr_auto] pt-2 justify-items-center px-[5%] gap-4 lg:gap-2">

                    {/* Mobile Menu */}
                    <button onClick={() => setMenuAberto(!menuAberto)} className="items-center justify-self-start justify-center min-w-full lg:hidden -mb-2 lg:mb-0">
                            <Menu className="min-h-7 min-w-7 max-h-7 max-w-7" />
                    </button>

                    {/* Logo */}
                    <div onClick={() => navigate('/')} className="flex items-center lg:justify-stretch justify-center gap-3 text-[#6B4E37] cursor-pointer justify-self-center min-w-full lg:min-w-9 -mb-1 lg:mb-0 xl:-mt-2">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"></circle>
                            <text
                            x="20"
                            y="27"
                            textAnchor="middle"
                            fill="currentColor"
                            fontSize="20"
                            fontFamily="serif"
                            fontWeight="300"
                            >
                            C
                            </text>
                        </svg>

                        <span className="font-[Cormorant_Garamond] text-[20px] font-light tracking-[-0.3px]">
                            Closet Concept
                        </span>
                    </div>

                    {/* Nav */}
                    <nav className={`flex-1 px-[1%] relative row-2 lg:row-1 lg:max-h-20 max-h-10 lg:min-h-20 lg:min-w-0 col-span-full min-w-full ${mostrarSearch ? 'lg:px-[10%]' : ''} -mb-1 lg:mb-0 xl:-mt-2`}>

                        <section className={`hidden top-22 fixed left-0 right-0 xl:top-0 xl:absolute lg:flex flex-wrap transition-all duration-150 justify-center px-4 gap-8 min-h-20 max-h-20 items-center ${mostrarSearch ? 'xl:pointer-events-none xl:opacity-0 xl:-left-1/2' : 'xl:left-0 xl:right-0 xl:opacity-100 xl:pointer-events-auto'}`}>
                            {topicos.map((topico, index) =>
                                <div className="min-h-20 flex items-center relative" key={index}>
                                    <h1 onMouseEnter={() => (topico.nome === 'Todos os Produtos') ? setTopicoAtual(null) : setTopicoAtual(topico)} className={`tracking-wider group relative font-[Poppins] transition-colors duration-300 after:transition-all after:duration-300 font-medium text-sm cursor-pointer text-[#2C2C2C] hover:text-[#c79d62] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] after:bg-[#ccb595] hover:after:w-full after:w-0 ${topicoAtual?.nome === topico.nome ? "text-[#c79d62] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] after:bg-[#ccb595] after:w-full" : "after:w-0"}`}>
                                        {topico.nome}
                                    </h1>
                                </div>
                            )}

                            <div onMouseLeave={() => setTopicoAtual(null)} className={`fixed top-27 overflow-hidden ${topicoAtual ? 'min-h-112 max-h-112 min-w-140 max-w-140 pointer-events-auto opacity-100' : 'min-h-0 max-h-0 pointer-events-none opacity-0'}`}>
                                <section className={`fixed top-29 rounded-xl  transition-all duration-300 grid grid-cols-2 bg-[rgba(250,249,247)] left-1/2 -translate-x-1/2 ${topicoAtual ? 'min-h-112 max-h-112 min-w-140 max-w-140 pointer-events-auto' : 'min-h-0 max-h-0 pointer-events-none'} shadow-xl border border-black/4 overflow-hidden`}>
                                    {topicoAtual &&
                                    <>
                                        <article className={`flex flex-col justify-between m-4 my-5 transition-all duration-300 ${topicoAtual ? 'opacity-100' : 'opacity-0'}`}>
                                            <div className="flex flex-col text-lg font-medium font-[Poppins]">
                                                <span className="py-2 border-b text-[#292115] border-b-slate-400/10 mb-4 uppercase min-w-full cursor-pointer tracking-[1px]">
                                                    {topicoAtual?.nome}
                                                </span>
                                                {topicoAtual?.produtosExtra?.map((topico, index) =>
                                                    <p key={index} className="transition-all duration-200 text-[#292621] tracking-[0.2px] hover:font-medium font-[Poppins] text-sm font-light my-0.5 cursor-pointer">
                                                        {topico.subtitulo}
                                                    </p>
                                                )}
                                            </div>

                                            <div className={`min-w-full pt-2 border-t border-t-slate-400/10 transition-all duration-600 ${topicoAtual ? 'opacity-100' : 'opacity-0'}`}>
                                                <button className="flex cursor-pointer transition-colors duration-200 hover:bg-[#f5e9d9] justify-center items-center p-2 bg-[#efdcc1] text-[#534b3f] font-medium rounded-lg">
                                                    Explorar Coleção
                                                    <MoveRight size={20} className="ml-2"/>
                                                </button>
                                            </div>
                                        </article>

                                        <img className={`max-w-[96%] min-w-[96%] mr-4 mb-4 my-5 rounded-lg transition-all duration-600 ${topicoAtual ? 'max-h-100 min-h-100 opacity-100' : 'max-h-0 min-h-0 opacity-0'} object-cover`} src={topicoAtual?.imagem} alt="" />
                                    </>
                                    }
                                </section>
                            </div>
                        </section>

                        <div className={`transition-all duration-0 lg:duration-150 relative xl:max-h-20 xl:min-h-20 ${mostrarSearch ? 'xl:translate-x-0 opacity-100 lg:opacity-0 xl:opacity-100 pointer-events-auto xl:relative xl:duration-300' : 'xl:translate-x-20 opacity-0 lg:opacity-100 xl:opacity-0 pointer-events-none xl:absolute max-h-0 min-h-0 xl:duration-0'} lg:min-h-20 lg:max-h-20 flex items-center`}>

                            <Search className="absolute left-3 top-1/2 -translate-y-[50%] text-zinc-500" size={20}/>
                            <input
                                onChange={(e) => setSearch(e.currentTarget.value)}
                                type="text"
                                name=""
                                id=""
                                onFocus={() => setCliqueForaSearch(true)}
                                onBlur={() => setCliqueForaSearch(false)}
                                placeholder="Buscar produtos"
                                className="border border-slate-800 outline-0 min-w-full min-h-10 rounded-lg px-9.5 lg:px-10 placeholder:text-zinc-500"
                            />
                            <X onClick={() => setMostrarSearch(false)} className={`hidden xl:block absolute -right-8 top-1/2 -translate-y-[45%] text-zinc-500 cursor-pointer transition-all duration-0 ${mostrarSearch ? 'opacity-100' : 'opacity-0'}`} size={26}/>
                        </div>

                        <section className={`bg-white relative transition-all duration-200 shadow-xl overflow-hidden rounded-md border border-slate-800/10 ${produtosFiltrados ? 'max-h-90 min-h-0 overflow-y-auto opacity-100 pointer-events-auto' : 'min-h-0 max-h-0 opacity-0 pointer-events-none'}`}>
                            {produtosFiltrados &&
                            produtosFiltrados.map((produto) =>
                                    <div key={produto.id} className="flex transition-color duration-200 gap-2 min-h-24 max-h-24 px-4 py-4 justify-items-start cursor-pointer border-b-slate-800/20 border-b hover:bg-neutral-200">
                                        <img src={produto.img} alt="" className="min-h-full max-h-full min-w-18 max-w-18 col-1" />
                                        <div className="flex col-2 flex-1 text-left relative items-center justify-between">
                                            <span className="text-neutral-800 text-[14px]">
                                                <h1 className="font-medium">{produto.title}</h1>
                                                <h2>{produto.price} | Até 3x sem juros</h2>
                                            </span>

                                            <ChevronRight/>
                                        </div>
                                    </div>
                            )}

                            <div className="flex sticky min-w-full items-center justify-center min-h-12 my-4">
                                <button className={`bg-zinc-800 font-mono leading-relaxed shadow-lg min-w-24 rounded-xl p-2 px-5 font-medium text-white cursor-pointer transition-all hover:bg-zinc-700 ${produtosFiltrados ? 'opacity-100 duration-100' : 'duration-0 opacity-0'}`}>
                                    VER TODOS OS RESULTADOS
                                </button>
                            </div>
                        </section>
                    </nav>

                    {/* Actions */}
                    <div className="justify-self-end flex items-center lg:gap-6 gap-2 scale-80 -mr-[10%] sm:scale-100 sm:mr-0">

                        {/* Search */}
                        <div 
                            onClick={() => {
                                setMostrarSearch(!mostrarSearch);
                            }} 
                            className="flex flex-col items-center justify-center lg:hidden xl:flex">
                            <button className="lg:h-14 gap-1 lg:w-14 flex flex-col items-center justify-center text-[#2C2C2C] hover:text-[#C4B5A0] transition-colors cursor-pointer">
                                <span>
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="m21 21-4.34-4.34"></path>
                                    <circle cx="11" cy="11" r="8"></circle>
                                    </svg>
                                </span>

                                <p className="-mt-1 text-[13px] text-neutral-700 hidden lg:block">Buscar</p>
                            </button>
                        </div>

                        {/* Heart */}
                        <div onClick={() => navigate('/lista-de-desejos')} className="flex lg:flex-col items-center justify-center">
                            <button className="lg:h-14 gap-1 lg:w-14 flex flex-col items-center justify-center text-[#2C2C2C] hover:text-[#C4B5A0] transition-colors cursor-pointer">
                                <span>
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                    </svg>
                                </span>

                                <p className="-mt-1 text-[13px] text-neutral-700 hidden lg:block">Favoritos</p>
                            </button>
                        </div>

                        {/* User */}
                        <div onClick={() => user ? navigate('/conta') : setMostrarLogin(true)} className="lg:flex flex-col hidden items-center justify-center">
                            <button className="h-14 gap-1 w-14 lg:flex flex-col items-center justify-center text-[#2C2C2C] hover:text-[#C4B5A0] transition-colors hidden cursor-pointer">
                                <span>
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </span>

                                <p className="-mt-1 text-[13px] text-neutral-700">Usuário</p>
                            </button>
                        </div>

                        {/* Cart */}
                        <div onClick={() => setMostrarCarrinho(true)} className="flex lg:flex-col items-center justify-center">
                            <button className="relative lg:h-14 gap-1 lg:w-14 flex flex-col items-center justify-center text-[#2C2C2C] hover:text-[#C4B5A0] transition-colors min-w-full lg:min-w-9 cursor-pointer">
                                <span>
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                    <path d="M3 6h18"></path>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                    </svg>
                                </span>

                                <span className="absolute -top-1 -right-1 bg-[#C4B5A0] text-[#FAF9F7] text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                                {carrinhoQuantidade}
                                </span>

                                <p className="hidden lg:block -mt-1 text-[13px] text-neutral-700">Carrinho</p>
                            </button>
                        </div>

                    </div>
                </div>

            </header>

            <header className="bg-[rgba(250,249,247)] hidden lg:block xl:hidden fixed z-20 top-26.5 lg:min-h-12 lg:max-h-12 min-h-6 max-h-6 left-0 right-0 border-b border-[rgba(147,135,117,0.3)]">

            </header>

        </>
    )
}
