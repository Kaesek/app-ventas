import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = "http://localhost:8080/api/"

  constructor(private http : HttpClient) {

  }

  //Generar metodos de la api clientes

  getAllClientes(){
    //http://localhost:8080/api/cliente/getAllClientes
    return this.http.get(`${this.url}cliente/getAllClientes`);
  }

  eliminarClienteById(id : number){
    return this.http.delete(`${this.url}/eliminarCliente/${id}`);
  }
}
