import { contextFavoritos } from "../context/favoritesContext";
import { Heart, MoveRight, User, X } from "lucide-react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";



type produtoExtra = {subtitulo: string, linkSubtitulo: string;}
type Topico = {
nome: string;
navigate: string;
produtosExtra?: produtoExtra[];
imagem?: string;
};


interface Props {
    setMostrarLogin: (v: boolean) => void;
}

export default function MenuAberto({setMostrarLogin}: Props) {
    const navigate = useNavigate();
    const {menuAberto, setMenuAberto} = contextFavoritos();
    
    const topicos: Topico[] = [
    { nome: "Todos os Produtos", navigate: "/" },

    { 
        nome: "Vestidos", 
        navigate: "/joias", 
        produtosExtra: [
            { subtitulo: 'Vestido Curto', linkSubtitulo: '' },
            { subtitulo: 'Vestido Longo', linkSubtitulo: '' },
            { subtitulo: 'Vestido Midi', linkSubtitulo: '' },
            { subtitulo: 'Vestido de Festa', linkSubtitulo: '' },
        ],
        imagem: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?q=80&w=687&auto=format&fit=crop'
    },

    { 
        nome: "Acessórios", 
        navigate: "/acessorios",
        produtosExtra: [
            { subtitulo: 'Relógio', linkSubtitulo: '' },
            { subtitulo: 'Cinto', linkSubtitulo: '' },
            { subtitulo: 'Óculos', linkSubtitulo: '' },
            { subtitulo: 'Bolsas', linkSubtitulo: '' },
        ],
        imagem: 'https://images.unsplash.com/photo-1625516152414-8f33eef3d660?q=80&w=764&auto=format&fit=crop'
    },

    { 
        nome: "Blusas", 
        navigate: "/sobre",
        produtosExtra: [
            { subtitulo: 'Blusa Básica', linkSubtitulo: '' },
            { subtitulo: 'Cropped', linkSubtitulo: '' },
            { subtitulo: 'Camisa Social', linkSubtitulo: '' },
            { subtitulo: 'Moletom', linkSubtitulo: '' },
        ],
        imagem: 'https://images.unsplash.com/photo-1598554793905-075f7b355cd9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    { 
        nome: "Calças", 
        navigate: "/roupas",
        produtosExtra: [
            { subtitulo: 'Calça Jeans', linkSubtitulo: '' },
            { subtitulo: 'Calça Social', linkSubtitulo: '' },
            { subtitulo: 'Legging', linkSubtitulo: '' },
            { subtitulo: 'Jogger', linkSubtitulo: '' },
        ],
        imagem: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=687&auto=format&fit=crop'
    },

    { 
        nome: "Sapatos", 
        navigate: "/sobre",
        produtosExtra: [
            { subtitulo: 'Tênis', linkSubtitulo: '' },
            { subtitulo: 'Salto Alto', linkSubtitulo: '' },
            { subtitulo: 'Sandália', linkSubtitulo: '' },
            { subtitulo: 'Bota', linkSubtitulo: '' },
        ],
        imagem: 'https://images.unsplash.com/photo-1632761298168-1b8615e4c3ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    ];
    const [topicoAtual, setTopicoAtual] = useState<Topico | null>(null);


    return (
        <div className={`z-1000 fixed left-0 top-0 transition-all duration-400 max-h-screen min-h-screen ${menuAberto ? 'min-w-full max-w-full pointer-events-auto' : 'min-w-0 max-w-0 pointer-events-none'} flex flex-col overflow-hidden bg-white`}>

            <header className={`fixed left-0 top-7 z-20 right-0 bg-[rgba(250,249,247)] max-h-30 py-3 transition-all duration-300 ${menuAberto ? 'min-w-full max-w-full' : 'min-w-0 max-w-0'} overflow-hidden min-h-13`}>
                <div className="max-w-360 mx-auto grid grid-cols-[12%_1fr_1fr] min-[500px]:grid-cols-[20%_1fr_1fr] items-center px-[5%] gap-4 pt-1">

                    <X onClick={() => {
                        setMenuAberto(false);
                        }} 
                        className="min-h-7 min-w-7 max-h-7 max-w-7"/>

                    <span className="flex justify-self-center gap-2 text-sm items-center font-[Poppins]">
                        <User onClick={() => setMostrarLogin(true)} size={20} />
                        <a className="underline" onClick={() => setMostrarLogin(true)}
                            >Login</a>
                    </span>

                    <span className="flex justify-self-center gap-2 text-sm items-center font-[Poppins]">
                        <Heart size={20} onClick={() => {
                            navigate('/lista-de-desejos');
                            setMenuAberto(false);
                        }}/>
                        <a onClick={() => {
                            navigate('/lista-de-desejos');
                            setMenuAberto(false);
                        }} 
                        className="underline">Favoritos</a>
                    </span>
                </div>
            </header>

            <section className={`fixed top-20 left-0 right-0 transition-all duration-300 ${menuAberto ? 'duration-0' : 'opacity-0'}`}>
                
                <main className="max-h-[75vh] overflow-y-auto">

                    {topicos.map((produto, index) =>
                        <div key={index} className="py-2">
                            <article 
                                onClick={() => 
                                    setTopicoAtual(produto)
                                } 
                                className="active:bg-blue-100 uppercase font-[Poppins] tracking-[1px] transition-colors duration-100 py-3 relative text-[#222222] pl-6">{produto.nome}
                            </article>

                        </div>
                    )}

                </main>

            </section>

            <section className={`fixed z-1003 top-1/2 -translate-y-1/2 rounded-xl transition-all duration-300 ease-in-out grid grid-cols-2 bg-[rgba(250,249,247)] left-1/2 shrink-0 ${topicoAtual ? 'min-w-full max-w-full min-h-[88vw] max-h-[88vw] pointer-events-auto -translate-x-1/2 opacity-100' : 'min-w-0 max-w-0 pointer-events-none -translate-x-full opacity-0'} shadow-xl overflow-hidden scale-94`}>
                {topicoAtual &&
                <>
                    <article className={`flex flex-col justify-between m-4 my-5 transition-all duration-300 ${topicoAtual ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col text-lg font-medium font-[Poppins]">
                            <span className="py-2 border-b text-[#292115] border-b-slate-400/10 mb-4 uppercase min-w-full cursor-pointer tracking-[1px] sm:text-3xl min-[500px]:text-xl">
                                {topicoAtual?.nome}
                            </span>
                            {topicoAtual?.produtosExtra?.map((topico, index) =>
                                <p key={index} className="transition-all duration-200 text-[#292621] tracking-[0.2px] hover:font-medium font-[Poppins] text-xs font-light my-0.75 cursor-pointer sm:text-2xl min-[500px]:text-lg">
                                    {topico.subtitulo}
                                </p>
                            )}
                        </div>

                        <div className={`min-w-full pt-2 border-t border-t-slate-400/10 transition-all duration-600 ${topicoAtual ? 'opacity-100' : 'opacity-0'}`}>
                            <button className="flex cursor-pointer transition-colors duration-200 hover:bg-[#f5e9d9] justify-center items-center p-2 bg-[#efdcc1] text-[#534b3f] font-medium rounded-lg text-xs sm:text-2xl min-[500px]:text-lg">
                                Explorar Coleção
                                <MoveRight size={20} className="ml-2"/>
                            </button>
                        </div>
                    </article>

                    <img className={`max-w-[96%] min-w-[96%] mr-4 mb-4 my-5 rounded-lg transition-all duration-600 ${topicoAtual ? 'min-h-[78vw] max-h-[78vw] sm:min-h-[82vw] sm:max-h-[82vw] opacity-100' : 'max-h-0 min-h-0 opacity-0'}`} src={topicoAtual?.imagem} alt="" />
                </>
                }
            </section>
            
            {topicoAtual &&
                <div onClick={() => setTopicoAtual(null)} className="z-1002 bg-black/30 inset-0 fixed backdrop-blur-[1px]" />
            }

        </div>
    )
}