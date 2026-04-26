import type { ReactNode } from "react";
import HeaderFixo from "./headerFixo";
import FooterFixo from "./footerFixo";
import { useEffect, useState } from "react";
import MenuAberto from "../menuAberto";
import CarrinhoDeCompras from "../carrinhoCompras";
import Login from "../login";
import FiltroModal from "../filtroLayout";
import { contextFavoritos } from "../../context/favoritesContext";
import { FiltroOrdemFixo } from "../../components/filtro-e-ordem";
import { contextAuth } from "../../context/authContext";
import TelaLoading from "../telaLoading";
import { contextCart } from "../../context/cartContext";


interface Props {
    children: ReactNode;
}

type produtoExtra = {subtitulo: string, linkSubtitulo: string;}
type Topico = {
nome: string;
navigate: string;
produtosExtra?: produtoExtra[];
imagem?: string;
};

export default function PaginaPadrao({children}: Props) {
    const {mostrarFiltroModal, mostrarSearch, mostrarLogin, setMostrarLogin} = contextFavoritos();
    const [loading, setLoading] = useState(true);
    const {user, session} = contextAuth();
    const {mostrarCarrinho, setMostrarCarrinho} = contextCart();
    const [topicoAtual, setTopicoAtual] = useState<Topico | null>(null);
    const [largura, setLargura] = useState(window.innerWidth);
    const root = window.document.documentElement;
    root.style.transition = 'all 0.3s';
    root.style.marginTop = largura < 1024 ? mostrarSearch ? '130px' : '82px' : '108px';

    useEffect(() => {
        if (user !== undefined && session !== undefined) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [user, session]);



    useEffect(() => {
        setLargura(window.innerWidth);
    }, [window.innerWidth]);

    useEffect(() => {
        root.style.overflowY = (mostrarCarrinho || mostrarFiltroModal) ? 'hidden' : 'auto';
    }, [mostrarCarrinho, mostrarFiltroModal]);


    return (
        <>
            {loading ?
                <TelaLoading />
            :
            <>
            {!mostrarFiltroModal &&
                <>
                <header className="fixed top-0 min-h-7 max-h-7 left-0 right-0 bg-[#C4B5A0] z-1001 flex items-center justify-center">
                    <h1 className="text-white text-[12px] text-shadow-xs font-medium tracking-widest">FRETE GRÁTIS ATÉ O FIM DE ABRIL</h1>
                </header>

                <FiltroOrdemFixo/>
                </>
            }

            <FiltroModal/>

            <MenuAberto/>

            {mostrarLogin &&
                <>
                <Login/>
                <div onClick={() => setMostrarLogin(false)} className="inset-0 backdrop-blur-[1px] bg-black/50 fixed z-1002"/>
                </>
            }

            {mostrarCarrinho &&
                <div onClick={() => setMostrarCarrinho(false)} className="inset-0 backdrop-blur-[1px] bg-black/36 fixed z-1002"/>
            }

            <CarrinhoDeCompras/>

            <HeaderFixo topicoAtual={topicoAtual} setTopicoAtual={setTopicoAtual}/>

            {children}

            <FooterFixo />

            {topicoAtual&&
                <div className="inset-0 backdrop-blur-[0.4px] bg-black/8 fixed z-998"/>
            }

            </>
            }

        </>
    );
}
