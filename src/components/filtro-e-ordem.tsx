import { Filter, X } from "lucide-react";
import { contextFavoritos } from "../context/favoritesContext"
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "mais_vendidos", label: "Mais vendidos" },
  { value: "menor_preco", label: "Menor preço" },
  { value: "maior_preco", label: "Maior preço" },
  { value: "recentes", label: "Mais recentes" },
];

export function FiltroOrdemFixo() {
    const {mostrarSearch, search, mostrarFiltro, setMostrarFiltroModal} = contextFavoritos();


    return (
            <div className={`lg:hidden grid fixed grid-cols-2 bg-[rgba(250,249,247)] min-w-full gap-2 px-4 font-[Poppins] transition-all duration-300 items-end border-b border-b-black/8 pb-4 z-1000 ${mostrarSearch ? 'top-34' : 'top-21'} ${mostrarFiltro ? 'max-h-0 min-h-0 opacity-0 pointer-events-none' : search ? 'max-h-0 min-h-0 opacity-0 pointer-events-none' : 'min-h-20 max-h-20 pointer-events-auto'}`}>
                <button onClick={() => setMostrarFiltroModal(true)} className="min-w-full flex items-center justify-between p-2 bg-white border border-[#e5e7eb] rounded-lg font-semibold text-sm min-h-11 max-h-11">
                    Filtrar
                    <Filter size={16}/>
                </button>

                <Select
                    isSearchable={false}
                    options={options}
                    placeholder="Ordenar por"
                    styles={{
                    control: (base) => ({
                        ...base,
                        borderRadius: "8px",
                        border: "1px solid #e5e7eb",
                        padding: "2px 6px",
                        boxShadow: "none",
                        cursor: "pointer",
                        maxHeight: '44px',
                        minHeight: '44px'
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: "#222222",
                        fontSize: "14px",
                        fontWeight: "600",
                    }),
                    option: (base, state) => ({
                        ...base,
                        color: state.isSelected ? "white" : "#111827",
                        backgroundColor: state.isSelected
                            ? "#111827"
                            : state.isFocused
                            ? "#f3f4f6"
                            : "white",
                        fontSize: "14px",
                        }),

                    placeholder: (base) => ({
                        ...base,
                        color: "#222222",
                        fontWeight: '600',
                        fontSize: "14px",
                        }),
                    menu: (base) => ({
                        ...base,
                        borderRadius: "8px",
                        overflow: "hidden",
                    }),
                    }}
                    onChange={(opcao) => console.log(opcao)}
                />
            </div>
    );
}

export function FiltroOrdemMobile() {
    const {setMostrarFiltroModal} = contextFavoritos();
    
  return (
    <div className="grid grid-cols-2 gap-6 mt-10 px-4 font-[Poppins]">
        <button onClick={() => setMostrarFiltroModal(true)} className="min-w-full flex items-center justify-between p-2 bg-white border border-[#e5e7eb] rounded-lg font-semibold text-sm min-h-11 max-h-11">
            Filtrar
            <Filter size={16}/>
        </button>

        <Select
            isSearchable={false}
            options={options}
            placeholder="Ordenar por"
            styles={{
            control: (base) => ({
                ...base,
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                padding: "2px 6px",
                boxShadow: "none",
                cursor: "pointer",
                maxHeight: '44px',
                minHeight: '44px'
            }),
            singleValue: (base) => ({
                ...base,
                color: "#222222",
                fontSize: "14px",
                fontWeight: "600",
            }),
            option: (base, state) => ({
                ...base,
                color: state.isSelected ? "white" : "#111827",
                backgroundColor: state.isSelected
                    ? "#111827"
                    : state.isFocused
                    ? "#f3f4f6"
                    : "white",
                fontSize: "14px",
                }),

            placeholder: (base) => ({
                ...base,
                color: "#222222",
                fontWeight: '600',
                fontSize: "14px",
                }),
            menu: (base) => ({
                ...base,
                borderRadius: "8px",
                overflow: "hidden",
            }),
            }}
            onChange={(opcao) => console.log(opcao)}
        />
    </div>

  );
}

export function Ordenar() {
    const localEscolhido = localStorage.getItem('produtos_filtro');
    const [filtros, setFiltros] = useState<string[] | null>(() => localEscolhido ? JSON.parse(localEscolhido) : null);
    
  return (
    <div className="flex gap-2 items-center">
        {(filtros && filtros.length > 0) &&
            <section className="mr-2">

                <nav className="flex flex-wrap gap-2 items-center">
                {filtros.map((filtro) =>
                    <span key={filtro} onClick={() => {
                        const filtrosNew = filtros.filter((f) => f !== filtro);
                        localStorage.setItem('produtos_filtro', JSON.stringify(filtrosNew));
                        setFiltros(filtrosNew);
                        window.location.reload();
                    }}
                    className="p-2 bg-neutral-200/80 font-[Poppins] font-medium text-xs flex justify-between max-h-10 text-zinc-900 items-center rounded-full gap-1.5 cursor-pointer">
                        {filtro}

                        <X size={14}/>
                    </span>
                )}

                <h2 
                className="font-bold font-[Poppins] ml-2 text-sm cursor-pointer" 
                onClick={() => {
                    localStorage.setItem('produtos_filtro', JSON.stringify([]));
                    setFiltros([]);
                    window.location.reload();
                }}
                >Limpar Filtros</h2>
                </nav>
            </section>
        }

        <Select
            isSearchable={false}
            options={options}
            placeholder="Ordenar por"
            styles={{
            control: (base) => ({
                ...base,
                borderRadius: "8px",
                border: "1px solid #0000004a",
                padding: "2px 6px",
                boxShadow: "none",
                cursor: "pointer",
                maxHeight: '44px',
                minHeight: '44px',
                minWidth: '242px',
                maxWidth: '242px'
            }),
            singleValue: (base) => ({
                ...base,
                color: "#222222",
                fontSize: "14px",
                fontWeight: "600",
            }),
            option: (base, state) => ({
                ...base,
                color: state.isSelected ? "white" : "#111827",
                backgroundColor: state.isSelected
                    ? "#111827"
                    : state.isFocused
                    ? "#f3f4f6"
                    : "white",
                fontSize: "14px",
                }),

            placeholder: (base) => ({
                ...base,
                color: "#222222",
                fontWeight: '600',
                fontSize: "14px",
                }),
            menu: (base) => ({
                ...base,
                borderRadius: "8px",
                overflow: "hidden",
            }),
            }}
            onChange={(opcao) => console.log(opcao)}
        />
    </div>
  );
}
