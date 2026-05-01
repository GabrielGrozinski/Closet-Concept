import { useEffect, useState } from "react";
import fundo from '../assets/fundo.png';
import { Home, Box, User, FolderOpen, Rocket, Mail, ChevronDown, ArrowRight, Eye, Code, Globe, Target, LineChart, Bot, Settings } from "lucide-react";
import perfil from '../assets/perfil.png';


export default function Teste() {
    const br = {
        header: {
            title: 'Quem sou eu?',
            tipos: ['Desenvolvedor Full-Stack', 'Analista de Sistemas', 'Escritor e Professor nas horas vagas'],
            desc: 'Desenvolvedor Full-Stack criando experiências digitais inovadoras com paixão e precisão.',
            btn_falar: 'Fale Comigo',
            btn_projeto: 'Ver Projetos'
        },
        main: {
            servico: {
                title: 'Meus Serviços',
                subtitle: 'O que faço',
                desc: 'Soluções eficazes para aumentar sua visibiliade e imapcto no mundo digital.',
                projetos: [
                    {
                        title: 'Software Developer',
                        desc: 'Desenvolvimento de soluções completas com tecnologias modernas do mercado.',
                        rodape: 'Full Stack',
                        icone: <Code size={30}/>
                    },
                    {
                        title: 'Sites Profissionais',
                        desc: 'Sites rápidos, modernos e pensados para conversão. Presença digital que gera credibilidade e atrai clientes.',
                        rodape: 'Web',
                        icone: <Globe size={30}/>
                    },
                    {
                        title: 'Marketing Digital',
                        desc: 'Estratégias completas de marketing digital para aumentar a presença e visibilidade da sua marca.',
                        rodape: 'Digital',
                        icone: <Target size={30}/>
                    },
                    {
                        title: 'Tráfego Pago',
                        desc: 'Gestão inteligente de campanhas patrocinadas para maximizar conversões e resultados.',
                        rodape: 'Ads',
                        icone: <LineChart size={30}/>
                    },
                    {
                        title: 'Automações',
                        desc: 'Automatize processos e reduza trabalho manual. Chatbots, fluxos de atendimento e rotinas inteligentes.',
                        rodape: 'Automação',
                        icone: <Bot size={30}/>
                    },
                    {
                        title: 'Sistemas Personalizados',
                        desc: 'Soluções sob medida para organizar e escalar seu negócio. Painéis, CRMs e ERPs do jeito que você precisa.',
                        rodape: 'Sistemas',
                        icone: <Settings size={30}/>
                    },
                ],
                btn_orcamento: 'Faça um orçamento'

            }
        }
    }

    const en = {
    header: {
        title: "Who am I?",
        tipos: [
        "Full-Stack Developer",
        "Systems Analyst",
        "Writer and part-time Teacher"
        ],
        desc: "Full-Stack Developer creating innovative digital experiences with passion and precision.",
        btn_falar: "Contact Me",
        btn_projeto: "View Projects"
    }
    }

    const root = window.document.documentElement;
    root.style.overflowX = 'hidden';
    const [tamanho, setTamanho] = useState(200);
    const [crescendo, setCrescendo] = useState(true);
    const [scrollado, setScrollado] = useState(false);
    const topicosHeader = [
        {
            texto: 'Início',
            icone: <Home size={18} className="text-white text-shadow-lg"/>
        },
        {
            texto: 'Serviços',
            icone: <Box size={18} className="text-white text-shadow-lg"/>
        },
        {
            texto: 'Sobre',
            icone: <User size={18} className="text-white text-shadow-lg"/>
        },
        {
            texto: 'Projetos',
            icone: <FolderOpen size={18} className="text-white text-shadow-lg"/>
        },
        {
            texto: 'Carreira',
            icone: <Rocket size={18} className="text-white text-shadow-lg"/>
        },
        {
            texto: 'Contato',
            icone: <Mail size={18} className="text-white text-shadow-lg"/>
        },
    ];
    const idiomas = [
        {
            texto: 'br', 
            bandeira: "https://flagcdn.com/w160/br.png"
        },
        {
            texto: 'en', 
            bandeira: "https://flagcdn.com/w160/us.png"
        },
    ]
    const [idiomaAtual, setIdiomaAtual] = useState(idiomas[0]);
    const [mostrarIdiomas, setMostrarIdiomas] = useState(false);
    const [topicoAtual, setTopicoAtual] = useState(topicosHeader[0].texto);
    const traducao = {
        br, en
    }
    const [lang, setLang] = useState('br');

    const [textoAtual, setTextoAtual] = useState("");
    const [i, setI] = useState(0);
    const [apagando, setApagando] = useState(false);

    useEffect(() => {
        let timeout;

        const textoCompleto = traducao.br.header.tipos[i];

        if (!apagando) {
        timeout = setTimeout(() => {
            setTextoAtual(textoCompleto.substring(0, textoAtual.length + 1));

            if (textoAtual.length + 1 === textoCompleto.length) {
            setTimeout(() => setApagando(true), 1500);
            }
        }, 100);
        } else {
        timeout = setTimeout(() => {
            setTextoAtual(textoCompleto.substring(0, textoAtual.length - 1));

            if (textoAtual.length === 0) {
            setApagando(false);
            setI((prev) => (prev + 1) % traducao.br.header.tipos.length);
            }
        }, 50);
        }

        return () => clearTimeout(timeout);
    }, [textoAtual, apagando, i]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTamanho((prev) => {
                if (prev >= 310) setCrescendo(false);
                if (prev <= 200) setCrescendo(true);

                return crescendo ? prev + 5 : prev - 5;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [crescendo]);

    useEffect(() => {
        const handleScroll = () => setScrollado(window.scrollY > 20);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className={`font-[Poppins] min-h-[340vh] flex flex-col bg-[#020617] pt-28`}>
            <img className="fixed z-1 inset-0 opacity-2 object-cover" src={fundo} alt="" />

            <header className={`fixed top-0 left-0 right-0 transition-all duration-200 min-h-21 max-h-21 grid grid-cols-[15%_1fr_20%] justify-items-center items-center px-[7.5%] border-b z-999 ${!scrollado ? 'border-b-[#02061701] bg-[#02061701]' : 'border-b-zinc-300/8 bg-linear-to-r from-[#010517] to-black'}`}>
                <span className="flex items-center gap-2">
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                    >
                        <defs>
                        <linearGradient
                            id="gradG"
                            x1="0%"
                            y1="50%"
                            x2="100%"
                            y2="50%"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0%" stopColor="#00D4FF" />
                            <stop offset="100%" stopColor="#A855F7" />
                        </linearGradient>
                        </defs>

                        <path
                        d="M50 15 A35 35 0 1 0 85 50 H60"
                        stroke="url(#gradG)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        />
                    </svg>

                    <h1 className="text-white text-shadow-xs tracking-wider font-semibold text-xl leading-none">
                        Gabriel
                        <span className="text-base block bg-linear-to-r from-[#3B82F6] via-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent -mt-1">
                            Dev
                        </span>
                    </h1>
                </span>

                <section className="grid grid-cols-6 gap-2 rounded-full p-2 bg-[#0b102b] border border-slate-800/50 min-w-2/3 max-w-2/3">
                    {topicosHeader.map((t, index) => 
                        <div 
                        onClick={() => setTopicoAtual(t.texto)}
                        key={index} className={`flex items-center justify-center text-shadow-sm text-sm text-slate-400 p-2.5 px-1.5 transition-color transition-transform duration-200 hover:text-slate-100 rounded-full cursor-pointer relative ${topicoAtual === t.texto ? 'bg-linear-to-r from-[#00D4FF] via-[#3B82F6] to-[#3B82F6] shadow-[1px_2px_5px_#ffffff4a]' : 'hover:-translate-y-0.75'}`}>
                            {topicoAtual !== t.texto ?
                                t.texto
                            :
                                t.icone
                            }
                        </div>
                    )}
                </section>

                <section className="ml-auto flex gap-4 items-center">
                    <div className="relative" onClick={() => setMostrarIdiomas(!mostrarIdiomas)}>
                        <h2 className="font-medium uppercase text-white text-shadow-xs flex gap-0.5 items-center cursor-pointer">
                            <img className="rounded-full max-w-9 min-w-9 max-h-7 min-h-7 scale-80 cursor-default" src={idiomaAtual.bandeira} alt="" />
                            {idiomaAtual.texto}
                            <ChevronDown className={`${mostrarIdiomas && 'rotate-180'} transition-all duration-150`} size={20}/>
                        </h2>

                        <div className={`absolute min-w-full bottom-0 translate-y-24 flex flex-col transition-all duration-150 bg-black/20 ${mostrarIdiomas ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
                            {idiomas.map((i, index) =>
                                <span onClick={() => {
                                    setIdiomaAtual(i);
                                    setLang(i.texto);
                                    }} 
                                    key={index} className="flex items-center justify-between px-[17.5%] gap-2 cursor-pointer transition-all duration-200 hover:bg-black/40 p-1 py-2">
                                    <img src={i.bandeira} className="rounded-full min-w-6 max-w-6 max-h-4.75 min-h-4.75" alt="" />

                                    <h2 className="font-medium uppercase text-white text-shadow-xs">
                                        {i.texto}
                                    </h2>
                                </span>
                            )}
                        </div>
                    </div>

                    <span className="w-11.5 h-11.5 scale-90 bg-[#25D366] flex items-center justify-center rounded-full cursor-pointer transition-all duration-150 hover:bg-[#38da74] shadow-[1px_1px_4px_#ffffff4a]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-83.77245 -140.29175 726.0279 841.7505">
                            <path d="M407.185 336.283c-6.948-3.478-41.108-20.284-47.477-22.606-6.368-2.318-11-3.476-15.632 3.478-4.632 6.954-17.948 22.606-22.001 27.244-4.052 4.636-8.106 5.218-15.054 1.738-6.948-3.477-29.336-10.813-55.874-34.486-20.655-18.424-34.6-41.176-38.652-48.132-4.054-6.956-.434-10.716 3.045-14.18 3.127-3.114 6.95-8.116 10.423-12.174 3.474-4.056 4.632-6.956 6.948-11.59 2.316-4.639 1.158-8.695-.58-12.172-1.736-3.478-15.632-37.679-21.422-51.592-5.64-13.547-11.368-11.712-15.633-11.927-4.048-.201-8.685-.244-13.316-.244-4.632 0-12.16 1.739-18.53 8.693-6.367 6.956-24.317 23.767-24.317 57.964 0 34.202 24.896 67.239 28.371 71.876 3.475 4.639 48.993 74.818 118.695 104.914 16.576 7.16 29.518 11.434 39.609 14.636 16.644 5.289 31.79 4.542 43.763 2.753 13.349-1.993 41.108-16.807 46.898-33.036 5.79-16.233 5.79-30.144 4.052-33.041-1.736-2.899-6.368-4.638-13.316-8.116m-126.776 173.1h-.093c-41.473-.016-82.15-11.159-117.636-32.216l-8.44-5.01-87.475 22.947 23.348-85.288-5.494-8.745c-23.136-36.798-35.356-79.328-35.338-123 .051-127.431 103.734-231.106 231.22-231.106 61.734.022 119.763 24.094 163.402 67.782 43.636 43.685 67.653 101.754 67.629 163.51-.052 127.442-103.733 231.126-231.123 231.126M477.113 81.55C424.613 28.989 354.795.03 280.407 0 127.136 0 2.392 124.736 2.33 278.053c-.02 49.011 12.784 96.847 37.118 139.019L0 561.167l147.41-38.668c40.617 22.153 86.346 33.83 132.886 33.845h.114c153.255 0 278.01-124.748 278.072-278.068.028-74.301-28.869-144.165-81.369-196.725" fill="#FFF" fill-rule="evenodd"/>
                        </svg>
                    </span>
                </section>
            </header>

            <header className="min-h-screen pt-10 z-1 px-[10%]">
                <div className="absolute top-0 right-0 w-100 h-100 bg-blue-500 opacity-35 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-700 opacity-60 -translate-x-1/4 translate-y-1/4 blur-[120px] rounded-full"></div>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 opacity-50 blur-[100px] rounded-full transition-all duration-100"
                    style={{
                        width: `${tamanho}px`,
                        height: `${tamanho}px`,
                    }}
                />

                <div className="flex items-center justify-between">
                    <section className="flex flex-col gap-8">
                        <h1 className="text-center text-xs font-medium px-2.75 bg-[#091133] border border-[#00D4FF4a] text-[#17c9ff] text-shadow-xs mr-auto p-2 rounded-full">
                            {traducao.br.header.title}
                        </h1>

                        <h1 className="text-white text-6xl text-shadow-sm tracking-[1.2px] font-medium">
                            <span className="text-7xl">G</span>abriel
                            <br />
                            <span className="text-[#298ee9]">
                                <span className="text-7xl">G</span>rozinski
                            </span>
                        </h1>

                        <h2 className="text-2xl bg-linear-to-r from-[#52aeff] bg-clip-text text-transparent via-[#0377de] to-[#047fea] font-medium font-mono text-shadow-[1px_1px_1px_#ffffff3a]">
                            {textoAtual}
                            <span className="text-neutral-200 text-shadow-sm">
                                |
                            </span>
                        </h2>

                        <p className="text-slate-400 font-medium max-w-3/4 text-shadow-sm">
                            {traducao.br.header.desc}
                        </p>

                        <section className="flex gap-4 font-semibold">
                            <button className="p-4 text-white shadow-[0px_2px_5px_#ffffff3a] bg-linear-to-r from-[#00a6ff] via-[#3B82F6] to-[#692ffc] text-[15px] flex justify-center items-center gap-2.25 rounded-full tracking-[0.6px] px-6.5 cursor-pointer transition-all duration-220 hover:-translate-y-2 hover:shadow-[0px_2px_12px_#ffffff5a]">
                                {traducao.br.header.btn_falar}
                                <ArrowRight/>
                            </button>

                            <button className="p-4 text-white bg-[#13192f] border border-slate-400/24 rounded-full flex justify-center items-center gap-2.25 text-[15px] tracking-[0.6px] px-6.5 cursor-pointer transition-all duration-220 hover:-translate-y-2 hover:border-[#00a6ff8c]">
                                <Eye/>
                                {traducao.br.header.btn_projeto}
                            </button>
                        </section>
                    </section>

                    <img className="object-cover rounded-full max-w-[40vw] max-h-[40vw] mr-auto shadow-[10px_0px_20px_#0000002a]" src={perfil} alt="" />
                </div>

            </header>

            <main className="pt-[10vh]">
                <section className="flex flex-col items-center justify-center pt-16 pb-26 gap-6 relative px-[10%] bg-linear-to-b from-[#020617] via-[#050818] to-[#0c1025]">
                        <div className="absolute top-0 right-0 w-100 h-100 bg-blue-500 opacity-35 blur-[120px] rounded-full translate-x-[42%] -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-700 opacity-35 -translate-x-[46%] translate-y-[60%] blur-[120px] rounded-full"></div>

                        <h1 className="text-center text-sm font-medium px-3.5 bg-[#091133] border border-[#00D4FF4a] text-[#17c9ff] text-shadow-xs p-2 rounded-full uppercase tracking-[1px] z-2">
                            {traducao.br.main.servico.title}
                        </h1>

                        <h1 className="text-[#298ee9] text-6xl text-shadow-sm tracking-[1.2px] font-medium z-2">
                            {traducao.br.main.servico.subtitle}
                        </h1>

                        <p className="text-slate-400 font-medium max-w-[40%] text-center text-shadow-sm z-2">
                            {traducao.br.main.servico.desc}
                        </p>

                        <section className="flex flex-wrap gap-6 mt-10 z-2">
                            {traducao.br.main.servico.projetos.map((p, index) =>
                                <article
                                key={index}
                                className="rounded-[8%] min-h-84 max-h-92 min-w-[25vw] max-w-[25vw] p-6.5 px-10 bg-[#070c23] border border-slate-500/10 grid grid-rows-[1fr_50%_1fr] justify-items-start group hover:shadow-[0px_1px_8px_#ffffff4a] hover:border-[#00a6ff7a] relative transition-all duration-400 ease hover:-translate-y-1.75"
                                >
                                    <div
                                    className="absolute inset-0 group-hover:bg-sky-300/12 bg-white/2 transition-all duration-200 rounded-[8%]"
                                    />

                                    <span className="shadow-[0px_0px_10px_#ffffff4a] bg-linear-to-b from-[#00a6ff] mt-auto via-[#3B82F6] to-[#3B82F6] group-hover:shadow-[0px_2px_6px_#ffffff3a] group-hover:rotate-4 transition-all duration-400 group-hover:scale-110 rounded-2xl p-4 text-white">
                                        {p.icone}
                                    </span>

                                    <div className="text-shadow-lg flex flex-col gap-2 mt-6">
                                        <h1 className="text-white text-xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#00a6ff] group-hover:via-[#3B82F6] group-hover:to-[#3B82F6]">
                                            {p.title}
                                        </h1>

                                        <p className="text-slate-300/70 leading-6 text-sm mt-0.5">
                                            {p.desc}
                                        </p>
                                    </div>

                                    <div className="py-4 border-t border-t-neutral-400/10 grid grid-cols-[33%_1fr] items-center min-w-full gap-2">
                                        <h2 className="text-center text-xs font-medium px-2.75 bg-[#091133] border border-[#00D4FF4a] text-[#17c9ff] text-shadow-xs p-2 rounded-full flex items-center justify-center mr-auto">
                                            {p.rodape}
                                        </h2>

                                        <span className="min-h-0.75 max-h-0.75 bg-linear-to-r from-neutral-400/10 via-neutral-400/4 to-neutral-400/0">

                                        </span>
                                    </div>
                                </article>
                            )}
                        </section>

                        <button className="p-5 text-white shadow-[0px_2px_5px_#ffffff3a] bg-linear-to-r from-[#00a6ff] via-[#3B82F6] to-[#692ffc] flex justify-center items-center gap-2.25 rounded-full tracking-[0.6px] px-7 cursor-pointer transition-all duration-220 hover:-translate-y-2 hover:shadow-[0px_2px_12px_#ffffff5a] mt-8 font-semibold z-2 group relative overflow-hidden">
                            {traducao.br.main.servico.btn_orcamento}
                            <ArrowRight/>

                            <div
                            className="absolute min-h-full w-1/4 left-0 -translate-x-10 transition-all duration-220 bg-red-400 blur-[120px] rounded-full group-hover:left-full group-hover:translate-x-10"
                            />
                        </button>
                </section>
            </main>
        </div>
    )
}