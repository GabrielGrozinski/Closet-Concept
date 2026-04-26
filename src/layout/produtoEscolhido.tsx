import "../styles/produtoEscolhido.css";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"
import { supabase } from "../auth/supabase-client";
import ImagensProdutos from "../components/imagensProdutos";
import { CreditCard, Heart, Truck } from "lucide-react";


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
    const [produto, setProduto] = useState<ItensBase | undefined>();
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const [imagemEscolhida, setImagemEscolhida] = useState(1);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [mostrarImagemCheia, setMostrarImagemCheia] = useState(false);

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


    if (!produto) return;


    return (
        <div className="min-h-screen grid grid-cols-[35%_1fr]">
            {mostrarImagemCheia &&
                <span className="inset-0 fixed z-1010">
                    <ImagensProdutos imagemEscolhida={imagemEscolhida} setMostrarImagemCheia={setMostrarImagemCheia} imagens={allImages} />
                </span>
            }

            <section ref={scrollRef} style={{pointerEvents: mostrarImagemCheia ? 'none' : 'auto'}} className="h-[115vh] overflow-y-auto no-scrollbar relative cursor-zoom-in">
            
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
                        className="w-full h-[115vh] object-cover scroll-mt-[12vh]"
                        alt={`imagem-${img.id}`}
                    />
                    ))}
                </div>

            </section>

            <section className="font-[Poppins] gap-4 flex flex-col pl-12 pr-10 pt-18">
                <h1 className="tracking-[0.5px] font-light text-2xl">
                    {produto.nome}
                </h1>

                <span className="flex flex-col">
                    <h2 className="flex gap-2 text-xl text-neutral-800">
                        <span className="text-base text-neutral-500 line-through flex items-center">
                            R${produto.precoOriginal}
                        </span>
                        <span className="flex items-center font-semibold">
                            R${produto.precoAtual}
                        </span>
                    </h2>

                    <h2 className="mt-1 flex gap-1 text-sm">
                        ou 
                        <strong className="font-semibold">
                            R${(produto.precoAtual*0.95).toFixed(2)}
                        </strong> 
                        com Pix
                    </h2>
                </span>

                <h2 className="flex gap-1 items-center">
                    <CreditCard size={22}/> 
                    10x de <strong className="font-semibold">R${produto.precoAtual/10}</strong> sem juros
                </h2>

                <div className="flex flex-col gap-1">
                    <h1>
                        Cor: Bordo
                    </h1>
                    
                    <aside className="mt-1">
                        <div className="rounded-full border-3 border-white max-w-6 max-h-6 min-h-6 outline outline-slate-800 bg-red-800 cursor-pointer">
                        </div>
                    </aside>
                </div>

                <div className="flex items-center gap-2 mt-2">
                    <h1>
                        Tamanho:
                    </h1>

                    <aside className="flex text-sm gap-2">
                        <span className="min-w-12 min-h-4 rounded-2xl p-1 bg-black text-white flex justify-center items-center cursor-pointer">
                            P
                        </span>

                        <span className="min-w-12 min-h-4 rounded-2xl p-1 bg-white text-black flex justify-center items-center border cursor-pointer">
                            M
                        </span>
                    </aside>
                </div>

                <section className="flex gap-4">
                    <button className="cursor-pointer min-h-10 max-h-10 min-w-1/2 bg-black text-white p-2 rounded-md text-sm">
                        Adicionar à sacola
                    </button>

                    <button className="rounded-md border p-2 max-h-10 min-h-6 cursor-pointer">
                        <Heart/>
                    </button>
                </section>

                <h3 className="flex gap-1 items-center -mt-2 text-neutral-700 text-sm">
                    <Truck size={18}/> 
                    frete grátis!
                </h3>


            </section>
        </div>
    )
}