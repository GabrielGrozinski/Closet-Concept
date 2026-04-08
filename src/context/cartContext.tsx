import { createContext, useContext, type ReactNode } from "react";

type ItensCarrinho = {
    id: number;
    nome: string;
    imagem: string;
    precoOriginal?: number;
    precoAtual: number;
    quantidade: number;
}

interface CartType {
    adicionarItemCarrinho: (v: ItensCarrinho) => void;
    buscarItens: () => Promise<ItensCarrinho | null>;
}

interface Props {
    children: ReactNode;
}

export const cart_context = createContext<CartType>({} as CartType);

export default function CartContext({children}: Props) {

    function adicionarItemCarrinho(item: ItensCarrinho) {
        const produtosAtuais = localStorage.getItem('produtos');

        let produtos = produtosAtuais ? JSON.parse(produtosAtuais) : [];

        produtos = [...produtos, item];

        localStorage.setItem('produtos', JSON.stringify(produtos));
    }

    function buscarItens() {
        const produtosAtuais = localStorage.getItem('produtos');
        const produtos = produtosAtuais ? JSON.parse(produtosAtuais) : null;

        return produtos; 
    }


    return (
        <cart_context.Provider 
            value={{
                adicionarItemCarrinho,
                buscarItens
            }}
        >
            {children}
        </cart_context.Provider>
    );
}

export const contextFavoritos = () => {
    return useContext(cart_context);
}