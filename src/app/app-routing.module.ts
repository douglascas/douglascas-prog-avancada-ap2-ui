import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTariffComponent } from './list/list.component';
import { TariffComponent } from './create-tariff/tariff.component';


const routes: Routes = [
  { path: 'list', component: ListTariffComponent }, // Rota para a tela de listagem
  { path: 'create', component: TariffComponent }, // Rota para a tela de criação
  { path: 'edit/:id', component: TariffComponent }, // Rota para a tela de edição
  {
    path: '', // Envia a rota para "list" default
    redirectTo: '/list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
