import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'formulario',
    component: FormOwnerComponent,
  },
  {
    path: 'paises',
    loadChildren: () => import("./features/paises/paises.module").then(m => m.PaisesModule)
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
