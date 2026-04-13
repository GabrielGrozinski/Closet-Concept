import { Check, X } from "lucide-react";
import { contextFavoritos } from "../context/favoritesContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


type Topico = {
nome: string;
navigate: string;
};



export default function FiltroModal() {
    const location = useLocation();
    const navigate = useNavigate();
    const pathName = location.pathname.split('/')[1];
    const {mostrarFiltroModal, setMostrarFiltroModal} = contextFavoritos();
    const [filtroProdutos, setFiltroProdutos] = useState<string[]>(() => {
        const filtroEscolhido = localStorage.getItem(`${pathName}_filtro`);
        return filtroEscolhido ? JSON.parse(filtroEscolhido) : [''];
    });
    
    const [maisCategoria, setMaisCategoria] = useState(false);
    const [maisCor, setMaisCor] = useState(false);
    const [maisTamanho, setMaisTamanho] = useState(false);
    const [valorMinimo, setValorMinimo] = useState(0);
    const [valorMaximo, setValorMaximo] = useState(0);

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

            <section className={`fixed top-9 right-0 transition-all duration-400 overflow-hidden ${mostrarFiltroModal ? 'duration-0 min-w-full max-w-full' : 'min-w-0 max-w-0'}`}>
                
                <main className="max-h-[75vh] overflow-y-auto px-5 p-4 mt-2 pt-8">

                    <h1 className="font-bold font-[Poppins] tracking-[1px] mb-1.5">
                        Categorias
                    </h1>

                    {topicos.map((produto, index) =>
                        <div key={index}>
                            {(index < 4 || maisCategoria) ?
                                <article
                                    onClick={() => 
                                        navigate(produto.navigate)
                                    } 
                                    className="active:bg-blue-100 text-[15px] transition-colors duration-100 py-1.5 relative text-[#222222]">{produto.nome}
                                </article>
                            :
                                <button onClick={() => setMaisCategoria(!maisCategoria)} className="uppercase rounded-full p-1 px-3 border border-zinc-800/70 text=zinc-800/90 text-[11px] font-medium tracking-[1px] font-[Poppins] mt-3">
                                    {maisCategoria ? 'ver menos' : 'ver mais'}
                                </button>
                            }

                            {(maisCategoria && index === topicos.length - 1) &&
                                <button onClick={() => setMaisCategoria(!maisCategoria)} className="uppercase rounded-full p-1 px-3 border border-zinc-800/70 text=zinc-800/90 text-[11px] font-medium tracking-[1px] font-[Poppins] mt-3">
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
                                className="active:bg-blue-100 text-[15px] transition-colors duration-100 py-1.5 relative text-[#222222] flex justify-between">
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
                                <button onClick={() => setMaisCor(!maisCor)} className="uppercase rounded-full p-1 px-3 border border-zinc-800/70 text=zinc-800/90 text-[11px] font-medium tracking-[1px] font-[Poppins] mt-3">
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
                                className="active:bg-blue-100 text-[15px] transition-colors duration-100 py-1.5 relative text-[#222222] flex justify-between">
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
                                <button onClick={() => setMaisTamanho(!maisTamanho)} className="uppercase rounded-full p-1 px-3 border border-zinc-800/70 text=zinc-800/90 text-[11px] font-medium tracking-[1px] font-[Poppins] mt-3">
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
                            <input onChange={(e) => setValorMinimo(Number(e.currentTarget.value))} placeholder="54,90" className="border border-zinc-700 rounded-xl max-w-full min-w-full p-1 px-2 max-h-9 min-h-9" type="text"/>
                        </article>

                        <article className="max-w-[28%] min-w-[28%] overflow-hidden flex flex-col gap-2">
                            <label className="font-[Poppins] text-sm font-light">
                                Até
                            </label>
                            <input onChange={(e) => setValorMaximo(Number(e.currentTarget.value))} placeholder="449,90" className="border border-zinc-700 rounded-xl max-w-full min-w-full p-1 px-2 max-h-9 min-h-9" type="text"/>
                        </article>

                        <button className={`uppercase rounded-lg px-2.5 border border-zinc-800/20 tracking-[1px] transition-all duration-300 text-xs max-h-9 min-h-9 ${valorMaximo > 0 || valorMinimo > 0 ? 'text-zinc-100 cursor-pointer bg-neutral-800' : 'text-zinc-500/70 cursor-not-allowed bg-neutral-400/30'}`}>
                            Aplicar
                        </button>
                    </section>

                </main>
                
            </section>

        </div>
    )
}