import { TipoColaborador } from "./TipoColaborador";

export class Colaborador{
  colaboradorID!: string;
  dnicolaborador!: string;
  nombreC!: string;
  usuario!: string;
  contrasena!: string;
  tipo_colaborador!: TipoColaborador;

  constructor(){
    this.tipo_colaborador = new TipoColaborador();
  }
}
