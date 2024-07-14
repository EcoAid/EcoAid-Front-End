/* eslint-disable @typescript-eslint/no-explicit-any */
import Produto from './Produto';

export default interface Usuario {
    token: any;
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    produto?: Produto | null;
}