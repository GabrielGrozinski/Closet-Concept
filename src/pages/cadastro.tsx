import { useEffect, useState } from "react";
import { EyeOff, Eye, Check, Ban } from "lucide-react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const navigate = useNavigate();

    const [requisitoMaiuscula, setRequisitoMaiuscula] = useState(false);
    const [requisitoMinuscula, setRequisitoMinuscula] = useState(false);
    const [requisitoCaractere, setRequisitoCaractere] = useState(false);

    const [form, setForm] = useState({
    email: "",
    cpf: "",
    senha: "",
    nome: "",
    sobrenome: "",
    telefone: "",
    data: ""
    });
    type CampoStatus = "sem-clicar" | "clicando" | "ja-clicou";
    type inputType = {
        name: "email" | "senha" | "nome" | "sobrenome" | "telefone" | "data" | "cpf",
        label: string,
        type: string,
        value: string,
        hasToggle?: boolean
    }

    const [campoStatus, setCampoStatus] = useState<Record<string, CampoStatus>>({
    email: "sem-clicar",
    senha: "sem-clicar",
    });
    const [efeitoIn, setEfeitoIn] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const inputs: inputType[] = [
    {
        name: "email",
        label: "*E-mail",
        type: "email",
        value: form.email,
    },
    {
        name: "cpf",
        label: "*CPF",
        type: "text",
        value: form.cpf,
    },
    {
        name: "nome",
        label: "*Nome",
        type: "email",
        value: form.nome,
    },
    {
        name: "sobrenome",
        label: "*Sobrenome",
        type: "text",
        value: form.sobrenome,
    },
    {
        name: "data",
        label: "*Data de nascimento",
        type: "text",
        value: form.data,
    },
    {
        name: "telefone",
        label: "*Telefone",
        type: "text",
        value: form.telefone,
    },
    {
        name: "senha",
        label: "*Senha",
        type: mostrarSenha ? "text" : "password",
        value: form.senha,
        hasToggle: true,
    },
    ];
    

    useEffect(() => {
        setEfeitoIn(true)
    }, []);

    useEffect(() => {
        analisarRequisitosSenha();
    }, [form.senha]);

    function ajustarTelefone(telefone: string) {
        if (telefone.length === 12) return;
        const corrigido = `(${telefone.substring(0, 2)}) ${telefone.slice(2, 3)} ${telefone.slice(3, 7)}-${telefone.slice(7)}`;

        setForm((prev) => ({
            ...prev,
            telefone: corrigido,
        }));
    }

    function ajustarCpf(cpf: string) {
        if (cpf.length === 12) return;
        const corrigido = `${cpf.substring(0, 3)}${cpf.length > 3 ? '.' : ''}${cpf.slice(3, 6)}${cpf.length > 6 ? '.' : ''}${cpf.slice(6, 9)}${cpf.length > 9 ? '-' : ''}${cpf.slice(9)}`;

        setForm((prev) => ({
            ...prev,
            cpf: corrigido,
        }));
    }

    function ajustarData(data: string) {
        if (data.length > 8) return;
        const corrigido = `${data.substring(0, 2)}/${data.slice(2, 4)}${data.length > 4 ? '/' : ''}${data.slice(4)}`;

        setForm((prev) => ({
            ...prev,
            data: corrigido,
        }));
    }

    function analisarRequisitosSenha() {
        const senha = form.senha;
        const temMaiuscula = /[A-Z]/;
        const temMinuscula = /[a-z]/;
        const temLetra = /[A-Za-z]/;
        const temNumero = /\d/;

        if (temMaiuscula.test(senha)) {
            setRequisitoMaiuscula(true);
        } else {
            setRequisitoMaiuscula(false);
        }

        if (temMinuscula.test(senha)) {
            setRequisitoMinuscula(true);
        } else {
            setRequisitoMinuscula(false);
        }

        if (temLetra.test(senha) && temNumero.test(senha) && senha.length > 5) {
            setRequisitoCaractere(true);
        } else {
            setRequisitoCaractere(false);
        }
    }

    return (
        <div className={`z-30 overflow-y-auto transition-all duration-300 ${efeitoIn ? 'max-w-full max-h-screen min-h-screen min-w-full' : 'max-w-0 min-w-0'}`}>

            <main className="px-[10%] pb-16 pt-6 mt-1 bg-[#F5F3F0] min-h-screen flex flex-col gap-4">
                
                <h1 className="font-medium text-zinc-800 flex flex-col text-center">
                    CADASTRO
                    <span className="text-red-600 text-sm">
                        *preenchimento obrigatórios
                    </span>
                </h1>

                <section className="mb-10 mt-2">
                {inputs.map((input) => {
                    const status = campoStatus[input.name];
                    const value = form[input.name];

                    return (
                    <div key={input.name} className="mt-10">
                        <div className="relative">
                        <input
                            autoComplete="off"
                            type={input.type}
                            value={value}
                            onFocus={() => {
                            setCampoStatus((prev) => ({
                                ...prev,
                                [input.name]: "clicando",
                            }));
                            }}
                            onBlur={() => {
                            setCampoStatus((prev) => ({
                                ...prev,
                                [input.name]:
                                value.length > 0 ? "clicando" : "ja-clicou",
                            }));
                            }}
                            inputMode={input.name === 'telefone' ? "numeric" : 'text'}
                            pattern={input.name === 'telefone' ? "[0-9]*" : ''}
                            onChange={(e) => {
                            const val =
                                input.name === "email"
                                ? e.currentTarget.value.trim().toLowerCase()
                                : e.currentTarget.value.trim();

                            const apenasNumeros = e.currentTarget.value.replace(/\D/g, "");

                            input.name === 'telefone' ?
                                ajustarTelefone(apenasNumeros)
                            :
                            input.name === 'data' ?
                                ajustarData(apenasNumeros)
                            :
                            input.name === 'cpf' ?
                                ajustarCpf(apenasNumeros)
                            :
                                setForm((prev) => ({
                                    ...prev,
                                    [input.name]: val,
                                }));
                            }}
                            className={`border-0 border-b-2 min-w-full pb-0.5 outline-0 
                                ${
                                status === "ja-clicou"
                                    ? "border-b-red-600"
                                    : "border-b-zinc-800"
                                }
                                ${
                                input.name === 'senha'
                                    ? "pr-10"
                                    : "pr-0"
                                }
                            `}
                        />

                        <label
                            className={`absolute left-0 translate-x-0 text-gray-800/75 top-1/2 transition-all duration-200 ${
                            status === "clicando"
                                ? "-translate-[200%] text-xs font-bold"
                                : "-translate-full text-sm font-medium"
                            }`}
                        >
                            {input.label}
                        </label>

                        {input.hasToggle && (
                            <>
                            {mostrarSenha ? (
                                <Eye
                                onClick={() => setMostrarSenha(false)}
                                className="absolute right-2 top-1/2 -translate-y-[calc(50%+2px)] max-h-6 max-w-6"
                                />
                            ) : (
                                <EyeOff
                                onClick={() => setMostrarSenha(true)}
                                className="absolute right-2 top-1/2 -translate-y-[calc(50%+2px)] max-h-6 max-w-6"
                                />
                            )}
                            </>
                        )}
                        </div>

                        {input.name === 'telefone' &&
                            <p className="text-sm font-medium text-gray-900/70">
                                (DDD + número)
                            </p>
                        }


                        {status === "ja-clicou" && (
                        <p className="font-medium text-red-500">
                            este campo é obrigatório
                        </p>
                        )}

                        {input.name === 'senha' && 
                            <div className={`flex flex-col gap-1 ${status === "ja-clicou" ? '' : 'mt-2'}`}>
                                <p className="text-zinc-700/70 text-xs font-medium flex">
                                    Ao menos 1 letra maiúscula
                                    {requisitoMaiuscula ? 
                                        <Check className="max-h-4 ml-2 text-green-500 text-shadow-sm max-w-4" />
                                    :
                                        <Ban className="max-h-4 ml-2 translate-y-px text-red-400 text-shadow-sm max-w-4"/>
                                    } 
                                </p>

                                <p className="text-zinc-700/70 text-xs font-medium flex">
                                    Ao menos 1 letra minúscula
                                    {requisitoMinuscula ? 
                                        <Check className="max-h-4 ml-2 text-green-500 text-shadow-sm max-w-4" />
                                    :
                                        <Ban className="max-h-4 ml-2 translate-y-px text-red-400 text-shadow-sm max-w-4"/>
                                    } 
                                </p>

                                <p className="text-zinc-700/70 text-xs font-medium flex">
                                    Ao menos 6 caracteres com números e letras
                                    {requisitoCaractere ? 
                                        <Check className="max-h-4 ml-2 text-green-500 text-shadow-sm max-w-4" />
                                    :
                                        <Ban className="max-h-4 ml-2 translate-y-px text-red-400 text-shadow-sm max-w-4"/>
                                    } 
                                </p>
                            </div>
                        }
                    </div>
                    );
                })}
                </section>

                <button onClick={() => navigate('/login/cadastro')} className="active:scale-98 transition-all font-medium duration-100 p-2 min-w-30 text-center rounded-2xl text-white bg-[#6B4E37] cursor-pointer">Cadastrar</button>
            </main>

        </div>
    )
}