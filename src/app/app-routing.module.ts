import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { InsertarProductoComponent } from './components/insertar-producto/insertar-producto.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
{path: "producto", component: ProductoComponent},
{path: "cliente", component: ClienteComponent},
{path: "insertar-producto", component: InsertarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
