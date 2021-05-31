import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { ClientService } from '../servicios/client.service';
import { AuthService } from '../servicios/auth.service';
import { CarritoClickService } from '../servicios/carrito-click.service';
import { IItem } from '../interfaces/item.interface';
@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {

  public precioTotal= 0;
  public productos : any=[];
  constructor(
    private route: ActivatedRoute, 
    private client: ClientService,
    public auth : AuthService,
    public carro:  CarritoClickService

    ){}

  ngOnInit() {
    this.carro.init()
    console.log(this.carro.carritoUser.getValue());
    this.carro.sumCart();
  }
  
  //Metodo para eliminar en un dato del carrito de compras
  delente(id:any){
    //consumo un servicio del carro 
     this.carro.delenteProduct(id);
     this.carro.sumCart();
   }

   enviarPruductos(){
    this.client.postRequestEnviarProductos('http://localhost:5000/api/v01/user/enviarproductos',null).subscribe(

    )
  }
  }


