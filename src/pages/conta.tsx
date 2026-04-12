import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { contextAuth } from "../context/authContext";


interface Props {
    children: React.ReactNode;
}


export default function Conta({children}: Props) {
    const navigate = useNavigate();
    const location = useLocation();
    const {session} = contextAuth();

    useEffect(() => {
        if (!session) navigate('/');
    }, [session]);

    const topicos = [
        {
            nome: 'Dados pessoais',
            navigate: '/conta'
        },
        {
            nome: 'Endereços',
            navigate: '/conta/endereco'
        },
        {
            nome: 'Pedidos',
            navigate: '/conta/pedidos'
        },
        {
            nome: 'Pagamentos',
            navigate: '/conta/pagamentos'
        },
    ];

    const [topicoAtual, setTopicoAtual] = useState('');

    useEffect(() => {
        const path = location.pathname;

        switch (path) {
            case '/conta/endereco':
                setTopicoAtual('Endereços');
                break;
            case '/conta/pedidos':
                setTopicoAtual('Pedidos');
                break;
            case '/conta/pagamentos':
                setTopicoAtual('Pagamentos');
                break;
            default:
                setTopicoAtual('Dados pessoais');
                break;
        }

    }, [location]);


    return (
        <div className="grid grid-cols-[35%_50%_1fr] bg-[rgba(250,249,247)] min-h-screen p-4">
            <section className="col-1 fixed top-36 left-[10%] right-[65%] flex flex-col gap-4">
                {topicos.map((topico) => 
                    <article 
                    className={`${topicoAtual === topico.nome ? 'font-medium' : 'font-light'} font-[Poppins] text-sm transition-colors duration-200 hover:text-neutral-700 cursor-pointer`} 
                    onClick={() => {
                        setTopicoAtual(topico.nome);
                        navigate(topico.navigate);
                    }} 
                    key={topico.nome}>
                        {topico.nome}
                    </article>
                )}
            </section>
            <span className="col-2">{children}</span>
        </div>
    )
}