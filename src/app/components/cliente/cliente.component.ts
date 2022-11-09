import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes : any[] = [];
  constructor(private clienteServ : ClienteService) {
    this.getAllClientes();
  }

  ngOnInit(): void {
  }

  getAllClientes(){
    this.clienteServ.getAllClientes().subscribe( (clientes:any) => {
      console.log("Los clientes desde la api", clientes)
    });
  }

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
        this.clienteServ.eliminarClienteById(id).subscribe( (prodDelete : any) => {
            if(prodDelete.id != null) {
              Swal.fire(
                'Eliminado!',
                'Se elimino correctamente el producto ' + prodDelete.nombre,
                'success'
              );
              this.getAllClientes();
            }else{
              console.log("error")
            }
        });
    } }
) } }
