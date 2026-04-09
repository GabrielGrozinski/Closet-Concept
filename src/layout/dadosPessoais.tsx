import { useEffect, useState } from "react";
import { supabase } from "../auth/supabase-client";
import { contextAuth } from "../context/authContext";



export default function DadosPessoais() {
    const {user} = contextAuth();
    const [requisitoCadastro, setRequisitoCadastro] = useState(false);
    const [form, setForm] = useState({
        nome: "Gabriel",
        sobrenome: "Grozinski",
        cpf: "464.751.998-85",
        telefone: "(11) 94444-5511",
        data: "20/04/2004"
    });
    const [formOriginal, setFormOriginal] = useState(form);

    type CampoStatus = "sem-clicar" | "clicando" | "ja-clicou";
    type inputType = {
        name: "nome" | "sobrenome" | "telefone" | "data" | "cpf",
        label: string,
        type: string,
        value: string,
        hasToggle?: boolean
    }

    const [campoStatus, setCampoStatus] = useState<Record<string, CampoStatus>>({
    nome: "sem-clicar",
    sobrenome: "sem-clicar",
    telefone: "sem-clicar",
    data: "sem-clicar",
    cpf: "sem-clicar",
    });

    const inputs: inputType[] = [
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
        name: "cpf",
        label: "*CPF",
        type: "text",
        value: form.cpf,
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
    ];

    function ajustarTelefone(telefone: string) {
        if (telefone.length === 12) return;
        const corrigido = `(${telefone.substring(0, 2)}) ${telefone.slice(2, 3)} ${telefone.slice(3, 7)}-${telefone.slice(7)}`;

        if (telefone.length === 0) {
            return setForm((prev) => ({
                    ...prev,
                    telefone: '',
                    }));
        }

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

    useEffect(() => {
        const todosPreenchidos = Object.values(form).every(
        (valor) => valor.trim() !== ""
        );

        const allValues = Object.values(form);
        const allValuesOriginal = Object.values(formOriginal);
        const isIgual = allValues.every((v) => allValuesOriginal.includes(v));

        if (isIgual) {
            setRequisitoCadastro(false);
        } else {
            setRequisitoCadastro(todosPreenchidos);
        }
    }, [form, formOriginal]);

    async function atualizarDados() {
        if (!user) return;
        const {data, error} = await supabase
            .from('usuarios')
            .update({
                cpf: form.cpf,
                nome: form.nome,
                sobrenome: form.sobrenome,
                telefone: form.telefone,
                data_nascimento: form.data
            })
            .eq('id', user.id);
        
        if (error) {
            console.error('Houve um erro', error);
            return;
        }

        if (data) {
            setFormOriginal(form);
        }
    }



    return (
        <div>
            <h1 className="text-xl font-bold">Dados Pessoais</h1>

            <section className="p-2 max-w-4/5 flex flex-col">
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
                            const val = e.currentTarget.value.trim();

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
                                    : "border-b-zinc-800/20"
                                }
                            `}
                        />

                        <label
                            className={`absolute left-0 translate-x-0 text-gray-800/75 top-1/2 transition-all duration-200 ${
                            (status === "clicando" || input.value !== "")
                                ? "-translate-[200%] text-xs font-bold"
                                : "-translate-full text-sm font-medium"
                            }`}
                        >
                            {input.label}
                        </label>
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

                    </div>
                    );
                })}

                <div className="flex min-w-4/5 max-w-4/5 items-center justify-center mt-12">
                    <button disabled={!requisitoCadastro} onClick={() => atualizarDados()} className={`p-2 min-w-1/2 max-w-1/2 min-h-10 font-medium text-white text-sm rounded-md transition-all duration-200 ${requisitoCadastro ? 'bg-[#222222] cursor-pointer' : 'cursor-not-allowed opacity-70 bg-[#2222229a]'}`}>
                        Salvar Alterações
                    </button>
                </div>
            </section>
        </div>
    )
}