import { Ordenentrega } from "./OrdenEntrega";
import { Ordenrecojo } from "./OrdenRecojo";
import { Paquete } from "./Paquete";
import { Serviciodetalle } from "./ServicioDetalle";

export class ServicioAutomatizado{
  paquete!:Paquete;
  ordenrecojo!: Ordenrecojo;
  ordenentrega!:Ordenentrega;
  serviciodetalle!:Serviciodetalle;

  constructor(){
    this.paquete = new Paquete();
    this.ordenrecojo = new Ordenrecojo();
    this.ordenentrega = new Ordenentrega();
    this.serviciodetalle = new Serviciodetalle();
  }
}
