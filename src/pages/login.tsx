import { useEffect, useState } from "react";
import { EyeOff, Eye, X } from "lucide-react";
import "../styles/login.css";
import { contextAuth } from "../context/authContext";
import { ClipLoader } from "react-spinners";
import Cadastro from "./cadastro";


interface Props {
    setMostrarLogin: (v: boolean) => void;
}


export default function Login({setMostrarLogin}: Props) {
    const {fazerLogin} = contextAuth();
    const [loading, setLoading] = useState(false);
    const [campoEmail, setCampoEmail] = useState<"sem-clicar" | "clicando" | "ja-clicou">("sem-clicar");
    const [campoSenha, setCampoSenha] = useState<"sem-clicar" | "clicando" | "ja-clicou">("sem-clicar");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [efeitoIn, setEfeitoIn] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [erroLogin, setErroLogin] = useState('');
    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    useEffect(() => {
        setEfeitoIn(true)
    }, []);

    async function login() {
        try {
            setLoading(true);
            const cadastroRealizado = await fazerLogin(email, senha)
            if (cadastroRealizado.success) {
                console.log('login bem realizado!');
                window.location.reload();
            } else {
                setErroLogin(cadastroRealizado.error!);
                alert('Erro');
            }
        } catch (erro) {
            console.error('Houve um erro', erro);
            alert('Erro');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={`z-1003 rounded-md fixed top-1/2 left-1/2 -translate-1/2 transition-all duration-100 bg-[#f5f4f3] shadow-lg max-h-160 ${efeitoIn ? 'sm:max-w-120  sm:min-w-120 min-w-full max-w-full scale-94 sm:scale-100' : 'max-w-0 min-w-0'} overflow-hidden`}>

            <main className="min-h-screen flex flex-col">
                <header className="bg-[#222222] min-w-full flex p-2 items-center justify-center max-h-14 min-h-14 relative">
                    <h1 className="text-white text-xl uppercase tracking-[1px] font-light font-[Poppins]">{mostrarCadastro ? 'Cadastro' : 'Login'}</h1>

                    <X onClick={() => setMostrarLogin(false)} className="absolute right-6 top-1/2 -translate-y-1/2 translate-x-1/2 text-white cursor-pointer" size={24}/>
                </header>

                    <main id="container-login" className={`px-[10%] relative lg:px-[15%] mt-1 flex flex-col gap-4 ${mostrarCadastro ? '' : 'pt-12'} overflow-y-auto max-h-[80vh]`}>

                        {mostrarCadastro ?
                            <Cadastro setMostrarCadastro={setMostrarCadastro} />
                        :
                        <>

                            <section className="mb-10">

                                <div className="relative">

                                    <label
                                        className={`absolute left-0 translate-x-0 text-gray-800/75 top-1/2 transition-all duration-200 ${
                                        campoEmail === "clicando"
                                            ? "-translate-[200%] text-xs font-bold"
                                            : "-translate-full text-sm font-medium"
                                        }`}
                                    >
                                        *E-mail ou CPF
                                    </label>

                                    <input
                                    autoComplete="off"
                                    type="email"
                                    name=""
                                    id=""
                                    onFocus={() => {
                                        setCampoEmail("clicando");
                                    }}
                                    onBlur={() => {
                                        setCampoEmail(email.length > 0 ? 'clicando' : "ja-clicou");
                                    }}
                                    onChange={(e) => {
                                        setEmail((e.currentTarget.value).trim().toLowerCase());
                                    }}
                                    className={`border-0 border-b-2 min-w-full pb-0.5 outline-0 ${campoEmail === "ja-clicou" ? 'border-b-red-600' : 'border-b-zinc-800'}`}
                                    />
                                </div>

                                {campoEmail === "ja-clicou" &&
                                    <p className="font-medium text-red-500">
                                        este campo é obrigatório
                                    </p>
                                }

                                <div className="relative mt-10">

                                    <label
                                        className={`absolute left-0 translate-x-0 text-gray-800/75 top-1/2 transition-all duration-200 ${
                                        campoSenha === "clicando"
                                            ? "-translate-[200%] text-xs font-bold"
                                            : "-translate-full text-sm font-medium"
                                        }`}
                                    >
                                        *Senha
                                    </label>

                                    <input
                                    type={mostrarSenha ? 'text' : 'password'}
                                    name=""
                                    id=""
                                    onFocus={() => {
                                        setCampoSenha("clicando");
                                    }}
                                    onBlur={() => {
                                        setCampoSenha(senha.length > 0 ? 'clicando' : "ja-clicou");
                                    }}
                                    onChange={(e) => setSenha((e.currentTarget.value).trim())}
                                    className={`border-0 border-b-2 pb-0.5 min-w-full outline-0 ${campoSenha === "ja-clicou" ? 'border-b-red-600' : 'border-b-zinc-800'}`}
                                    />

                                    {mostrarSenha ? 
                                        <Eye onClick={() => setMostrarSenha(false)} className="absolute right-2 top-1/2 -translate-y-[calc(50%+2px)] max-h-6 max-w-6" />   
                                    :
                                        <EyeOff onClick={() => setMostrarSenha(true)} className="absolute right-2 top-1/2 -translate-y-[calc(50%+2px)] max-h-6 max-w-6" />
                                    }

                                    {erroLogin &&
                                        <p className="text-red-600 absolute bottom-0 left-0 translate-y-10 font-medium">
                                            {erroLogin}
                                        </p>
                                    }
                                </div>
                                {campoSenha === "ja-clicou" &&
                                    <p className="font-medium text-red-500">
                                        este campo é obrigatório
                                    </p>
                                }

                                <p className="text-zinc-700 cursor-pointer active:text-blue-600/60 underline text-right mt-4 font-medium">
                                    Esqueci minha senha
                                </p>

                            </section>

                            {loading ?
                                <ClipLoader size={30} className="self-center" color="#000" />
                            :
                                <button disabled={!email || !senha} onClick={() => login()} className={`bg-zinc-800 text-white font-medium transition-all duration-100 text-center p-2 min-w-30 rounded-2xl border border-slate-800/30 ${(email && senha) ? 'active:scale-98 cursor-pointer' : 'opacity-50 bg-zinc-800/70 cursor-not-allowed'}`}>Login</button>
                            }

                            <span className="flex items-center justify-center gap-2">
                                <span className="min-h-px max-h-px min-w-[40%] bg-slate-900/30 translate-y-0.75"></span>
                                ou
                                <span className="min-h-px max-h-px min-w-[40%] bg-slate-900/30 translate-y-0.75"></span>
                            </span>

                            <button onClick={() => setMostrarCadastro(true)} className="active:scale-98 transition-all font-medium duration-100 p-2 min-w-30 text-center rounded-2xl border border-slate-800/36 text-[#222222] bg-white cursor-pointer">
                                Cadastro
                            </button>

                        </>
                        }
                    </main>
            </main>

        </div>
    )
}