import { Filter } from "lucide-react";
import Select from "react-select";
import { useEffect, useRef } from "react";
import { contextFavoritos } from "../context/favoritesContext";

const options = [
  { value: "mais_vendidos", label: "Mais vendidos" },
  { value: "menor_preco", label: "Menor preço" },
  { value: "maior_preco", label: "Maior preço" },
  { value: "recentes", label: "Mais recentes" },
];

interface Props {
    children: React.ReactNode;
}

export function Ordenar() {
    
  return (
    <div className="grid grid-cols-2 gap-2 mt-8 px-4 font-[Poppins]">
        <button className="min-w-full flex items-center justify-between p-2 bg-white border border-[#e5e7eb] rounded-lg font-semibold text-sm min-h-11 max-h-11">
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


export default function MainProdutos({children}: Props) {
    const filtroRef = useRef<HTMLDivElement | null>(null);
    const {setMostrarFiltro} = contextFavoritos();


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
        <main>
            <h1 className="text-center font-[Poppins] text-neutral-700 mt-4">
                Início {'>'} 
            </h1>

            <h2 className="text-center font-[Poppins] text-[#222222] mt-1 font-medium text-3xl">
                Produtos
            </h2>

            <div ref={filtroRef}>
                <Ordenar/>
            </div>

            {children}
        </main>
    )
}