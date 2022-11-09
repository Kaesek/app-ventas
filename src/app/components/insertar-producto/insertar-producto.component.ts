import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent implements OnInit {

  producto: any = {}
  constructor(private productoServ : ProductoService) { }


  guardar(){
    this.productoServ.guardarProducto(this.producto).subscribe( (productos:any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto guardado',
        showConfirmButton: false,
        timer: 1500
      })
      console.log("guardar producto en formulario", productos)
    })
  }
  ngOnInit(): void {
  }



}
