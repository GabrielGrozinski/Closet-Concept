import { createContext, useContext, useState, type ReactNode } from "react";

type ItensCarrinho = {
    id: string;
    nome: string;
    imagem: string;
    precoOriginal: number;
    precoAtual: number;
    quantidade: number;
}

interface CartType {
    adicionarItemCarrinho: (v: ItensCarrinho) => void;
    removerItem: (v: string) => void;
    carrinho: ItensCarrinho[] | null;
    setCarrinho: (v: ItensCarrinho[] | null) => void;
    carrinhoQuantidade: number;
    setCarrinhoQuantidade: (v: number) => void;
}

interface Props {
    children: ReactNode;
}

export const cart_context = createContext<CartType>({} as CartType);

export default function CartContext({children}: Props) {
    const [carrinho, setCarrinho] = useState<ItensCarrinho[] | null>(() => {
        try {
            const data = localStorage.getItem('carrinho');
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    });

    const [carrinhoQuantidade, setCarrinhoQuantidade] = useState<number>(() => {
        try {
            const data = localStorage.getItem('carrinho');
            return data ? JSON.parse(data).length : 0;
        } catch {
            return 0;
        }
    });

    function adicionarItemCarrinho(item: ItensCarrinho) {
        const produtosAtuais = localStorage.getItem('carrinho');

        let produtos: ItensCarrinho[] = produtosAtuais 
            ? JSON.parse(produtosAtuais) 
            : [];

        const produtoExiste = produtos.some(p => p.id === item.id);

        if (produtoExiste) {
            const atualizado = produtos.map(produto => {
                if (produto.id === item.id) {
                    if (produto.quantidade === item.quantidade) return produto;

                    return {
                        ...produto,
                        quantidade: item.quantidade
                    };
                }
                return produto;
            });

            setCarrinho(atualizado);
            localStorage.setItem('carrinho', JSON.stringify(atualizado));
            return;
        }

        const novoCarrinho = [...produtos, item];

        setCarrinho(novoCarrinho);
        setCarrinhoQuantidade(novoCarrinho.length);
        localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    }

    function removerItem(id: string) {
        const novosProdutos = carrinho?.filter((produto) => produto.id !== id);
        localStorage.setItem('carrinho', JSON.stringify(novosProdutos));
        setCarrinho(novosProdutos ?? null);
        setCarrinhoQuantidade(novosProdutos ? novosProdutos.length : 0);
    }


    return (
        <cart_context.Provider 
            value={{
                adicionarItemCarrinho,
                removerItem,
                carrinho,
                setCarrinho,
                carrinhoQuantidade,
                setCarrinhoQuantidade
            }}
        >
            {children}
        </cart_context.Provider>
    );
}

export const contextCart = () => {
    return useContext(cart_context);
}