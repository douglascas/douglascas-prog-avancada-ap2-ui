import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTariffComponent } from './list-tariff/list-tariff.component';
import { TariffComponent } from './create-tariff/create-tariff.component';
import { ListCarsComponent } from './list-cars/list-cars.component';


const routes: Routes = [
  { path: 'tariffs', component: ListTariffComponent }, // Rota para a tela de listagem de tarifas
  { path: 'cars', component: ListCarsComponent }, // Rota para a tela de listagem de carros
  { path: 'create', component: TariffComponent }, // Rota para a tela de criação
  { path: 'edit/:id', component: TariffComponent }, // Rota para a tela de edição
  {
    path: '', // Envia a rota para "list" default
    redirectTo: '/cars',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
