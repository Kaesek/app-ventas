import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos : any[] = [];

  constructor(private productoServ : ProductoService) {
    this.getAllProductos();


  }

  ngOnInit(): void {
  }

  getAllProductos() {
    this.productoServ.getAllProductos().subscribe( (products:any) => {
      console.log("Los Productos desde la api", products)
      this.productos = products;
    });
  }
//guardar(){
  ////  console.log("guardar producto en formulario", productos)
//    })
  //}

eliminar(id : number){
    Swal.fire({
      title: 'Estás seguro que deseas eliminar?',
      text: "Estos cambios son irreversibles",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText:'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoServ.eliminarProductoById(id).subscribe( (prodDelete : any) => {
            if(prodDelete.id != null) {
              Swal.fire(
                'Eliminado!',
                'Se elimino correctamente el producto ' + prodDelete.nombre,
                'success'
              );
              this.getAllProductos();
            }else{
              console.log("error")
            }
        });


      }
    })
  }


}

