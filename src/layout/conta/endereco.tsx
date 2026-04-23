import { useEffect, useState } from "react";
import { supabase } from "../../auth/supabase-client";
import { contextAuth } from "../../context/authContext";
import { ClipLoader } from "react-spinners";
import { X } from "lucide-react";

type FormState = {
    cep: string;
    endereco: string;
    bairro: string;
    numero: string;
    complemento: string;
    cidade: string;
    estado: string;
    destinatario: string;
};


export default function Endereco() {
    const {user} = contextAuth();
    const [enderecosSalvos, setEnderecosSalvos] = useState<FormState[] | undefined>(undefined);
    const [loading, setLoading] = useState(false);

    const [requisitoCadastro, setRequisitoCadastro] = useState(false);
    const [adicionarEndereco, setAdicionarEndereco] = useState(false);
    const [form, setForm] = useState<FormState>({
        cep: "",
        endereco: "",
        bairro: "",
        numero: "",
        complemento: "",
        cidade: "",
        estado: "",
        destinatario: "",
    });
    const [formOriginal, setFormOriginal] = useState<FormState>(form);

    type CampoStatus = "sem-clicar" | "clicando" | "ja-clicou";
    type inputType = {
        name: keyof FormState;
        label: string;
        type: string;
        value: string;
        hasToggle?: boolean;
    };

    const [campoStatus, setCampoStatus] = useState<Record<keyof FormState, CampoStatus>>({
        cep: "sem-clicar",
        endereco: "sem-clicar",
        bairro: "sem-clicar",
        numero: "sem-clicar",
        complemento: "sem-clicar",
        cidade: "sem-clicar",
        estado: "sem-clicar",
        destinatario: "sem-clicar",
    });

    const inputs: inputType[] = [
        {
            name: "cep",
            label: "*Cep",
            type: "text",
            value: form.cep,
        },
        {
            name: "endereco",
            label: "*Endereco",
            type: "text",
            value: form.endereco,
        },
        {
            name: "bairro",
            label: "*Bairro",
            type: "text",
            value: form.bairro,
        },
        {
            name: "numero",
            label: "*Numero",
            type: "text",
            value: form.numero,
        },
        {
            name: "complemento",
            label: "*Complemento",
            type: "text",
            value: form.complemento,
        },
        {
            name: "cidade",
            label: "*Cidade",
            type: "text",
            value: form.cidade,
        },
        {
            name: "estado",
            label: "*Estado",
            type: "text",
            value: form.estado,
        },
        {
            name: "destinatario",
            label: "*Destinatário",
            type: "text",
            value: form.destinatario,
        },
    ];

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

    useEffect(() => {
        if (!user) return;

        async function buscaEnderecos() {
            const {data, error} = await supabase
                .from('usuarios')
                .select('enderecos')
                .eq('id', user?.id);
            
            if (error) {
                console.error('Houve um erro', error);
                return;
            }

            if (data) {
                console.log('data', data);
                setEnderecosSalvos(data[0].enderecos);
            }

            return;
        }

        buscaEnderecos();
    }, [user]);

    async function atualizarDados() {
        if (!user) return;
        setLoading(true);
        const enderecos = enderecosSalvos ?
            [
                ...enderecosSalvos,
                {
                    cep: form.cep,
                    endereco: form.endereco,
                    bairro: form.bairro,
                    numero: form.numero,
                    complemento: form.complemento,
                    cidade: form.cidade,
                    estado: form.estado,
                    destinatario: form.destinatario,
                }
            ] 
        :
            {
                cep: form.cep,
                endereco: form.endereco,
                bairro: form.bairro,
                numero: form.numero,
                complemento: form.complemento,
                cidade: form.cidade,
                estado: form.estado,
                destinatario: form.destinatario,
            }
        const {error} = await supabase
            .from('usuarios')
            .update({
                enderecos
            })
            .eq('id', user.id);
        
        if (error) {
            console.error('Houve um erro', error);
            return setLoading(false);
        }

        setFormOriginal(form);
        setLoading(false);
        window.scrollTo({
            top: 0
        });
        window.location.reload();
    }

    async function removerEndereco(index: number) {
        if (!user) return;
        setLoading(true);
        
        const copiaEnderecos = [...enderecosSalvos!];

        const novosEnderecos = copiaEnderecos.filter((_, i) => i !== index);

        const {error} = await supabase
            .from('usuarios')
            .update({
                enderecos: novosEnderecos
            })
            .eq('id', user.id);

        if (error) {
            console.error('Houve um erro', error);
        }
        
        setLoading(false);
        window.scrollTo({
            top: 0
        });
        window.location.reload();
        
    }


    return (
        <div>

            <section onClick={() => atualizarDados} className="p-2 max-w-4/5 flex flex-col">
                <h1 className="text-xl font-bold">Endereços</h1>
                {!adicionarEndereco &&
                <div className="flex min-w-[50vw] max-w-[50vw] items-start justify-end mb-12 -mt-2">
                    <button onClick={() => setAdicionarEndereco(true)} className="p-2 min-w-1/2 max-w-1/2 min-h-10 font-medium text-white text-sm rounded-md transition-all duration-200 bg-[#222222] cursor-pointer">
                        Adicionar endereço
                    </button>
                </div>
                }

                {adicionarEndereco ?
                <>
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
                                inputMode='text'
                                onChange={(e) => {
                                    const val = e.currentTarget.value.trim();

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

                            {status === "ja-clicou" && (
                            <p className="font-medium text-red-500">
                                este campo é obrigatório
                            </p>
                            )}

                        </div>
                        );
                    })}

                    <div className="flex min-w-full items-center justify-center mt-12">
                        {loading ?
                            <ClipLoader size={24} color="#000" className="self-center" />    
                        :
                            <button disabled={!requisitoCadastro || loading} onClick={() => atualizarDados()} className={`p-2 min-w-1/2 max-w-1/2 min-h-10 font-medium text-white text-sm rounded-md transition-all duration-200 ${requisitoCadastro ? 'bg-[#222222] cursor-pointer' : 'cursor-not-allowed opacity-70 bg-[#2222229a]'}`}>
                                Salvar Alterações
                            </button>
                        }
                    </div>
                </>
                :
                <main className="flex justify-between gap-4 flex-wrap min-w-[50vw] max-w-[50vw]">
                    {enderecosSalvos &&
                        enderecosSalvos.map((endereco, index) =>
                            <article key={index} className="border border-zinc-400/20 flex flex-col pt-8 p-6 pb-12 font-[Poppins] font-extralight text-[12px] relative gap-2 min-w-[47.5%] max-w-[47.5%]">
                                <X size={18} className="absolute top-0 right-0 translate-y-1/4 -translate-x-1/5 hover:text-red-500 transition-all duration-200 cursor-pointer" onClick={() => removerEndereco(index)} />
                                <span>{endereco.endereco}, {endereco.numero}</span>
                                <span>{endereco.bairro} - {endereco.estado}</span>
                                <span>{endereco.cep}</span>
                                <span className="font-medium">
                                    {endereco.destinatario}
                                </span>
                            </article>
                        )
                    }
                </main>
                }

            </section>
        </div>
    )
}