import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  { path: 'list', component: ListComponent }, // Rota para a tela de listagem
  { path: 'create', component: CreateComponent }, // Rota para a tela de criação
  { path: '', // Envia a rota para "list" default
    redirectTo: '/list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
