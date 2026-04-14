import { Check, X } from "lucide-react";
import { contextFavoritos } from "../context/favoritesContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


type Topico = {
nome: string;
navigate: string;
};


export function FiltrosTopico() {
    const location = useLocation();
    const navigate = useNavigate();
    const pathName = location.pathname.split('/')[1];
    const {mostrarFiltroModal} = contextFavoritos();
    const [filtroProdutos, setFiltroProdutos] = useState<string[]>(() => {
        const filtroEscolhido = localStorage.getItem(`${pathName}_filtro`);
        return filtroEscolhido ? JSON.parse(filtroEscolhido) : [''];
    });
    
    const [maisCategoria, setMaisCategoria] = useState(false);
    const [maisCor, setMaisCor] = useState(false);
    const [maisTamanho, setMaisTamanho] = useState(false);
    const [valorMinimo, setValorMinimo] = useState(() => {
        const filtroEscolhido = localStorage.getItem(`${pathName}_filtro`);
        const todosFiltros: string[] = filtroEscolhido ? JSON.parse(filtroEscolhido) : [];
        const existeValor = todosFiltros.some((f) => f.split('R$').length > 0);
        if (!existeValor) {
            return 0;
        }
        const minimo = (todosFiltros.filter((f) => f.split('R$').length > 0));

        if (minimo[0].split('R$')[0] === 'De ') {
            return Number(minimo[0].split('R$')[1]);
        } else if (minimo[0] === 'Até ') {
            return 0;
        } else if (minimo[0].split(' a ').length > 1) {
            return Number(minimo[0].split(' a ')[0].split('R$')[1]);
        } else {
            return 0;
        }
        
    });

    const [valorMaximo, setValorMaximo] = useState(() => {
       const filtroEscolhido = localStorage.getItem(`${pathName}_filtro`);
        const todosFiltros: string[] = filtroEscolhido ? JSON.parse(filtroEscolhido) : [];
        const existeValor = todosFiltros.some((f) => f.split('R$').length > 0);
        if (!existeValor) {
            return 0;
        }
        const minimo = (todosFiltros.filter((f) => f.split('R$').length > 0));

        if (minimo[0].split('R$')[0] === 'De ') {
            return 0;
        } else if (minimo[0].split('R$')[0] === 'Até ') {
            return Number(minimo[0].split('R$')[1]);
        } else if (minimo[0].split(' a ').length > 1) {
            return Number(minimo[0].split(' a ')[1].split('R$')[1]);
        } else {
            return 0;
        }
        
    });

    useEffect(() => {
        localStorage.setItem(`${pathName}_filtro`, JSON.stringify(filtroProdutos));
    }, [filtroProdutos, pathName]);

    const topicos: Topico[] = [
        { 
            nome: "Vestidos", 
            navigate: "/joias", 
        },

        { 
            nome: "Acessórios", 
            navigate: "/acessorios",
        },

        { 
            nome: "Blusas", 
            navigate: "/sobre",
        },

        { 
            nome: "Calças", 
            navigate: "/roupas",
        },

        { 
            nome: "Sapatos", 
            navigate: "/sobre",
        },
    ];

    const cores = [
        {
            nome: 'Preto',
            quant: 120,
            cor: '#000000'
        },
        {
            nome: 'Verde',
            quant: 85,
            cor: '#008000'
        },
        {
            nome: 'Vermelho',
            quant: 64,
            cor: '#FF0000'
        },
        {
            nome: 'Azul',
            quant: 97,
            cor: '#0000FF'
        },
        {
            nome: 'Branco',
            quant: 150,
            cor: '#FFFFFF'
        },
        {
            nome: 'Melancia',
            quant: 42,
            cor: '#FC6C85'
        },
        {
            nome: 'Roxo',
            quant: 58,
            cor: '#800080'
        },
        {
            nome: 'Dourado',
            quant: 33,
            cor: '#FFD700'
        },
        {
            nome: 'Rosa',
            quant: 76,
            cor: '#FFC0CB'
        },
        {
            nome: 'Vinho',
            quant: 29,
            cor: '#722F37'
        },
    ];

    const tamanho = [
        {
            nome: 'XL',
            quant: 120,
        },
        {
            nome: 'M',
            quant: 85,
        },
        {
            nome: 'G',
            quant: 64,
        },
        {
            nome: 'GG',
            quant: 97,
        },
        {
            nome: 'MM',
            quant: 150,
        },
        {
            nome: 'P',
            quant: 42,
        },
    ];


    return (

        <section className={`fixed top-9 right-0 transition-all duration-400 overflow-hidden ${mostrarFiltroModal ? 'duration-0 min-w-full max-w-full' : 'min-w-0 max-w-0 lg:min-w-full lg:max-w-full'} lg:sticky lg:left-0 max-h-full`}>
            
            <main className="max-h-[75vh] overflow-y-auto lg:max-h-full lg:overflow-y-hidden lg:pl-10 px-5 lg:pr-2 p-4 mt-2 pt-8 lg:pt-0">

                <h1 className="font-bold font-[Poppins] tracking-[1px] mb-1.5">
                    Categorias
                </h1>

                {topicos.map((produto, index) =>
                    <div key={index} className="cursor-pointer">
                        {(index < 4 || maisCategoria) ?
                            <article
                                onClick={() => 
                                    navigate(produto.navigate)
                                } 
                                className="active:bg-blue-100 text-[15px] transition-colors duration-100 py-1.5 relative text-[#222222]">{produto.nome}
                            </article>
                        :
                            <button onClick={() => setMaisCategoria(!maisCategoria)} className="uppercase rounded-full p-1 px-3 border border-zinc-800/70 text=zinc-800/90 text-[11px] font-medium tracking-[1px] font-[Poppins] mt-3 cursor-pointer">
                                {maisCategoria ? 'ver menos' : 'ver mais'}
                            </button>
                        }

                        {(maisCategoria && index === topicos.length - 1) &&
                            <button onClick={() => setMaisCategoria(!maisCategoria)} className="uppercase rounded-full p-1 px-3 border border-zinc-800/70 text=zinc-800/90 text-[11px] font-medium tracking-[1px] font-[Poppins] mt-3 cursor-pointer">
                                {maisCategoria ? 'ver menos' : 'ver mais'}
                            </button>
                        }
                    </div>
                )}

                <h1 className="font-bold font-[Poppins] tracking-[1px] mb-1.5 mt-12">
                    Cor
                </h1>

                {(maisCor ? cores : cores.slice(0, 4)).map((produto, index) =>
                    <div key={index}>

                        <article
                            onClick={() => { 
                                filtroProdutos.includes(produto.nome)
                                    ? setFiltroProdutos((prev) =>
                                        prev.filter((nome) => nome !== produto.nome)
                                    )
                                    : setFiltroProdutos((prev) => [...prev, produto.nome]);
                                    navigate(0);
                            }}
                            className="active:bg-blue-100 text-[15px] transition-colors duration-100 py-1.5 relative text-[#222222] flex justify-between cursor-pointer">
                                <span className="flex gap-2 items-center">
                                    <span className={`rounded-xs border border-slate-800/70 min-h-4 min-w-4 max-w-4 max-h-4 flex items-center justify-center ${filtroProdutos.includes(produto.nome) && 'bg-zinc-800'}`}>
                                        {filtroProdutos.includes(produto.nome) &&
                                            <Check className="text-neutral-100" size={12}/>
                                        }
                                    </span>
                                    {produto.nome} {`(${produto.quant})`}
                                </span>

                                <span 
                                style={{backgroundColor: produto.cor}}
                                className="min-h-4 min-w-4 max-h-4 max-w-4 rounded-full shadow-sm border border-zinc-800/80">

                                </span>
                        </article>

                        {((maisCor && index === cores.length - 1) || (!maisCor && index === 3)) &&
                            <button onClick={() => setMaisCor(!maisCor)} className="uppercase rounded-full p-1 px-3 border border-zinc-800/70 text=zinc-800/90 text-[11px] font-medium tracking-[1px] font-[Poppins] mt-3 cursor-pointer">
                                {cores ? 'ver menos' : 'ver mais'}
                            </button>
                        }
                    </div>
                )}

                <h1 className="font-bold font-[Poppins] tracking-[1px] mb-1.5 mt-12">
                    Tamanho
                </h1>

                {(maisTamanho ? tamanho : tamanho.slice(0, 4)).map((produto, index) =>
                    <div key={index}>

                        <article
                            onClick={() => {
                                filtroProdutos.includes(produto.nome)
                                    ? setFiltroProdutos((prev) =>
                                        prev.filter((nome) => nome !== produto.nome)
                                    )
                                    : setFiltroProdutos((prev) => [...prev, produto.nome]);

                                navigate(0);
                            }}
                            className="active:bg-blue-100 text-[15px] transition-colors duration-100 py-1.5 relative text-[#222222] flex justify-between cursor-pointer">
                                <span className="flex gap-2 items-center">
                                    <span className={`rounded-xs border border-slate-800/70 min-h-4 min-w-4 max-w-4 max-h-4 flex items-center justify-center ${filtroProdutos.includes(produto.nome) && 'bg-zinc-800'}`}>
                                        {filtroProdutos.includes(produto.nome) &&
                                            <Check className="text-neutral-100" size={12}/>
                                        }
                                    </span>
                                    {produto.nome} {`(${produto.quant})`}
                                </span>
                        </article>

                        {((maisTamanho && index === tamanho.length - 1) || (!maisTamanho && index === 3)) &&
                            <button onClick={() => setMaisTamanho(!maisTamanho)} className="uppercase rounded-full p-1 px-3 border border-zinc-800/70 text=zinc-800/90 text-[11px] font-medium tracking-[1px] font-[Poppins] mt-3 cursor-pointer">
                                {tamanho ? 'ver menos' : 'ver mais'}
                            </button>
                        }
                    </div>
                )}

                <h1 className="font-bold font-[Poppins] tracking-[1px] mb-1.5 mt-12">
                    Preço
                </h1>

                <section className="flex gap-4 items-end">
                    <article className="max-w-[28%] min-w-[28%] overflow-hidden flex flex-col gap-2">
                        <label className="font-[Poppins] text-sm font-light">
                            De
                        </label>
                        <input 
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            setValorMinimo(Number(value));
                        }}
                        value={valorMinimo > 0 ? valorMinimo : ''}
                        placeholder="54,90" className="border border-zinc-700 rounded-xl max-w-full min-w-full p-1 px-2 max-h-9 min-h-9 text-sm" type="text"/>
                    </article>

                    <article className="max-w-[28%] min-w-[28%] overflow-hidden flex flex-col gap-2">
                        <label className="font-[Poppins] text-sm font-light">
                            Até
                        </label>
                        <input
                        value={valorMaximo > 0 ? valorMaximo : ''}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            setValorMaximo(Number(value));
                        }}
                        placeholder="449,90" className="border border-zinc-700 rounded-xl max-w-full min-w-full p-1 px-2 max-h-9 min-h-9 text-sm" type="text"/>
                    </article>

                    <button
                    disabled={valorMaximo <= 0 && valorMinimo <= 0} 
                    onClick={() => {
                        const produtos = filtroProdutos;
                        if (valorMaximo > 0 && valorMinimo > 0) {
                            let newProdutos = produtos.filter((f) => f.split('R$').length < 1);
                            newProdutos = [...newProdutos, `R$${valorMinimo} a R$${valorMaximo}`];
                            setFiltroProdutos(newProdutos);
                        } else if (valorMaximo > 0) {
                            let newProdutos = produtos.filter((f) => !f.split('Até R$'));
                            newProdutos = [...newProdutos, `Até R$${valorMaximo}`];
                            setFiltroProdutos(newProdutos);
                        } else {
                            let newProdutos = produtos.filter((f) => !f.split('De R$'));
                            newProdutos = [...newProdutos, `De R$${valorMinimo}`];
                            setFiltroProdutos(newProdutos);
                        }
                        navigate(0);
                    }}
                    className={`uppercase rounded-lg px-2.5 border border-zinc-800/20 tracking-[1px] transition-all duration-300 text-xs max-h-9 min-h-9 ${valorMaximo > 0 || valorMinimo > 0 ? 'text-zinc-100 cursor-pointer bg-neutral-800' : 'text-zinc-500/70 cursor-not-allowed bg-neutral-400/30'}`}>
                        Aplicar
                    </button>
                </section>

            </main>
            
        </section>
    )
}


export default function FiltroModal() {
    const {mostrarFiltroModal, setMostrarFiltroModal} = contextFavoritos();


    return (
        <div className={`z-1000 fixed right-0 top-0 transition-all duration-400 max-h-screen min-h-screen ${mostrarFiltroModal ? 'min-w-full max-w-full pointer-events-auto' : 'min-w-0 max-w-0 pointer-events-none'} flex flex-col overflow-hidden bg-white`}>

            <header className={`z-1001 fixed top-0 right-0 bg-[#222222] max-h-30 py-3 transition-all duration-400 ${mostrarFiltroModal ? 'min-w-full max-w-full' : 'min-w-0 max-w-0'} overflow-hidden min-h-13`}>
                <div className="max-w-360 mx-auto flex items-center px-4">

                    <X onClick={() => {
                        setMostrarFiltroModal(false);
                        }} 
                        className="min-h-6 min-w-6 max-h-6 max-w-6 text-white mr-2"/>

                    <h1 className="text-white font-[Poppins] font-medium text-lg">
                        Filtros
                    </h1>

                </div>
            </header>

            <FiltrosTopico/>

        </div>
    )
}
