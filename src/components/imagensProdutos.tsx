import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";


interface Props {
    imagens: {
        id: number;
        img: string;
    }[];
    imagemEscolhida: number;
    setMostrarImagemCheia: (v: boolean) => void;
}


export default function ImagensProdutos({imagens, imagemEscolhida, setMostrarImagemCheia}: Props) {
    let primeiraImagem = structuredClone(imagens);
    primeiraImagem = primeiraImagem.filter((img) => img.id === imagemEscolhida);
    const outrasImagens = imagens.filter((img) => img.id !== imagemEscolhida);
    const [index, setIndex] = useState(-1);

    return (
        <div className="min-h-full min-w-full flex items-center justify-center bg-black/90">
            <span onClick={() => setMostrarImagemCheia(false)} className="p-2 rounded-full bg-white text-black absolute top-4 right-4 cursor-pointer">
                <X size={24}/>
            </span>

            <span onClick={() => setIndex(index === 1 ? - 1 : index === -1 ? outrasImagens.length - 1 : index - 1)} className="p-4 rounded-full bg-white text-black absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer">
                <ChevronLeft size={28}/>
            </span>

            {index === -1 ?
            <img src={primeiraImagem[0].img} className="max-h-[70vh] min-h-[70vh] max-w-[45vh] min-w-[45vh] object-cover" alt="" />
            :
            <img src={outrasImagens[index].img} className="max-h-[70vh] min-h-[70vh] max-w-[45vh] min-w-[45vh] object-cover" alt="" />
            }

            <span onClick={() => setIndex(index === -1 ? 1 : index === outrasImagens.length - 1? -1 : index + 1)} className="p-4 rounded-full bg-white text-black absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
                <ChevronRight size={28}/>
            </span>
        </div>
    )
}