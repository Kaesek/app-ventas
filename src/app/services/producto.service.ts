import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = "http://localhost:8080/api/"
  constructor(private http : HttpClient) {

  }

  //Generar metodos de la api

  getAllProductos(){
    //http://localhost:8080/api/producto/getAllProductos
    return this.http.get(`${this.url}producto/getAllProductos`);
  }

  eliminarProductoById(id : number){
    return this.http.delete(`${this.url}producto/eliminarProducto/${id}`);
  }
  guardarProducto(producto : any){
    return this.http.post(`${this.url}producto/guardarProducto`, producto);
  }

  getAllClientes(){
    return this.http.get(`${this.url}cliente/getAllClientes`)
  }
}
