import "../styles/produtoEscolhido.css";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"
import { supabase } from "../auth/supabase-client";
import ImagensProdutos from "../components/imagensProdutos";
import { ChevronLeft, ChevronRight, CreditCard, ExternalLink, Heart, Truck } from "lucide-react";
import { contextAuth } from "../context/authContext";
import { contextFavoritos } from "../context/favoritesContext";
import { contextCart } from "../context/cartContext";
import { CardProduto } from "../components/produtos";


type ItensBase = {
    id: string;
    nome: string;
    imagem: string;
    precoOriginal: number;
    precoAtual: number;
    tamanho: string;
    cor: string;
    nomeId: string;
}


export default function ProdutoEscolhido() {
    const { id } = useParams();
    const {user} = contextAuth();
    const {adicionarItemCarrinho, setMostrarCarrinho} = contextCart();
    const {buscarFavoritos} = contextFavoritos();
    const [produto, setProduto] = useState<ItensBase | undefined>();
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const [imagemEscolhida, setImagemEscolhida] = useState(1);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [mostrarImagemCheia, setMostrarImagemCheia] = useState(false);
    const [abrirEntrega, setAbrirEntrega] = useState(false);
    const tamanhos = [
        {
            t: 'P',
            disp: true,
        },
        {
            t: 'M',
            disp: true,
        },
        {
            t: 'G',
            disp: false,
        },
        {
            t: 'GG',
            disp: false,
        },
    ];
    const [tamanhoEscolhido, setTamanhoEscolhido] = useState(tamanhos[0].t);
    const [produtoFavoritado, setProdutoFavoritado] = useState(false);
    const [favoritos, setFavoritos] = useState(['']);
    const [itemCarrinho, setItemCarrinho] = useState<ItensBase | undefined>();
    const [todosProdutosRelacionados, setTodosProdutosRelacionados] = useState<ItensBase[] | undefined | null>(null);
    const [paginaRelacionados, setPaginaRelacionados] = useState(0);


    useEffect(() => {
        async function buscaProdutos() {

            const {data, error} = await supabase
                .from('produtos')
                .select('*');
            
            if (error) {
                console.error('Houve um erro', error);
            }
            setTodosProdutosRelacionados(data);
        }

        buscaProdutos();
    }, []);

    useEffect(() => {
        if (!produto) return; 
        let newProdutos = structuredClone(produto);
        newProdutos.tamanho = tamanhoEscolhido;
        setProduto(newProdutos);
    }, [tamanhoEscolhido]);

    useEffect(() => {
        async function buscaProduto() {
            const {data} = await supabase
                .from('produtos')
                .select('*')
                .eq('nomeId', id)
                .single();
            
            setProduto(data);
        }
        buscaProduto();
    }, [id]);

    const allImages = [
        {
        id: 1,
        img: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?q=80&w=687&auto=format&fit=crop'
        },
        {
        id: 2,
        img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=687&auto=format&fit=crop'
        },
        {
        id: 3,
        img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=687&auto=format&fit=crop'
        },
        {
        id: 4,
        img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=687&auto=format&fit=crop'
        },
    ]

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
        const index = imageRefs.current.findIndex(
            (el) => el === visible[0].target
        );

        if (index !== -1) {
            setImagemEscolhida(allImages[index].id);
        }
        }
    }, {
        root: scrollRef.current,
        threshold: 0.5
    });

    imageRefs.current.forEach((el) => {
        if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    }, [allImages]);

    useEffect(() => {
        const root = window.document.documentElement;
        root.style.overflow = mostrarImagemCheia ? 'hidden' : 'auto';
    }, [mostrarImagemCheia]);

    useEffect(() => {
        if (!user || !produto) return;

        buscarFavoritos(user).then((favoritos) => {
            if (favoritos.length === 0) return;

            const idProduto = produto.id;
            const isFavorito = favoritos.includes(idProduto);

            setProdutoFavoritado(isFavorito);
            setFavoritos(favoritos);
        });
    }, [user, produto]);

    async function adicionarFavoritos(id: string) {
        if (!user) return;
        if (favoritos.includes(id)) return;
        const newFavoritos = [...(favoritos ?? []), id].filter((f) => f !== "");

        const {error} = await supabase
            .from('usuarios')
            .update({
                favoritos: newFavoritos
            })
            .eq('id', user.id);


        if (error) {
            console.error('Houve um erro', error);
            return;
        }

        setFavoritos(newFavoritos);
        setProdutoFavoritado(true);
    }

    async function removerFavoritos(id: string) {
        if (!user) return;
        if (!favoritos.includes(id)) return;
        const newFavoritos = (favoritos ?? []).filter((f) => (f !== id) && (f !== ""));

        const {error} = await supabase
            .from('usuarios')
            .update({
                favoritos: newFavoritos
            })
            .eq('id', user.id);

        if (error) {
            console.error('Houve um erro', error);
            return;
        }

        setFavoritos(newFavoritos);
        setProdutoFavoritado(false);
    }

    useEffect(() => {
        if (itemCarrinho) {
            setTimeout(() => {
                setItemCarrinho(undefined);
            }, 2000);
        }
    }, [itemCarrinho]);


    if (!produto) return;


    return (
        <div className="min-h-screen grid grid-cols-[42.5%_1fr] bg-[rgba(250,249,247)]">
            {mostrarImagemCheia &&
                <span className="inset-0 fixed z-1010">
                    <ImagensProdutos imagemEscolhida={imagemEscolhida} setMostrarImagemCheia={setMostrarImagemCheia} imagens={allImages} />
                </span>
            }

            <section ref={scrollRef} style={{pointerEvents: mostrarImagemCheia ? 'none' : 'auto'}} className="h-[118vh] overflow-y-auto no-scrollbar relative cursor-zoom-in">
            
                <div className="sticky top-0 z-10 pointer-events-none">
                    <div className="absolute left-8 justify-center min-h-screen flex flex-col gap-4 pointer-events-auto pb-20">
                        {allImages.map((img: any, index: number) => (
                            <img
                            key={img.id}
                            data-index={index}
                            src={img.img}
                            onClick={() => {
                                imageRefs.current[index]?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                            className={`h-[14vh] w-16 scale-90 object-cover cursor-pointer shadow-sm ${imagemEscolhida === img.id ? 'border border-black shadow-lg' : ''}`}
                            alt=""
                            />
                        ))}
                    </div>
                </div>

                <div>
                    {allImages.map((img, index) => (
                    <img
                        key={img.id}
                        onClick={() => setMostrarImagemCheia(true)}
                        ref={(el) => {(imageRefs.current[index] = el)}}
                        src={img.img}
                        className="w-full h-[118vh] object-cover scroll-mt-[12vh]"
                        alt={`imagem-${img.id}`}
                    />
                    ))}
                </div>

            </section>

            <section className="font-[Poppins] gap-4 flex flex-col pl-12 pr-10 py-6 text-[#222222] h-[118vh]">
                <h1 className="flex items-center text-zinc-500 font-medium mb-2">
                    Início
                    <ChevronRight size={16}/>
                    Vestido
                    <ChevronRight size={16}/>
                    Vestido Curto
                    <ChevronRight size={16}/>
                    <span className="text-zinc-800">
                        Vestido Curto Rosa
                    </span>
                </h1>

                <h1 className="tracking-[0.5px] font-light text-2xl">
                    {produto.nome}
                </h1>

                <span className="flex flex-col">
                    <h2 className="flex gap-2 text-xl text-neutral-800">
                        <span className="text-base text-[#2222226a] line-through flex items-center">
                            {produto.precoOriginal.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                            })}
                        </span>
                        <span className="flex items-center font-semibold">
                            {produto.precoAtual.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                            })}
                        </span>
                    </h2>

                    <h2 className="mt-1 flex gap-1 text-sm">
                        ou 
                        <strong className="font-semibold">
                            {(produto.precoAtual*0.95).toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    })}
                        </strong> 
                        com Pix
                    </h2>
                </span>

                <h2 className="flex gap-1 items-center tracking-[0.6px] border-t border-t-black/10 pt-4 max-w-1/2 text-sm">
                    <CreditCard className="-mt-px" size={24}/> 
                    <strong className="font-semibold">
                        {produto.precoAtual.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                        })}
                    </strong> 
                    em até 10x de 
                    <strong className="font-semibold">
                        {(produto.precoAtual/10).toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                        })}
                    </strong> 
                    sem juros
                </h2>

                <div className="flex flex-col gap-1 mt-2">
                    <h1 className="text-[15px]">
                        Cor: Bordo
                    </h1>
                    
                    <aside className="mt-1">
                        <div className="rounded-full border-3 border-white max-w-6 max-h-6 min-h-6 outline outline-slate-800 bg-red-800 cursor-pointer">
                        </div>
                    </aside>
                </div>

                <div className="flex items-center gap-2 mt-2">
                    <h1 className="text-[15px]">
                        Tamanho:
                    </h1>

                    <aside className="flex text-sm gap-2">
                        {tamanhos.map((t, index) =>
                            <div key={index}
                            onClick={() => t.disp ? setTamanhoEscolhido(t.t) : false}
                            className={`min-w-10 min-h-4 rounded-2xl p-0.5 flex justify-center items-center ${
                                t.disp ? 
                                tamanhoEscolhido === t.t ? 'bg-black text-white cursor-pointer' 
                                : 'bg-white text-zinc-900 border cursor-pointer' 
                                : 'cursor-not-allowed bg-gray-300 border border-black/6 opacity-60'
                                } flex justify-center items-`}>
                                {t.t}
                            </div>                        
                        )}

                    </aside>
                </div>

                <section className="flex gap-4 mt-2">
                    <button 
                    onClick={() => {
                        adicionarItemCarrinho({...produto, quantidade: 1});
                        setMostrarCarrinho(true);
                        setItemCarrinho(produto);
                    }}
                    className="cursor-pointer min-h-10 max-h-10 min-w-2/3 bg-black text-white p-2 rounded-md text-sm transition-color duration-200 hover:bg-[#222222]">
                        {(itemCarrinho && itemCarrinho.id === produto.id) ?
                            <span className="text-xs">
                                Adicionando...
                            </span>
                        :
                            'Adicionar ao carrinho'
                        }
                    </button>

                    <button 
                    onClick={() =>
                        produtoFavoritado ?
                            removerFavoritos(produto.id)
                        :
                            adicionarFavoritos(produto.id)
                    }
                    className={`rounded-md p-2 border max-h-10 min-h-6 cursor-pointer transition-color duration-200 hover:bg-neutral-100 ${produtoFavoritado ? 'text-red-600 border-zinc-800/50' : 'border-zinc-800/90'}`}>
                        <Heart fill={produtoFavoritado ? 'currentColor' : 'none'}/>
                    </button>
                </section>

                <h3 className="flex gap-1 items-center -mt-1.5 text-neutral-700 text-sm animate-pulse">
                    <Truck size={18}/> 
                    frete grátis!
                </h3>

                <div className="flex flex-col gap-2 mt-4 mb-2 max-w-2/3">
                    <h2>
                        Entrega
                    </h2>

                    <div className="flex gap-2 items-start justify-between min-h-8 max-h-12">
                        <div className="flex flex-col gap-1  flex-1">
                            <input className="p-2 pl-0 pb-0 border-b border-zinc-600 outline-0 min-h-8 max-h-8 text-sm" placeholder="Digite aqui o CEP" type="text" name="" id="" />

                            <h3 className="underline hover:text-blue-700 cursor-pointer text-xs mt-1 max-w-34 flex gap-1 items-center">
                                Não sei meu CEP
                                <ExternalLink size={14}/>
                            </h3>
                        </div>

                        <button onClick={() => setAbrirEntrega(true)} className="min-h-4 max-h-8 min-w-30 p-2 border border-black/90 flex items-center justify-center text-xs font-light transition-all duration-200 hover:bg-neutral-800 hover:text-white cursor-pointer">
                            Consultar
                        </button>
                    </div>

                    <div className={`flex flex-col gap-1 transition-all duration-200 overflow-hidden ${abrirEntrega ? 'max-h-20 mt-4' : 'max-h-0'}`}>
                        <article className="flex justify-between pb-1 border-b border-b-zinc-800/10 text-xs items-center text-zinc-700">
                            <h2>
                                <span className="font-medium">
                                    Normal
                                </span>
                                <br />
                                Em até 10 dias úteis
                            </h2>

                            <h2 className="font-semibold">
                                {16.47.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                })}
                            </h2>
                        </article>

                        <article className="flex justify-between pb-1 border-b border-b-zinc-800/10 text-xs items-center text-zinc-700">
                            <h2>
                                <span className="font-medium">
                                    Rápido
                                </span>
                                <br />
                                Em até 6 dias úteis
                            </h2>

                            <h2 className="font-semibold">
                                {17.13.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                })}
                            </h2>
                        </article>
                    </div>
                </div>

                <div className="flex flex-col gap-4 max-w-2/3 mt-2">
                    <h2 className="text-[17px]">
                        Sobre a peça
                    </h2>

                    <article className="border-b border-b-black/6 flex flex-col gap-2">
                        <span className="flex items-center justify-between text-zinc-700 font-medium text-[14px]">
                            Descrição
                        </span>
                        <p className="text-xs text-neutral-700 overflow-hidden transition-all duration-200 pb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sint ratione cumque consequatur laboriosam minus, itaque ducimus illum est modi accusamus voluptate explicabo esse consectetur quis sequi qui maxime architecto.
                        </p>
                    </article>


                </div>

            </section>

            <section className="py-30 p-4 col-span-full">
                <h1 className="text-2xl text-center font-semibold font-[Poppins]">
                    O que outros clientes estão comprando
                </h1>

                <div className="overflow-hidden relative mt-10">
                    <ChevronLeft onClick={() => setPaginaRelacionados(paginaRelacionados === 0 ? 0 : paginaRelacionados - 1)} className="cursor-pointer top-1/2 left-[2.5%] absolute -translate-y-1/2 -translate-x-full z-999" size={42}/>

                    <ChevronRight onClick={() => setPaginaRelacionados(todosProdutosRelacionados?.length! -1 > paginaRelacionados+5 ? paginaRelacionados+1 : 0)} className="cursor-pointer top-1/2 right-[2.5%] absolute -translate-y-1/2 translate-x-full z-999" size={42}/>


                <div
                    className="flex items-center justify-center transition-transform duration-500"
                    style={{
                    transform: `translateX(-${paginaRelacionados * 20}%)`
                    }}
                >

                    {todosProdutosRelacionados?.map((item) => (
                    <div className="w-1/5 shrink-0 flex justify-center">
                        <CardProduto itens={[item]} />
                    </div>
                    ))}


                </div>
                </div>
            </section>
        </div>
    )
}