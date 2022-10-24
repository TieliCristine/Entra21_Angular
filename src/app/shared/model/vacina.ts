import {Pesquisador} from "./pesquisador";

export interface Vacina {
  id: number;
  paisOrigem: string;
  estagioPesquisa: number;
  dataInicioPesquisa: Date;
  responsavel: Pesquisador;
}
