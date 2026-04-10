import CardProduto from "../components/cardProdutos";

type ItensCarrinho = {
    id: string;
    nome: string;
    imagem: string;
    precoOriginal: number;
    precoAtual: number;
    quantidade: number;
}

export default function Wishlist() {

    const itensCarrinhoBase: ItensCarrinho[] = [
        {
            id: '1',
            nome: "Vestido curto rosa",
            imagem: "https://images.unsplash.com/photo-1542295669297-4d352b042bca?q=80&w=687&auto=format&fit=crop",
            precoOriginal: 119.90,
            precoAtual: 110.00,
            quantidade: 1
        },
        {
            id: '2',
            nome: "Blusa feminina branca",
            imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=687&auto=format&fit=crop",
            precoOriginal: 79.90,
            precoAtual: 69.90,
            quantidade: 1
        },
        {
            id: '3',
            nome: "Calça jeans skinny",
            imagem: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=687&auto=format&fit=crop",
            precoOriginal: 149.90,
            precoAtual: 129.90,
            quantidade: 1
        },
        {
            id: '4',
            nome: "Jaqueta jeans azul",
            imagem: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=687&auto=format&fit=crop",
            precoOriginal: 199.90,
            precoAtual: 179.90,
            quantidade: 1
        },
        {
            id: '5',
            nome: "Saia midi floral",
            imagem: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=687&auto=format&fit=crop",
            precoOriginal: 99.90,
            precoAtual: 89.90,
            quantidade: 1
        },
        {
            id: '6',
            nome: "Bolsa feminina preta",
            imagem: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=687&auto=format&fit=crop",
            precoOriginal: 159.90,
            precoAtual: 139.90,
            quantidade: 1
        },
        {
            id: '7',
            nome: "Camisa social azul",
            imagem: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=687&auto=format&fit=crop",
            precoOriginal: 129.90,
            precoAtual: 109.90,
            quantidade: 1
        }
    ];


    return (
        <div className="min-h-screen bg-[rgba(250,249,247)] p-4">
            <h1 className="font-[Poppins] font-medium sm:text-2xl text-xl sm:ml-34 text-center sm:text-left">Lista de Desejos</h1>

            <main
            style={{ rowGap: '46px' }}
            className="grid pt-10 sm:px-10 sm:gap-10 justify-center sm:grid-cols-[repeat(auto-fit,minmax(272px,272px))] grid-cols-2 gap-2"
            >
            <CardProduto itens={itensCarrinhoBase}/>
            </main>
        </div>
    )
}