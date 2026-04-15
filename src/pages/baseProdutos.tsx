import { X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { contextFavoritos } from "../context/favoritesContext";
import { FiltroOrdemMobile, Ordenar } from "../components/filtro-e-ordem";
import { FiltrosTopico } from "../layout/filtroLayout";
import { useLocation } from "react-router-dom";


interface Props {
    children: React.ReactNode;
}


export default function MainProdutos({children}: Props) {
    const location = useLocation();
    const pathName = useMemo(() => {
        return location.pathname.replace('/', '');
    }, [location]);
    const filtroRef = useRef<HTMLDivElement | null>(null);
    const {setMostrarFiltro} = contextFavoritos();
    const localEscolhido = useMemo(() => {
        return localStorage.getItem(`${pathName}_filtros`);
    }, [pathName]); 
    const [filtros, setFiltros] = useState<string[] | null>(() => localEscolhido ? JSON.parse(localEscolhido) : null);

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        setMostrarFiltro(entry.isIntersecting);
        },
        {
        threshold: 0,
        }
    );

    if (filtroRef.current) {
        observer.observe(filtroRef.current);
    }

    return () => {
        if (filtroRef.current) {
        observer.unobserve(filtroRef.current);
        }
    };
    }, []);


    return (
        <main className="lg:grid lg:grid-cols-[20%_1fr] lg:gap-6 lg:grid-rows-[auto_1fr] lg:px-[5%] lg:pl-[1%] lg:pb-16">

            <span className="flex mt-6 gap-1 lg:items-center lg:justify-between lg:col-span-full lg:row-1 lg:px-10 ml-4">
                <span className="flex lg:flex-row flex-col items-center min-w-full lg:min-w-0">
                    <h1 className="text-center font-[Poppins] text-neutral-700 flex items-center cursor-pointer">
                        Início<span className="lg:mx-1 lg:translate-y-[0.5px]">{'>'}</span>
                    </h1>
                    <h2 className="text-center font-[Poppins] text-[#222222] font-medium text-3xl lg:text-[17px] cursor-pointer">
                        Produtos
                    </h2>
                </span>

                <span className="hidden lg:block">
                    <Ordenar/>
                </span>
            </span>

            <section className="hidden lg:flex lg:row-2 lg:col-1 relative min-w-full max-w-full ml-4">
                <FiltrosTopico/>
            </section>

            <div ref={filtroRef} className="flex lg:hidden flex-col">
                <FiltroOrdemMobile/>
                
                {(filtros && filtros.length > 0) &&
                   <section className="flex gap-2 px-4 mt-6.5 flex-col">
                        <h1 className="font-[Poppins] text-sm font-medium">Filtros aplicados:</h1>

                        <nav className="flex flex-wrap gap-2 items-center">
                        {filtros.map((filtro) =>
                            <span onClick={() => {
                                const filtrosNew = filtros.filter((f) => f !== filtro);
                                localStorage.setItem('produtos_filtro', JSON.stringify(filtrosNew));
                                setFiltros(filtrosNew);
                                window.location.reload();
                            }}
                            className="p-2 bg-neutral-200/80 font-[Poppins] font-medium text-xs flex justify-between max-h-10 text-zinc-900 items-center rounded-full gap-1.5">
                                {filtro}

                                <X size={14}/>
                            </span>
                        )}

                        <h2 
                        className="font-bold font-[Poppins] ml-2 text-sm" 
                        onClick={() => {
                            localStorage.setItem('produtos_filtro', JSON.stringify([]));
                            setFiltros([]);
                            window.location.reload();
                        }}
                        >Limpar Filtros</h2>
                        </nav>
                    </section>
                } 
            </div>

            <span className="lg:row-2 lg:col-2">
                {children}
            </span>
        </main>
    )
}