import { supabase } from "../auth/supabase-client";

type Filtro =
  | { tipo: "cor"; valor: string }
  | { tipo: "tamanho"; valor: string }
  | { tipo: "preco"; min?: number; max?: number };

const nomesCores = ['Preto', 'Verde', 'Vermelho', 'Azul', 'Branco', 'Melancia', 'Roxo', 'Dourado', 'Rosa', 'Vinho'];

const nomesTamanhos = ['XL', 'M', 'G', 'GG', 'MM', 'P'];

const filtrosMap: Record<string, Filtro> = {
  ...Object.fromEntries(
    nomesCores.map((c) => [
      c,
      { tipo: "cor", valor: c }
    ])
  ),

  ...Object.fromEntries(
    nomesTamanhos.map((t) => [
      t,
      { tipo: "tamanho", valor: t }
    ])
  ),
};

function criarFiltroPreco(min?: number | null, max?: number | null): Filtro | null {
  if (min == null && max == null) return null;

  return {
    tipo: "preco",
    min: min ?? undefined,
    max: max ?? undefined,
  };
}

export function obterFiltros({
    selecionados,
    precoMin,
    precoMax
}: {
  selecionados?: string[],
  precoMin?: number | null,
  precoMax?: number | null
}): Filtro[] {
  const filtros: Filtro[] = [];
  const lista = selecionados ?? [];

  // filtros fixos
  lista.forEach((nome) => {
    const filtro = filtrosMap[nome];
    if (filtro) filtros.push(filtro);
  });

  // filtro de preço
  const preco = criarFiltroPreco(precoMin, precoMax);
  if (preco) filtros.push(preco);

  return filtros;
}

export function separarFiltros(filtros: string[]) {
    const filtrosPreco = filtros.filter((f) => f.includes('R$'));
    const selecionados = filtros.filter((f) => !f.includes('R$'));
    let precoMin: null | number = null;
    let precoMax: null | number = null;

    if (filtrosPreco.length === 0) {
        return {selecionados, precoMin, precoMax};
    }

    const precoEscolhido = filtrosPreco[0];

    if (precoEscolhido.startsWith('De R$')) {
        precoMin = Number(precoEscolhido.replace('De R$', '').trim());
    } else if (precoEscolhido.startsWith('Até R$')) {
        precoMax = Number(precoEscolhido.replace('Até R$', '').trim());
    } else if (precoEscolhido.includes(' a R$')) {
        const min = precoEscolhido
        .split(" a ")[0]
        .replace("R$", "");

        const max = precoEscolhido
        .split(" a ")[1]
        .replace("R$", "");

        precoMin = Number(min);
        precoMax = Number(max);
    }

    return {selecionados, precoMin, precoMax};
}

type ItensBase = {
    id: string;
    nome: string;
    imagem: string;
    precoOriginal: number;
    precoAtual: number;
    tamanho: string;
    cor: string;
}

export async function filtroSupabase(filtros: Filtro[], tipo?: string): Promise<ItensBase[]> {
    let query = supabase.from('produtos').select('*');

    filtros.forEach((filtro) => {
        if (filtro.tipo === 'cor') {
            query = query.eq('cor', filtro.valor);
        }

        if (filtro.tipo === 'tamanho') {
            query = query.eq('tamanho', filtro.valor);
        }

        if (filtro.tipo === 'preco') {
            if (filtro.min !== undefined) {
                query = query.gte('precoAtual', filtro.min);
            }

            if (filtro.max !== undefined) {
                query = query.lte('precoAtual', filtro.max);
            }
        }

    });

    if (tipo) {
        query = query.eq('tipo', tipo);
    }

    const {data, error} = await query;

    if (error) {
        console.error('Houve um erro ao filtrar os produtos', error);
        return [];
    }

    const lista: ItensBase[] = data;

    return lista;
}
