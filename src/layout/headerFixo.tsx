import { X, Menu, Search, ChevronRight } from "lucide-react";
import { contextFavoritos } from "../context/favoritesContext";
import MenuAberto from "./menuAberto";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";


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

export default function HeaderFixo() {
    const {setMenuAberto, menuAberto} = contextFavoritos();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [cliqueForaSearch, setCliqueForaSearch] = useState(false);
    const [mostrarSearch, setMostrarSearch] = useState(false);
    
    const produtosFiltrados = useMemo(() => {

        const produtosComSearch = produtos.filter((produto) => formatarString(produto.title).includes(formatarString(search)));

        if (produtosComSearch.length === 0 || !search || !cliqueForaSearch) return false;

        return produtosComSearch;

    }, [search, cliqueForaSearch]);

    type Topico = {
    nome: string;
    navigate: string;
    };

    const topicos: Topico[] = [
    { nome: "Todos os Produtos", navigate: "/" },
    { nome: "Vestidos", navigate: "/joias" },
    { nome: "Acessórios", navigate: "/acessorios" },
    { nome: "Blusas", navigate: "/sobre" },
    { nome: "Calças", navigate: "/roupas" },
    { nome: "Sapatos", navigate: "/sobre" },
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
            <header className="fixed top-0 min-h-7 max-h-7 left-0 right-0 bg-[#C4B5A0] z-20 flex items-center justify-center">
                <h1 className="text-white text-[12px] text-shadow-xs font-medium tracking-widest">FRETE GRÁTIS ATÉ O FIM DE ABRIL</h1>
            </header>

            <header className={`fixed left-0 top-7 right-0 z-21 bg-[rgba(250,249,247)] xl:border-b xl:border-[rgba(147,135,117,0.3)] transition-all duration-300 lg:pb-1 lg:pt-0 lg:min-h-19 lg:max-h-20 max-h-30 ${mostrarSearch ? 'pb-4' : 'pb-0'}`}>

                <div className="max-w-360 mx-auto lg:px-6 lg:min-h-20 lg:flex items-center lg:justify-between grid grid-cols-[auto_1fr_20%] lg:grid-rows-1 grid-rows-[1fr_auto] pt-2 justify-items-center px-4 gap-4 lg:gap-2">

                    {/* Mobile Menu */}
                    <button onClick={() => setMenuAberto(!menuAberto)} className="items-center justify-center min-w-full lg:hidden -mb-1 lg:mb-0">
                        {!menuAberto ?
                            <Menu className="min-h-7 min-w-7 max-h-7 max-w-7" />
                        :
                            <X className="min-h-7 min-w-7 max-h-7 max-w-7"/>
                        }
                    </button>

                    {/* Logo */}
                    <div onClick={() => navigate('/')} className="flex items-center lg:justify-stretch justify-center gap-3 text-[#6B4E37] cursor-pointer justify-self-center lg:min-w-9 -mb-1 lg:mb-0">
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
                    <nav className={`flex-1 px-[1%] relative row-2 lg:row-1 lg:max-h-20 max-h-10 lg:min-h-20 lg:min-w-0 col-span-full min-w-full ${mostrarSearch ? 'lg:px-[10%]' : ''} -mb-1 lg:mb-0`}>

                        <section className={`hidden top-22 fixed left-0 right-0 xl:top-0 xl:absolute lg:flex flex-wrap transition-all duration-150 justify-center px-4 gap-8 min-h-20 max-h-20 items-center ${mostrarSearch ? 'xl:pointer-events-none xl:opacity-0 xl:-left-1/2' : 'xl:left-0 xl:right-0 xl:opacity-100 xl:pointer-events-auto'}`}>
                            {topicos.map((topico, index) => 
                                <h1 key={index} className="tracking-wider relative font-mono cursor-pointer text-[#2C2C2C] 
                                            hover:text-[#c79d62] transition-colors duration-300 
                                            after:content-[''] after:absolute after:left-0 after:bottom-0 
                                            after:w-0 after:h-px after:bg-[#C4B5A0] 
                                            after:transition-all after:duration-300 hover:after:w-full">
                                    {topico.nome}
                                </h1>
                            )}
                        </section>

                        <div className={`transition-all duration-0 lg:duration-150 relative ${mostrarSearch ? 'xl:translate-x-0 opacity-100 xl:pointer-events-auto xl:relative max-h-auto min-h-0' : 'xl:translate-x-full opacity-0 xl:pointer-events-none xl:absolute max-h-0 min-h-0'} lg:min-h-20 lg:max-h-20 flex items-center`}>

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

                        <section className={`bg-white relative transition-all duration-200 shadow-xl overflow-hidden rounded-md border border-slate-800/10 ${produtosFiltrados ? 'max-h-90 min-h-0 overflow-y-auto opacity-100' : 'min-h-0 max-h-0 opacity-0'}`}>
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
                    <div className="flex items-center lg:gap-6 gap-2">

                        {/* Search */}
                        <div 
                            onClick={() => {
                                setMostrarSearch(!mostrarSearch);
                            }} 
                            className="flex flex-col items-center justify-center">
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
                        <div className="flex lg:flex-col items-center justify-center">
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
                        <div className="lg:flex flex-col hidden items-center justify-center">
                            <button onClick={() => navigate('/login')} className="h-14 gap-1 w-14 lg:flex flex-col items-center justify-center text-[#2C2C2C] hover:text-[#C4B5A0] transition-colors hidden cursor-pointer">
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
                        <div className="flex lg:flex-col items-center justify-center">
                            <button className="relative lg:h-14 gap-1 lg:w-14 flex flex-col items-center justify-center text-[#2C2C2C] hover:text-[#C4B5A0] transition-colors min-w-full lg:min-w-9 cursor-pointer">
                                <span>
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                    <path d="M3 6h18"></path>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                    </svg>
                                </span>

                                <span className="absolute -top-1 -right-1 bg-[#C4B5A0] text-[#FAF9F7] text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                                0
                                </span>

                                <p className="hidden lg:block -mt-1 text-[13px] text-neutral-700">Carrinho</p>
                            </button>
                        </div>

                    </div>
                </div>

                <MenuAberto />

            </header>

            <header className="bg-[rgba(250,249,247)] hidden lg:block xl:hidden fixed z-20 top-26.5 lg:min-h-12 lg:max-h-12 min-h-6 max-h-6 left-0 right-0 border-b border-[rgba(147,135,117,0.3)]">

            </header>

        </>
    )
}
