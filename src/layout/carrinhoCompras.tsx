import { X, Trash } from "lucide-react";
import { useEffect, useState } from "react";


type Props = {
    mostrarCarrinho: boolean;
    setMostrarCarrinho: (v: boolean) => void;
}

type ItensCarrinho = {
    id: number;
    nome: string;
    imagem: string;
    precoOriginal: number;
    precoAtual: number;
    quantidade: number;
}


export default function CarrinhoDeCompras({mostrarCarrinho, setMostrarCarrinho}: Props) {

    const itensCarrinhoBase: ItensCarrinho[] = [
    {
        id: 1,
        nome: "Vestido curto rosa solto gola alta sem manga longo marrom p",
        imagem: "https://images.unsplash.com/photo-1542295669297-4d352b042bca?q=80&w=687&auto=format&fit=crop",
        precoOriginal: 119.90,
        precoAtual: 110.00,
        quantidade: 1
    },

    ]

    const [itensCarrinho, setItensCarrinho] = useState(itensCarrinhoBase);
    const [valorFinal, setValorFinal] = useState('');
    const [valorDesconto, setValorDesconto] = useState('');
    const [valorParcelado, setValorParcelado] = useState('');
    const [valorOriginal, setValorOriginal] = useState('');

    function alterarQuantidade(index: number, novaQtd: number) {
        if (novaQtd < 1) return

        const novosItens = [...itensCarrinho]
        novosItens[index].quantidade = novaQtd
        setItensCarrinho(novosItens)
    }

    function removerItem(id: number) {
        setItensCarrinho(itensCarrinho.filter(item => item.id !== id))
    }

    function handleInputQuantidade(index: number, valor: number) {
        if (isNaN(Number(valor))) return;
        // Remove tudo que não for número
        const newValor = valor.toString();
        const apenasNumeros = newValor.replace(/\D/g, '')

        // Converte pra número
        const numero = Number(apenasNumeros)

        // Não deixa vazio virar 0 automaticamente enquanto digita
        if (apenasNumeros === '') {
            const novosItens = [...itensCarrinho];
            novosItens[index].quantidade = 0
            setItensCarrinho(novosItens)
            return
        }

        // Só aceita maior que 0
        if (numero < 1) return

        const novosItens = [...itensCarrinho]
        novosItens[index].quantidade = numero
        setItensCarrinho(novosItens)
    }

    const somarValores = () => {
        let valorFinal = 0;
        let valorOriginal = 0;
        itensCarrinho.forEach((item) => {
            valorFinal += (item.precoAtual * item.quantidade);
            valorOriginal += (item.precoOriginal * item.quantidade);
        });

        let valorDesconto = valorOriginal - valorFinal;

        const valorFinalFormatado = 
            `${(valorFinal).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
            })}`;

        const valorOriginalFormatado = 
            `${(valorOriginal).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
            })}`;

        const valorDescontoFormatado = 
            `${(valorDesconto).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
            })}`;

        const valorFinalParcelado = (valorFinal/12)*1.1;

        const valorFinalParceladoFormatado = 
            `${(valorFinalParcelado).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
            })}`;
        
        setValorDesconto(valorDescontoFormatado);
        setValorFinal(valorFinalFormatado);
        setValorOriginal(valorOriginalFormatado);
        setValorParcelado(valorFinalParceladoFormatado);
    }

    useEffect(() => {
        somarValores();
    }, [itensCarrinho]);




    return (
        <div className={`z-1004 fixed right-0 transition-all duration-300 bg-white top-0 bottom-0 grid grid-rows-[10%_1fr_25%] ${mostrarCarrinho ? 'min-w-full max-w-full lg:min-w-1/3 lg:max-w-1/3' : 'min-w-0 max-w-0'} overflow-hidden`}>
            
            <header className="flex justify-between items-center min-h-full p-4">
                <button className="relative gap-1 flex flex-col items-center justify-center text-[#2C2C2C] hover:text-[#C4B5A0] transition-colors cursor-pointer">
                    <span>
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </span>

                    <span className="absolute -top-3 -right-3 bg-[#C4B5A0] text-[#FAF9F7] text-[10px] font-semibold px-1.5 py-0.5 rounded-full scale-90">
                    0
                    </span>
                </button>

                <h1 className="text-lg font-medium tracking-wide">Carrinho</h1>

                <button onClick={() => setMostrarCarrinho(false)}>
                    <X className="min-h-7 min-w-7 max-h-7 max-w-7 cursor-pointer" />
                </button>
            </header>

            <main className="flex flex-col p-4">
            {itensCarrinho.map((item, index) => (
                <div
                key={item.id}
                className="grid grid-cols-[20%_1fr_15%_10%] grid-rows-2 border-b border-b-black/6 pb-4"
                >
                <img
                    className="row-span-full col-1 rounded-lg"
                    src={item.imagem}
                    alt={item.nome}
                />

                <p className="col-[2/4] row-1 px-4 font-[Poppins] font-extralight text-xs">
                    {item.nome}
                </p>

                {/* QUANTIDADE */}
                <div className="min-w-[48%] max-w-[48%] ml-4 h-[55%] row-2 col-2 border border-slate-500/20 grid grid-cols-3 overflow-hidden items-center">
                    <button
                    onClick={() => alterarQuantidade(index, item.quantidade - 1)}
                    className="font-bold text-3xl cursor-pointer pb-1 hover:bg-gray-200 min-h-full"
                    >
                    -
                    </button>

                    <input
                    type="text"
                    className="min-h-full text-center text-sm text-neutral-800 outline-0"
                    value={item.quantidade}
                    onChange={(e) => handleInputQuantidade(index, Number(e.target.value))}
                    />

                    <button
                    onClick={() => alterarQuantidade(index, item.quantidade + 1)}
                    className="font-bold text-xl cursor-pointer pb-0.75 hover:bg-gray-200 min-h-full"
                    >
                    +
                    </button>
                </div>

                {/* REMOVER */}
                <button
                    className="row-1 col-4 flex justify-end items-start"
                    onClick={() => removerItem(item.id)}
                >
                    <Trash className="min-w-6 min-h-6 max-w-6 max-h-6 cursor-pointer hover:text-red-600 transition-colors duration-200" />
                </button>

                {/* PREÇOS */}
                <div className="flex flex-col items-end row-2 col-[3/5]">
                    <h2 className="line-through text-neutral-500 text-sm">
                    {(item.quantidade * item.precoOriginal).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                    </h2>

                    <h1 className="text-neutral-900 text-xl font-bold">
                    {(item.quantidade * item.precoAtual).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                    </h1>
                </div>
                </div>
            ))}
            </main>

            <footer className="p-4 flex flex-col justify-between font-[Poppins]">
                <article className="flex justify-between text-sm">
                    <h1>Subtotal</h1>
                    <h2>
                        {valorOriginal}
                    </h2>
                </article>

                <article className="flex justify-between text-sm">
                    <h1>Desconto</h1>
                    <h2>- {valorDesconto}</h2>
                </article>

                <article className="flex justify-between text-sm">
                    <h1 className="font-bold text-lg">Total</h1>
                    <h2 className="flex items-center gap-1">
                        <span className="font-bold text-lg">
                            {valorFinal} 
                        </span> 
                        ou 12x de {valorParcelado}
                    </h2>
                </article>

                <nav className="grid grid-cols-2 gap-4 pb-2">
                    <button className="min-w-full max-h-10 p-1 cursor-pointer font-light border border-slate-900/60 rounded-md text-xs sm:text-base transition-colors duration-200 hover:bg-neutral-100">Continuar comprando</button>

                    <button className="min-w-full p-1 max-h-10 cursor-pointer bg-[#222222] text-white font-light text-xs sm:text-base rounded-md transition-colors duration-200 hover:bg-neutral-700">Finalizar compra</button>
                </nav>
            </footer>

        </div>
    )
}