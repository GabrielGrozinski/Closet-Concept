import { useContext, createContext, useState, useEffect } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "../auth/supabase-client";

interface Props {
    children: React.ReactNode
}

type PromiseReturn = {
    success: boolean;
    message?: string;
    error?: string;
}

interface authType {
    user: User | null;
    setUser: (v: User | null) => void;
    session: Session | null;
    setSession: (v: Session | null) => void;
    fazerCadastroDatabase: (email: string, cpf: string, telefone: string, nome: string, sobrenome: string, data_nascimento: string) => Promise<PromiseReturn>;
    fazerCadastro: (email: string, cpf: string, telefone: string, nome: string, sobrenome: string, data_nascimento: string, password: string) => Promise<PromiseReturn>;
    fazerLogin: (email: string, senha: string) => Promise<PromiseReturn>;
}

export const auth_context = createContext<authType>({} as authType);

export default function AuthContext({children}: Props) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);


    async function pegarUser() {
        const userAtual = (await supabase.auth.getUser()).data.user;
        setUser(userAtual);
    }

    useEffect(() => {
        pegarUser();
    }, [session]);
    // Pega user;

    async function pegarSession() {
        const sessionAtual = (await supabase.auth.getSession()).data.session;
        setSession(sessionAtual);
    }

    useEffect(() => {
        pegarSession();
    }, []);

    async function fazerCadastroDatabase(email: string, cpf: string, telefone: string, nome: string, sobrenome: string, data_nascimento: string): Promise<PromiseReturn> {
        try {
            
            const {error} = await supabase
                .from('usuarios')
                .insert({
                    email,
                    cpf,
                    telefone,
                    nome,
                    sobrenome,
                    data_nascimento
                });

            if (error) {
                return { success: false, error: error.code };
            }

            return { success: true, message: "Login bem sucedido" };

        } catch (erro) {
            return { success: false, error: "Houve um erro ao fazer cadastro" };
        }
    }

    async function fazerCadastro(email: string, cpf: string, telefone: string, nome: string, sobrenome: string, data_nascimento: string, password: string): Promise<PromiseReturn> {
        try {
            
            const {data, error} = await supabase.auth.signUp({email, password});

            if (error) {
                return { success: false, error: error.code };
            }

            if (data) {
                const cadastroDB = await fazerCadastroDatabase(email, cpf, telefone, nome, sobrenome, data_nascimento);
                return {success: cadastroDB.success};
            }

            return { success: false, error: "Erro desconhecido" };

        } catch (error) {
            return { success: false, error: "Houve um erro ao fazer cadastro" };
        }
    }

    async function fazerLogin(email: string, password: string): Promise<PromiseReturn> {
        try {
            
            const {error} = await supabase.auth.signInWithPassword({email, password});

            if (error) {
                console.log('error-login', error);
                const erroMensagem = 
                    error.message === 'Invalid login credentials' ?
                        'Email ou senha inválidos'
                    :
                        '';
                return { success: false, error: erroMensagem};
            }

            return { success: true, message: "Login bem sucedido" };

        } catch (error) {
            return { success: false, error: "Houve um erro ao fazer login" };
        }
    }


    return (
        <auth_context.Provider
        value={{
            user,
            setUser,
            session,
            setSession,
            fazerCadastro,
            fazerCadastroDatabase,
            fazerLogin
        }}
        >
            {children}
        </auth_context.Provider>
    );
}

export const contextAuth = () => {
    return useContext(auth_context);
}