import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
    id: number;
    nome: string;
    foto: string;
    descricao: string;
    condicao: string;
    valor: number;
    dataCadastro: string;
    categoria: Categoria | null;
    usuario: Usuario | null;
    qtd?: number
}