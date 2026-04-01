import { useEffect, useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [campoEmail, setCampoEmail] = useState<"sem-clicar" | "clicando" | "ja-clicou">("sem-clicar");
    const [campoSenha, setCampoSenha] = useState<"sem-clicar" | "clicando" | "ja-clicou">("sem-clicar");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [efeitoIn, setEfeitoIn] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);

    useEffect(() => {
        setEfeitoIn(true)
    }, []);

    return (
        <div className={`z-30 overflow-hidden transition-all duration-300 ${efeitoIn ? 'max-w-full max-h-screen min-h-screen min-w-full' : 'max-w-0 min-w-0'}`}>

            <main className="px-[10%] lg:px-[15%] pt-6 mt-1 min-h-screen flex flex-col gap-4">

                <h1 className="font-medium text-zinc-800 flex flex-col text-center mb-4 text-xl">
                    LOGIN
                    <span className="text-red-600 text-sm">
                        *preenchimento obrigatórios
                    </span>
                </h1>

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
                    </div>
                    {campoSenha === "ja-clicou" &&
                        <p className="font-medium text-red-500">
                            este campo é obrigatório
                        </p>
                    }

                    <p className="text-zinc-700 active:text-blue-600/60 underline text-right mt-4 font-medium">
                        Esqueci minha senha
                    </p>

                </section>

                <button className="active:scale-98 bg-zinc-800 text-white font-medium transition-all duration-100 text-center p-2 min-w-30 rounded-2xl cursor-pointer border border-slate-800/30">Login</button>

                <span className="flex items-center justify-center gap-2">
                    <span className="min-h-px max-h-px min-w-[40%] bg-slate-900/30 translate-y-0.75"></span>
                    ou
                    <span className="min-h-px max-h-px min-w-[40%] bg-slate-900/30 translate-y-0.75"></span>
                </span>

                <button onClick={() => navigate('/login/cadastro')} className="active:scale-98 transition-all font-medium duration-100 p-2 min-w-30 text-center rounded-2xl text-white bg-[#6B4E37] cursor-pointer">Cadastro</button>
            </main>

        </div>
    )
}